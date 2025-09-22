import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Gift, Zap } from "lucide-react";
import { useState } from "react";

export const StrivoNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simular envio (aqui você integraria com sua API)
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };

  const benefits = [
    {
      icon: Gift,
      title: "E-book Gratuito",
      description: "Receba nosso guia completo de carreira em programação"
    },
    {
      icon: Zap,
      title: "Descontos Exclusivos",
      description: "Acesso a ofertas especiais antes de todo mundo"
    },
    {
      icon: Mail,
      title: "Conteúdo Premium",
      description: "Dicas semanais dos melhores desenvolvedores"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-glow))_0%,transparent_70%)] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-card border border-primary/20 shadow-elegant">
              <CardContent className="p-12">
                <div className="mb-8">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce-in" />
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    🎉 Inscrição Confirmada!
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Obrigado por se inscrever! Você receberá nosso conteúdo exclusivo em breve.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="text-center animate-scale-in"
                      style={{animationDelay: `${index * 0.2}s`}}
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setIsSubscribed(false)}
                  className="animate-glow-pulse"
                >
                  Quero me Inscrever Novamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-glow))_0%,transparent_70%)] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card border border-primary/20 shadow-elegant">
            <CardContent className="p-12">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-6 text-base px-6 py-3 animate-glow-pulse">
                  🚀 Não perca nenhuma novidade
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Receba Conteúdo <span className="text-primary">Exclusivo</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Inscreva-se na nossa newsletter e receba dicas de programação, ofertas especiais e conteúdo premium gratuitamente.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mb-12">
                <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-lg py-6 px-6"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg"
                    disabled={isLoading}
                    className="px-8 py-6 text-lg animate-glow-pulse min-w-[160px]"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Inscrever-se
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="text-center animate-scale-in"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                🔒 Seus dados estão seguros. Não enviamos spam e você pode cancelar a qualquer momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
