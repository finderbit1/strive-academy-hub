import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggeredAnimation } from "@/components/ui/scroll-animation";
import { Star, Quote } from "lucide-react";

export const StrivoTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Desenvolvedora Frontend",
      company: "TechCorp",
      content: "A Strivo transformou minha carreira! Em 6 meses aprendi React, TypeScript e consegui uma promoção com aumento de 80%. Os projetos práticos são incríveis!",
      rating: 5,
      avatar: "MS",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "João Santos",
      role: "Backend Developer",
      company: "StartupX",
      content: "Finalmente uma plataforma focada em programação que vale cada centavo! Aprendi Node.js, Python e economizei mais de R$ 3.000 por mês em outras assinaturas.",
      rating: 5,
      avatar: "JS",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Ana Costa",
      role: "Mobile Developer",
      company: "AppStudio",
      content: "Os cursos de React Native da Strivo são fenomenais! Aprendi desenvolvimento mobile do zero e consegui meu primeiro emprego como Mobile Developer em 4 meses.",
      rating: 5,
      avatar: "AC",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "Carlos Oliveira",
      role: "Data Scientist",
      company: "BigData Inc",
      content: "A seção de Data Science e IA é impressionante! Aprendi Python, Machine Learning e consegui uma vaga sênior com salário 3x maior.",
      rating: 5,
      avatar: "CO",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      name: "Fernanda Lima",
      role: "Full Stack Developer",
      company: "DevStartup",
      content: "Como desenvolvedora, os cursos full-stack da Strivo foram essenciais. Aprendi todas as tecnologias necessárias e consegui criar minha própria startup!",
      rating: 5,
      avatar: "FL",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Rafael Souza",
      role: "DevOps Engineer",
      company: "CloudTech",
      content: "A Strivo é simplesmente a melhor plataforma de programação que já usei. Aprendi Docker, Kubernetes e consegui migrar para DevOps com sucesso!",
      rating: 5,
      avatar: "RS",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "15.000+", label: "Desenvolvedores" },
    { number: "98%", label: "Satisfação" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "520+", label: "Cursos de Programação" }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-base px-6 py-3 animate-glow-pulse">
            💬 O que nossos alunos dizem
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Depoimentos</span> <span className="text-primary">Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Mais de 15.000 desenvolvedores já transformaram suas carreiras com a Strivo. Veja os resultados reais!
          </p>
        </ScrollAnimation>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={index}
              animation="scaleIn"
              delay={index * 100}
            >
              <div className="text-center">
                <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 shadow-elegant">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="scaleIn"
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-3 bg-gradient-card border border-primary/10 relative overflow-hidden h-full"
              >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-glow`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="slideUp" className="text-center mt-16">
          <div className="bg-gradient-card border border-primary/20 rounded-3xl p-12 max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                Faça parte dessa comunidade de sucesso
              </h3>
              <p className="text-xl text-muted-foreground">
                Junte-se a mais de 15.000 desenvolvedores que já transformaram suas carreiras com a Strivo
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                ⭐ 4.9/5 estrelas em todas as plataformas
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3">
                🏆 98% de satisfação garantida
              </Badge>
            </div>
            
            <div className="space-y-6">
              <Button variant="hero" size="xl" className="animate-glow-pulse text-xl px-12 py-6 w-full max-w-md mx-auto block">
                🚀 Garantir Meu Acesso Agora
              </Button>
              <p className="text-sm text-muted-foreground/80">
                🔒 Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
