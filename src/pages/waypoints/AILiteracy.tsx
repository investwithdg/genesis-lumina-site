import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Brain, Book, Users, CheckCircle, ArrowRight } from "lucide-react";

const AILiteracy = () => {
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
            <span className="text-sm font-medium text-foreground/60">Waypoint 01</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            AI <span className="font-medium">Literacy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
            Build the foundational understanding you need to confidently lead AI transformation in your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="{{stripe_link_call}}">Start Your Journey</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">You're <span className="font-medium">curious</span> but uncertain</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            You've heard the AI hype. You see competitors moving faster. But you don't know where to start, what's real, or how it applies to YOUR business. You need clarity, not more complexity.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What You'll <span className="font-medium">Learn</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Core concepts that demystify AI for business leaders</p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Book,
              title: "AI Fundamentals",
              desc: "Understand how AI actually works—no technical jargon. Learn what's possible, what's hype, and what's right for your business."
            },
            {
              icon: Users,
              title: "Use Case Identification",
              desc: "Discover the specific areas in YOUR business where AI can eliminate waste, save time, and create value."
            },
            {
              icon: CheckCircle,
              title: "Decision Frameworks",
              desc: "Get clear criteria for evaluating AI tools, vendors, and solutions so you can make confident decisions."
            },
            {
              icon: Brain,
              title: "Strategic Thinking",
              desc: "Develop the mental models to lead AI initiatives with confidence and communicate effectively with technical teams."
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

      {/* Deliverables */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What You <span className="font-medium">Get</span></h2>
          
          <div className="space-y-4">
            {[
              "AI Literacy Assessment to identify your knowledge gaps",
              "Custom learning path based on your business model",
              "1-on-1 sessions to answer your specific questions",
              "Curated resources and frameworks (no fluff)",
              "Actionable roadmap for next steps toward integration"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">This Waypoint Is <span className="font-medium">For You</span> If:</h2>
        
        <div className="space-y-6">
          {[
            "You're a business owner or leader who knows AI is important but feels overwhelmed",
            "You've tried to learn about AI but got lost in technical complexity",
            "You want to understand AI strategy before investing in tools or teams",
            "You need to confidently communicate AI initiatives to your team or board",
            "You're tired of guessing and ready for a clear, practical foundation"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-2" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Build Your <span className="font-medium">AI Foundation</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Book a call to assess your current state and create your personalized literacy roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="{{stripe_link_call}}">Book Your Call</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/quiz">Take the Quiz First</Link>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <span>Next Waypoint:</span>
            <Link to="/waypoints/system-integration" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              System Integration
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
          <Link to="/results" className="hover:text-primary transition-colors">Results</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
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

export default AILiteracy;
