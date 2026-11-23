import { Link } from "react-router-dom";
import {
  TrendingUp,
  Cog,
  Brain,
  Users,
  DollarSign,
  Heart,
  Package,
  Compass,
  ArrowRight,
} from "lucide-react";

export const engineFamilies = [
  { slug: "growth", name: "Growth", icon: TrendingUp, examples: "Opportunity Discovery, Sales, Referral", desc: "Engines that create new demand and convert it.", edge: "edge-green" },
  { slug: "operations", name: "Operations", icon: Cog, examples: "Client Delivery, Fulfillment, Support", desc: "Engines that transform commitments into delivered value.", edge: "edge-blue" },
  { slug: "intelligence", name: "Intelligence", icon: Brain, examples: "Knowledge, Decision Support, Telemetry", desc: "Engines that turn information into judgment.", edge: "edge-hover" },
  { slug: "people", name: "People", icon: Users, examples: "Hiring, Onboarding, Development", desc: "Engines that build organizational capacity.", edge: "edge-cream" },
  { slug: "financial", name: "Financial", icon: DollarSign, examples: "Cash, Margin, Capital Allocation", desc: "Engines that convert value into capital and back.", edge: "edge-green" },
  { slug: "customer", name: "Customer", icon: Heart, examples: "Retention, Expansion, Success", desc: "Engines that compound the lifetime of every relationship.", edge: "edge-blue" },
  { slug: "product", name: "Product", icon: Package, examples: "Discovery, Delivery, Iteration", desc: "Engines that translate insight into shippable capability.", edge: "edge-hover" },
  { slug: "leadership", name: "Leadership", icon: Compass, examples: "Strategy, Alignment, Governance", desc: "Engines that decide what should be multiplied.", edge: "edge-cream" },
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
          <Link
            key={f.name}
            to={`/engines/${f.slug}`}
            className={`edge-hover ${f.edge} group p-5 rounded-md border relative transition-all block ${
              dark
                ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/30 text-white"
                : "bg-white border-foreground/10 hover:border-foreground/30 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${dark ? "text-white/70" : "text-primary"}`} />
              <span className={`label-mono ${dark ? "text-white/35" : "text-foreground/35"}`}>
                0{i + 1}
              </span>
            </div>
            <div className="font-display font-medium mb-1.5 tracking-tight group-hover:text-ember transition-colors">
              {f.name}
            </div>
            <p className={`text-xs leading-relaxed mb-2 ${dark ? "text-white/55" : "text-foreground/55"}`}>
              {f.desc}
            </p>
            <p className={`text-[11px] font-mono mb-2 ${dark ? "text-white/35" : "text-foreground/35"}`}>
              {f.examples}
            </p>

            <div className={`flex items-center gap-1 text-[11px] font-mono transition-opacity ${
              dark ? "text-white/40 group-hover:text-ember" : "text-foreground/40 group-hover:text-foreground"
            }`}>
              <span>Inspect family</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EngineFamiliesGrid;
