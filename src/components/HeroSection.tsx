import { Shield, Users, MapPin, Clock } from "lucide-react";
import SearchBar from "./SearchBar";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const handleSearch = (query: string) => {
    console.log("Recherche:", query);
    // Ici, on naviguerait vers la page de résultats
    if (query.toLowerCase().includes("ambovombe")) {
      // Simulation de navigation vers la page de destination
      window.location.href = "#destination";
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Informations officielles",
      description: "Vaccins et précautions recommandées par les autorités sanitaires"
    },
    {
      icon: Users,
      title: "Témoignages voyageurs",
      description: "Retours d'expérience réels de voyageurs récents"
    },
    {
      icon: MapPin,
      title: "Conditions locales",
      description: "Situation sanitaire actuelle et alertes en temps réel"
    },
    {
      icon: Clock,
      title: "Rappels personnalisés",
      description: "Notifications pour préparer votre voyage en avance"
    }
  ];

  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-glow rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent rounded-full opacity-10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Voyagez en toute
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              sécurité sanitaire
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Découvrez les risques sanitaires, vaccins obligatoires et conseils pratiques 
            pour votre destination. Partagez vos expériences avec la communauté.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <feature.icon className="h-8 w-8 mb-4 text-white" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;