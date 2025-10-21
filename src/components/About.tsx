import { MessageCircle, Sparkles, Gamepad2 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Communauté Active",
      description: "Plus de 500 membres passionnés et une ambiance conviviale où chacun peut s'exprimer librement"
    },
    {
      icon: Sparkles,
      title: "Staffs Disponibles",
      description: "Notre équipe de modération est toujours là pour vous aider et répondre à vos questions"
    },
    {
      icon: Gamepad2,
      title: "Events Réguliers",
      description: "Participez à nos rassemblements, événements, giveaways et challenges"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi rejoindre <span className="text-gradient">Bornes Club FR</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce qui rend notre communauté unique et accueillante
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="gradient-card backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-smooth group hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 group-hover:shadow-glow transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default About;
