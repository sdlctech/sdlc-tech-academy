import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { techCategories } from "@/lib/data";

export default function Technologies() {
  return (
    <section id="technologies" className="section-py bg-navy-50/50">
      <Container>
        <SectionHeading
          eyebrow="Technologies We Cover"
          title="Hands-On With the Tools the Industry Actually Uses"
          description="Our curriculum is mapped directly to the tools and platforms used by cloud and DevOps teams today."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-navy-100 bg-white p-7 shadow-premium"
            >
              <h3 className="font-display text-base font-semibold text-navy-900">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy-100 bg-navy-50/80 px-3 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-azure-300 hover:bg-azure-50 hover:text-azure-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
