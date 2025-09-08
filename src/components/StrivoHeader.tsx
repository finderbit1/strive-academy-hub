import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const StrivoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png" 
              alt="Strivo Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cursos" className="text-foreground hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <Button variant="hero" size="lg">
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#cursos" className="text-foreground hover:text-primary transition-colors">
                Cursos
              </a>
              <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <Button variant="hero" size="lg" className="self-start">
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};