import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why SDLC Tech Academy"
          title="Built for Career-Focused Tech Professionals"
          description="Everything about our training is designed around one goal: helping you become job-ready with real, in-demand skills."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-premium-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 text-white transition-colors group-hover:from-azure-500 group-hover:to-azure-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
