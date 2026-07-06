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
    <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 ${dark ? "text-white" : ""}`}>
      {dimensions.map((d, i) => (
        <div
          key={d.name}
          className={`p-5 rounded-xl border ${dark ? "bg-white/5 border-white/10" : "bg-white border-foreground/10"}`}
        >
          <div className={`text-xs mb-1 ${dark ? "text-white/40" : "text-foreground/40"}`}>0{i + 1}</div>
          <div className="font-medium mb-2">{d.name}</div>
          <p className={`text-xs leading-relaxed ${dark ? "text-white/60" : "text-foreground/60"}`}>{d.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default EngineHealthBar;
