import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const PST = () => {
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
            <p className="text-sm font-medium text-white/50 mb-4">Preferred Solutions Transport</p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              From Manual <span className="font-medium">to Machine.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              A logistics company drowning in manual coordination got a fully automated dispatch-to-invoice pipeline — built, tested, and deployed in a 72-hour final sprint.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Stats Bar - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-12" muted>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "$15,000", label: "Compass Engagement" },
              { value: "72 Hours", label: "Final Build Sprint" },
              { value: "100%", label: "Collected on Delivery" },
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
              PST coordinated freight logistics across multiple carriers, brokers, and dispatchers. Every load required manual data entry, phone calls, email threads, and spreadsheet tracking. Invoices were delayed, data was duplicated, and the team spent more time managing the process than running the business.
            </p>
            <p>
              They'd tried off-the-shelf TMS platforms. Too rigid. They'd hired a developer. Too slow. They needed someone who could understand their operational architecture and build infrastructure that fit — not force them into someone else's workflow.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* The Build Journey - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            The Build <span className="font-medium">Journey</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Four versions. Each one tighter than the last.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                version: "V1",
                title: "Proof of Concept",
                desc: "Basic automation connecting intake forms to a centralized database. Validated the workflow logic and confirmed the team could adopt a digital-first dispatch process."
              },
              {
                version: "V2",
                title: "Pipeline Architecture",
                desc: "Introduced the 7-stage pipeline model: Lead → Dispatch → Track → Deliver → Invoice → Collect → Close. Each stage became a discrete, automated checkpoint."
              },
              {
                version: "V3",
                title: "Webhook-Native Rebuild",
                desc: "Replaced polling and manual triggers with real-time webhooks. Every system event fired automatically — no human bottleneck between stages."
              },
              {
                version: "V4",
                title: "72-Hour Final Build",
                desc: "Complete production deployment. Stress-tested with live loads, edge cases, and team walkthroughs. Delivered with full documentation and Loom recordings."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-medium text-[hsl(var(--waypoint-integration))] mb-3">{item.version}</div>
                <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* The Solution - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            The <span className="font-medium">Solution</span>
          </h2>

          <h3 className="text-xl font-medium mb-6">7-Stage Automated Pipeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
            {["Lead", "Dispatch", "Track", "Deliver", "Invoice", "Collect", "Close"].map((stage, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-foreground/5 text-center text-sm font-medium">
                <div className="text-xs text-foreground/40 mb-1">{idx + 1}</div>
                {stage}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-medium mb-6">Tech Stack</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tool: "Airtable", role: "Central database and pipeline tracker" },
              { tool: "Make (Integromat)", role: "Webhook orchestration and automation engine" },
              { tool: "Notion", role: "SOPs, documentation, and team knowledge base" },
              { tool: "Loom", role: "Walkthrough recordings for team training" },
              { tool: "Webhooks", role: "Real-time event triggers across all stages" },
              { tool: "Custom Forms", role: "Intake and dispatch request capture" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-foreground/10">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">{item.tool}</span>
                  <span className="text-foreground/60"> — {item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* The Complication - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
            The <span className="font-medium">Complication</span>
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Mid-build, the client requested features outside the original scope — additional reporting dashboards, driver-facing portals, and CRM integrations. Each request was valid. None were urgent.
            </p>
            <p>
              We held the line. The Compass engagement is scoped to solve the #1 constraint. Adding complexity mid-sprint dilutes the build and delays the result. We documented every request, prioritized them for a future phase, and delivered the core system on time.
            </p>
            <p className="text-white/60 italic">
              Scope discipline is a feature, not a limitation.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Principles Proved - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Principles <span className="font-medium">Proved</span>
          </h2>
          <div className="space-y-4">
            {[
              "Orientation before execution — the discovery phase shaped every decision that followed.",
              "Scope discipline protects the build — saying 'not now' isn't saying 'no.'",
              "Webhook-native architecture eliminates human bottlenecks between stages.",
              "Ownership transfer is the product — PST runs this system without us.",
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white border border-foreground/10">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* CTA - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Your system is <span className="font-medium">next</span>.
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Compass builds the infrastructure your team owns. Start with an Assessment.
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

export default PST;
