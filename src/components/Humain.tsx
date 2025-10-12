import { Heart, Compass, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathie",
    description: "Comprendre les besoins avant de coder les solutions",
  },
  {
    icon: Compass,
    title: "Éthique",
    description: "Créer avec intention et responsabilité",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description: "L'enthousiasme comme moteur de l'excellence",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "La meilleure technologie est celle qui connecte",
  },
];

export const Humain = () => {
  return (
    <section id="humain" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-muted-foreground">Chapitre V —</span>
              <br />
              <span className="gradient-text">L'Humain</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Valeurs & Vision
            </p>
          </div>

          {/* Main text */}
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
              Au-delà des lignes de code et des architectures complexes,
              je crois profondément que{" "}
              <span className="text-primary font-semibold">
                la technologie doit servir l'humain
              </span>, non l'inverse.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              Chaque projet est une opportunité de créer quelque chose qui a du sens,
              qui facilite la vie, qui inspire ou qui connecte. C'est cette conviction
              qui guide mes choix, mes apprentissages et mes ambitions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              Je ne développe pas pour performer techniquement —
              je développe pour{" "}
              <span className="text-secondary font-semibold">
                résoudre des problèmes réels
              </span>{" "}
              avec élégance et intention.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-8 space-y-4 hover-lift group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final quote */}
          <div className="relative mt-16">
            <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full" />
                <blockquote className="text-3xl md:text-4xl font-light leading-relaxed">
                  <span className="text-foreground/90">"La logique est mon outil.</span>
                  <br />
                  <span className="gradient-text font-semibold text-4xl md:text-5xl">
                    L'empathie est mon cadre.
                  </span>
                  <span className="text-foreground/90">"</span>
                </blockquote>
                <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
