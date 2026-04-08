import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { TrendingUp, Target, Building2, CheckCircle, ArrowLeft, DollarSign } from "lucide-react";

const S3 = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[80vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center glow-s3">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">Waypoint 03 · Once systems exist and leadership is aligned</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              S³: <span className="font-medium">Scale · Sale · Succession</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Build the infrastructure that makes your organization's intelligence transferable — so what you've built doesn't depend on you being in the room.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton size="lg" className="text-lg px-10 py-6 h-auto bg-white !text-black hover:bg-white/90">
                Begin the S³ Conversation
              </BookCallButton>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/diagnostic">Get Your Assessment First</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Your business <span className="font-medium">depends on you</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You've built something valuable, but it's not built to scale without you. If you stepped away tomorrow, things would fall apart. You need infrastructure that runs independently, scales seamlessly, and maximizes enterprise value.
          </p>
        </div>
      </SectionLight>

      {/* The Three S's - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            The Three <span className="font-medium">Pillars</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Enterprise transformation through AI infrastructure</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Scale",
                desc: "Build AI infrastructure that scales revenue without scaling complexity. Your systems grow with the business. Your team governs them — they don't chase them."
              },
              {
                icon: DollarSign,
                title: "Sale",
                desc: "Buyers don't just pay for revenue. They pay for transferable infrastructure. Documented systems, institutionalized intelligence, and governance frameworks that survive your departure — these are what command premium valuations."
              },
              {
                icon: Building2,
                title: "Succession",
                desc: "Leadership transitions fail when organizational intelligence isn't institutionalized. We build the systems, SOPs, and continuity frameworks that let new leadership inherit capability — not confusion."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-s3))] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
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
            Complete enterprise transformation in 6-8 weeks
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete Systems Documentation Suite",
                desc: "Every process, workflow, and system documented and organized for buyers or successors."
              },
              {
                title: "Leadership Dashboard(s)",
                desc: "Real-time visibility into operations, metrics, and KPIs for decision-making."
              },
              {
                title: "Branded SOP Library",
                desc: "Standard operating procedures that anyone can follow—your operations manual."
              },
              {
                title: "Data Room Prep",
                desc: "Investment-grade documentation ready for due diligence, buyers, or board members."
              },
              {
                title: "Succession Architecture",
                desc: "Systems designed to run without you—clear handoff paths for every function."
              },
              {
                title: "Cultural + Leadership Continuity Design",
                desc: "Ensure your company culture and values persist through any transition."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-foreground/10 hover:border-[hsl(var(--waypoint-s3))] transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post-Launch Support */}
          <div className="mt-8 p-5 rounded-xl bg-[hsl(var(--waypoint-s3))]/10 border border-[hsl(var(--waypoint-s3))]/30">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-1">60 Days Post-Launch Support</h3>
                <p className="text-foreground/60 text-sm">We stay engaged after delivery to ensure everything runs smoothly and your team is confident.</p>
              </div>
            </div>
          </div>

          {/* Scarcity Indicator */}
          <div className="mt-8 p-4 rounded-xl bg-foreground text-white text-center">
            <p className="font-medium">
              Currently accepting 2 new S³ clients per quarter
            </p>
          </div>
        </div>
      </SectionLight>

      {/* Outcomes - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white">
            Expected <span className="font-medium">Outcomes</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "2-5x increase in business valuation through documented AI systems",
              "Ability to handle 10x revenue growth without 10x team growth",
              "Operations that run smoothly with or without founder involvement",
              "Complete operational transparency for buyers, investors, or successors",
              "Reduced operational risk through redundancy and automation",
              "Faster decision-making through AI-powered insights",
              "Competitive moat that's difficult for competitors to replicate",
              "Institutional intelligence that survives any transition — founder departure, leadership change, or acquisition"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-3" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Who This Is For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            This Waypoint Is <span className="font-medium">For You</span> If:
          </h2>
          
          <div className="space-y-6">
            {[
              "You've built something that matters and you need it to outlast your direct involvement in it",
              "Your business is overly dependent on you or key team members",
              "You're considering a future exit or succession plan",
              "You want to maximize business valuation through AI infrastructure",
              "You need enterprise-grade systems but don't have an internal tech team",
              "You're raising capital and need to demonstrate operational maturity"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Target className="w-5 h-5 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-1" />
                <p className="text-xl text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Investment - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            The <span className="font-medium">Investment</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            S³ transformation is a 6-8 week engagement. Pricing is custom based on business size, complexity, and scope.
          </p>
          
          <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-s3))] rounded-2xl glow-s3 mb-8 bg-white/5">
            <div className="text-5xl font-light mb-2 text-white">$50K – $250K</div>
            <div className="text-sm text-white/60">6-8 week enterprise transformation</div>
          </div>

          <p className="text-sm text-white/60 mb-12">
            ROI typically realized within 12-18 months through increased efficiency, valuation, and revenue growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Claim Your Strategy Session
            </BookCallButton>
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">Start with the Assessment</Link>
            </Button>
          </div>

          <div className="mb-12">
            <NewsletterCTA dark />
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link to="/waypoints/system-integration" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              System Integration
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer dark />
    </div>
  );
};

export default S3;