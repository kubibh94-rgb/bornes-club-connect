import { Button } from "@/components/ui/button";
import { Users, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img className="logo-hero-img-bg" src="/logo.png" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <span className="text-gradient drop-shadow-lg">Bornes Club FR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Rejoignez une communauté passionnée de plus de <span className="text-secondary font-bold drop-shadow-lg">2000 membres</span> avec des staffs toujours à l&apos;écoute
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
          <Button variant="hero" size="xl" asChild className="group">
            <a href="fh5">
              Forza Horizon
            </a>
          </Button>

          <Button variant="hero" size="xl" asChild className="group">
            <a href="ets">
              Euro Truck Simulator
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="gradient-card backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-smooth group hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-4 group-hover:shadow-glow transition-smooth">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2 drop-shadow-lg">2000+</div>
            <div className="text-sm text-foreground font-medium drop-shadow-md">Membres Actifs</div>
          </div>

          <div className="gradient-card backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-smooth group hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-4 group-hover:shadow-glow transition-smooth">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2 drop-shadow-lg">24/7</div>
            <div className="text-sm text-foreground font-medium drop-shadow-md">Staffs à l&apos;écoute</div>
          </div>

          <div className="gradient-card backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-smooth group hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-4 group-hover:shadow-glow transition-smooth">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2 drop-shadow-lg">100%</div>
            <div className="text-sm text-foreground font-medium drop-shadow-md">Bonne ambiance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
