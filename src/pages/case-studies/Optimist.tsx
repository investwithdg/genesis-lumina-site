import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const Optimist = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero - DARK */}
      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              All Case Studies
            </Link>
            <p className="text-sm font-medium text-white/50 mb-4">Optimist Business Solutions</p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              From Bottleneck <span className="font-medium">to Breakthrough.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              A consulting firm's 2-week client intake process was rebuilt into a 1-day AI-powered system — eliminating 51% of manual steps.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Stats Bar - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-12" muted>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "$3,750", label: "Engagement" },
              { value: "51%", label: "Steps Eliminated" },
              { value: "2wk → 1 day", label: "Time to Intake" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-light">{stat.value}</div>
                <div className="text-sm text-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            The <span className="font-medium">Problem</span>
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Optimist Business Solutions ran a multi-step client intake process that touched emails, spreadsheets, phone calls, and manual data entry. Every new client took roughly two weeks to fully onboard — not because the work was complex, but because the process was fragmented.
            </p>
            <p>
              Steps were duplicated. Information was re-entered across platforms. The team spent more time managing the intake than actually serving the client. Growth was limited by how many people they could throw at the process.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* The Build - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            The <span className="font-medium">Build</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Mapped. Stripped. Rebuilt.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Process Mapping",
                desc: "We documented every step in the existing intake flow — every email, every form field, every handoff. We found 39 discrete steps."
              },
              {
                step: "02",
                title: "Constraint Analysis",
                desc: "We identified which steps were value-adding and which were artifacts of a broken process. 51% were redundant, duplicated, or automatable."
              },
              {
                step: "03",
                title: "AI-Powered Rebuild",
                desc: "We rebuilt the intake flow around an AI classification engine that auto-routes, pre-fills, and validates — reducing the process to 19 steps completed in a single day."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-medium text-[hsl(var(--waypoint-integration))] mb-3">{item.step}</div>
                <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Before / After - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">
            Before & <span className="font-medium">After</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-foreground/5 border border-foreground/10">
              <h3 className="text-lg font-medium mb-4 text-foreground/50">Before</h3>
              <ul className="space-y-3">
                {[
                  "39 process steps",
                  "~2 weeks per client intake",
                  "Manual data entry across 4 platforms",
                  "Email-based handoffs",
                  "No visibility into pipeline status",
                  "Growth limited by headcount",
                ].map((item, idx) => (
                  <li key={idx} className="text-foreground/70 text-sm flex items-start gap-2">
                    <span className="text-foreground/30 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl border-2 border-[hsl(var(--waypoint-integration))]">
              <h3 className="text-lg font-medium mb-4 text-[hsl(var(--waypoint-integration))]">After</h3>
              <ul className="space-y-3">
                {[
                  "19 process steps (51% reduction)",
                  "1 day per client intake",
                  "AI auto-routing and pre-fill",
                  "Automated notifications and handoffs",
                  "Real-time pipeline dashboard",
                  "Growth limited by demand, not process",
                ].map((item, idx) => (
                  <li key={idx} className="text-foreground/80 text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* Principles Proved - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
            Principles <span className="font-medium">Proved</span>
          </h2>
          <div className="space-y-4">
            {[
              "You don't need more tools — you need fewer steps.",
              "AI works best when applied to a mapped, understood process — not a messy one.",
              "Speed comes from elimination, not acceleration.",
              "The team now owns and extends the system without us.",
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <p className="text-white/80">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* CTA - LIGHT then DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Your process is <span className="font-medium">next</span>.
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Stop scaling broken workflows. Build infrastructure your team owns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/products/lumina-compass" className="gap-2">
                Explore Compass
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">Start with an Assessment</Link>
            </Button>
          </div>
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      <Footer dark />
    </div>
  );
};

export default Optimist;
