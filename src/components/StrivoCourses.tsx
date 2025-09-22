import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggeredAnimation } from "@/components/ui/scroll-animation";
import { Code2, PaintBucket, TrendingUp, Briefcase, Camera, Music } from "lucide-react";

export const StrivoCourses = () => {
  const categories = [
    {
      icon: Code2,
      title: "Frontend Development",
      courses: 120,
      description: "React, Vue.js, Angular, TypeScript, HTML5, CSS3 e muito mais.",
      gradient: "from-blue-500 to-purple-600",
      popular: true,
      savings: "vs. R$ 1.800/mês em outras plataformas"
    },
    {
      icon: TrendingUp,
      title: "Backend Development",
      courses: 100,
      description: "Node.js, Python, Java, PHP, C#, APIs e bancos de dados.",
      gradient: "from-green-500 to-teal-600",
      savings: "vs. R$ 1.500/mês em cursos separados"
    },
    {
      icon: PaintBucket,
      title: "Mobile Development",
      courses: 80,
      description: "React Native, Flutter, Swift, Kotlin e desenvolvimento nativo.",
      gradient: "from-pink-500 to-rose-600",
      savings: "vs. R$ 1.200/mês em outras plataformas"
    },
    {
      icon: Briefcase,
      title: "Data Science & IA",
      courses: 90,
      description: "Python, Machine Learning, Deep Learning, Análise de Dados.",
      gradient: "from-indigo-500 to-blue-600",
      savings: "vs. R$ 2.000/mês em cursos especializados"
    },
    {
      icon: Camera,
      title: "DevOps & Cloud",
      courses: 70,
      description: "AWS, Docker, Kubernetes, CI/CD, Linux e infraestrutura.",
      gradient: "from-orange-500 to-red-600",
      savings: "vs. R$ 1.600/mês em certificações"
    },
    {
      icon: Music,
      title: "Game Development",
      courses: 60,
      description: "Unity, Unreal Engine, C++, C# e desenvolvimento de jogos.",
      gradient: "from-purple-500 to-pink-600",
      savings: "vs. R$ 1.400/mês em workshops"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-base px-6 py-3 animate-glow-pulse">
            ✨ Compare e veja a economia absurda
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Todas as</span> <span className="text-primary">áreas</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">da programação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ao invés de pagar milhares por mês em várias plataformas de programação, tenha acesso vitalício a tudo por menos de R$ 500.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {categories.map((category, index) => (
            <ScrollAnimation
              key={index}
              animation="scaleIn"
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-3 bg-gradient-card border border-primary/10 relative overflow-hidden h-full"
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
              
              <CardContent className="text-center p-6">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {category.description}
                </p>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-all border border-primary/20 group-hover:border-primary py-3">
                    Explorar Cursos
                  </Button>
                  <p className="text-xs text-primary/80 font-medium">
                    {category.savings}
                  </p>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Comparison Section */}
        <ScrollAnimation animation="slideUp" className="text-center mb-16">
          <div className="bg-gradient-card border border-primary/20 rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Faça as contas conosco
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <ScrollAnimation animation="slideLeft" delay={200}>
                <div className="text-center">
                    <h4 className="text-2xl font-bold text-destructive mb-4">☹️ Pagando Separado</h4>
                <div className="space-y-2 text-left">
                  <p className="text-muted-foreground">• Udemy Pro: R$ 89/mês</p>
                  <p className="text-muted-foreground">• Pluralsight: R$ 149/mês</p>
                  <p className="text-muted-foreground">• Codecademy Pro: R$ 199/mês</p>
                  <p className="text-muted-foreground">• LinkedIn Learning: R$ 179/mês</p>
                  <p className="text-muted-foreground">• Treehouse: R$ 199/mês</p>
                </div>
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <p className="text-2xl font-bold text-destructive">R$ 695/mês</p>
                  <p className="text-sm text-muted-foreground">R$ 8.340 por ano!</p>
                </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideRight" delay={400}>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">😎 Com a Strivo</h4>
                <div className="space-y-2 text-left">
                  <p className="text-muted-foreground">• +520 cursos de programação</p>
                  <p className="text-muted-foreground">• Frontend, Backend, Mobile</p>
                  <p className="text-muted-foreground">• Data Science & IA</p>
                  <p className="text-muted-foreground">• DevOps & Game Development</p>
                  <p className="text-muted-foreground">• Acesso VITALÍCIO</p>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">R$ 497</p>
                  <p className="text-sm text-muted-foreground">Pagamento único!</p>
                </div>
                </div>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fadeIn" delay={600} className="text-center space-y-8">
              <div className="space-y-4">
                <p className="text-2xl text-muted-foreground">
                  Você <span className="text-primary font-bold text-3xl">economiza R$ 7.843</span> no primeiro ano!
                </p>
                <p className="text-lg text-muted-foreground">
                  💰 Economia garantida comparado às outras plataformas
                </p>
              </div>
              <Button variant="hero" size="xl" className="animate-glow-pulse text-xl px-12 py-6 w-full max-w-md mx-auto block">
                🎯 Quero Economizar Agora
              </Button>
              <p className="text-sm text-muted-foreground/80">
                ⚡ Acesso imediato após o pagamento
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
