import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const Socials = () => {
  const socialLinks = [
    {
      name: "TikTok",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@bornesclubfrfh5",
      color: "hover:text-[#00f2ea]"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://www.youtube.com/@bornesclubfr",
      color: "hover:text-[#FF0000]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/bornesclubfr_",
      color: "hover:text-[#E1306C]"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/people/Bornes-Club-FR/61587169949431/",
      color: "hover:text-[#E1306C]"
    },
    {
      name: "X",
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg">
        <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
      </svg>,
      url: "https://x.com/BornesClubFR",
      color: "hover:text-[#E1306C]"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Suivez-nous sur les <span className="text-gradient">Réseaux</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Restez connectés et ne manquez aucune actualité
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="social"
              size="lg"
              asChild
              className="h-20 sm:h-24 w-full sm:w-52 group"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3"
              >
                <div className={`transition-smooth ${social.color}`}>
                  {social.icon}
                </div>
                <span className="font-semibold">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-40 text-center gradient-card rounded-2xl p-8 border border-primary/20">
          <h3 className="text-4xl font-bold mb-4 text-foreground">
            Prêt à nous rejoindre ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Intégrez une communauté active et passionnée dès maintenant
          </p>
          {/* <Button variant="hero" size="xl" asChild>
            <a href="https://discord.gg/S2NCtzSa6P">
              Rejoindre le Discord
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </Button> */}
          <iframe className="w-full h-96 mt-8 hover:shadow-glow transition-smooth rounded-sm" src="https://discord.com/widget?id=1318250608704225351&theme=dark&lang=fr" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
        </div>
      </div>
    </section>
  );
};

export default Socials;
