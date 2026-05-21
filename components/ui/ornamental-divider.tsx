import { Container } from "@/components/ui/container";

type OrnamentalDividerProps = {
  tone?: "light" | "dark";
};

export function OrnamentalDivider({ tone = "light" }: OrnamentalDividerProps) {
  const lineClass =
    tone === "light" ? "bg-gradient-to-r from-transparent via-gold-300/45 to-transparent" : "bg-gradient-to-r from-transparent via-gold-300/55 to-transparent";
  const centerClass = tone === "light" ? "border-gold-300/55" : "border-gold-300/70";

  return (
    <div aria-hidden="true" className="py-2">
      <Container>
        <div className="mx-auto flex max-w-md items-center gap-4">
          <span className={`h-px flex-1 ${lineClass}`} />
          <span className={`relative h-3 w-3 rotate-45 border ${centerClass}`}>
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gold-300/70" />
          </span>
          <span className={`h-px flex-1 ${lineClass}`} />
        </div>
      </Container>
    </div>
  );
}
