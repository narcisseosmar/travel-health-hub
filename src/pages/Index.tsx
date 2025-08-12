import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";

const Index = () => {
  // Données exemple pour Ambovombe
  const ambovombeData = {
    destination: "Ambovombe",
    country: "Madagascar",
    riskLevel: "medium" as const,
    vaccines: [
      {
        name: "Fièvre jaune",
        type: "obligatoire" as const,
        description: "Vaccination obligatoire si vous venez d'un pays à risque. Certificat requis à l'entrée."
      },
      {
        name: "Hépatite A",
        type: "recommandé" as const,
        description: "Fortement recommandé en raison des conditions d'hygiène alimentaire."
      },
      {
        name: "Typhus",
        type: "recommandé" as const,
        description: "Recommandé pour les séjours prolongés ou en zone rurale."
      },
      {
        name: "Paludisme",
        type: "recommandé" as const,
        description: "Traitement préventif recommandé. Zone de transmission modérée."
      }
    ],
    testimonials: [
      {
        author: "Marie L.",
        date: "Il y a 2 semaines", 
        rating: 4,
        content: "Attention à la qualité de l'eau ! J'ai eu des troubles intestinaux malgré les précautions. Emportez des purificateurs d'eau et des médicaments anti-diarrhéiques.",
        helpful: 12
      },
      {
        author: "Jean-Pierre M.",
        date: "Il y a 1 mois",
        rating: 5, 
        content: "Pénurie de Doliprane dans les pharmacies locales en ce moment. Pensez à emporter vos médicaments de base depuis la France !",
        helpful: 8
      },
      {
        author: "Camille R.",
        date: "Il y a 6 semaines",
        rating: 3,
        content: "Les moustiques sont très actifs le soir. Spray répulsif indispensable et moustiquaire conseillée même en hébergement touristique.",
        helpful: 15
      }
    ],
    alerts: [
      "Pénurie temporaire de paracétamol dans les pharmacies locales",
      "Augmentation des cas de diarrhée du voyageur signalés ce mois-ci",
      "Saison des pluies : risque accru de maladies vectorielles"
    ]
  };

  return (
    <Layout>
      <HeroSection />
      
      {/* Section destination détaillée */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <DestinationCard {...ambovombeData} />
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">HealthSpot en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Destinations couvertes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-muted-foreground">Témoignages vérifiés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Informations à jour</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-muted-foreground">Mise à jour des alertes</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
