import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Flame, RefreshCw, Zap, HeadphonesIcon, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

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
              <span className="text-sm font-medium text-white/60">S³ (Scale) Product</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Ignite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Monthly AI retainer for ongoing system optimization, new automations, and strategic guidance. Your dedicated AI partner.
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
            Your systems are built, but <span className="font-medium">who maintains them</span>?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            One-time builds break down. Businesses evolve. New tools emerge. You need an ongoing partner who keeps your AI systems running, evolving, and improving as you grow.
          </p>
        </div>
      </SectionLight>

      {/* The Solution - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            Your Ongoing <span className="font-medium">AI Partner</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Continuous improvement, not one-time fixes</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "System Optimization",
                desc: "Monthly review and optimization of your existing automations. We fix bottlenecks, improve speed, and expand capacity."
              },
              {
                icon: Zap,
                title: "New Automations",
                desc: "Build new automations as your business evolves. New workflows, new integrations, new efficiency gains."
              },
              {
                icon: HeadphonesIcon,
                title: "Strategic Guidance",
                desc: "Regular strategy calls to identify opportunities, plan ahead, and ensure AI serves your business goals."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Monthly Deliverables - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Monthly <span className="font-medium">Deliverables</span>
          </h2>
          
          <div className="space-y-4">
            {[
              "Strategy call to review priorities and identify opportunities",
              "System health check and performance optimization",
              "1-3 new automations or integrations (based on tier)",
              "Documentation updates for any changes",
              "Slack/email support for questions and troubleshooting",
              "Monthly report on automation performance and time saved"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Who It's For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Ignite Is <span className="font-medium">For You</span> If:
          </h2>
          
          <div className="space-y-6">
            {[
              "You've completed Compass and want ongoing support",
              "Your business is growing and automations need to scale",
              "You want a dedicated AI partner, not one-off projects",
              "You need flexibility to add new automations as needs arise",
              "You value strategic guidance alongside technical execution"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-3" />
                <p className="text-xl text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Investment - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white">
            Choose Your <span className="font-medium">Tier</span>
          </h2>

          {/* Tier Table */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                tier: "Standard",
                price: "$3,000",
                period: "/month",
                hours: "15 hours",
                bestFor: "Post-Compass tune-ups and maintenance",
                features: [
                  "Monthly strategy call",
                  "System health checks",
                  "1-2 new automations",
                  "Slack/email support",
                  "Monthly performance report"
                ]
              },
              {
                tier: "Plus",
                price: "$5,000",
                period: "/month",
                hours: "25 hours",
                bestFor: "Active scaling and growth phases",
                features: [
                  "Bi-weekly strategy calls",
                  "Priority system optimization",
                  "2-3 new automations",
                  "Priority Slack support",
                  "Weekly performance snapshots"
                ],
                popular: true
              },
              {
                tier: "Phoenix",
                price: "$7,500",
                period: "/month",
                hours: "Engagement-based",
                bestFor: "Strategic partners and high-growth",
                features: [
                  "Weekly strategy sessions",
                  "Unlimited optimization requests",
                  "3+ new automations",
                  "Direct access to founder",
                  "Quarterly business reviews"
                ],
                alt: "or $20,000/quarter"
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-xl border ${item.popular ? 'border-[hsl(var(--waypoint-integration))] bg-white/10' : 'border-white/10 bg-white/5'} relative`}>
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--waypoint-integration))] text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-white mb-2">{item.tier}</h3>
                  <div className="text-4xl font-light text-white">{item.price}<span className="text-lg text-white/60">{item.period}</span></div>
                  {item.alt && <p className="text-sm text-white/40 mt-1">{item.alt}</p>}
                  <p className="text-sm text-white/60 mt-2">{item.hours}</p>
                </div>
                <p className="text-white/70 text-sm mb-4 text-center">{item.bestFor}</p>
                <div className="space-y-2">
                  {item.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Commitment & Hour Banking */}
          <div className="text-center mb-12 space-y-2">
            <p className="text-white/60">
              <span className="font-medium text-white">3-month minimum commitment</span> for all tiers
            </p>
            <p className="text-white/60">
              Unused hours roll forward for up to 60 days
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Schedule a Call to Inquire
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">
                Not Ready? Take the Diagnostic
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
