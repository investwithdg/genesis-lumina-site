import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Flame, Zap, Crown, CheckCircle, ArrowRight, ArrowLeft, FileText, BarChart3, Video } from "lucide-react";

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
              <span className="text-sm font-medium text-white/60">Intelligence Platform + Advisory</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Ignite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              A proprietary intelligence platform paired with an expert advisory layer. You get a monthly AI Governance Report, real-time dashboard access, and strategic guidance — calibrated to where you are in the arc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                Inquire About Ignite
              </BookCallButton>
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

      {/* What Every Tier Includes - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            Every Tier <span className="font-medium">Includes</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            The platform layer that powers every Ignite engagement
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Monthly AI Governance Report",
                desc: "A written assessment of your AI posture — risks, opportunities, and what to act on next."
              },
              {
                icon: BarChart3,
                title: "GL Intelligence Dashboard",
                desc: "Proprietary dashboard with real-time visibility into your AI readiness, system health, and governance metrics."
              },
              {
                icon: Video,
                title: "Loom Video Walkthrough",
                desc: "A ~10-minute recorded explanation of your monthly report — what changed, what matters, and what to do."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-foreground/10 text-center">
                <div className="w-12 h-12 rounded-lg bg-foreground text-white flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* The Three Tiers - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="schematic">
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
              <p className="text-sm text-white/40 mb-2">The Readiness Tier</p>
              <p className="text-2xl font-light text-orange-400 mb-4">$7,500<span className="text-sm text-white/40">/mo</span></p>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Monthly Governance Report through a readiness lens. We're building you, not building for you — closing literacy, alignment, and documentation gaps so you're Compass-ready.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Monthly AI Governance Report (readiness lens)",
                  "GL Intelligence Dashboard access",
                  "10-min Loom walkthrough",
                  "One 60-minute strategy call",
                  "Async Slack/Notion access (48-hour SLA)",
                  "Readiness score tracking toward Compass eligibility"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/40"><span className="text-white/60 font-medium">Exit condition:</span> Graduate to Compass when readiness score hits threshold.</p>
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
              <p className="text-sm text-white/40 mb-2">The Optimization Tier</p>
              <p className="text-2xl font-light text-[hsl(var(--waypoint-integration))] mb-4">$15,000<span className="text-sm text-white/40">/mo</span></p>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Monthly Governance Report through an optimization lens. Systems are live — now we optimize, extend, and compound. Up to two scoped builds per month drawn from report findings.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Monthly AI Governance Report (optimization lens)",
                  "GL Intelligence Dashboard access",
                  "10-min Loom walkthrough",
                  "One 60-minute strategy call",
                  "Up to two scoped builds/month from report findings",
                  "Async Slack/Notion access (24-hour SLA)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white/40"><span className="text-white/60 font-medium">Exit condition:</span> Systems mature. Graduate to Phoenix or self-govern.</p>
                <p className="text-white/40"><span className="text-white/60 font-medium">Commitment:</span> 3-month minimum</p>
              </div>
            </div>

            {/* Phoenix */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))]/20 text-[hsl(var(--waypoint-s3))] flex items-center justify-center mb-4">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-1 text-white">Phoenix</h3>
              <p className="text-sm text-white/40 mb-2">The Advisory Tier</p>
              <p className="text-2xl font-light text-[hsl(var(--waypoint-s3))] mb-4">$20,000–$25,000<span className="text-sm text-white/40">/mo</span></p>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Monthly Governance Report through a strategic foresight lens. Your infrastructure is healthy — the conversation shifts from how do we build to where are we going.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Monthly AI Governance Report (strategic foresight lens)",
                  "GL Intelligence Dashboard with S³ readiness score",
                  "10-min Loom walkthrough",
                  "One 90-minute strategic session",
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
                price: "$7,500/mo",
                desc: "You've completed your Assessment but need to build organizational readiness before a Compass build. You want someone building you, not for you."
              },
              {
                tier: "Blaze",
                price: "$15,000/mo",
                desc: "You've completed Compass and have live systems. You're scaling and need ongoing optimization, scoped builds, and consistent oversight."
              },
              {
                tier: "Phoenix",
                price: "$20K–$25K/mo",
                desc: "Your systems are mature and running. You need strategic advisory, long-horizon thinking, and quarterly S³ readiness signals."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-3" />
                <div>
                  <span className="font-medium">{item.tier}</span>
                  <span className="text-foreground/50 text-sm ml-2">{item.price}</span>
                  <span className="text-foreground/70"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </SectionLight>

      {/* CTA - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="schematic">
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