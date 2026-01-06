import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Brain, Book, Users, CheckCircle, ArrowRight } from "lucide-react";

const AILiteracy = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[80vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center glow-literacy">
                <Brain className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">Waypoint 01</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              AI <span className="font-medium">Literacy</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Build the foundational understanding you need to confidently lead AI transformation in your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton size="lg" className="text-lg px-10 py-6 h-auto bg-white !text-black hover:bg-white/90">
                Book Your Free Strategy Call
              </BookCallButton>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/quiz">Take the Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            You're <span className="font-medium">curious</span> but uncertain
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You've heard the AI hype. You see competitors moving faster. But you don't know where to start, what's real,
            or how it applies to YOUR business. You need clarity, not more complexity.
          </p>
        </div>
      </SectionLight>

      {/* What You'll Learn - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            What You'll <span className="font-medium">Learn</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">
            Core concepts that demystify AI for business leaders
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Book,
                title: "AI Fundamentals",
                desc: "Understand how AI actually works—no technical jargon. Learn what's possible, what's hype, and what's right for your business.",
              },
              {
                icon: Users,
                title: "Use Case Identification",
                desc: "Discover the specific areas in YOUR business where AI can eliminate waste, save time, and create value.",
              },
              {
                icon: CheckCircle,
                title: "Decision Frameworks",
                desc: "Get clear criteria for evaluating AI tools, vendors, and solutions so you can make confident decisions.",
              },
              {
                icon: Brain,
                title: "Strategic Thinking",
                desc: "Develop the mental models to lead AI initiatives with confidence and communicate effectively with technical teams.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
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

      {/* Deliverables - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            What You <span className="font-medium">Get</span>
          </h2>

          <div className="space-y-4">
            {[
              "Discovery Call to identify your knowledge gaps",
              "Custom learning path based on your business model",
              "1-on-1 sessions to answer your specific questions",
              "Curated resources and frameworks (no fluff)",
              "Actionable roadmap for next steps toward integration",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Products for This Stage - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            Products for <span className="font-medium">This Stage</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">Ready to take action? Choose your path.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all hover:glow-literacy">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[hsl(var(--waypoint-literacy))]" />
                <span className="text-xs font-medium text-foreground/40">WORKSHOP</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">Lumina Labs</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                2-3 hour hands-on AI workshop for your team. Live or virtual. Get your entire team aligned on AI in one session.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl">$1,500 – $3,000</span>
                <Button asChild>
                  <Link to="/products/lumina-labs">Learn More</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all hover:glow-literacy">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-[hsl(var(--waypoint-literacy))]" />
                <span className="text-xs font-medium text-foreground/40">FIELD GUIDE</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">The Analog Method</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Reclaim focus and clarity from digital chaos. A practical guide to system design before AI implementation.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl">$47</span>
                <Button asChild>
                  <Link to="/field-guides/analog">Get the Guide</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </SectionLight>

      {/* Who This Is For - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white">
            This Waypoint Is <span className="font-medium">For You</span> If:
          </h2>

          <div className="space-y-6">
            {[
              "You're a business owner or leader who knows AI is important but feels overwhelmed",
              "You've tried to learn about AI but got lost in technical complexity",
              "You want to understand AI strategy before investing in tools or teams",
              "You need to confidently communicate AI initiatives to your team or board",
              "You're tired of guessing and ready for a clear, practical foundation",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-3" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* CTA Section - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Build Your <span className="font-medium">AI Foundation</span>?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Book a call to assess your current state and create your personalized literacy roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto">
              Claim Your Strategy Session
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/quiz">Take the Quiz First</Link>
            </Button>
          </div>

          <div className="mb-12">
            <NewsletterCTA />
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <span>Next Waypoint:</span>
            <Link
              to="/waypoints/system-integration"
              className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1"
            >
              System Integration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionLight>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AILiteracy;
