import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Courses from "@/components/sections/Courses";
import LearningJourney from "@/components/sections/LearningJourney";
import StudentBenefits from "@/components/sections/StudentBenefits";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Courses />
      <LearningJourney />
      <StudentBenefits />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
