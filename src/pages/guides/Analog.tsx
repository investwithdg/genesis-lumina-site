import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { MapPin, Lightbulb, Target, CheckCircle, ArrowRight, Brain } from "lucide-react";

const Analog = () => {
  const purchaseUrl = "https://buy.stripe.com/4gM4gz61qfpgaTD4oL1Fe09";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center glow-literacy">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">AI Literacy Waypoint • Field Guide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            Analog <span className="font-medium">by Lumina</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-4">
            The pre-build system design guide.
          </p>
          
          <p className="text-3xl font-medium mb-12">$47</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Analog Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8">
              Book a Strategy Session
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">The <span className="font-medium">Problem</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            Most people throw AI into chaos and expect order. They don't have a system to design before they automate. Ideas scatter, projects stall, and AI becomes another tool that doesn't stick—because the foundation was never built.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What You'll <span className="font-medium">Learn</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Design systems before you automate them</p>

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
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all hover:glow-literacy">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-literacy))]/10 text-[hsl(var(--waypoint-literacy))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcome Guarantee */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-literacy))]" />
          <h2 className="text-3xl font-light mb-4">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-foreground/80 italic">
            "You will understand how to map data with AI systems in a visceral way."
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">This Guide Is <span className="font-medium">For You</span> If:</h2>
        
        <div className="space-y-6">
          {[
            "Your thinking is chaotic and projects are half-finished",
            "Ideas are everywhere but nothing sticks",
            "You've tried AI tools but they didn't create lasting change",
            "You need a foundation before you can scale",
            "You want to build systems, not just use tools"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-2" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Build Your <span className="font-medium">Foundation</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Analog teaches you how to build systems. Then Harvest teaches you how to scale them with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Analog Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <span>Next Guide:</span>
            <Link to="/guides/harvest" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              Harvest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Analog;
