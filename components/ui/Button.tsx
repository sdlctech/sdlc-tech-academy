import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  className?: string;
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-azure-500 text-white hover:bg-azure-400 shadow-premium hover:shadow-premium-lg",
  secondary:
    "bg-white text-navy-900 hover:bg-navy-50 shadow-premium",
  outline:
    "border border-navy-200 text-navy-900 hover:border-azure-400 hover:text-azure-600",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
