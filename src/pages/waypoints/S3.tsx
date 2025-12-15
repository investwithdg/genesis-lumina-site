import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { TrendingUp, Target, Building2, CheckCircle, ArrowLeft, DollarSign } from "lucide-react";

const S3 = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center glow-s3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">Waypoint 03</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            S³: <span className="font-medium">Scale · Sale · Succession</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
            Transform your business into an enterprise-grade, AI-powered asset. Build systems that scale infinitely, increase valuation, and enable smooth transitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallButton size="lg" className="text-lg px-8">
              Book Your Free Strategy Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Your business <span className="font-medium">depends on you</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            You've built something valuable, but it's not built to scale without you. If you stepped away tomorrow, things would fall apart. You need infrastructure that runs independently, scales seamlessly, and maximizes enterprise value.
          </p>
        </div>
      </section>

      {/* The Three S's */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">The Three <span className="font-medium">Pillars</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Enterprise transformation through AI infrastructure</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Scale",
              desc: "Build AI infrastructure that grows revenue without proportional cost increases. Handle 10x growth with the same core team."
            },
            {
              icon: DollarSign,
              title: "Sale",
              desc: "Increase business valuation through documented systems, automation, and AI-driven operations that buyers love."
            },
            {
              icon: Building2,
              title: "Succession",
              desc: "Create systems that run without you. Enable smooth leadership transitions with zero operational disruption."
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-s3))] transition-all hover:glow-s3">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-s3))]/10 text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Build */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What We <span className="font-medium">Build</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Operations Infrastructure",
                items: [
                  "Autonomous decision-making systems",
                  "Predictive analytics for forecasting",
                  "Real-time business intelligence dashboards",
                  "Self-optimizing workflows"
                ]
              },
              {
                title: "Enterprise Documentation",
                items: [
                  "Complete system architecture maps",
                  "Process documentation and playbooks",
                  "Training protocols for new team members",
                  "Compliance and audit trails"
                ]
              },
              {
                title: "Scalability Framework",
                items: [
                  "Cloud infrastructure that auto-scales",
                  "Multi-channel customer acquisition systems",
                  "Revenue operations automation",
                  "Team expansion playbooks"
                ]
              },
              {
                title: "Exit-Ready Systems",
                items: [
                  "Documented intellectual property",
                  "Transferable operational knowledge",
                  "AI-powered business continuity",
                  "Valuation optimization strategy"
                ]
              }
            ].map((section, idx) => (
              <Card key={idx} className="p-6 border hover:border-[hsl(var(--waypoint-s3))] transition-all">
                <h3 className="font-medium mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-foreground/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-s3-foreground))] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">Expected <span className="font-medium">Outcomes</span></h2>
        
        <div className="space-y-6">
          {[
            "2-5x increase in business valuation through documented AI systems",
            "Ability to handle 10x revenue growth without 10x team growth",
            "Operations that run smoothly with or without founder involvement",
            "Complete operational transparency for buyers, investors, or successors",
            "Reduced operational risk through redundancy and automation",
            "Faster decision-making through AI-powered insights",
            "Competitive moat that's difficult for competitors to replicate"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-2" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">This Waypoint Is <span className="font-medium">For You</span> If:</h2>
          
          <div className="space-y-6">
            {[
              "You're generating $1M+ in annual revenue and ready to scale",
              "Your business is overly dependent on you or key team members",
              "You're considering a future exit or succession plan",
              "You want to maximize business valuation through AI infrastructure",
              "You need enterprise-grade systems but don't have an internal tech team",
              "You're raising capital and need to demonstrate operational maturity"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Target className="w-5 h-5 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6">The <span className="font-medium">Investment</span></h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          S³ transformation is a 4-6 month engagement. Pricing is custom based on business size, complexity, and scope.
        </p>
        
        <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-s3))] rounded-lg glow-s3 mb-8">
          <div className="text-4xl font-light mb-2">Starting at $50K</div>
          <div className="text-sm text-foreground/60">Custom enterprise engagements</div>
        </div>

        <p className="text-sm text-foreground/60 mb-12">
          ROI typically realized within 12-18 months through increased efficiency, valuation, and revenue growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookCallButton size="lg" className="text-lg px-8">
            Claim Your Strategy Session
          </BookCallButton>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link to="/quiz">Take the Quiz</Link>
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-8 py-12 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8 text-sm text-foreground/60">
            <Link to="/waypoints/system-integration" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              System Integration
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

export default S3;
