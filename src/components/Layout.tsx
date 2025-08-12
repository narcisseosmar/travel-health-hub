import { ReactNode } from "react";
import { Search, Heart, Bell, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <h1 className="text-xl font-bold text-primary">HealthSpot</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Destinations</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Vaccins</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Témoignages</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Guides</a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">H</span>
                </div>
                <span className="font-bold text-primary">HealthSpot</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Votre guide santé pour voyager en toute sécurité.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Afrique</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Asie</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Amérique</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Europe</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Vaccins</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Médicaments</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Assurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Urgences</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 HealthSpot. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;