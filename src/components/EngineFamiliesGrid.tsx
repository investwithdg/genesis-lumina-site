import { TrendingUp, Cog, Brain, Users, DollarSign, Heart, Package, Compass } from "lucide-react";

export const engineFamilies = [
  { name: "Growth", icon: TrendingUp, examples: "Opportunity Discovery, Sales, Referral", desc: "Engines that create new demand and convert it.", edge: "edge-green" },
  { name: "Operations", icon: Cog, examples: "Client Delivery, Fulfillment, Support", desc: "Engines that transform commitments into delivered value.", edge: "edge-blue" },
  { name: "Intelligence", icon: Brain, examples: "Knowledge, Decision Support, Telemetry", desc: "Engines that turn information into judgment.", edge: "edge-hover" },
  { name: "People", icon: Users, examples: "Hiring, Onboarding, Development", desc: "Engines that build organizational capacity.", edge: "edge-cream" },
  { name: "Financial", icon: DollarSign, examples: "Cash, Margin, Capital Allocation", desc: "Engines that convert value into capital and back.", edge: "edge-green" },
  { name: "Customer", icon: Heart, examples: "Retention, Expansion, Success", desc: "Engines that compound the lifetime of every relationship.", edge: "edge-blue" },
  { name: "Product", icon: Package, examples: "Discovery, Delivery, Iteration", desc: "Engines that translate insight into shippable capability.", edge: "edge-hover" },
  { name: "Leadership", icon: Compass, examples: "Strategy, Alignment, Governance", desc: "Engines that decide what should be multiplied.", edge: "edge-cream" },
];

interface EngineFamiliesGridProps {
  dark?: boolean;
}

const EngineFamiliesGrid = ({ dark = false }: EngineFamiliesGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {engineFamilies.map((f, i) => {
        const Icon = f.icon;
        return (
          <div
            key={f.name}
            className={`edge-hover ${f.edge} p-5 rounded-md border relative transition-all ${
              dark
                ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] text-white"
                : "bg-white border-foreground/10 hover:border-foreground/25"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className={`w-5 h-5 ${dark ? "text-white/70" : "text-primary"}`} />
              <span className={`label-mono ${dark ? "text-white/35" : "text-foreground/35"}`}>
                0{i + 1}
              </span>
            </div>
            <div className="font-display font-medium mb-1.5 tracking-tight">{f.name}</div>
            <p className={`text-xs leading-relaxed mb-2 ${dark ? "text-white/55" : "text-foreground/55"}`}>
              {f.desc}
            </p>
            <p className={`text-[11px] font-mono ${dark ? "text-white/35" : "text-foreground/35"}`}>
              {f.examples}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EngineFamiliesGrid;
