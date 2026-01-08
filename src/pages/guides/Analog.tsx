import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { MapPin, Lightbulb, Target, CheckCircle, ArrowRight, Brain, ShieldCheck } from "lucide-react";

const Analog = () => {
  const purchaseUrl = "https://buy.stripe.com/4gM4gz61qfpgaTD4oL1Fe09";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center glow-literacy">
                <Brain className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">AI Literacy Waypoint • Field Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-tight text-white">
              Analog <span className="font-medium">by Lumina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-4">
              The pre-build system design guide.
            </p>
            
            <div className="flex items-center gap-4 mb-12">
              <p className="text-4xl font-medium text-white">$47</p>
              <span className="text-sm text-white/40 px-3 py-1 rounded-full border border-white/20">{"{X}"}+ copies sold</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                  Get the Analog Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                Book a Strategy Session
              </BookCallButton>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">The <span className="font-medium">Problem</span></h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Most people throw AI into chaos and expect order. They don't have a system to design before they automate. Ideas scatter, projects stall, and AI becomes another tool that doesn't stick—because the foundation was never built.
          </p>
        </div>
      </SectionLight>

      {/* What You'll Learn - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">What You'll <span className="font-medium">Learn</span></h2>
          <p className="text-lg text-white/60 text-center mb-12">Design systems before you automate them</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Visual Data Mapping",
                desc: "Map data relationships and workflows visually using mind mapping and color coding."
              },
              {
                icon: Lightbulb,
                title: "Cognitive Scaffolding",
                desc: "Create structures that help LLMs understand context and produce better outputs."
              },
              {
                icon: Target,
                title: "The Analog Methodology",
                desc: "Design system architecture on paper before building it digitally."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-literacy))] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-literacy))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Outcome Guarantee - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-literacy))]" />
          <h2 className="text-3xl font-light mb-4">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-foreground/80 italic mb-6">
            "You will understand how to map data with AI systems in a visceral way."
          </p>
          <p className="text-foreground/60">
            If you don't feel confident designing systems after reading this guide, email us for a full refund. No questions asked.
          </p>
        </div>
      </SectionLight>

      {/* Who This Is For - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-light mb-12 text-center text-white">This Guide Is <span className="font-medium">For You</span> If:</h2>
          
          <div className="space-y-6">
            {[
              "Your thinking is chaotic and projects are half-finished",
              "Ideas are everywhere but nothing sticks",
              "You've tried AI tools but they didn't create lasting change",
              "You need a foundation before you can scale",
              "You want to build systems, not just use tools"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-3" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* CTA - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Build Your <span className="font-medium">Foundation</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Analog teaches you how to build systems. Then Harvest teaches you how to scale them with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Analog Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60 mb-12">
            <span>Next Guide:</span>
            <Link to="/field-guides/harvest" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              Harvest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-foreground/10">
            <p className="text-foreground/60 mb-4">Not ready? Get weekly insights instead:</p>
            <NewsletterCTA compact />
          </div>
        </div>
      </SectionLight>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Analog;
