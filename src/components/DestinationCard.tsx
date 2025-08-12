import { Shield, Users, AlertTriangle, Heart, Share2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VaccineInfo {
  name: string;
  type: "obligatoire" | "recommandé";
  description: string;
}

interface Testimonial {
  author: string;
  date: string;
  rating: number;
  content: string;
  helpful: number;
}

interface DestinationCardProps {
  destination: string;
  country: string;
  riskLevel: "low" | "medium" | "high";
  vaccines: VaccineInfo[];
  testimonials: Testimonial[];
  alerts?: string[];
}

const DestinationCard = ({ 
  destination, 
  country, 
  riskLevel, 
  vaccines, 
  testimonials, 
  alerts = [] 
}: DestinationCardProps) => {
  const riskColors = {
    low: "bg-success text-success-foreground",
    medium: "bg-warning text-warning-foreground", 
    high: "bg-destructive text-destructive-foreground"
  };

  const riskLabels = {
    low: "Risque faible",
    medium: "Risque modéré",
    high: "Risque élevé"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6" id="destination">
      {/* Header */}
      <Card className="bg-gradient-card shadow-elegant">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                {destination}
                <Badge className={riskColors[riskLevel]}>
                  {riskLabels[riskLevel]}
                </Badge>
              </CardTitle>
              <p className="text-muted-foreground text-lg mt-1">{country}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Calendar className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Alertes */}
      {alerts.length > 0 && (
        <Card className="border-warning bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="h-5 w-5" />
              Alertes importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {alerts.map((alert, index) => (
                <li key={index} className="text-sm text-foreground">• {alert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vaccins et Précautions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Vaccins et Précautions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {vaccines.map((vaccine, index) => (
              <div key={index} className="border-l-4 border-l-primary pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{vaccine.name}</h4>
                  <Badge variant={vaccine.type === "obligatoire" ? "destructive" : "secondary"}>
                    {vaccine.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{vaccine.description}</p>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommandations générales</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Consultez un médecin 4-6 semaines avant le départ</li>
                <li>• Vérifiez votre carnet de vaccination</li>
                <li>• Souscrivez une assurance voyage</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Témoignages */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Témoignages récents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-l-accent pl-4 py-2">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xs ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground mb-2">{testimonial.content}</p>
                <Button variant="ghost" size="sm" className="text-xs">
                  👍 Utile ({testimonial.helpful})
                </Button>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              Voir tous les témoignages
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <Card className="bg-primary text-primary-foreground shadow-glow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Prêt à partager votre expérience ?</h3>
              <p className="text-primary-foreground/80">Aidez d'autres voyageurs en partageant vos conseils</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">
                Ajouter un témoignage
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Partager via WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DestinationCard;