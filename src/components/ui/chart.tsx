import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "../../lib/utils";
import * as RechartsPrimitive from "recharts";


// ---------- Types ----------
type ChartPayloadItem = {
  value?: number | string;
  name?: string;
  dataKey?: string;
  color?: string;
  payload?: Record<string, any>;
};

type ChartTooltipContentProps = {
  active?: boolean;
  payload?: ChartPayloadItem[];
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  formatter?: (
    value: any,
    name: string,
    item: ChartPayloadItem,
    index: number,
    payload?: Record<string, any>
  ) => React.ReactNode;
  className?: string; // <-- ajouté ici
};


// ---------- Themes ----------
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

// ---------- Chart Container ----------
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { config: ChartConfig; children: React.ReactElement | React.ReactElement[] }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
     <div
  ref={ref}
  className={cn(
    "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
    className, // maintenant valide
  )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
      <RechartsPrimitive.ResponsiveContainer>
  <>
    {children} {/* children peut être un tableau, maintenant c'est un seul ReactElement */}
  </>
</RechartsPrimitive.ResponsiveContainer>

      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

// ---------- Chart Style ----------
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, cfg]) => cfg.theme || cfg.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

// ---------- Chart Tooltip ----------
const ChartTooltip = Recharts.Tooltip;

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ active, payload = [], indicator = "dot", nameKey, formatter }, ref) => {
    const { config } = useChart();

    if (!active || !payload.length) return null;

    return (
      <div
        ref={ref}
        className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl"
      >
        <div className="grid gap-1.5">
          {payload.map((itemRaw: ChartPayloadItem, index: number) => {
            const item = itemRaw;
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);

            return (
              <div
                key={item.dataKey || index}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item.value !== undefined && item.name
                  ? formatter(item.value, item.name, item, index, item.payload)
                  : (
                    <div className="flex flex-1 justify-between items-center">
                      <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      {item.value !== undefined && (
                        <span className="font-mono font-medium tabular-nums text-foreground">{item.value}</span>
                      )}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

// ---------- Chart Legend ----------
const ChartLegend = Recharts.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: ChartPayloadItem[];
    verticalAlign?: "top" | "bottom" | "middle";
    hideIcon?: boolean;
    nameKey?: string;
  }
>(({ className, hideIcon = false, payload = [], verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload.length) return null;

  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload.map((item, i) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return (
          <div key={i} className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground">
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// ---------- Helper ----------
function getPayloadConfigFromPayload(config: ChartConfig, payload: ChartPayloadItem, key: string) {
  if (!payload || typeof payload !== "object") return undefined;
  const payloadPayload = payload.payload && typeof payload.payload === "object" ? payload.payload : undefined;
  let configLabelKey = key;
  if (typeof payload[key as keyof ChartPayloadItem] === "string") configLabelKey = payload[key as keyof ChartPayloadItem] as string;
  else if (payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
  return config[configLabelKey] || config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
