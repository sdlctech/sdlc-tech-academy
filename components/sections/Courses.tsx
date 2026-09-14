import { Award, BadgeCheck, Clock, Layers2, Video } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, siteConfig } from "@/lib/data";

export default function Courses() {
  return (
    <section id="courses" className="section-py bg-navy-50/50">
      <Container>
        <SectionHeading
          eyebrow="Popular Courses"
          title="In-Demand Programs for Future-Ready Careers"
          description="Practical, mentor-led programs across Cloud, DevOps, AI and Software Development — built around what employers are hiring for today."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-premium-lg"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                  <course.icon className="h-6 w-6" />
                </div>
                {course.tag && (
                  <span className="rounded-full bg-navy-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {course.tag}
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {course.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                {course.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-navy-100 pt-4 text-xs font-medium text-navy-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-azure-500" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers2 className="h-3.5 w-3.5 text-azure-500" />
                  {course.level}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-navy-500">
                <span className="flex items-center gap-1.5">
                  <Video className="h-3.5 w-3.5 text-azure-500" />
                  Live Classes
                </span>
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-azure-500" />
                  Real Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-azure-500" />
                  Certification
                </span>
              </div>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-azure-400 hover:bg-azure-50 hover:text-azure-600"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
