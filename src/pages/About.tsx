import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Linkedin, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[60vh] flex items-center" motif="supercar-side">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in text-center">
            <span className="inline-block text-xs tracking-[0.2em] font-semibold text-white/50 mb-6">
              BUSINESS PERFORMANCE ENGINEERING
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              About <span className="font-medium">Genesis Lumina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              We diagnose, engineer, and govern the business engines that determine organizational performance — turning unstructured operations into compounding infrastructure.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Founder Section - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Headshot */}
            <div className="md:col-span-5 flex flex-col items-center">
              <img
                src="/images/donovan-green-headshot.jpg"
                alt="Donovan Green, Founder of Genesis Lumina"
                className="w-64 h-64 md:w-full md:h-96 rounded-2xl object-cover object-top shadow-xl border border-foreground/10"
              />
              <div className="mt-6 flex flex-col items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/donovan-r-green"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors label-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/donovan-r-green
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <span className="text-xs text-foreground/50 label-mono">@investwithdg</span>
              </div>
            </div>

            {/* Bio & Track Record */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-ember" />
                <span className="label-mono text-xs text-foreground/50">FOUNDER & SYSTEMS ARCHITECT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-2">
                Donovan <span className="font-medium">Green</span>
              </h2>
              <p className="text-lg text-foreground/60 mb-6">
                AI Systems Architect · Real Estate Operator · Founder & Intrapreneur
              </p>
              
              <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  Donovan developed the practice of <strong>Business Performance Engineering (BPE)</strong> at Genesis Lumina, shifting organizations from ad-hoc tool adoption to disciplined engine governance. His work equips leaders with the literacy and operational systems required to own their intelligence rather than rent it from third-party vendors.
                </p>
                <p>
                  Operating at the intersection of technical architecture, physical asset management, and workflow automation, Donovan builds production systems that survive model shifts and vendor changes.
                </p>
              </div>

              {/* Proven Track Record Pillars */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Track Record & Focus</h3>
                
                <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                  <h4 className="font-medium text-foreground mb-1">Production Platform Deployment</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Delivered full custom platforms from architecture to live dispatch — including high-stakes 72-hour sprints completed on deadline and scope for Indianapolis logistics operators.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                  <h4 className="font-medium text-foreground mb-1">Operational Asset Stewardship</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Active real estate operator in Indianapolis: licensed agent, managing a 20+ unit portfolio, STR operations, and land development with infrastructure-first discipline.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                  <h4 className="font-medium text-foreground mb-1">Full-Stack & Security Engineering</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Certified Make.com builder across Claude, OpenAI, Gemini/Antigravity, open-source models, Supabase, Stripe, and custom APIs. Active hands-on research in enterprise attack boxes and penetration testing labs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SectionLight>

      {/* The BPE Standard - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="geometric">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="label-mono text-white/50 text-xs mb-3 block">01 — GOVERNING PHILOSOPHY</span>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Calculus over <span className="font-semibold">arithmetic.</span>
            </h2>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Most firms attempt to change operational behavior by adding more software. We engineer the operational environment that produces behavior naturally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Orientation Before Execution",
                desc: "We diagnose the entire engine network before prescribing a single tool or line of code."
              },
              {
                title: "Owned Infrastructure",
                desc: "We build systems your team owns, governs, and extends — eliminating vendor lock-in."
              },
              {
                title: "The Constraint Rule",
                desc: "Business performance is strictly bounded by your weakest critical engine. We solve the bottleneck, not the symptoms."
              },
              {
                title: "Measurable Telemetry",
                desc: "Every engine is scored across Reliability, Efficiency, Measurability, Transferability, and Adaptability."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/10 bg-white/5">
                <CheckCircle2 className="w-5 h-5 text-ember mb-3" />
                <h3 className="font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Case Studies Link */}
      <SectionLight className="px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4">See the engineering in <span className="font-medium">production</span></h3>
          <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
            Read how we re-architected manual dispatch into a machine for Preferred Solutions Transport and eliminated 51% of onboarding drag for Optimist.
          </p>
          <Button asChild variant="outline" className="gap-2 label-mono">
            <Link to="/case-studies">
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </SectionLight>

      {/* Technologies & Environments - LIGHT */}
      <SectionLight className="px-8 py-20 md:py-24" muted>
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-8 label-mono">
            Core Technical & Architectural Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Make.com (Advanced Certified)",
              "Claude / Anthropic",
              "OpenAI / GPT-4o",
              "Gemini / Antigravity",
              "Supabase / PostgreSQL",
              "Stripe Billing",
              "HubSpot",
              "TypeScript / React",
              "Lovable / Vite",
              "Custom Webhook Pipelines",
              "MCP (Model Context Protocol)",
              "PenTest Lab / Kali Security"
            ].map((tech, idx) => (
              <div key={idx} className="px-4 py-2 rounded-md bg-white border border-foreground/10 text-foreground/80 text-xs font-mono font-medium shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="schematic">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="label-mono text-ember text-xs mb-3 block font-semibold">NEXT STEP</span>
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white tracking-tight">
            Ready to find your <span className="font-semibold">weakest engine?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Reserve a 45-minute working Strategy Session. We walk through your eight engine families, locate the constraint, and map the engineering fix. No fee — access confirmed by a short pre-session intake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-white text-foreground hover:bg-white/90 rounded-md gap-2 label-mono">
              <Link to="/strategy-session">
                Reserve a Strategy Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-white/25 text-white bg-transparent hover:bg-white/10 rounded-md label-mono">
              <Link to="/approach">Read the Doctrine</Link>
            </Button>
          </div>

          <div className="mt-16">
            <NewsletterCTA dark compact />
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
