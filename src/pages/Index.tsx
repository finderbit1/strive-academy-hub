import { StrivoHeader } from "@/components/StrivoHeader";
import { StrivoHero } from "@/components/StrivoHero";
import { StrivoBenefits } from "@/components/StrivoBenefits";
import { StrivoCourses } from "@/components/StrivoCourses";
import { StrivoFooter } from "@/components/StrivoFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StrivoHeader />
      <main>
        <StrivoHero />
        <StrivoBenefits />
        <StrivoCourses />
      </main>
      <StrivoFooter />
    </div>
  );
};

export default Index;
