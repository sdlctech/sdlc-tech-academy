import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeySteps } from "@/lib/data";

export default function LearningJourney() {
  return (
    <section id="journey" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="Learning Journey"
          title="Your Path from Enrollment to Career Growth"
          description="A clear, structured journey designed to take you from fundamentals to a confident, job-ready professional."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-navy-100 lg:left-1/2 lg:block" />
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-azure-400 via-azure-200 to-transparent lg:left-1/2 lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {journeySteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex items-start gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-0 ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                <div
                  className={`hidden lg:block ${
                    index % 2 === 1 ? "order-2 pl-16" : "order-1 pr-16 text-right"
                  }`}
                >
                  {index % 2 === 0 && (
                    <StepCard step={item.step} title={item.title} />
                  )}
                </div>

                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-premium-lg ring-8 ring-white lg:left-1/2">
                  <item.icon className="h-5 w-5 text-azure-400" />
                </div>

                <div className="ml-6 flex-1 lg:hidden">
                  <StepCard step={item.step} title={item.title} />
                </div>

                <div
                  className={`hidden lg:block ${
                    index % 2 === 1 ? "order-1 pr-16 text-right" : "order-2 pl-16"
                  }`}
                >
                  {index % 2 === 1 && (
                    <StepCard step={item.step} title={item.title} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepCard({ step, title }: { step: string; title: string }) {
  return (
    <div className="inline-block rounded-2xl border border-navy-100 bg-white px-6 py-5 shadow-premium">
      <span className="text-xs font-bold uppercase tracking-widest text-azure-500">
        Step {step}
      </span>
      <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">
        {title}
      </h3>
    </div>
  );
}
