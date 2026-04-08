import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Flame, Zap, Crown, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const LuminaIgnite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center glow-s3">
                <Flame className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">Progression Retainer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Ignite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Three tiers. One arc. You don't subscribe to a retainer — you progress through one. Each stage is earned, not sold.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/waypoints/s3">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Learn About S³ First
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
            The right engagement depends on <span className="font-medium">where you are in the arc</span>.
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Some clients come to Ignite before Compass — they need to build readiness before they build systems. Others come after Compass — systems are live and need to scale. Others are mature and need strategic elevation, not more builds. Ignite meets you where you are and moves you toward where you're going.
          </p>
        </div>
      </SectionLight>

      {/* The Three Tiers - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white">
            The <span className="font-medium">Progression Arc</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Ember */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-1 text-white">Ember</h3>
              <p className="text-sm text-white/40 mb-4">The Readiness Tier</p>
              
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/40 mb-1">Position in your journey</p>
                <p className="text-sm text-white/70">Pre-Compass. You came through a Field Guide or Assessment but aren't Compass-ready yet.</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We're building you, not building for you. Ember closes the gaps — AI literacy, organizational alignment, process documentation — that would cause a Compass build to underdeliver.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Two 60-minute strategy calls monthly",
                  "Async access via Slack/Notion (48-hour response SLA)",
                  "Monthly readiness check-in tracking progress toward Compass eligibility"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/40"><span className="text-white/60 font-medium">Exit condition:</span> You graduate to Compass when your readiness score hits threshold.</p>
                <p className="text-white/40"><span className="text-white/60 font-medium">Commitment:</span> 3-month minimum</p>
              </div>
            </div>

            {/* Blaze */}
            <div className="p-8 rounded-xl bg-white/10 border border-[hsl(var(--waypoint-integration))] hover:bg-white/15 transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--waypoint-integration))] text-white text-xs font-medium rounded-full">
                Most Common
              </div>
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))]/20 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-1 text-white">Blaze</h3>
              <p className="text-sm text-white/40 mb-4">The Optimization Tier</p>
              
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/40 mb-1">Position in your journey</p>
                <p className="text-sm text-white/70">Post-Compass. Systems are live. Now we optimize, extend, and compound.</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                The ongoing partnership for clients actively scaling their AI infrastructure. One audit, two enhancements, consistent oversight — your systems get better every month.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Two 60-minute strategy + build calls monthly",
                  "One system audit + two enhancements per month",
                  "Async access via Slack/Notion (24-hour response SLA)",
                  "Monthly performance report + next-move recommendation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/40"><span className="text-white/60 font-medium">Exit condition:</span> Systems are mature. You graduate to Phoenix or self-govern.</p>
                <p className="text-white/40"><span className="text-white/60 font-medium">Commitment:</span> 3-month minimum</p>
              </div>
            </div>

            {/* Phoenix */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))]/20 text-[hsl(var(--waypoint-s3))] flex items-center justify-center mb-4">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-1 text-white">Phoenix</h3>
              <p className="text-sm text-white/40 mb-4">The Advisory Tier</p>
              
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/40 mb-1">Position in your journey</p>
                <p className="text-sm text-white/70">Mature client. Systems are running. The conversation shifts from how do we build to where are we going.</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                High-level strategic advisory for clients whose infrastructure is healthy. You don't need more builds. You need a thought partner for long-horizon decisions — and a quarterly signal on whether S³ is the right next move.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "One 90-minute strategic review monthly",
                  "Passive system monitoring via dashboards",
                  "Quarterly S³ readiness assessment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/40"><span className="text-white/60 font-medium">Exit condition:</span> S³ engagement, business transition, or graceful off-boarding.</p>
                <p className="text-white/40"><span className="text-white/60 font-medium">Commitment:</span> 6-month minimum</p>
              </div>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* Who Each Tier Is For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Which Tier Is <span className="font-medium">Right for You</span>?
          </h2>
          
          <div className="space-y-6">
            {[
              {
                tier: "Ember",
                desc: "You've completed your Assessment but need to build organizational readiness before a Compass build. You want someone building you, not for you."
              },
              {
                tier: "Blaze",
                desc: "You've completed Compass and have live systems. You're scaling and need ongoing optimization, new builds, and consistent oversight."
              },
              {
                tier: "Phoenix",
                desc: "Your systems are mature and running. You need strategic advisory and long-horizon thinking, not more technical execution."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-3" />
                <div>
                  <span className="font-medium">{item.tier}</span>
                  <span className="text-foreground/70"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* LTV Note */}
          <div className="mt-12 p-6 rounded-xl bg-foreground/5 border border-foreground/10">
            <p className="text-foreground/60 text-sm leading-relaxed italic text-center">
              A client who moves through the full arc — Ember → Compass → Blaze → Phoenix → S³ — represents potential lifetime value north of $300K. More importantly, each graduation feels earned. Nobody gets sold up. They grow into it.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* CTA - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to Begin <span className="font-medium">Your Arc</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a call to discuss where you are and which tier fits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Schedule a Call to Inquire
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
            <span>Part of the S³ waypoint</span>
            <Link to="/waypoints/s3" className="font-medium text-[hsl(var(--waypoint-s3))] hover:underline flex items-center gap-1">
              Explore S³ (Scale)
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

export default LuminaIgnite;