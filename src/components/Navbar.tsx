import { Brain, FlaskConical, Home, Icon, LogIn, MonitorCog, PersonStanding } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { Icon:Home, label: "Home", id: "hero" },
  { Icon:Brain, label: "Esprit", id: "esprit" },
  { Icon:MonitorCog, label: "Taff", id: "oeuvre" },
  { Icon:FlaskConical, label: "Lab", id: "laboratoire" },
  { Icon:PersonStanding, label: "Humain", id: "humain" },
  { Icon:LogIn, label: "Connec", id: "connexion" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = section === "hero" 
          ? document.querySelector("section") 
          : document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 bg-[#180b3d74] -translate-x-1/2 z-50 glass-strong px-6 py-3 rounded-full animate-fade-in">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.Icon && <item.Icon className="inline-block w-5 h-5 mr-1" />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
