import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, BookOpen, Award } from "lucide-react";

export const StrivoHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary-glow))_0%,transparent_50%),radial-gradient(circle_at_80%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20"></div>
      
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <Badge variant="secondary" className="mb-6 animate-glow-pulse">
                ✨ Acesso ilimitado a +500 cursos
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transforme sua
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Carreira
                </span>
                <span className="block text-white/90">
                  com a Strivo
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Uma única compra. Acesso vitalício a centenas de cursos online nas áreas mais demandadas do mercado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button variant="hero" size="xl" className="animate-glow-pulse">
                  <Play className="mr-2 h-5 w-5" />
                  Começar Agora
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Ver Cursos
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="text-2xl font-bold text-white">+10k</div>
                  <div className="text-sm text-white/70">Alunos</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="text-2xl font-bold text-white">+500</div>
                  <div className="text-sm text-white/70">Cursos</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">Satisfação</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-glow">
                  <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-24 w-24 text-white drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="text-sm font-semibold text-gray-800">🚀 Programação</div>
                  <div className="text-xs text-gray-600">150+ cursos</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="text-sm font-semibold text-gray-800">📈 Marketing</div>
                  <div className="text-xs text-gray-600">80+ cursos</div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.9s'}}>
                  <div className="text-sm font-semibold text-gray-800">🎨 Design</div>
                  <div className="text-xs text-gray-600">120+ cursos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};