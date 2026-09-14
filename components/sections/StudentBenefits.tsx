import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { studentBenefits } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function StudentBenefits() {
  return (
    <section className="section-py overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Student Benefits"
              title="Everything You Need to Succeed, Included"
              align="left"
              light
              description="From live classes to career guidance, every program comes with a complete support system built around your success."
            />
            <div className="mt-8">
              <Button href="#contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                Get Started Today
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {studentBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-3 rounded-xl glass px-4 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-azure-500/20 text-azure-300">
                  <benefit.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-white/90">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
