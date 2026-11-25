import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  ArrowRight,
  Flame,
  Sprout,
  CheckCircle2,
  Layers,
  FileText,
  BarChart3,
  ShieldCheck,
  Zap,
  Crown,
  Clock,
  TrendingUp,
  Cpu,
  Compass,
  AlertCircle,
} from "lucide-react";

const tiers = [
  {
    name: "Spark",
    price: "$3,500 / mo",
    tag: "The 90-Day Transitional Sprint",
    highlight: false,
    desc: "For emerging operators ($500k–$3M) with operational 911s or founder delivery drag. A focused 90-day sprint: we map your Engine Tree, ship 1 core Systems Build Specification every month, deploy your Telemetry Cockpit, and run monthly executive steering.",
    deliverables: [
      "Asset 1: Master Engine Tree (Visual Schematic + PDF)",
      "Asset 2: 1 Monthly Systems Specification (3–5 page technical build order)",
      "Asset 3: Operational Telemetry Cockpit (Throughput & bottleneck tracking)",
      "Asset 4: Executive Steering (One 60-min strategic session/mo)",
      "Asset 5: Async Systems Advisory & tool vetting (Slack/Email)",
      "Outcome: Solves operational 911s & decouples founder from initial 10–15 hrs/wk drag",
    ],
  },
  {
    name: "Ember",
    price: "$7,500 / mo",
    tag: "Foundation & Single Engine Track",
    highlight: false,
    desc: "For operators ($1M–$5M) ready to eliminate founder bottlenecks and install operational discipline. We map your Engine Tree, deliver 1 production-ready Systems Specification every month, and run bi-weekly executive steering.",
    deliverables: [
      "Asset 1: Master Engine Tree (Visual Schematic + PDF)",
      "Asset 2: 1 Monthly Systems Specification (3–5 page technical build order)",
      "Asset 3: Operational Telemetry Cockpit (5-dimension audit & margin review)",
      "Asset 4: Executive Steering (Two 45-min strategic sessions/mo)",
      "Asset 5: Async Architecture Gatekeeping & tool vetting (Slack/Notion)",
      "Outcome: Systematically decouples founder from 15–25 hrs/wk of delivery drag",
    ],
  },
  {
    name: "Blaze",
    price: "$15,000 / mo",
    tag: "Multi-Engine Velocity & Team Governance",
    highlight: true,
    desc: "For scaling operators ($5M–$20M) managing multi-department handoffs. We actively steer multiple engine tracks concurrently, vet all internal tool/code implementations before production, and hold leadership leads accountable to telemetry.",
    deliverables: [
      "Asset 1: Multi-Department Engine Tree & Systems Network",
      "Asset 2: Up to 2 Monthly Systems Specifications (Full technical work orders)",
      "Asset 3: Real-Time Telemetry Cockpit & margin-leak anomaly alerts",
      "Asset 4: Leadership Steering & Implementation Dyno Testing (Two 45-min sessions)",
      "Asset 5: Vendor & Software Purchase Vetting (Zero tool sprawl)",
      "Outcome: Synchronizes sales, ops & delivery without adding C-suite payroll",
    ],
  },
  {
    name: "Phoenix",
    price: "$25,000 / mo",
    tag: "Full-Network Architecture & S³ Track",
    highlight: false,
    desc: "For institutional organizations ($15M–$50M+) preparing for scale, acquisition, or founder succession. Full-network engine governance, weekly executive cadence, and comprehensive institutional intelligence transfer to multiply enterprise valuation.",
    deliverables: [
      "Asset 1: Full-Network Continuous Systems Architecture & Living Tree",
      "Asset 2: Weekly Strategic Executive Steering with CEO / Board",
      "Asset 3: Complete Oversight of Internal Tech Leads & External Contractors",
      "Asset 4: Quarterly S³ Diligence Scorecard & Data Room Readiness",
      "Asset 5: Direct Architectural Sign-Off on Infrastructure Capital Allocation",
      "Outcome: Prepares business for institutional scale or 6x–8x EBITDA sale",
    ],
  },
];

const currencies = [
  {
    title: "1. Time",
    subtitle: "Automation & Operational Efficiency",
    desc: "Eliminates 15–25 hours per week of manual data re-entry, administrative chasing, and human copy-pasting across tools.",
    icon: Clock,
  },
  {
    title: "2. Money",
    subtitle: "Direct Margin & Revenue Recovery",
    desc: "Stops dropped pipeline, accelerates speed-to-lead under 60 seconds, and isolates hidden margin leaks in fulfillment.",
    icon: TrendingUp,
  },
  {
    title: "3. Certainty",
    subtitle: "Unvarnished Telemetry & Truth",
    desc: "A single monthly cockpit showing true engine health, throughput velocity, and error rates — free from internal departmental spin.",
    icon: BarChart3,
  },
  {
    title: "4. Simplicity",
    subtitle: "Turnkey Blueprints, Zero Guesswork",
    desc: "We deliver exact architectural specifications. Your existing team or low-cost builders execute in days without months of wasted meetings.",
    icon: Cpu,
  },
  {
    title: "5. Growth",
    subtitle: "Scalable Throughput Architecture",
    desc: "Engines engineered to absorb 2x–5x client volume without proportionally bloating headcount or overhead payroll.",
    icon: Zap,
  },
  {
    title: "6. Peace",
    subtitle: "Founder Decoupling & Governance",
    desc: "Data security, operational fail-safes, and institutional documentation so the business thrives even when key leaders step away.",
    icon: ShieldCheck,
  },
];

const Ignite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <SectionDark className="min-h-[65vh] flex items-center" motif="supercar-rear">
        <div className="px-6 md:px-8 py-28 md:py-36 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.25em] font-semibold text-orange-400 mb-6 label-mono uppercase">
            FOR LEADERSHIP · THE ARCHITECTURAL RETAINER
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6">
            Lumina <span className="font-medium">Ignite.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl leading-relaxed mb-6 font-light">
            Your dedicated Systems Architecture & Operations Partner.
          </p>
          <p className="text-sm md:text-base text-white/60 max-w-3xl leading-relaxed mb-10">
            We don't sell hourly developer tickets, and we don't hand you academic homework. We act as your external Chief Systems Architect — inspecting your operational telemetry, engineering exact technical specifications for your team to execute, and systematically decoupling the founder from daily delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 font-medium">
              <Link to="/strategy-session" className="gap-2">
                Qualify for Ignite via Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <p className="text-xs text-white/50 font-mono">
              $3.5K – $25K / month · Zero code overhead · Pure architectural leverage
            </p>
          </div>
        </div>
      </SectionDark>

      {/* The Architect vs. The Carpenter */}
      <SectionLight className="px-6 md:px-8 py-20 bg-neutral-50 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-white border-2 border-foreground/15 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-orange-600 label-mono mb-3">
              <AlertCircle className="w-4 h-4" /> THE ARCHITECTURAL REALITY
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              Why pay an elite systems architect to click buttons in Zapier?
            </h2>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
              When an AI agency or consultant charges you a monthly retainer to do "custom builds," you are paying C-suite rates for $30/hour button-clicking. You get trapped in webhook bugs, API maintenance, and endless scope creep.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-foreground/10 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-foreground">The Carpenter (The Builder):</p>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                  Pours concrete, runs wiring, and bolts parts together. They need constant management, cost hourly wages, and don't know if the overall building will stand under scale.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">The Architect (Genesis Lumina):</p>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                  Calculates structural load, designs the blueprints, specifies the data logic, and stress-tests the foundation. Your existing team or low-cost builders execute against our exact specifications with zero guesswork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* The 4 Core Monthly Deliverables */}
      <SectionLight className="px-6 md:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 label-mono mb-2 block">
              TANGIBLE MONTHLY ASSETS
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              What You Actually Receive <span className="font-medium">Every 30 Days</span>
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto mt-3">
              Four concrete, executive deliverables that keep your operations running on engineered rails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Deliverable 1 */}
            <div className="p-8 rounded-2xl border-2 border-foreground/10 bg-white hover:border-foreground/30 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                  <Sprout className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
                  DELIVERABLE 01 · LIVING ARCHITECTURE
                </span>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  The Master Engine Tree Schematic
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-foreground/10 text-xs">
                    <span className="font-semibold text-foreground uppercase tracking-wider label-mono block mb-1">
                      Tangible Asset Shipped:
                    </span>
                    <span className="text-foreground/75 leading-relaxed">
                      Visual systems schematic (interactive Notion/Whimsical + PDF) mapping all 8 engine families, handoff latency friction points, and founder-dependency scores (1–10).
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs">
                    <span className="font-semibold text-emerald-900 uppercase tracking-wider label-mono block mb-1">
                      Measurable Business Outcome:
                    </span>
                    <span className="text-emerald-800/85 leading-relaxed">
                      Complete single-screen operational visibility. Eliminates organizational blindspots and pinpoints the exact operational bottleneck choking company throughput.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-foreground/10 text-xs text-foreground/50 font-mono">
                Updated monthly · Single source of operational truth
              </div>
            </div>

            {/* Deliverable 2 */}
            <div className="p-8 rounded-2xl border-2 border-foreground/10 bg-white hover:border-foreground/30 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center mb-5 border border-orange-200">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-800 block mb-1">
                  DELIVERABLE 02 · TECHNICAL WORK ORDER
                </span>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  The Monthly Systems Specification ("The Build Spec")
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-foreground/10 text-xs">
                    <span className="font-semibold text-foreground uppercase tracking-wider label-mono block mb-1">
                      Tangible Asset Shipped:
                    </span>
                    <span className="text-foreground/75 leading-relaxed">
                      A structured 3–5 page technical work order detailing exact logic trees, data schemas, API/tool triggers, and acceptance testing checklists for your chosen monthly engine.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs">
                    <span className="font-semibold text-orange-950 uppercase tracking-wider label-mono block mb-1">
                      Measurable Business Outcome:
                    </span>
                    <span className="text-orange-900/85 leading-relaxed">
                      Handed directly to internal staff or low-cost contractors. Your team builds the right system in days instead of wasting 3–6 months on trial-and-error and broken SaaS tools.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-foreground/10 text-xs text-foreground/50 font-mono">
                Shipped every 30 days · Zero developer trial-and-error
              </div>
            </div>

            {/* Deliverable 3 */}
            <div className="p-8 rounded-2xl border-2 border-foreground/10 bg-white hover:border-foreground/30 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-200">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-800 block mb-1">
                  DELIVERABLE 03 · OPERATIONAL AUDIT
                </span>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  The Operational Telemetry Cockpit
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-foreground/10 text-xs">
                    <span className="font-semibold text-foreground uppercase tracking-wider label-mono block mb-1">
                      Tangible Asset Shipped:
                    </span>
                    <span className="text-foreground/75 leading-relaxed">
                      Monthly executive scorecard auditing your operating performance across the 5 universal BPE dimensions (Reliability, Efficiency, Measurability, Transferability, and Adaptability).
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs">
                    <span className="font-semibold text-blue-950 uppercase tracking-wider label-mono block mb-1">
                      Measurable Business Outcome:
                    </span>
                    <span className="text-blue-900/85 leading-relaxed">
                      Hard operational numbers and dollar margin-leak estimates. Replaces manager opinions with unvarnished telemetry to stop revenue bleed and track throughput velocity.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-foreground/10 text-xs text-foreground/50 font-mono">
                Delivered monthly · Hard operational telemetry
              </div>
            </div>

            {/* Deliverable 4 */}
            <div className="p-8 rounded-2xl border-2 border-foreground/10 bg-white hover:border-foreground/30 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-800 block mb-1">
                  DELIVERABLE 04 · EXECUTIVE OVERSIGHT
                </span>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Executive Steering & Quality Gatekeeping
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-foreground/10 text-xs">
                    <span className="font-semibold text-foreground uppercase tracking-wider label-mono block mb-1">
                      Tangible Asset Shipped:
                    </span>
                    <span className="text-foreground/75 leading-relaxed">
                      Two 45-minute structured steering sessions per month + written architectural approvals or rejections on all internal tool, software, and vendor purchases.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/80 text-xs">
                    <span className="font-semibold text-purple-950 uppercase tracking-wider label-mono block mb-1">
                      Measurable Business Outcome:
                    </span>
                    <span className="text-purple-900/85 leading-relaxed">
                      Prevents expensive tool sprawl, holds department leads accountable to numbers, and systematically buys back 15–25 hours/week of founder delivery time.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-foreground/10 text-xs text-foreground/50 font-mono">
                Two 45-min sessions/mo + continuous gatekeeping
              </div>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* The 6 Currencies (What You Actually Buy) */}
      <SectionDark className="px-6 md:px-8 py-24" motif="schematic">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 label-mono mb-2 block">
              OPERATIONAL ROI
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white">
              The Six Currencies of <span className="font-medium">Optimization</span>
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto mt-3">
              Every month of Ignite delivers measurable value across six core operational dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currencies.map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <c.icon className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-1">{c.title}</h3>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3">{c.subtitle}</p>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* The Three Tiers */}
      <SectionLight className="px-6 md:px-8 py-24" muted>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 label-mono mb-2 block">
              ENGAGEMENT TIERS
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Four Tiers. <span className="font-medium">One Progression.</span>
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto mt-3">
              Calibrated to your operating scale, complexity, and founder-decoupling velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                  t.highlight
                    ? "bg-white border-2 border-orange-500 shadow-lg relative"
                    : "bg-white border-foreground/15 shadow-sm"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-[10px] font-mono uppercase tracking-widest rounded-full font-semibold">
                    MOST POPULAR · MID-MARKET
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-medium text-foreground">{t.name}</span>
                    <Flame className={`w-6 h-6 ${t.highlight ? "text-orange-500" : "text-foreground/40"}`} />
                  </div>
                  <div className="text-3xl font-light text-foreground mb-1">{t.price}</div>
                  <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-4">{t.tag}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">{t.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-foreground/10 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 label-mono mb-2">
                      Included Deliverables:
                    </p>
                    {t.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className={`w-full py-5 text-sm font-medium ${
                    t.highlight
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  <Link to="/strategy-session">Inquire for {t.name} →</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white border border-foreground/15 max-w-3xl mx-auto text-center">
            <h4 className="text-lg font-medium text-foreground mb-2">
              Cost Comparison: Fractional Architecture vs. Full-Time C-Suite
            </h4>
            <p className="text-xs md:text-sm text-foreground/65 leading-relaxed">
              A full-time Chief Operating Officer or VP of Systems runs $275,000–$350,000/year plus equity and benefits. Lumina Ignite delivers dedicated enterprise architecture, monthly build specifications, and live operational steering for a fraction of that cost — with zero payroll overhead.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* Final CTA */}
      <SectionDark className="px-6 md:px-8 py-24" motif="supercar-front">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Grow the tree. <span className="font-medium">Harvest the compound.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            Most Ignite engagements begin after an initial 45-minute working diagnostic. We identify your primary constraining engine, score your readiness, and map your 90-day architecture plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 font-medium">
              <Link to="/strategy-session" className="gap-2">
                Reserve a Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/s3">See where Ignite leads → S³</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Ignite;
