import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Learners Say"
          description="Real feedback from professionals who trained with SDLC Tech Academy and advanced their careers."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg"
            >
              <Quote className="h-6 w-6 text-azure-200" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-azure-400 text-azure-400"
                        : "fill-navy-100 text-navy-100"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-navy-700 text-sm font-semibold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-navy-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
