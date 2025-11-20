import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { ArrowRight, Brain, Network, TrendingUp, Compass } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-32 md:py-40 max-w-6xl mx-auto relative overflow-hidden">
        <div className="text-center animate-fade-in relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-foreground/5 text-foreground/70">
              Your AI Infrastructure Partner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            From <span className="font-medium">Curiosity</span> to <span className="font-medium">Capability</span> to <span className="font-medium">Capital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto mb-12">
            Navigate your AI transformation journey through three proven Waypoints: AI Literacy, System Integration, and S³ (Scale · Sale · Succession).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/quiz" className="gap-2">
                <Compass className="w-5 h-5" />
                Find Your Waypoint
              </Link>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8 py-4" />
          </div>
        </div>

        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-foreground blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-foreground blur-3xl" />
        </div>
      </section>

      {/* The Three Waypoints */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
            The Three <span className="font-medium">Waypoints</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A systematic journey from AI education to enterprise transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-in">
          {/* Waypoint 1: AI Literacy */}
          <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all duration-300 hover:glow-literacy">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-literacy))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center mb-6 group-hover:glow-literacy transition-all">
                <Brain className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-medium mb-4">AI Literacy</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Build foundational understanding. Learn how AI actually works, where it fits in your business, and how to speak the language of intelligent automation.
              </p>
              
              <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                <Link to="/waypoints/ai-literacy" className="flex items-center gap-2">
                  Explore Literacy
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Waypoint 2: System Integration */}
          <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all duration-300 hover:glow-integration">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-integration))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center mb-6 group-hover:glow-integration transition-all">
                <Network className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-medium mb-4">System Integration</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Connect the dots. Implement AI automations that eliminate manual tasks, integrate with your existing tools, and create seamless workflows.
              </p>
              
              <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                <Link to="/waypoints/system-integration" className="flex items-center gap-2">
                  Explore Integration
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Waypoint 3: S³ */}
          <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-s3))] transition-all duration-300 hover:glow-s3">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-s3))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center mb-6 group-hover:glow-s3 transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-medium mb-4">S³</h3>
              <p className="text-sm text-foreground/60 mb-2 font-medium">Scale · Sale · Succession</p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Transform for growth. Build AI infrastructure that scales with you, increases valuation, and creates enterprise-grade systems.
              </p>
              
              <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                <Link to="/waypoints/s3" className="flex items-center gap-2">
                  Explore S³
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* The Journey Visual */}
      <section className="px-8 py-24 max-w-5xl mx-auto">
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--waypoint-literacy))] via-[hsl(var(--waypoint-integration))] to-[hsl(var(--waypoint-s3))] -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { 
                title: "Curiosity", 
                desc: "Wondering if AI can help",
                color: "waypoint-literacy"
              },
              { 
                title: "Capability", 
                desc: "Building systems that work",
                color: "waypoint-integration"
              },
              { 
                title: "Capital", 
                desc: "Scaling for maximum value",
                color: "waypoint-s3"
              }
            ].map((stage, idx) => (
              <div key={idx} className="text-center relative">
                <div className={`w-16 h-16 rounded-full bg-[hsl(var(--${stage.color}))] text-white flex items-center justify-center text-2xl font-light mx-auto mb-4 shadow-lg`}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-medium mb-2">{stage.title}</h3>
                <p className="text-sm text-foreground/60">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="px-8 py-24 bg-foreground/[0.02]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-medium text-foreground/50 mb-8 tracking-wide uppercase">
            Trusted by Forward-Thinking Leaders
          </p>
          <div className="h-24 flex items-center justify-center text-foreground/20">
            {/* Client logos will go here */}
            <p className="text-sm">Client testimonials and results coming soon</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Ready to navigate your <span className="font-medium">AI transformation</span>?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Take the quiz to find your current Waypoint, or book a call to map out your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/quiz" className="gap-2">
                <Compass className="w-5 h-5" />
                Find Your Waypoint
              </Link>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8 py-4" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/results" className="hover:text-primary transition-colors">Results</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
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

export default Index;
