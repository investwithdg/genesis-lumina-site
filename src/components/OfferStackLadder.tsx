import { Link } from "react-router-dom";
import { ArrowDown, Sprout } from "lucide-react";

interface Tier {
  band: string;
  title: string;
  price: string;
  tag: string;
  desc: string;
  outcome: string;
  href: string;
  edgeColor: string; // inline color for the left edge
}

const GREEN = "hsl(157 61% 40%)";
const BLUE = "hsl(233 100% 62%)";
const EMBER = "hsl(13 79% 57%)";
const CREAM = "hsl(39 45% 82%)";

const tiers: Tier[] = [
  {
    band: "ENTRY",
    title: "Strategy Session",
    price: "No fee · 45 min",
    tag: "CONFIRMATION-GATED DIAGNOSTIC",
    desc: "A working session, not a sales call. We walk through your business as a set of engines, assess health across 5 dimensions, and identify the weakest critical engine. No payment — the slot is confirmed by completing a short doctrine video + intake within 24 hours of booking.",
    outcome: "Engine health snapshot + weakest engine identified + a specific next step",
    href: "/strategy-session",
    edgeColor: GREEN,
  },
  {
    band: "ENTRY",
    title: "Field Guides",
    price: "$47 – $297",
    tag: "SELF-SERVE",
    desc: "Structured frameworks for identifying and diagnosing your own engine performance gaps. The doctrine in your hands — engine families, health criteria, force multiplier principles.",
    outcome: "Foundational BPE literacy + self-assessment capability",
    href: "/field-guides",
    edgeColor: CREAM,
  },
  {
    band: "ENGAGEMENTS",
    title: "Lumina Labs",
    price: "$7,500 – $15,000",
    tag: "FOR TEAMS · WORKSHOP",
    desc: "Your leadership team learns to see, diagnose, and govern their business engines. Not AI training — engine performance literacy. They leave understanding why their business performs the way it does and what levers actually move it.",
    outcome: "Team-wide engine literacy + governance framework + first engine diagnosis completed in-room",
    href: "/labs",
    edgeColor: GREEN,
  },
  {
    band: "ENGAGEMENTS",
    title: "Lumina Compass",
    price: "Starting at $35,000",
    tag: "FOR BUSINESS · THE SPRINT",
    desc: "The 4-week engine engagement. Three modes: Build (you don't have the engine), Optimize (you have one that needs to perform better), Supercharge (strong engine, needs tuning + red-line testing).",
    outcome: "Engineered business capability — built, optimized, or supercharged — that your team owns, governs, and extends",
    href: "/compass",
    edgeColor: BLUE,
  },
  {
    band: "ONGOING",
    title: "Lumina Ignite",
    price: "$7.5K – $25K / mo",
    tag: "EMBER → BLAZE → PHOENIX",
    desc: "Your ongoing engine development partner. Every month is driven by your Engine Tree — the living map of your engine architecture, health scores, and engineering roadmap. We don't just advise. We build, measure, and govern alongside you.",
    outcome: "Continuous engine development + measurable performance gains + institutional intelligence that compounds monthly",
    href: "/ignite",
    edgeColor: EMBER,
  },
  {
    band: "TRANSFORMATION",
    title: "S³ Transformation",
    price: "$150K – $500K",
    tag: "SCALE · SALE · SUCCESSION",
    desc: "The culmination of BPE. Three singular yet connected results: engineer your business to scale without you, become acquirable on your terms, and transfer institutional intelligence to the next generation of leadership. This is what engine performance engineering was built for.",
    outcome: "A business that performs independently of its founder — scalable, sellable, succession-ready",
    href: "/s3",
    edgeColor: `linear-gradient(180deg, ${GREEN}, ${BLUE})`,
  },
];

interface OfferStackLadderProps {
  dark?: boolean;
}

const OfferStackLadder = ({ dark = true }: OfferStackLadderProps) => {
  const cardBase = dark
    ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] text-white"
    : "bg-white border-foreground/10 hover:border-foreground/25";
  const priceCls = dark ? "text-white/70" : "text-foreground/70";
  const descCls = dark ? "text-white/65" : "text-foreground/65";
  const outcomeCls = dark ? "text-white/55" : "text-foreground/55";
  const bandCls = dark ? "text-white/40" : "text-foreground/40";
  const dividerCls = dark ? "border-white/10" : "border-foreground/10";
  const arrowCls = dark ? "text-white/25" : "text-foreground/25";

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {tiers.map((t, i) => {
        const prev = tiers[i - 1];
        const showBand = !prev || prev.band !== t.band;
        return (
          <div key={t.title}>
            {showBand && (
              <div className="pt-4">
                <div className={`label-mono ${bandCls} mb-3`}>{t.band}</div>
              </div>
            )}
            <Link
              to={t.href}
              className={`group block relative border rounded-md p-6 md:p-8 transition-all overflow-hidden ${cardBase}`}
            >
              {/* Left edge — tier color */}
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: t.edgeColor }}
              />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {t.title}
                </h3>
                <div className={`font-mono text-base md:text-lg ${priceCls}`}>{t.price}</div>
              </div>
              <div className={`label-mono ${bandCls} mb-4`}>{t.tag}</div>
              <p className={`leading-relaxed mb-5 ${descCls}`}>{t.desc}</p>
              <div className={`pt-4 border-t ${dividerCls} text-sm`}>
                <span className="label-mono mr-2" style={{ color: "hsl(var(--ember))" }}>
                  OUTCOME
                </span>
                <span className={outcomeCls}>{t.outcome}</span>
              </div>
            </Link>
            {i < tiers.length - 1 && tiers[i + 1].band !== t.band && (
              <div className="flex justify-center py-3">
                <ArrowDown className={`w-4 h-4 ${arrowCls}`} />
              </div>
            )}
          </div>
        );
      })}

      <div
        className={`mt-10 p-6 rounded-md border border-dashed text-center ${
          dark ? "border-white/20 bg-white/[0.02]" : "border-foreground/20 bg-cream/40"
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sprout className="w-5 h-5" style={{ color: GREEN }} />
          <span className="font-display font-medium">The Engine Thread</span>
        </div>
        <p className={`text-sm ${descCls}`}>
          Strategy Session plants the seed · Compass and Labs reference it · Ignite grows and governs it · S³ harvests the compound result
        </p>
      </div>
    </div>
  );
};

export default OfferStackLadder;
