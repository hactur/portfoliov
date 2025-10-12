import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export const Connexion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:kamgawabopascalarthur@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github/hactur" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    // { icon: Sprout, label: "Pinterest", href: "https://linkedin.com" },
  ];

  return (
    <section id="connexion" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-muted-foreground">Chapitre VI —</span>
              <br />
              <span className="gradient-text">Connexion</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Créons ensemble
            </p>
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nom
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/50 border-primary/20 focus:border-primary/50 text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/50 border-primary/20 focus:border-primary/50 text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/50 border-primary/20 focus:border-primary/50 min-h-[150px] text-foreground"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-14 h-14 rounded-full flex items-center justify-center hover-lift group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Closing message */}
          <div className="text-center space-y-8 pt-8">
            <p className="text-2xl md:text-3xl font-light text-foreground/90">
              Construisons ensemble
              <br />
              <span className="gradient-text font-semibold">
                quelque chose qui a du sens.
              </span>
            </p>

            {/* Animated logo/name */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-2xl animate-glow-pulse" />
              <h3 className="relative text-4xl md:text-5xl font-bold gradient-text">
                Entre Logique et Lumière
              </h3>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground pt-8">
              ©Hactur 2025 — Développé avec passion et précision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
