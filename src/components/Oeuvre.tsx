import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import projetagri from "../assets/projetagri.png";
import projetarchi from "../assets/projetarchi.png";

type Tech = "HTML" | "CSS" | "JavaScript" | "React" | "TypeScript" | "Node.js" | "PHP" | "Tailwind" | "Laravel" ;

interface Project {
  id: number;
  title: string;
  description: string;
  tech: Tech[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Agritrack",
    description: "Plateforme de suivie des production agricoles",
    tech: ["HTML", "PHP", "CSS", "JavaScript"],
    image: projetagri,
  },
  {
    id: 2,
    title: "Arcivia",
    description: "plateforme d'upload et de gestion de fichier ",
    tech: ["Node.js", "PHP", "JavaScript"],
    image: projetarchi,
  },
  {
    id: 3,
    title: "Presentlist",
    description: "Application de gestion des presences",
    tech: ["HTML", "CSS", "JavaScript","Laravel"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "API Backend",
    description: "Architecture serveur robuste et scalable",
    tech: ["Node.js", "PHP"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
];

const techStack: Tech[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "PHP", "Tailwind", "Laravel"];

export const Oeuvre = () => {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.tech.includes(selectedTech))
    : projects;

  return (
    <section id="oeuvre" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-muted-foreground">Chapitre II —</span>
              <br />
              <span className="gradient-text">L'Œuvre</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Projets & Réalisations
            </p>
          </div>

          {/* Tech filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              onClick={() => setSelectedTech(null)}
              className={selectedTech === null ? "bg-primary text-primary-foreground" : "glass border-primary/30 hover:border-primary/50 text-foreground"}
            >
              Tous
            </Button>
            {techStack.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                onClick={() => setSelectedTech(tech)}
                className={selectedTech === tech ? "bg-primary text-primary-foreground" : "glass border-primary/30 hover:border-primary/50 text-foreground"}
              >
                {tech}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass rounded-2xl overflow-hidden hover-lift group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full  bg-center object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <Button
                        size="icon"
                        className="bg-primary/90 hover:bg-primary text-primary-foreground"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="icon"
                        className="bg-primary/90 hover:bg-primary text-primary-foreground"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
