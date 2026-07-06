import { Link } from "react-router-dom";
import { ArrowDown, Sprout } from "lucide-react";

interface Tier {
  band: string;
  title: string;
  price: string;
  tag: string;
  tagClass: string;
  desc: string;
  outcome: string;
  href: string;
  accent: string;
}

const tiers: Tier[] = [
  {
    band: "ENTRY",
    title: "PEAR",
    price: "Free · 30 min",
    tag: "PERFORMANCE ENGINEERING ANALYSIS & ROADMAP",
    tagClass: "bg-emerald-100 text-emerald-800",
    desc: "Live diagnostic call. We identify your critical engines, assess health across 5 dimensions, and map the highest-leverage constraint. You leave with a clear read on where performance is leaking and what to engineer first.",
    outcome: "Engine health snapshot + prioritized constraint map + recommended next step",
    href: "/pear",
    accent: "border-l-emerald-500",
  },
  {
    band: "ENTRY",
    title: "Field Guides",
    price: "$47 – $297",
    tag: "SELF-SERVE",
    tagClass: "bg-blue-100 text-blue-800",
    desc: "Structured frameworks for identifying and diagnosing your own engine performance gaps. The doctrine in your hands — engine families, health criteria, force multiplier principles.",
    outcome: "Foundational BPE literacy + self-assessment capability",
    href: "/field-guides",
    accent: "border-l-emerald-400",
  },
  {
    band: "ENGAGEMENTS",
    title: "Lumina Labs",
    price: "$7,500 – $15,000",
    tag: "FOR TEAMS · WORKSHOP",
    tagClass: "bg-amber-100 text-amber-800",
    desc: "Your leadership team learns to see, diagnose, and govern their business engines. Not AI training — engine performance literacy. They leave understanding why their business performs the way it does and what levers actually move it.",
    outcome: "Team-wide engine literacy + governance framework + first engine diagnosis completed in-room",
    href: "/labs",
    accent: "border-l-indigo-500",
  },
  {
    band: "ENGAGEMENTS",
    title: "Lumina Compass",
    price: "Starting at $35,000",
    tag: "FOR BUSINESS · THE SPRINT",
    tagClass: "bg-indigo-100 text-indigo-800",
    desc: "The 4-week engine engagement. Three modes: Build (you don't have the engine), Optimize (you have one that needs to perform better), Supercharge (strong engine, needs tuning + red-line testing).",
    outcome: "Engineered business capability — built, optimized, or supercharged — that your team owns, governs, and extends",
    href: "/compass",
    accent: "border-l-indigo-600",
  },
  {
    band: "ONGOING",
    title: "Lumina Ignite",
    price: "$7.5K – $25K / mo",
    tag: "EMBER → BLAZE → PHOENIX",
    tagClass: "bg-rose-100 text-rose-800",
    desc: "Your ongoing engine development partner. Every month is driven by your PEAR Tree — the living map of your engine architecture, health scores, and engineering roadmap. We don't just advise. We build, measure, and govern alongside you.",
    outcome: "Continuous engine development + measurable performance gains + institutional intelligence that compounds monthly",
    href: "/ignite",
    accent: "border-l-orange-500",
  },
  {
    band: "TRANSFORMATION",
    title: "S³ Transformation",
    price: "$150K – $500K",
    tag: "SCALE · SALE · SUCCESSION",
    tagClass: "bg-rose-100 text-rose-800",
    desc: "The culmination of BPE. Three singular yet connected results: engineer your business to scale without you, become acquirable on your terms, and transfer institutional intelligence to the next generation of leadership. This is what engine performance engineering was built for.",
    outcome: "A business that performs independently of its founder — scalable, sellable, succession-ready",
    href: "/s3",
    accent: "border-l-rose-600",
  },
];

const OfferStackLadder = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {tiers.map((t, i) => {
        const prev = tiers[i - 1];
        const showBand = !prev || prev.band !== t.band;
        return (
          <div key={t.title}>
            {showBand && (
              <div className="pt-4">
                <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">{t.band}</div>
              </div>
            )}
            <Link
              to={t.href}
              className={`block bg-white border border-foreground/10 border-l-4 ${t.accent} rounded-lg p-6 md:p-8 hover:shadow-md transition-all`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{t.title}</h3>
                <div className="text-lg md:text-xl text-foreground/70 font-light">{t.price}</div>
              </div>
              <span className={`inline-block text-xs font-semibold tracking-wide px-2.5 py-1 rounded ${t.tagClass} mb-4`}>
                {t.tag}
              </span>
              <p className="text-foreground/70 leading-relaxed mb-4">{t.desc}</p>
              <div className="pt-4 border-t border-foreground/10 text-sm">
                <span className="font-medium">Outcome: </span>
                <span className="text-foreground/60">{t.outcome}</span>
              </div>
            </Link>
            {i < tiers.length - 1 && tiers[i + 1].band !== t.band && (
              <div className="flex justify-center py-4">
                <ArrowDown className="w-5 h-5 text-foreground/30" />
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-10 p-6 rounded-xl border border-dashed border-foreground/20 bg-emerald-50/40 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sprout className="w-5 h-5 text-emerald-700" />
          <span className="font-semibold">The PEAR thread</span>
        </div>
        <p className="text-sm text-foreground/70">
          Free call plants the seed · Compass and Labs reference it · Ignite grows and governs it · S³ harvests the compound result
        </p>
      </div>
    </div>
  );
};

export default OfferStackLadder;
