import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const StrivoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    smoothScrollTo(elementId);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <OptimizedImage 
              src="/logo strivo.png" 
              alt="Strivo Academy - Plataforma de Cursos Online" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              priority={true}
            />
            <span className="hidden sm:block text-xl font-bold text-primary">
              Strivo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            <a 
              href="#cursos" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={(e) => handleNavClick(e, 'cursos')}
              aria-label="Ir para seção de Cursos"
            >
              Cursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#beneficios" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={(e) => handleNavClick(e, 'beneficios')}
              aria-label="Ir para seção de Benefícios"
            >
              Benefícios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#depoimentos" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={(e) => handleNavClick(e, 'depoimentos')}
              aria-label="Ir para seção de Depoimentos"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#faq" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={(e) => handleNavClick(e, 'faq')}
              aria-label="Ir para seção de FAQ"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={(e) => handleNavClick(e, 'contato')}
              aria-label="Ir para seção de Contato"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <Button 
              variant="hero" 
              size="lg"
              className="animate-glow-pulse px-8 py-3"
              onClick={() => smoothScrollTo('hero')}
              aria-label="Ir para seção principal e começar agora"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 pb-4 border-t border-border/50" role="navigation" aria-label="Menu mobile">
            <a 
              href="#cursos" 
              className="text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/5"
              onClick={(e) => handleNavClick(e, 'cursos')}
            >
              Cursos
            </a>
            <a 
              href="#beneficios" 
              className="text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/5"
              onClick={(e) => handleNavClick(e, 'beneficios')}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/5"
              onClick={(e) => handleNavClick(e, 'depoimentos')}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/5"
              onClick={(e) => handleNavClick(e, 'faq')}
            >
              FAQ
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/5"
              onClick={(e) => handleNavClick(e, 'contato')}
            >
              Contato
            </a>
            <Button 
              variant="hero" 
              size="lg" 
              className="self-start mx-4 mt-6 px-8 py-3 w-full max-w-[200px]"
              onClick={() => smoothScrollTo('hero')}
            >
              Começar Agora
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
