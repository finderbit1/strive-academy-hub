  import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const StrivoFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quantos cursos de programação estão disponíveis na Strivo Academy?",
      answer: "A Strivo Academy oferece acesso vitalício a mais de 520 cursos de programação, cobrindo todas as áreas principais: Frontend (React, Vue.js, Angular), Backend (Node.js, Python, Java), Mobile (React Native, Flutter), Data Science & IA, DevOps & Cloud, e Game Development."
    },
    {
      question: "Quanto custa o acesso vitalício na Strivo Academy?",
      answer: "O acesso vitalício custa apenas R$ 497, um pagamento único que te dá acesso para sempre a todos os cursos atuais e futuros da plataforma. Não há mensalidades ou taxas adicionais."
    },
    {
      question: "Quais tecnologias de programação são ensinadas na Strivo Academy?",
      answer: "Ensinamos as principais tecnologias do mercado: React, Vue.js, Angular, TypeScript, Node.js, Python, Java, PHP, React Native, Flutter, Swift, Kotlin, Machine Learning, Deep Learning, Docker, Kubernetes, AWS, Unity, Unreal Engine e muito mais."
    },
    {
      question: "Existe garantia de satisfação na Strivo Academy?",
      answer: "Sim! Oferecemos garantia de 7 dias ou seu dinheiro de volta. Se não ficar satisfeito com o conteúdo, devolvemos 100% do valor investido, sem perguntas."
    },
    {
      question: "Como funciona o acesso vitalício da Strivo Academy?",
      answer: "Com o acesso vitalício, você paga apenas uma vez e tem acesso para sempre a todos os cursos atuais e futuros da plataforma. Não há renovação automática ou cobranças recorrentes."
    },
    {
      question: "Os cursos são adequados para iniciantes em programação?",
      answer: "Sim! Nossos cursos são estruturados para todos os níveis, desde iniciantes absolutos até desenvolvedores experientes. Cada curso tem pré-requisitos claramente definidos."
    },
    {
      question: "Posso estudar no meu próprio ritmo?",
      answer: "Absolutamente! Todos os cursos são online e você pode assistir no seu próprio ritmo, quantas vezes quiser, 24 horas por dia, 7 dias por semana."
    },
    {
      question: "Recebo certificados de conclusão?",
      answer: "Sim! Ao concluir cada curso, você recebe um certificado de conclusão reconhecido pelo mercado, que pode ser compartilhado no LinkedIn e usado no seu portfólio."
    },
    {
      question: "Há suporte para dúvidas durante os cursos?",
      answer: "Sim! Oferecemos suporte especializado com mentores experientes em cada área de conhecimento. Você pode tirar suas dúvidas através da nossa plataforma."
    },
    {
      question: "Como faço para começar a estudar na Strivo Academy?",
      answer: "É muito simples! Clique no botão 'Garantir Meu Acesso Agora', complete o pagamento e você terá acesso imediato a toda a plataforma. Não há processo de aprovação ou espera."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-base px-6 py-3 animate-glow-pulse">
            ❓ Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Tire suas</span> <span className="text-primary">Dúvidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos <strong>cursos de programação</strong> e como funciona nossa plataforma.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left text-lg font-semibold hover:text-primary transition-colors flex items-center justify-between py-4"
                      aria-expanded={openItems.includes(index)}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>{faq.question}</span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div 
                        id={`faq-answer-${index}`}
                        className="text-muted-foreground leading-relaxed pt-2 pb-4 animate-fade-in"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};
