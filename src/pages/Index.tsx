import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, Brain, Network, TrendingUp, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-screen flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Most organizations aren't failing at AI because they lack tools.
              <br />
              They're failing because they're becoming dependent instead of capable.
            </p>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              <span className="font-medium">Orientation</span>
              <br className="hidden md:block" /> Before Execution
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Genesis Lumina builds the AI literacy and operational infrastructure that lets your organization govern its own intelligence — so you outlast every disruption cycle, vendor shift, and capability change ahead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <Link to="/diagnostic" className="gap-2">
                  Begin Your Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10"
              >
                <a href="https://calendar.app.google/XXdQMZcNjYjnACuz5" target="_blank" rel="noopener noreferrer">
                  Book Free Strategy Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Three Waypoints - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
              Once You Know <span className="font-medium">Where You Stand</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The Assessment reveals where you're exposed. These Waypoints show you how to build infrastructure you own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-in">
            {/* Waypoint 1: Lumina Labs (Literacy) */}
            <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all duration-300 hover:glow-literacy">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-literacy))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center mb-6 group-hover:glow-literacy transition-all">
                  <Brain className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-medium mb-1">Lumina Labs</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Teams · AI Governance Workshop</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Teach your leadership team to govern AI — not just use it. A 3-hour workshop that builds the organizational capacity to evaluate, deploy, and own AI without becoming dependent on any vendor, tool, or model.
                </p>

                <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                  <Link to="/products/lumina-labs" className="flex items-center gap-2">
                    Explore Labs
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Waypoint 2: Lumina Compass (Integration) */}
            <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all duration-300 hover:glow-integration">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-integration))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center mb-6 group-hover:glow-integration transition-all">
                  <Network className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-medium mb-1">Lumina Compass</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Business · The Sprint</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  The 4-week flagship build. We map your operational architecture, identify your highest-leverage constraint, and build the infrastructure your team owns, governs, and extends — without ongoing dependence on us.
                </p>

                <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                  <Link to="/products/lumina-compass" className="flex items-center gap-2">
                    Explore Compass
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Waypoint 3: Lumina Ignite (Scale) */}
            <Card className="group relative overflow-hidden border-2 hover:border-[hsl(var(--waypoint-s3))] transition-all duration-300 hover:glow-s3">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-s3))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center mb-6 group-hover:glow-s3 transition-all">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-medium mb-1">Lumina Ignite</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Growth · The Progression</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Your ongoing AI partner. Monthly optimization, new builds, and strategic guidance to scale your systems as you grow.
                </p>
                <p className="text-foreground/50 text-sm mb-6">
                  Three tiers. One arc. Ember builds your readiness. Blaze scales your systems. Phoenix guides your trajectory. Each stage is earned, not sold.
                </p>

                <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                  <Link to="/products/lumina-ignite" className="flex items-center gap-2">
                    Explore Ignite
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </SectionLight>

      {/* Stats Bar - DARK */}
      <SectionDark className="px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Clients Served" },
              { value: "536+", label: "AI Agents Deployed" },
              { value: "370M+", label: "Tokens Processed" },
              { value: "4+", label: "Years Experience" },
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
      <SectionLight className="px-4 md:px-8 py-16 md:py-32" muted>
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-8 text-foreground/20" />
          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8">
            "{"Donovan is AI. He's The Answer."}"
          </blockquote>
          <div className="text-foreground/60">
            <p className="font-medium text-foreground/80">{"Jamar Wright"}</p>
            <p className="text-sm">
              {"Owner/Operator"}, {"Revive Beauty Salon"}
            </p>
          </div>
        </div>
      </SectionLight>

      {/* The Journey Visual - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-6 text-center tracking-tight">
            Your Path to <span className="font-medium">AI Clarity</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
            Every engagement follows the same principle: orientation before execution
          </p>

          {/* Offer Journey */}
          <div className="space-y-8">
            {/* Entry Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/quiz" className="p-4 rounded-xl border-2 border-foreground/10 hover:border-foreground/30 transition-all text-center group">
                <div className="text-sm text-foreground/50 mb-1">Free</div>
                <div className="font-medium group-hover:text-foreground/80">AI Readiness Quiz</div>
              </Link>
              <Link to="/field-guides/analog" className="p-4 rounded-xl border-2 border-foreground/10 hover:border-foreground/30 transition-all text-center group">
                <div className="text-sm text-foreground/50 mb-1">$47 – $297</div>
                <div className="font-medium group-hover:text-foreground/80">Field Guides</div>
              </Link>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-foreground/20" />
            </div>

            {/* Assessment */}
            <Link to="/diagnostic" className="block p-6 rounded-xl border-2 border-foreground hover:bg-foreground/5 transition-all text-center group">
              <div className="text-sm text-foreground/50 mb-1">$2,500 • The Starting Point</div>
              <div className="text-xl font-medium mb-2">Vulnerability Assessment</div>
              <div className="text-sm text-foreground/60">Scorecard + Gap Map + Action Plan + Loom Walkthrough</div>
            </Link>

            {/* Arrow Down with Branch */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-foreground/20" />
            </div>

            {/* Main Products */}
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/products/lumina-labs" className="p-4 rounded-xl border-2 border-[hsl(var(--waypoint-literacy))]/30 hover:border-[hsl(var(--waypoint-literacy))] transition-all text-center group">
                <div className="text-sm text-foreground/50 mb-1">$3,000 – $7,500</div>
                <div className="font-medium text-[hsl(var(--waypoint-literacy))]">Lumina Labs</div>
                <div className="text-xs text-foreground/50 mt-1">AI Governance Workshop</div>
              </Link>
              <Link to="/products/lumina-compass" className="p-4 rounded-xl border-2 border-[hsl(var(--waypoint-integration))]/30 hover:border-[hsl(var(--waypoint-integration))] transition-all text-center group">
                <div className="text-sm text-foreground/50 mb-1">$20,000</div>
                <div className="font-medium text-[hsl(var(--waypoint-integration))]">Lumina Compass</div>
                <div className="text-xs text-foreground/50 mt-1">4-Week Infrastructure Build</div>
              </Link>
              <Link to="/waypoints/s3" className="p-4 rounded-xl border-2 border-[hsl(var(--waypoint-s3))]/30 hover:border-[hsl(var(--waypoint-s3))] transition-all text-center group">
                <div className="text-sm text-foreground/50 mb-1">$50K – $250K</div>
                <div className="font-medium text-[hsl(var(--waypoint-s3))]">S³ Transformation</div>
                <div className="text-xs text-foreground/50 mt-1">Scale • Sale • Succession</div>
              </Link>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-foreground/20" />
            </div>

            {/* Ignite */}
            <Link to="/products/lumina-ignite" className="block p-4 rounded-xl border-2 border-[hsl(var(--waypoint-s3))]/30 hover:border-[hsl(var(--waypoint-s3))] transition-all text-center group">
              <div className="text-sm text-foreground/50 mb-1">Ember → Blaze → Phoenix</div>
              <div className="font-medium">Lumina Ignite</div>
              <div className="text-xs text-foreground/50 mt-1">Progression Retainer</div>
            </Link>
          </div>
        </div>
      </SectionLight>

      {/* Client Logos */}
      <SectionLight className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-8 text-center">Trusted By</h3>
          <ClientLogoCarousel />
        </div>
      </SectionLight>

      {/* Final CTA - DARK */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-40" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-white">
            Before you automate. <br className="hidden md:block" />
            <span className="font-medium">Get clear.</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            The Vulnerability Assessment tells you exactly where you stand and what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/diagnostic" className="gap-2">
                Begin Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10"
            >
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

      {/* Sticky mobile CTA */}
      <MobileStickyBar />
    </div>
  );
};

export default Index;