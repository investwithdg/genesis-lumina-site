import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArrowRight, Brain, Network, TrendingUp, Compass, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-screen flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-6xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white/80">
                Your AI Infrastructure Partner
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              From <span className="font-medium">Curiosity</span>
              <br className="hidden md:block" /> to <span className="font-medium">Capability</span>
              <br className="hidden md:block" /> to <span className="font-medium">Capital</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Navigate your AI transformation through three proven Waypoints: AI Literacy, System Integration, and S³.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <Link to="/quiz" className="gap-2">
                  <Compass className="w-5 h-5" />
                  Find Your Waypoint
                </Link>
              </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <a href="https://calendar.app.google/XXdQMZcNjYjnACuz5" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
              </a>
            </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Three Waypoints - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </SectionLight>

      {/* Stats Bar - DARK */}
      <SectionDark className="px-8 py-16">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "{X}+", label: "Clients Served" },
              { value: "{X}+", label: "Hours Automated" },
              { value: "{X}M+", label: "Tokens Processed" },
              { value: "{X}", label: "Years Experience" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Social Proof - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-8 text-foreground/20" />
          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8">
            "{"{TESTIMONIAL_QUOTE}"}"
          </blockquote>
          <div className="text-foreground/60">
            <p className="font-medium text-foreground/80">{"{CLIENT_NAME}"}</p>
            <p className="text-sm">{"{CLIENT_TITLE}"}, {"{CLIENT_COMPANY}"}</p>
          </div>
        </div>
      </SectionLight>

      {/* The Journey Visual - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center tracking-tight">
            Your <span className="font-medium">Transformation Journey</span>
          </h2>
          
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--waypoint-literacy))] via-[hsl(var(--waypoint-integration))] to-[hsl(var(--waypoint-s3))] -translate-y-1/2 hidden md:block rounded-full" />
            
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
                  <div className={`w-20 h-20 rounded-full bg-[hsl(var(--${stage.color}))] text-white flex items-center justify-center text-3xl font-light mx-auto mb-6 shadow-xl`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-medium mb-2">{stage.title}</h3>
                  <p className="text-foreground/60">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLight>

      {/* Final CTA - DARK */}
      <SectionDark className="px-8 py-32 md:py-40" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-white">
            Ready to navigate your <br className="hidden md:block" /><span className="font-medium">AI transformation</span>?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Take the quiz to find your current Waypoint, or book a call to map out your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/quiz" className="gap-2">
                <Compass className="w-5 h-5" />
                Find Your Waypoint
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <a href="https://calendar.app.google/XXdQMZcNjYjnACuz5" target="_blank" rel="noopener noreferrer">
                Book Your Strategy Call
              </a>
            </Button>
          </div>
          
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
