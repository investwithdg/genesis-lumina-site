import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Compass, Map, Wrench, Rocket, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const LuminaCompass = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">System Integration</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Compass</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              You don't have an automation problem. You have an infrastructure problem. Compass is the 4-week build that installs operational infrastructure your team owns, governs, and can extend — without ongoing dependency on us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/waypoints/system-integration">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Understand the System Integration Waypoint First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            You need infrastructure, <span className="font-medium">not just automation</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You've tested tools, watched demos, maybe even hired someone to build something. But built for you isn't the same as owned by you. You need someone to come in, map your operational architecture, and build systems your team can govern long after we're gone. That's Compass.
          </p>
        </div>
      </SectionLight>

      {/* The Solution / 4 Weeks - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            Your <span className="font-medium">Operational Sprint</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Discovery → Architecture → Build → Deploy</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                icon: Map,
                title: "Discovery",
                desc: "Full operational audit. We map every process, workflow, and decision point to identify where your business is leaking capacity and compounding friction."
              },
              {
                week: "Week 2",
                icon: Compass,
                title: "Architecture",
                desc: "Custom system design. We engineer the operational blueprint specific to your constraints, your team, and your highest-leverage bottleneck."
              },
              {
                week: "Week 3",
                icon: Wrench,
                title: "Build",
                desc: "Hands-on build. We construct and stress-test your operational systems, workflow integrations, and centralized business infrastructure — designed for your team to own and extend, not depend on us to maintain."
              },
              {
                week: "Week 4",
                icon: Rocket,
                title: "Deploy",
                desc: "Structured ownership transfer. Your team is trained, your documentation is complete, and your systems are live. You don't just have a system — you understand it, you can govern it, and you can extend it without calling us."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
                <div className="text-xs font-medium text-white/40 mb-3">{item.week}</div>
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* What You Get - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            The Defensive <span className="font-medium">Infrastructure Kit</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Every deliverable is functional, documented, and owned by your team
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Organizational Intelligence Map",
                desc: "Visual architecture of your workflows, decision layers, and constraint points — built to inform every system we touch."
              },
              {
                title: "The Governance Framework",
                desc: "The rules, roles, and review cadences your team needs to govern AI decisions without external dependency."
              },
              {
                title: "The Operating System",
                desc: "A fully operational system built around your #1 business constraint. Not a prototype. Not a proof of concept."
              },
              {
                title: "The Institutional Standards Library",
                desc: "Your central operating hub. SOPs, architecture diagrams, troubleshooting documentation, and team references — all in one place."
              },
              {
                title: "GL Intelligence Dashboard Baseline",
                desc: "Initial configuration of your proprietary dashboard — readiness metrics, system health, and governance scoring."
              },
              {
                title: "3–5 Loom Walkthroughs",
                desc: "Recorded operational walkthroughs so your team can operate, maintain, and iterate without you in the room."
              },
              {
                title: "60–90 Min Team Activation Session",
                desc: "Live deployment session with your full team. We don't just hand off — we make sure it sticks."
              },
              {
                title: "30-Day Continuity Protocol",
                desc: "Post-deployment support covering adjustments, questions, and refinements. Up to 3 hours included."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-foreground/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scarcity Indicator */}
          <div className="mt-12 p-4 rounded-xl bg-[hsl(var(--waypoint-integration))]/10 border border-[hsl(var(--waypoint-integration))]/30 text-center">
            <p className="text-foreground/80 font-medium">
              Limited to 3 Compass engagements per quarter to ensure quality delivery
            </p>
          </div>
        </div>
      </SectionLight>

      {/* Results in Practice - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            Results in <span className="font-medium">Practice</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Both of these were Compass engagements.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/case-studies/pst" className="group p-6 rounded-xl border-2 border-foreground/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <p className="text-sm text-foreground/50 mb-1">Preferred Solutions Transport</p>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[hsl(var(--waypoint-integration))] transition-colors">From Manual to Machine.</h3>
              <p className="text-sm text-foreground/60 mb-4">$15K engagement · 72-hour final build · 7-stage automated pipeline</p>
              <span className="text-sm font-medium flex items-center gap-1 text-foreground/50 group-hover:text-[hsl(var(--waypoint-integration))] transition-colors">
                Read Case Study <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link to="/case-studies/optimist" className="group p-6 rounded-xl border-2 border-foreground/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <p className="text-sm text-foreground/50 mb-1">Optimist Business Solutions</p>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[hsl(var(--waypoint-integration))] transition-colors">From Bottleneck to Breakthrough.</h3>
              <p className="text-sm text-foreground/60 mb-4">$3,750 engagement · 51% steps eliminated · 2 weeks → 1 day</p>
              <span className="text-sm font-medium flex items-center gap-1 text-foreground/50 group-hover:text-[hsl(var(--waypoint-integration))] transition-colors">
                Read Case Study <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </SectionLight>

      {/* Investment - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            The <span className="font-medium">Investment</span>
          </h2>
          
          <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-integration))] rounded-2xl glow-integration mb-8">
            <div className="text-5xl font-light mb-2">Starting at $35,000</div>
            <div className="text-foreground/60">4-week infrastructure build</div>
          </div>

          <p className="text-foreground/60 mb-12 max-w-xl mx-auto">
            Final pricing based on business complexity, number of integrations, and team size. ROI typically realized within 60–90 days — and unlike vendor-dependent builds, this one compounds over time because your team owns it.
          </p>

          <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto">
            Book Your Strategy Call
          </BookCallButton>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to <span className="font-medium">Build Your Systems</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a call to discuss your infrastructure needs and see if Compass is right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Book Your Strategy Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">
                Not Ready? Take the Assessment
              </Link>
            </Button>
          </div>

          <div className="mb-12">
            <NewsletterCTA dark />
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <span>Part of the System Integration waypoint</span>
            <Link to="/waypoints/system-integration" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              Explore System Integration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer dark />
    </div>
  );
};

export default LuminaCompass;