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
      description: "Desenvolvimento web, mobile, IA, data science e muito mais.",
      gradient: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      courses: 80,
      description: "SEO, Google Ads, redes sociais, growth hacking e vendas online.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: PaintBucket,
      title: "Design & UX/UI",
      courses: 120,
      description: "Design gráfico, UI/UX, Adobe Creative Suite e Figma.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Briefcase,
      title: "Negócios & Gestão",
      courses: 90,
      description: "Empreendedorismo, liderança, finanças e gestão estratégica.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Camera,
      title: "Fotografia & Vídeo",
      courses: 60,
      description: "Fotografia profissional, edição de vídeo e produção audiovisual.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Music,
      title: "Música & Arte",
      courses: 45,
      description: "Produção musical, instrumentos, arte digital e criatividade.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            +500 Cursos Disponíveis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Categorias de <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa biblioteca completa com cursos nas áreas mais demandadas do mercado atual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {category.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-white z-10">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4 relative">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${category.gradient} w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto w-fit">
                  {category.courses}+ cursos
                </Badge>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {category.description}
                </p>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  Ver Cursos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar sua Carreira?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Acesso vitalício a todos os cursos por apenas R$ 497. Sem mensalidades, sem limites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
                🚀 Garantir Meu Acesso Agora
              </Button>
              <p className="text-white/80 text-sm">
                💳 Parcelamento em até 12x no cartão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};