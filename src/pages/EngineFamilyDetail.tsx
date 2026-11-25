import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  getEngineFamilyBySlug,
  ALL_ENGINE_FAMILIES,
  EngineFamilyData,
} from "@/data/engineFamilies";
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Cog,
  Brain,
  Users,
  DollarSign,
  Heart,
  Package,
  Compass,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3,
  ExternalLink,
} from "lucide-react";

// Map string icon names to Lucide icon components
const ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Cog,
  Brain,
  Users,
  DollarSign,
  Heart,
  Package,
  Compass,
};

export default function EngineFamilyDetail() {
  const { familySlug } = useParams<{ familySlug: string }>();

  if (!familySlug) {
    return <Navigate to="/engines" replace />;
  }

  const family = getEngineFamilyBySlug(familySlug);

  if (!family) {
    return <Navigate to="/engines" replace />;
  }

  const IconComponent = ICONS[family.iconName] || Cog;

  // Determine prev and next family for carousel navigation
  const currentIndex = ALL_ENGINE_FAMILIES.findIndex((f) => f.slug === family.slug);
  const prevFamily =
    currentIndex > 0
      ? ALL_ENGINE_FAMILIES[currentIndex - 1]
      : ALL_ENGINE_FAMILIES[ALL_ENGINE_FAMILIES.length - 1];
  const nextFamily =
    currentIndex < ALL_ENGINE_FAMILIES.length - 1
      ? ALL_ENGINE_FAMILIES[currentIndex + 1]
      : ALL_ENGINE_FAMILIES[0];

  const scrollToInstall = () => {
    const el = document.getElementById("install-engines");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section — Dark with Telemetry / Supercar Motif */}
      <SectionDark className="pt-28 md:pt-36 pb-20" motif="chassis">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Engine Room navigation */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-8">
            <Button
              asChild
              variant="outline"
              className="min-h-[44px] gap-2 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/engines" aria-label="Back to the Engine Room">
                <ArrowLeft className="w-4 h-4" />
                Back to Engine Room
              </Link>
            </Button>
            <span className="text-xs font-mono text-ember font-semibold tracking-wider uppercase">
              Family {family.number} · {family.name}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-ember shadow-lg">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-white/50 uppercase block">
                  BPE Engine Family {family.number} of 08
                </span>
                <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                  {family.name}
                </h1>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 self-start md:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-ember" />
              Repeatable · Measurable · Transferable
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed mb-10 font-light">
            {family.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white !text-black hover:bg-white/90 gap-2 font-medium">
              <Link to="/strategy-session">
                Diagnose This Engine
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToInstall}
              className="border-white/20 text-white hover:bg-white/10 gap-2"
            >
              How We Install This Engine
              <Sliders className="w-4 h-4 text-ember" />
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* SECTION 1: THE MECHANISM & WHAT IT GOVERNS */}
      <SectionLight className="px-6 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                01 // THE MECHANISM
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 leading-snug">
                What the {family.name} Governs.
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                In Business Performance Engineering doctrine, an engine is not a software tool or an organizational chart box. It is a repeatable, closed-loop mechanism that turns raw operational inputs into predictable business outputs.
              </p>

              <div className="p-5 rounded-lg bg-foreground text-white">
                <div className="text-xs font-mono text-ember uppercase mb-2">
                  Governing Principle
                </div>
                <p className="text-xs text-white/80 leading-relaxed italic">
                  &ldquo;{family.governingThesis}&rdquo;
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-mono text-foreground/50 uppercase mb-3">
                Operational Scope &amp; Responsibilities
              </div>
              {family.whatItGoverns.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-lg border border-foreground/10 bg-neutral-50/50 hover:bg-white hover:border-foreground/20 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLight>

      {/* SECTION 2: WARNING SIGNS / WHERE THE HORSEPOWER BLEEDS */}
      <SectionLight className="px-6 md:px-8 py-20" muted>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-mono mb-3 uppercase tracking-wide">
              <AlertTriangle className="w-3.5 h-3.5" />
              02 // Warning Signs &amp; Drag Detection
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Where the Horsepower Bleeds.
            </h2>
            <p className="text-sm text-foreground/60 mt-2">
              How to identify if your organization's {family.name} is currently the primary constraint bounding company throughput.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {family.warningSigns.map((sign, idx) => (
              <Card
                key={idx}
                className="p-6 border border-foreground/15 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-700 font-semibold uppercase">
                      Warning Sign 0{idx + 1}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mt-0.5">
                      {sign.symptom}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed pl-11">
                  {sign.impact}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* SECTION 3: PROVEN SUB-ENGINES */}
      <SectionLight className="px-6 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
              03 // PROVEN SUB-ENGINES
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Production Engines in the {family.name}.
            </h2>
            <p className="text-sm text-foreground/60 max-w-2xl mt-2">
              These are not abstract frameworks. These are modular, engineered systems we architect and install directly into your daily operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {family.subEngines.map((sub, idx) => (
              <Card
                key={idx}
                className="p-6 flex flex-col justify-between border border-foreground/15 bg-white shadow-sm hover:border-foreground/30 transition-all"
              >
                <div>
                  <div className="text-xs font-mono text-ember font-semibold uppercase mb-1">
                    ENGINE 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 leading-snug">
                    {sub.name}
                  </h3>
                  <div className="text-xs font-mono text-foreground/50 mb-4">
                    {sub.tagline}
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {sub.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-foreground/10 space-y-2">
                  <div className="text-[11px] font-mono text-foreground/50">
                    <strong className="text-foreground">Mechanism:</strong> {sub.mechanism}
                  </div>
                  <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200/60 text-xs font-mono text-emerald-800">
                    <strong>Measured ROI:</strong> {sub.impactMetric}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* SECTION 4: 5 DIMENSIONS OF HEALTH */}
      <SectionLight className="px-6 md:px-8 py-20" muted>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
              04 // THE TELEMETRY SCORECARD
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              The 5 Dimensions of {family.name} Health.
            </h2>
            <p className="text-sm text-foreground/60 max-w-2xl mt-2">
              Every engine we touch is evaluated across five objective axes. Here is what healthy (5/5) versus impaired (1/5) looks like in this family:
            </p>
          </div>

          <div className="space-y-4">
            {family.dimensions.map((dim) => (
              <Card key={dim.dimension} className="p-5 md:p-6 border border-foreground/15 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground" />
                    <h3 className="text-base font-semibold text-foreground">{dim.dimension}</h3>
                  </div>
                  <span className="text-xs font-mono text-foreground/50 italic">
                    &ldquo;{dim.question}&rdquo;
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-3 pt-3 border-t border-foreground/10 text-xs">
                  <div className="p-3 rounded bg-emerald-50/70 border border-emerald-200/60 text-emerald-900">
                    <span className="font-mono font-bold block mb-1 uppercase text-[10px] text-emerald-800">
                      ✓ Engineered / Healthy Read (Score 4–5):
                    </span>
                    {dim.healthyRead}
                  </div>
                  <div className="p-3 rounded bg-red-50/70 border border-red-200/60 text-red-900">
                    <span className="font-mono font-bold block mb-1 uppercase text-[10px] text-red-800">
                      ✗ Impaired / Reactive Read (Score 1–2):
                    </span>
                    {dim.impairedRead}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* SECTION 5: CASE STUDY IN PRODUCTION (IF APPLICABLE) */}
      {family.caseStudy && (
        <SectionLight className="px-6 md:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-foreground/20 bg-foreground text-white relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                  CASE STUDY IN PRODUCTION · {family.caseStudy.client}
                </span>
                <h3 className="text-3xl md:text-4xl font-light mb-4">
                  {family.caseStudy.headline}
                </h3>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  {family.caseStudy.description}
                </p>
                <Button asChild size="lg" className="bg-white !text-black hover:bg-white/90 gap-2">
                  <Link to={`/case-studies/${family.caseStudy.slug}`}>
                    Read Full Technical Installation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </SectionLight>
      )}

      {/* SECTION 6: HOW WE INSTALL & ENGINEER THIS ENGINE (THE UPSELL FUNNEL) */}
      <section id="install-engines" className="px-6 md:px-8 py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
              05 // HOW TO INSTALL OR TUNE THIS ENGINE
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              The Engineering Ladder.
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Whether you need a 45-minute diagnostic read or a complete 4-week bespoke engine build, every rung serves a specific stage of engine maturity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* TIER 0: STRATEGY SESSION */}
            <Card className="p-6 bg-white/[0.04] border border-white/10 flex flex-col justify-between text-white hover:bg-white/[0.08] transition-all">
              <div>
                <span className="text-[11px] font-mono text-ember uppercase tracking-wider block mb-1">
                  TIER 0 · THE DIAGNOSTIC
                </span>
                <h3 className="text-xl font-medium mb-1">Strategy Session</h3>
                <div className="text-2xl font-light font-mono text-white mb-4">No Fee</div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  A 45-minute working diagnostic session with Donovan Green. We isolate whether your {family.name} is the primary constraint bounding your growth.
                </p>
              </div>
              <Button asChild className="w-full bg-white !text-black hover:bg-white/90 gap-1.5 text-xs font-mono">
                <Link to="/strategy-session">
                  Reserve Strategy Session
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </Card>

            {/* TIER 1: LUMINA COMPASS SPRINT */}
            <Card className="p-6 bg-white/[0.07] border-2 border-ember flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-ember text-black text-[9px] font-mono font-bold px-2.5 py-0.5 uppercase tracking-wider">
                MOST POPULAR
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  TIER 2 · 4-WEEK SPRINT
                </span>
                <h3 className="text-xl font-medium mb-1">Lumina Compass</h3>
                <div className="text-2xl font-light font-mono text-white mb-4">$15K – $25K</div>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  We engineer, build, deploy, and transfer complete team ownership of one production-grade {family.name} directly into your business over 4 weeks.
                </p>
              </div>
              <Button asChild className="w-full bg-ember text-black hover:bg-ember/90 font-semibold gap-1.5 text-xs font-mono">
                <Link to="/compass">
                  Explore Lumina Compass
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </Card>

            {/* TIER 2: LUMINA IGNITE RETAINER */}
            <Card className="p-6 bg-white/[0.04] border border-white/10 flex flex-col justify-between text-white hover:bg-white/[0.08] transition-all">
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  TIER 3 · ONGOING PARTNER
                </span>
                <h3 className="text-xl font-medium mb-1">Lumina Ignite</h3>
                <div className="text-2xl font-light font-mono text-white mb-4">$3.5K – $25K/mo</div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Fractional Chief Systems Architect. Every 30 days, we architect and tune an operational engine to protect margins and unlock capacity.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 gap-1.5 text-xs font-mono">
                <Link to="/ignite">
                  Explore Lumina Ignite
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </Card>
          </div>

          {/* Self-serve audit option */}
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-white/50 uppercase">
                Want to self-assess immediately without scheduling?
              </div>
              <div className="text-sm font-medium text-white">
                Run the 50-Question Asynchronous Engine Readiness Audit ($297)
              </div>
            </div>
            <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 shrink-0">
              <Link to="/audit">Run Instant Engine Audit →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: NEXT & PREVIOUS ENGINE FAMILY NAVIGATION */}
      <section className="px-6 md:px-8 py-12 bg-white border-t border-foreground/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center sm:hidden">
            <Button asChild variant="outline" className="min-h-[44px] gap-2">
              <Link to="/engines">
                <ArrowLeft className="w-4 h-4" />
                Back to Engine Room
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Link
              to={`/engines/${prevFamily.slug}`}
              className="flex items-center gap-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center group-hover:border-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-foreground/40 uppercase block">Previous Family</span>
                <span>{prevFamily.name}</span>
              </div>
            </Link>

            <Link
              to="/engines"
              className="hidden sm:inline-flex min-h-[44px] items-center text-xs font-mono text-foreground/50 hover:text-foreground uppercase tracking-wider"
            >
              Back to Engine Room
            </Link>

            <Link
              to={`/engines/${nextFamily.slug}`}
              className="flex items-center gap-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group text-right"
            >
              <div>
                <span className="text-[10px] font-mono text-foreground/40 uppercase block">Next Family</span>
                <span>{nextFamily.name}</span>
              </div>
              <div className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center group-hover:border-foreground transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
