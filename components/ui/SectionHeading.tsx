type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider ${
            light
              ? "bg-white/10 text-azure-300"
              : "bg-azure-50 text-azure-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-navy-100/80" : "text-navy-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
