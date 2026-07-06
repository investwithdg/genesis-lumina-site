const laws = [
  {
    n: "01",
    title: "Potential exists before value.",
    body: "Value is not created — it is realized through transformation.",
    edge: "edge-green",
  },
  {
    n: "02",
    title: "Transformation becomes scalable through repeatable engines.",
    body: "Anything that must scale must first be engineered into a repeatable mechanism.",
    edge: "edge-blue",
  },
  {
    n: "03",
    title: "The weakest critical engine constrains the business.",
    body: "Performance is bounded by the health of the critical engine performing worst.",
    edge: "edge-hover",
  },
  {
    n: "04",
    title: "Every business runs on engines.",
    body: "Whether designed or accidental — the engines are already there. The question is whether you can see them.",
    edge: "edge-cream",
  },
];

interface LawsGridProps {
  dark?: boolean;
}

const LawsGrid = ({ dark = false }: LawsGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {laws.map((l) => (
        <div
          key={l.n}
          className={`edge-hover ${l.edge} p-6 md:p-7 rounded-md border relative ${
            dark
              ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] text-white"
              : "bg-white border-foreground/10 hover:border-foreground/25"
          }`}
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span className={`label-mono ${dark ? "text-white/40" : "text-foreground/40"}`}>LAW {l.n}</span>
            <span className={`h-px flex-1 ${dark ? "bg-white/10" : "bg-foreground/10"}`} />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-medium leading-snug mb-3 tracking-tight">
            {l.title}
          </h3>
          <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-foreground/60"}`}>
            {l.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LawsGrid;
