"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, siteConfig } from "@/lib/data";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your Learning Journey Today"
          description="Talk to our team to find the right course for your career goals and next batch schedule."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard
              icon={Phone}
              label="Call Us"
              value={siteConfig.phone}
              href={siteConfig.phoneHref}
            />
            <InfoCard
              icon={MessageCircle}
              label="WhatsApp"
              value={siteConfig.whatsapp}
              href={siteConfig.whatsappHref}
            />
            <InfoCard
              icon={Mail}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard icon={MapPin} label="Location" value={siteConfig.location} />
            <InfoCard
              icon={ShieldCheck}
              label="Business Status"
              value={siteConfig.businessStatus}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-navy-100 bg-navy-50/40 p-7 shadow-premium lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required placeholder="Your full name" />
              <Field
                label="Email Address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                required
                placeholder="+91 00000 00000"
              />
              <div>
                <label
                  htmlFor="course"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600"
                >
                  Course Interested In
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-azure-400"
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {courses.map((course) => (
                    <option key={course.title} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your background and goals..."
                className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-azure-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-azure-500 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition-colors hover:bg-azure-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                Thank you! Our team will get in touch with you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                Something went wrong. Please call or WhatsApp us directly.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-premium transition-colors hover:border-azure-200">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-navy-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-azure-400"
      />
    </div>
  );
}
