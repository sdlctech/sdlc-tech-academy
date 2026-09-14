import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  quickLinks,
  siteConfig,
  socialLinks,
  trainingPrograms,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-lg font-bold text-white">
              SDLC <span className="text-azure-400">Tech Academy</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              {siteConfig.tagline}. {siteConfig.altTagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-300 transition-colors hover:border-azure-400 hover:text-azure-400"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-azure-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Training Programs
            </h4>
            <ul className="mt-4 space-y-3">
              {trainingPrograms.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className="text-sm text-navy-300 transition-colors hover:text-azure-400"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-300">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-azure-400" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-azure-400" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-azure-400" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-navy-400 sm:flex-row sm:text-left">
          <p>&copy; 2026 SDLC Tech Academy. All Rights Reserved.</p>
          <p>{siteConfig.businessStatus} &middot; {siteConfig.location}</p>
        </Container>
      </div>
    </footer>
  );
}
