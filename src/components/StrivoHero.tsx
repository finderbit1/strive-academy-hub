import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, DollarSign, Zap, Shield } from "lucide-react";

export const StrivoHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Problem Statement */}
            <div className="animate-fade-in mb-12">
              <Badge variant="secondary" className="mb-6 text-base px-6 py-2 animate-glow-pulse">
                🤯 Cansado de pagar múltiplas assinaturas?
              </Badge>
              
              {/* Multiple subscriptions visual */}
              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-scale-in">
                {["Netflix", "Udemy", "Coursera", "Skillshare", "MasterClass", "Pluralsight"].map((platform, index) => (
                  <div key={platform} className="bg-card/50 border border-border/50 px-4 py-2 rounded-lg relative animate-fade-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                    <span className="text-muted-foreground text-sm">{platform}</span>
                    <X className="h-4 w-4 text-destructive absolute -top-2 -right-2 bg-background rounded-full" />
                  </div>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
                <span className="text-foreground">Pare de pagar</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">20 assinaturas</span>
                <br />
                <span className="text-foreground/80">diferentes</span>
              </h1>
              
              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
                A <span className="text-primary font-bold">Strivo</span> resolve isso com <span className="text-foreground font-semibold">uma única assinatura</span> que cabe no seu bolso.
              </p>
            </div>
            
            {/* Solution */}
            <div className="animate-bounce-in" style={{animationDelay: '0.8s'}}>
              <div className="bg-gradient-card border border-primary/20 rounded-3xl p-12 mb-12 shadow-elegant">
                <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                  Todos os melhores cursos
                </h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
                  em uma única plataforma
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center animate-fade-in" style={{animationDelay: '1s'}}>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">+500 Cursos</h4>
                    <p className="text-muted-foreground">Todas as áreas de tecnologia</p>
                  </div>
                  
                  <div className="text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Acesso Vitalício</h4>
                    <p className="text-muted-foreground">Pague uma vez, use para sempre</p>
                  </div>
                  
                  <div className="text-center animate-fade-in" style={{animationDelay: '1.4s'}}>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Preço Justo</h4>
                    <p className="text-muted-foreground">Menos que 2 meses de Netflix</p>
                  </div>
                </div>
                
                <div className="animate-glow-pulse">
                  <Button variant="hero" size="xl" className="text-xl px-12 py-6 mb-4">
                    🚀 Garantir Meu Acesso Agora
                  </Button>
                  <p className="text-muted-foreground">
                    <span className="line-through text-muted-foreground/60">De R$ 997</span> por apenas <span className="text-primary font-bold text-xl">R$ 497</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    💳 Parcelamento em até 12x no cartão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};