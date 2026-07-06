const dimensions = [
  { name: "Reliability", desc: "Consistent output, no surprises." },
  { name: "Efficiency", desc: "Minimal wasted effort per unit of value." },
  { name: "Measurability", desc: "Observable, telemetered outputs." },
  { name: "Transferability", desc: "Does not depend on one person." },
  { name: "Adaptability", desc: "Improves without being rebuilt." },
];

interface EngineHealthBarProps {
  dark?: boolean;
}

const EngineHealthBar = ({ dark = false }: EngineHealthBarProps) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-5 gap-3 ${dark ? "text-white" : ""}`}>
      {dimensions.map((d, i) => (
        <div
          key={d.name}
          className={`edge-hover edge-green p-5 rounded-md border relative ${
            dark
              ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
              : "bg-white border-foreground/10 hover:border-foreground/25"
          }`}
        >
          <div className={`label-mono mb-3 ${dark ? "text-white/40" : "text-foreground/40"}`}>
            0{i + 1} / 05
          </div>
          <div className="font-display font-medium mb-2 tracking-tight">{d.name}</div>
          <p className={`text-xs leading-relaxed ${dark ? "text-white/55" : "text-foreground/55"}`}>
            {d.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EngineHealthBar;
