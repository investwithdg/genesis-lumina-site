import { TrendingUp, Cog, Brain, Users, DollarSign, Heart, Package, Compass } from "lucide-react";

export const engineFamilies = [
  { name: "Growth", icon: TrendingUp, examples: "Opportunity Discovery, Sales, Referral", desc: "Engines that create new demand and convert it." },
  { name: "Operations", icon: Cog, examples: "Client Delivery, Fulfillment, Support", desc: "Engines that transform commitments into delivered value." },
  { name: "Intelligence", icon: Brain, examples: "Knowledge, Decision Support, Telemetry", desc: "Engines that turn information into judgment." },
  { name: "People", icon: Users, examples: "Hiring, Onboarding, Development", desc: "Engines that build organizational capacity." },
  { name: "Financial", icon: DollarSign, examples: "Cash, Margin, Capital Allocation", desc: "Engines that convert value into capital and back." },
  { name: "Customer", icon: Heart, examples: "Retention, Expansion, Success", desc: "Engines that compound the lifetime of every relationship." },
  { name: "Product", icon: Package, examples: "Discovery, Delivery, Iteration", desc: "Engines that translate insight into shippable capability." },
  { name: "Leadership", icon: Compass, examples: "Strategy, Alignment, Governance", desc: "Engines that decide what should be multiplied." },
];

interface EngineFamiliesGridProps {
  dark?: boolean;
}

const EngineFamiliesGrid = ({ dark = false }: EngineFamiliesGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {engineFamilies.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.name}
            className={`p-5 rounded-xl border transition-all ${dark ? "bg-white/5 border-white/10 hover:bg-white/10 text-white" : "bg-white border-foreground/10 hover:border-foreground/30"}`}
          >
            <Icon className={`w-6 h-6 mb-3 ${dark ? "text-white/70" : "text-primary"}`} />
            <div className="font-medium mb-1">{f.name}</div>
            <p className={`text-xs leading-relaxed mb-2 ${dark ? "text-white/60" : "text-foreground/60"}`}>{f.desc}</p>
            <p className={`text-xs italic ${dark ? "text-white/40" : "text-foreground/40"}`}>{f.examples}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EngineFamiliesGrid;
