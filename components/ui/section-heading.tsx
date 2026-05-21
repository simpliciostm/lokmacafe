type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleTone = tone === "dark" ? "text-sand-50" : "text-olive-900";
  const descriptionTone = tone === "dark" ? "text-sand-50/75" : "text-olive-900/75";
  const labelTone = tone === "dark" ? "text-gold-300" : "text-gold-400";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      <p className={`text-xs font-medium uppercase tracking-luxe ${labelTone}`}>{label}</p>
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${titleTone}`}>{title}</h2>
      {description ? <p className={`text-base leading-relaxed ${descriptionTone}`}>{description}</p> : null}
    </div>
  );
}
