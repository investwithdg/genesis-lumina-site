import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Compass, Map, Wrench, GraduationCap, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

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
              <span className="text-sm font-medium text-white/60">System Integration Product</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Compass</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              A 4-week flagship sprint that maps your systems, builds your automations, and delivers a complete Notion command center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/waypoints/system-integration">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Learn About System Integration First
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
            You need systems, <span className="font-medium">not just strategy</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You've read the books, watched the videos. But theory doesn't save time. You need someone to come in, understand your chaos, and build systems that actually work. That's Compass.
          </p>
        </div>
      </SectionLight>

      {/* The Solution / 4 Weeks - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            Your <span className="font-medium">AI Sprint</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Discovery → Design → Build → Deliver</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                icon: Map,
                title: "Discovery",
                desc: "Full systems audit. We map every process, tool, and workflow to identify automation opportunities."
              },
              {
                week: "Week 2",
                icon: Compass,
                title: "Design",
                desc: "Custom automation architecture. We design the systems and integrations specific to your business."
              },
              {
                week: "Week 3",
                icon: Wrench,
                title: "Build",
                desc: "Hands-on implementation. We build and test your automations, integrations, and Notion command center."
              },
              {
                week: "Week 4",
                icon: GraduationCap,
                title: "Deliver",
                desc: "Training and handoff. Your team learns the systems and you get complete documentation."
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
            What You <span className="font-medium">Get</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Every deliverable is functional, documented, and team-ready
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Systems Map (Miro Board)",
                desc: "Complete visual architecture of your workflows, integrations, and automations."
              },
              {
                title: "Working System v1",
                desc: "A functional system—not a prototype. 5-10 core automations built and tested."
              },
              {
                title: "Notion \"Clarity Portal\"",
                desc: "Your command center with all SOPs, documentation, and team resources."
              },
              {
                title: "3-5 Loom Walkthroughs",
                desc: "Video explanations of each system so your team can learn and iterate."
              },
              {
                title: "60-90 min Team Training Session",
                desc: "Live training for your team on all new systems and workflows."
              },
              {
                title: "30-Day Post-Launch Support",
                desc: "We're available for questions, tweaks, and troubleshooting after handoff."
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

      {/* Investment - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            The <span className="font-medium">Investment</span>
          </h2>
          
          <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-integration))] rounded-2xl glow-integration mb-8">
            <div className="text-5xl font-light mb-2">Starting at $15,000</div>
            <div className="text-foreground/60">4-week intensive engagement</div>
          </div>

          <p className="text-foreground/60 mb-12 max-w-xl mx-auto">
            Final pricing based on business complexity, number of integrations, and team size. ROI typically realized within 60-90 days.
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
            Book a call to discuss your automation needs and see if Compass is right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Book Your Strategy Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">
                Not Ready? Take the Diagnostic
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
