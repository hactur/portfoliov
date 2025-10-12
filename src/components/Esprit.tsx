import { Code2, Lightbulb, Target } from "lucide-react";
import '../index.css';
import { Button } from "./ui/button";
// import { profil } from "./profil"

export const Esprit = () => {
  const timeline = [
    { year: "2020", event: "Découverte de l'univers de la programmation", icon: Code2 },
    { year: "2021", event: "Premiers pas dans le developpement", icon: Lightbulb },
    { year: "2022-2025", event: "Études en génie logiciel", icon: Target },
    { year: "2024-2025", event: "Approfondissement dans le domaine", icon: Code2 },
  ];

  return (
    <section id="esprit" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-muted-foreground">Chapitre I —</span>
              <br />
              <span className="gradient-text">L'Esprit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profil & Philosophie
            </p>
          </div>
          {/* profil */}


          {/* Citation */}
         <div className="glass rounded-2xl p-8 md:p-12 space-y-6 hover-lift font-serif italic tracking-wide">
  <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-[Georgia]">
    " Ce n'est pas la force, mais la persévérance, qui fait les grandes œuvres. "
  </p>
  <p className="text-right text-md md:text-lg font-semibold text-foreground/90 font-[Merriweather] not-italic">
    – Samuel Johnson
  </p>
</div>


           {/* Vision */}
        <div className="glass rounded-2xl p-8 md:p-12 space-y-6 hover-lift">
  <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
    Au départ, le développement était juste une activité, mais il est vite devenu une véritable passion.
    Voir mes idées se transformer en solutions numériques concrètes me procure une{" "}
    <span className="text-primary font-semibold">satisfaction unique</span>.
    Chaque ligne de code est pour moi une exploration, un moyen de pousser mon imagination toujours plus loin.
    Bien sûr, tout n’est jamais parfait. Les erreurs en rouge, les avertissements en jaune ou les bugs récurrents peuvent parfois décourager.
    Mais c’est précisément cette rigueur, ce défi constant, qui me pousse à progresser et à apprendre.
  </p>

  <details className="text-lg md:text-xl leading-relaxed text-foreground/90">
    <summary className="cursor-pointer font-semibold text-accent">
      Voir plus
    </summary>
    <div className="mt-2">
      Je crois profondément que l’évolution vient de{" "}
      <span className="text-accent font-semibold">l’expérimentation et de la créativité</span>.
      Chaque mise à jour, chaque amélioration est une occasion de dépasser mes limites et de grandir.
      <br /><br />
      Dans ce parcours, mes outils les plus précieux ne sont pas seulement techniques : ce sont la curiosité, la précision et l’empathie.
      C’est grâce à eux que je transforme les défis en opportunités et que je construis des solutions qui ont du sens pour les autres autant que pour moi.
    </div>
  </details>
</div>


          {/* Timeline */}
         <div className="space-y-8">
  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
    Parcours & Évolution
  </h3>

<Button 
  size="lg"
  className="mb-6 mx-auto flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary backdrop-blur-sm transition-all duration-500"
  onClick={() => {
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      timelineSection.style.display = 'block'; // CORRECT
    }
  }}
>
  Afficher le timeline
</Button>

  <div className="space-y-6 hidden" id="timeline">
    {timeline.map((item, index) => (
      <div
        key={index}
        className={`glass rounded-xl p-6 flex items-center gap-6 hover-lift group animate-slidee-${
          index % 2 === 0 ? "left" : "right"
        }`}
        style={{
          animationDelay: `${index * 0.2}s`,
          animationFillMode: "both",
        }}
      >
        <div className="flex-shrink-0 w-20 text-center">
          <div className="text-2xl font-bold gradient-text">{item.year}</div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-lg text-foreground/90">{item.event}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  {/* Animation CSS */}
      <style>{`
        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slidee-left {
          animation: slidee-left 0.8s ease-in-out forwards;
          background: black;
        }
        .animate-slide-right {
          animation: slidee-right 0.8s ease-in forwards;
        }
      `}</style>




          {/* Quote */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
              <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/90 leading-relaxed">
                "La précision n'est pas un contrôle,
                <br />
                <span className="gradient-text font-semibold">
                  c'est une forme de respect
                </span>
                <br />
                pour ce que l'on construit."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
