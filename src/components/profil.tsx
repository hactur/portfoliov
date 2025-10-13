import { motion } from "framer-motion";
import {  User } from "lucide-react";
import { createIcons, icons } from 'lucide';
import me from "../assets/me.png";
import CV from "../assets/CV Professionnel kamga wabo.pdf";

createIcons({ icons });

export const Profil = () => {
  return (
    <section
      id="profil"
      className="relative py-20 bg-cover bg-no-repeat via-muted/10 to-background"
        style={{
    backgroundImage: `url(${me})`,
    backgroundSize: "cover",
  }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Icône / Titre */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Mon <span className="text-primary">Profil</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-3">
            Une vision claire, une curiosité sans limites et une approche
            profondément humaine du numérique.
          </p>
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-2 gap-8 text-left"
        >
          {/* Bloc 1 */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Qui je suis
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Je suis un jeune développeur passionné par l’ingénierie
              logicielle, l’innovation et la création de solutions concrètes.
              Chaque projet que j’entreprends est une opportunité d’apprendre,
              de comprendre et de bâtir quelque chose qui a du sens.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Ma vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif est de créer des solutions innovantes et impactantes,
              alliant technique et créativité. Je souhaite développer des
              projets qui facilitent la vie des utilisateurs, renforcent les
              interactions humaines et repoussent les limites du possible dans
              le monde numérique.
            </p>
          </div>
        </motion.div>
        <div className="flex items-center justify-center gap-6 mt-10 cursor-pointer hover:scale-105 transition-transform duration-300">
          <a
  href={CV}
  download
  className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-primary font-medium"
>
  <div className="h-8 w-8 rounded-full bg-blue-500 border flex items-center justify-center">
    <i data-lucide="file-down"></i>
  </div>
  <div>Mon CV</div>
</a>

        </div>
      </div>
    </section>
  );
};
