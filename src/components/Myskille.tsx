import { useState, useEffect, useRef } from "react";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/js.png";
import reactlogo from "../assets/react.png";
import nodelogo from "../assets/node.png";
import phplogo from "../assets/php.png";
import tslogo from "../assets/ts.jpg";
import tailwindlogo from "../assets/tailwind.png";
import laravellogo from "../assets/laravel.png";

type Skill = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const skills: Skill[] = [
  { id: 1, image: htmllogo, title: "HTML5", description: "Structure et sémantique des pages web" },
  { id: 2, image: csslogo, title: "CSS3", description: "Mise en forme et design responsif" },
  { id: 3, image: jslogo, title: "JavaScript", description: "Interactivité et logique côté client" },
  { id: 4, image: reactlogo, title: "React", description: "Bibliothèque pour construire des interfaces utilisateur" },
  { id: 5, image: nodelogo, title: "Node.js", description: "Exécution de JavaScript côté serveur" },
  { id: 6, image: phplogo, title: "PHP", description: "Langage de script côté serveur" },
  { id: 7, image: tslogo, title: "TypeScript", description: "Superset de JavaScript avec typage statique" },
  { id: 8, image: tailwindlogo, title: "Tailwind CSS", description: "Framework CSS utilitaire pour un design rapide" },
  { id: 9, image: laravellogo, title: "Laravel", description: "Framework PHP pour applications web élégantes" },
];

type Bubble = {
  skill: Skill;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export const Myskill = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialisation des bulles
  useEffect(() => {
    const initialBubbles = skills.map((skill) => ({
      skill,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      vx: (Math.random() - 0.5) * 0.2, // vitesse horizontale
      vy: (Math.random() - 0.5) * 0.2, // vitesse verticale
      size: 96, // taille en px
    }));
    setBubbles(initialBubbles);
  }, []);

  // Animation
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setBubbles((prev) =>
        prev.map((bubble) => {
          let x = bubble.x + bubble.vx * 1.5;
          let y = bubble.y + bubble.vy * 1.5;

          // Rebond sur les murs
          if (x <= 0 || x >= 100) bubble.vx *= -1;
          if (y <= 0 || y >= 100) bubble.vy *= -1;

          return { ...bubble, x: Math.min(100, Math.max(0, x)), y: Math.min(100, Math.max(0, y)) };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="myskill"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden text-white"
      ref={containerRef}
    >
      <div className="z-10 text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="text-muted-foreground">Chapitre III —</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
             Mes Compétences
          </span>
           
        </h2>
        <p className="text-lg text-gray-400">Compétences & Technologies</p>
      </div>

      {/* Bulles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.skill.id}
          onClick={() => setActiveSkill(bubble.skill)}
          className={`absolute cursor-pointer`}
          style={{
            top: `${bubble.y}%`,
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        >
          <div className="w-full h-full bg-white/10 border border-white/20 backdrop-blur-md flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-500/50 rounded-full transition-all duration-300">
            <img src={bubble.skill.image} alt={bubble.skill.title} className="w-10 h-10 mb-1" />
            <p className="text-xs font-medium text-gray-300">{bubble.skill.title}</p>
          </div>
        </div>
      ))}

      {/* Modale */}
      {activeSkill && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-md"
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="bg-gradient-to-br from-[#1e293b] to-[#334155] p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-auto animate-fade-in-skill"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeSkill.image} alt={activeSkill.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">{activeSkill.title}</h3>
            <p className="text-gray-300">{activeSkill.description}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInSkill {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-skill {
          animation: fadeInSkill 0.4s ease forwards;
        }

        /* Gooey effect */
        .gooey-container {
          filter: url(#goo);
        }
      `}</style>

      {/* Filtre SVG pour effet liquide si voulu */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10
            "
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </section>
  );
};
