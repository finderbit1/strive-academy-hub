import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Infinity, Clock, Trophy, Headphones, Download, Users2 } from "lucide-react";

export const StrivoBenefits = () => {
  const benefits = [
    {
      icon: Infinity,
      title: "Acesso Vitalício",
      description: "Uma única compra e você tem acesso para sempre a todos os cursos atuais e futuros.",
      badge: "Sem mensalidades"
    },
    {
      icon: Clock,
      title: "Estude no Seu Ritmo",
      description: "Aulas disponíveis 24/7. Pause, retome e assista quantas vezes quiser.",
      badge: "Flexível"
    },
    {
      icon: Trophy,
      title: "Certificados Reconhecidos",
      description: "Receba certificados de conclusão reconhecidos pelo mercado em cada curso finalizado.",
      badge: "Certificação"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Tire suas dúvidas com nossos mentores especializados em cada área de conhecimento.",
      badge: "Suporte VIP"
    },
    {
      icon: Download,
      title: "Conteúdo Offline",
      description: "Baixe as aulas e estude mesmo sem conexão com a internet.",
      badge: "Offline"
    },
    {
      icon: Users2,
      title: "Comunidade Exclusiva",
      description: "Conecte-se com outros alunos, troque experiências e faça networking.",
      badge: "Networking"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Por que escolher a Strivo?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios <span className="text-primary">Únicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que uma plataforma de cursos, somos seu parceiro completo na jornada do conhecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in bg-white/80 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-primary w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="mb-2 mx-auto w-fit">
                  {benefit.badge}
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};