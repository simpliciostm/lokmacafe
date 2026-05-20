type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      <p className="text-xs font-medium uppercase tracking-luxe text-gold-300">{label}</p>
      <h2 className="font-display text-4xl leading-tight text-olive-900 sm:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-olive-900/75">{description}</p> : null}
    </div>
  );
}
