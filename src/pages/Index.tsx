import { Navigation } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Esprit } from "../components/Esprit";
import { Oeuvre } from "../components/Oeuvre";
import { Myskill } from "../components/Myskille";
import { Laboratoire } from "../components/Laboratoire";
import { Humain } from "../components/Humain";
import { Connexion } from "../components/Connexion";
import { Profil } from "../components/profil";
import '../index.css';

const Index = () => {
  return (
    <main className="relative">
      <Navigation/>
      <Hero />
      <Esprit />
      <Profil />
      <Oeuvre />
      <Myskill />
      <Laboratoire />
      <Humain />
      <Connexion />
    </main>
  );
};

export default Index;
