import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, PaintBucket, TrendingUp, Briefcase, Camera, Music } from "lucide-react";

export const StrivoCourses = () => {
  const categories = [
    {
      icon: Code2,
      title: "Programação & Tech",
      courses: 150,
      description: "React, Node.js, Python, IA, Data Science e muito mais.",
      gradient: "from-blue-500 to-purple-600",
      popular: true,
      savings: "vs. R$ 2.400/mês em outras plataformas"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      courses: 80,
      description: "SEO, Google Ads, redes sociais, growth hacking completo.",
      gradient: "from-green-500 to-teal-600",
      savings: "vs. R$ 800/mês em cursos separados"
    },
    {
      icon: PaintBucket,
      title: "Design & UX/UI",
      courses: 120,
      description: "Figma, Adobe Suite, prototipagem e design systems.",
      gradient: "from-pink-500 to-rose-600",
      savings: "vs. R$ 1.200/mês em outras plataformas"
    },
    {
      icon: Briefcase,
      title: "Negócios & Gestão",
      courses: 90,
      description: "Empreendedorismo, liderança, finanças e estratégia.",
      gradient: "from-indigo-500 to-blue-600",
      savings: "vs. R$ 900/mês em MBAs online"
    },
    {
      icon: Camera,
      title: "Fotografia & Vídeo",
      courses: 60,
      description: "Fotografia profissional, edição e produção audiovisual.",
      gradient: "from-orange-500 to-red-600",
      savings: "vs. R$ 600/mês em workshops"
    },
    {
      icon: Music,
      title: "Música & Arte",
      courses: 45,
      description: "Produção musical, instrumentos e criatividade digital.",
      gradient: "from-purple-500 to-pink-600",
      savings: "vs. R$ 500/mês em aulas particulares"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 text-base px-6 py-3 animate-glow-pulse">
            ✨ Compare e veja a economia absurda
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Todas as</span> <span className="text-primary">categorias</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">em um só lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ao invés de pagar milhares por mês em várias plataformas, tenha acesso vitalício a tudo por menos de R$ 500.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-3 bg-gradient-card border border-primary/10 animate-scale-in relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {category.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-white z-10 animate-glow-pulse">
                  🔥 Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4 relative">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${category.gradient} w-16 h-16 flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-glow`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors text-foreground">
                  {category.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto w-fit mb-2">
                  {category.courses}+ cursos
                </Badge>
                <p className="text-xs text-primary font-medium">
                  {category.savings}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-all border border-primary/20 group-hover:border-primary">
                  Explorar Cursos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="text-center animate-fade-in mb-16">
          <div className="bg-gradient-card border border-primary/20 rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Faça as contas conosco
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-destructive mb-4">😤 Pagando Separado</h4>
                <div className="space-y-2 text-left">
                  <p className="text-muted-foreground">• Udemy: R$ 89/mês</p>
                  <p className="text-muted-foreground">• Coursera: R$ 199/mês</p>
                  <p className="text-muted-foreground">• Skillshare: R$ 79/mês</p>
                  <p className="text-muted-foreground">• MasterClass: R$ 179/mês</p>
                  <p className="text-muted-foreground">• Pluralsight: R$ 149/mês</p>
                </div>
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <p className="text-2xl font-bold text-destructive">R$ 695/mês</p>
                  <p className="text-sm text-muted-foreground">R$ 8.340 por ano!</p>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-4">😎 Com a Strivo</h4>
                <div className="space-y-2 text-left">
                  <p className="text-muted-foreground">• +500 cursos de programação</p>
                  <p className="text-muted-foreground">• +200 cursos de design</p>
                  <p className="text-muted-foreground">• +150 cursos de marketing</p>
                  <p className="text-muted-foreground">• +100 cursos de negócios</p>
                  <p className="text-muted-foreground">• Acesso VITALÍCIO</p>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">R$ 497</p>
                  <p className="text-sm text-muted-foreground">Pagamento único!</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Você <span className="text-primary font-bold">economiza R$ 7.843</span> no primeiro ano!
              </p>
              <Button variant="hero" size="xl" className="animate-glow-pulse text-xl px-12 py-6">
                🎯 Quero Economizar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};