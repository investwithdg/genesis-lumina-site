const laws = [
  {
    n: "Law 1",
    title: "Potential exists before value.",
    body: "Value is not created — it is realized through transformation.",
  },
  {
    n: "Law 2",
    title: "Transformation becomes scalable through repeatable engines.",
    body: "Anything that must scale must first be engineered into a repeatable mechanism.",
  },
  {
    n: "Law 3",
    title: "The weakest critical engine constrains the business.",
    body: "Performance is bounded by the health of the critical engine performing worst.",
  },
  {
    n: "Law 4",
    title: "Every business runs on engines.",
    body: "Whether designed or accidental — the engines are already there. The question is whether you can see them.",
  },
];

interface LawsGridProps {
  dark?: boolean;
}

const LawsGrid = ({ dark = false }: LawsGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {laws.map((l) => (
        <div
          key={l.n}
          className={`p-6 rounded-xl border ${dark ? "bg-white/5 border-white/10 text-white" : "bg-white border-foreground/10"}`}
        >
          <div className={`text-xs font-semibold tracking-[0.15em] mb-3 ${dark ? "text-white/40" : "text-foreground/40"}`}>
            {l.n.toUpperCase()}
          </div>
          <h3 className="text-xl font-medium leading-snug mb-3">{l.title}</h3>
          <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-foreground/60"}`}>{l.body}</p>
        </div>
      ))}
    </div>
  );
};

export default LawsGrid;
