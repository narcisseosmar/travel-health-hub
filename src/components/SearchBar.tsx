import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "Rechercher une destination...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-24 h-12 text-lg bg-card shadow-card border-0 focus:ring-2 focus:ring-primary"
        />
        <Button 
          type="submit" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          <Search className="h-4 w-4 mr-2" />
          Rechercher
        </Button>
      </div>
      
      {/* Suggestions populaires */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Destinations populaires:</span>
        {["Madagascar", "Thaïlande", "Inde", "Kenya", "Brésil"].map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery(suggestion);
              onSearch(suggestion);
            }}
            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </form>
  );
};

export default SearchBar;