import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const StrivoFooter = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <OptimizedImage 
                src="/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png" 
                alt="Strivo Academy Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              A Strivo é sua plataforma completa de cursos de programação. Transforme sua carreira tech com conhecimento de qualidade.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#cursos" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Todos os Cursos
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#suporte" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Categorias</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Data Science & IA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">contato@strivo.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-6">
              <Badge variant="outline" className="mb-3">
                🔥 Oferta Limitada
              </Badge>
              <p className="text-sm text-secondary-foreground/80">
                Aproveite o desconto especial de lançamento. Por tempo limitado!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Strivo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};