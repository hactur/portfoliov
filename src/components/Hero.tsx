import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import heroBg from "../assets/hero-bg.jpg";

export const Hero = () => {
  const personnalTraits = [
    "Curieux",
    "Rigoureux",
    "Créatif",
    "Collaboratif",
    "Adaptable",
    "Passionné",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTrait = personnalTraits[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100; // vitesse d’écriture/suppression
    const delayBetweenWords = 1200; // temps d’attente avant d’effacer

     let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== currentTrait) {
      // écrire caractère par caractère
      timer = setTimeout(() => {
        setDisplayedText(currentTrait.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText !== "") {
      // effacer caractère par caractère
      timer = setTimeout(() => {
        setDisplayedText(currentTrait.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === currentTrait) {
      // attendre avant de commencer à effacer
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayedText === "") {
      // passer au mot suivant
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % personnalTraits.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("esprit");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 animated-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background/80" />
      </div>

      <style>
        {`
        .animated-bg {
          animation: waveMove 12s ease-in-out infinite alternate;
        }

        @keyframes waveMove {
          0% { background-position: 0 0; transform: scale(1); filter: brightness(1); }
          25% { transform: scale(1.02); filter: brightness(1.05); }
          50% { transform: scale(1.03); filter: brightness(1.1); }
          75% { transform: scale(1.02); filter: brightness(1.05); }
          100% { transform: scale(1); filter: brightness(1); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 0.8s infinite;
        }
        `}
      </style>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title overlay */}
      <div className="absolute top-20 left-8 text-primary/20 text-7xl font-extrabold select-none opacity-60">
        PORTfolio
        <br />
        <span className="gradient-text opacity-30">hactur.</span>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="gradient-text">Je suis développeur junior</span>
            <br />
            <span className="text-foreground">Je conçois des systèmes</span>
            <br />
            <span className="text-foreground">qui respirent la logique</span>
            <br />
            <span className="text-foreground/90">et l’intention.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Bienvenue dans mon univers de création raisonnée.
          </p>

          <Button
            onClick={scrollToNext}
            size="lg"
            className="mt-8 group relative overflow-hidden bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary backdrop-blur-sm transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorer
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </Button>
        </div>

         {/* Personal traits - typewriter effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center items-center gap-4">
      <span>je suis</span>
        <span className="text-lg md:text-xl text-muted-foreground/80 px-4 py-2 border border-muted-foreground/20 rounded-full backdrop-blur-sm">
          {displayedText}
          <span className="cursor text-primary/80">|</span>
        </span>
      </div>

      </div>
      

     

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
