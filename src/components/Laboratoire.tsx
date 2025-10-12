import { useState } from "react";
import { Code, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import labBg from "../assets/lab-bg.jpg";

const experiments = [
  {
    id: 1,
   name: "Effet Liquide Lumineux",
  description: "Surface dynamique avec éclat et fluidité de couleur",
  bod: `
    <div class="morph-container">
      <div class="morph-liquid"></div>
      <div class="morph-glow"></div>
      <p class="morph-text">Morph Sphere</p>
    </div>
  `,
  code: `/* === Conteneur principal === */
    .morph-container {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: radial-gradient(circle at 40% 30%, #3b82f6, #1e40af);
      border-radius: 40% 60% 70% 30% / 30% 50% 60% 40%;
      box-shadow: 0 0 40px rgba(59,130,246,0.3);
      animation: morphToSphere 6s ease-in-out infinite alternate, hueShift 10s infinite linear;
    }

    /* === Liquide intérieur === */
    .morph-liquid {
      position: absolute;
      width: 140%;
      height: 140%;
      top: -20%;
      left: -20%;
      background: conic-gradient(from 180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05), rgba(255,255,255,0.4));
      border-radius: 40% 60% 70% 30% / 30% 50% 60% 40%;
      animation: liquidDeform 8s ease-in-out infinite alternate;
      filter: blur(25px);
      mix-blend-mode: overlay;
    }

    /* === Halo lumineux externe === */
    .morph-glow {
      position: absolute;
      width: 130%;
      height: 130%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%);
      filter: blur(60px);
      animation: glowPulse 4s ease-in-out infinite alternate;
    }

    /* === Texte au centre === */
    .morph-text {
      position: relative;
      color: white;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;
      z-index: 2;
      text-shadow: 0 0 10px rgba(255,255,255,0.5);
      user-select: none;
    }

    @keyframes morphToSphere {
      0% {
        border-radius: 40% 60% 70% 30% / 30% 50% 60% 40%;
      }
      50% {
        border-radius: 60% 40% 50% 70% / 70% 50% 40% 60%;
      }
      100% {
        border-radius: 50%;
      }
    }

    @keyframes liquidDeform {
      0% {
        border-radius: 60% 40% 50% 70% / 70% 50% 40% 60%;
      }
      50% {
        border-radius: 50%;
      }
      100% {
        border-radius: 40% 60% 70% 30% / 30% 50% 60% 40%;
      }
    }

    /* === Pulsation du halo lumineux === */
    @keyframes glowPulse {
      0% { opacity: 0.6; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.1); }
    }

    /* === Changement subtil de teinte === */
    @keyframes hueShift {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }


   
  `,
},
  {
    id: 2,
    name: "carrousel 3D",
    description: "Effets de verre modernes",
    bod: `
      <div class="carousel-3d mx-auto">
        <div class="carousel-3d-inner">
          <div class="carousel-item">1</div>
          <div class="carousel-item">2</div>
          <div class="carousel-item">3</div>
          <div class="carousel-item">4</div>
          <div class="carousel-item">5</div>
          <div class="carousel-item">6</div>
        </div>
      </div>`,
    code: `
      .carousel-3d {
        position: relative;
        width: 150px;
        height: 150px;
        margin: auto;
        perspective: 1000px;
        transform-style: preserve-3d;
      }

      .carousel-3d-inner {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        animation: rotateCarousel 20s linear infinite;
      }

      .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(25px) saturate(160%);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        color: white;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 1s ease, opacity 1s ease;
      }

      @keyframes rotateCarousel {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }

      .carousel-item:nth-child(1) { transform: rotateY(0deg) translateZ(200px); }
      .carousel-item:nth-child(2) { transform: rotateY(60deg) translateZ(200px); }
      .carousel-item:nth-child(3) { transform: rotateY(120deg) translateZ(200px); }
      .carousel-item:nth-child(4) { transform: rotateY(180deg) translateZ(200px); }
      .carousel-item:nth-child(5) { transform: rotateY(240deg) translateZ(200px); }
      .carousel-item:nth-child(6) { transform: rotateY(300deg) translateZ(200px); }
    `,
  },
  {
    id: 3,
  name: "Micro-interactions",
  description: "Feedback utilisateur subtil et fluide sur les actions",
  bod: `
    <button class="micro-btn">
      Survole-moi ✨
      <span class="wave"></span>
    </button>
  `,
  code: `
    /* === Bouton principal === */
    .micro-btn {
      position: relative;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      cursor: pointer;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
      z-index: 1;
    }

    /* === Effet de survol === */
    .micro-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 25px rgba(37, 99, 235, 0.4);
      background: linear-gradient(135deg, #60a5fa, #3b82f6);
    }

    /* === Effet d’appui (clic) === */
    .micro-btn:active {
      transform: scale(0.95);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    /* === Effet d’onde lumineuse === */
    .wave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255,255,255,0.4);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: none;
      pointer-events: none;
      z-index: 0;
    }

    /* === Animation de l’onde === */
    .micro-btn:active .wave {
      animation: waveEffect 0.6s ease-out forwards;
    }

    @keyframes waveEffect {
      0% {
        width: 0;
        height: 0;
        opacity: 0.8;
      }
      100% {
        width: 300%;
        height: 300%;
        opacity: 0;
      }
    }
  `,
},
];

export const Laboratoire = () => {
  const [activeView, setActiveView] = useState("visual");

  return (
    <section id="laboratoire" className="min-h-screen py-20 relative overflow-hidden">
      {/* === Background === */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${labBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* === Header === */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-muted-foreground">Chapitre IV —</span>
              <br />
              <span className="gradient-text">Le Laboratoire</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expérimentations & Prototypes
            </p>
          </div>

          {/* === View toggle === */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeView === "code" ? "default" : "outline"}
              onClick={() => setActiveView("code")}
              className={
                activeView === "code"
                  ? "bg-primary text-primary-foreground"
                  : "glass border-primary/30 text-foreground"
              }
            >
              <Code className="w-4 h-4 mr-2" />
              Vue Code
            </Button>
            <Button
              variant={activeView === "visual" ? "default" : "outline"}
              onClick={() => setActiveView("visual")}
              className={
                activeView === "visual"
                  ? "bg-primary text-primary-foreground"
                  : "glass border-primary/30 text-foreground"
              }
            >
              <Eye className="w-4 h-4 mr-2" />
              Vue Visuelle
            </Button>
          </div>

          {/* === Experiments grid === */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, index) => (
              <div
                key={exp.id}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.name}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  </div>

                  <p className="text-sm text-muted-foreground">{exp.description}</p>

                  {activeView === "code" ? (
                    <div className="bg-card/50 rounded-lg p-4 border border-primary/10">
                      <pre className="text-xs text-foreground/80 overflow-x-auto">
                        <code>{exp.code}</code>
                      </pre>
                    </div>
                  ) : (
                    <div
                      className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-300 relative overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: exp.bod }}
                    />
                  )}

                  {/* Ajout du style propre à l’expérience */}
                  {activeView === "visual" && (
                    <style>{exp.code}</style>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* === Lab ambiance === */}
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-lg text-muted-foreground italic">
              "Un espace de liberté où les idées prennent forme,
              <br />
              où chaque échec enseigne, où chaque réussite inspire."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
