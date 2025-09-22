import { StrivoHeader } from "@/components/StrivoHeader";
import { StrivoHero } from "@/components/StrivoHero";
import { StrivoBenefits } from "@/components/StrivoBenefits";
import { StrivoCourses } from "@/components/StrivoCourses";
import { StrivoTestimonials } from "@/components/StrivoTestimonials";
import { StrivoFAQ } from "@/components/StrivoFAQ";
import { StrivoNewsletter } from "@/components/StrivoNewsletter";
import { StrivoFooter } from "@/components/StrivoFooter";
import { SEO } from "@/components/SEO";
import { 
  organizationSchema, 
  courseSchema, 
  offerSchema, 
  reviewSchema, 
  faqSchema, 
  breadcrumbSchema 
} from "@/data/structured-data";

const Index = () => {
  const structuredData = [
    organizationSchema,
    courseSchema,
    offerSchema,
    reviewSchema,
    faqSchema,
    breadcrumbSchema
  ];

  return (
    <>
      <SEO 
        title="Strivo Academy - Plataforma de Cursos de Programação Online | Transforme sua Carreira Tech"
        description="Transforme sua carreira tech com a Strivo Academy. Acesso vitalício a +520 cursos de programação em Frontend, Backend, Mobile, Data Science e mais. Economize R$ 7.843/ano. Apenas R$ 497!"
        keywords="cursos programação, desenvolvimento web, frontend, backend, mobile, data science, python, javascript, react, node.js, carreira tech, desenvolvedor, programador, cursos online, bootcamp programação, aprender programar, curso react, curso python, curso javascript"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <StrivoHeader />
        <main role="main">
          <StrivoHero />
          <StrivoBenefits />
          <StrivoCourses />
          <StrivoFAQ />
        </main>
        <StrivoFooter />
      </div>
    </>
  );
};

export default Index;
