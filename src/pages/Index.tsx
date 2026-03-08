import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArrowRight, Brain, Network, TrendingUp, Quote, Search, BookOpen, Compass, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-screen flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Most organizations don't fail at AI because of tools.
              <br />
              They fail because they adopt out of sequence.
            </p>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              <span className="font-medium">Orientation</span>
              <br className="hidden md:block" /> Before Execution
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Genesis Lumina helps you understand where you are, what comes next, and how to move forward—in the right order.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <Link to="/diagnostic" className="gap-2">
                  Begin Your Diagnostic
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

      {/* Gradient transition */}
      <div className="section-divider-dark-to-light" />

      {/* The Three Waypoints - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
              Once You Have <span className="font-medium">Direction</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The Diagnostic tells you where you are. These Waypoints show you what comes next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-in">
            {/* Waypoint 1: Lumina Labs (Literacy) */}
            <Card className="group relative overflow-hidden border-2 border-t-4 border-t-[hsl(var(--waypoint-literacy))] hover:border-[hsl(var(--waypoint-literacy))] transition-all duration-300 hover:glow-literacy hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-literacy))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--waypoint-literacy))]/10 text-[hsl(var(--waypoint-literacy))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--waypoint-literacy))] group-hover:text-[hsl(var(--waypoint-literacy-foreground))] group-hover:glow-literacy transition-all duration-300">
                  <Brain className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-medium mb-1 font-sans">Lumina Labs</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Teams · The Workshop</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Build foundational understanding. Hands-on AI training that gets your entire team aligned and ready to execute in a single session.
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
            <Card className="group relative overflow-hidden border-2 border-t-4 border-t-[hsl(var(--waypoint-integration))] hover:border-[hsl(var(--waypoint-integration))] transition-all duration-300 hover:glow-integration hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-integration))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--waypoint-integration))]/10 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--waypoint-integration))] group-hover:text-[hsl(var(--waypoint-integration-foreground))] group-hover:glow-integration transition-all duration-300">
                  <Network className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-medium mb-1 font-sans">Lumina Compass</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Business · The Sprint</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  The 4-week flagship sprint. We audit your chaos, design your architecture, and build the automations that run your business.
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
            <Card className="group relative overflow-hidden border-2 border-t-4 border-t-[hsl(var(--waypoint-s3))] hover:border-[hsl(var(--waypoint-s3))] transition-all duration-300 hover:glow-s3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--waypoint-s3))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--waypoint-s3))]/10 text-[hsl(var(--waypoint-s3))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--waypoint-s3))] group-hover:text-[hsl(var(--waypoint-s3-foreground))] group-hover:glow-s3 transition-all duration-300">
                  <TrendingUp className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-medium mb-1 font-sans">Lumina Ignite</h3>
                <p className="text-sm text-foreground/50 mb-4 font-medium">For Growth · The Partner</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Your ongoing AI partner. Monthly optimization, new builds, and strategic guidance to scale your systems as you grow.
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

      {/* Gradient transition */}
      <div className="section-divider-light-to-dark" />

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
                <div className="text-3xl md:text-4xl font-display text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Gradient transition */}
      <div className="section-divider-dark-to-light" style={{ background: `linear-gradient(to bottom, hsl(var(--foreground)), hsl(var(--cream)))` }} />

      {/* Social Proof - CREAM */}
      <section className="px-4 md:px-8 py-16 md:py-32 bg-cream relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-8 text-primary/20" />
          <blockquote className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8">
            "Donovan is AI. He's The Answer."
          </blockquote>
          <div className="text-foreground/60">
            <p className="font-medium text-foreground/80">Jamar Wright</p>
            <p className="text-sm">Owner/Operator, Revive Beauty Salon</p>
          </div>
        </div>
      </section>

      {/* Gradient transition */}
      <div className="section-divider-cream-to-light" />

      {/* The Journey Visual - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-6 text-center tracking-tight">
            Your Path to <span className="font-medium">AI Clarity</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
            Every engagement follows the same principle: orientation before execution
          </p>

          {/* Vertical Timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/10 via-primary/40 to-[hsl(var(--waypoint-s3))]/40" />

            {/* Entry Points */}
            <div className="space-y-0">
              {/* Quiz */}
              <Link to="/quiz" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors border border-foreground/10 group-hover:border-primary/30">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">Free</div>
                  <div className="font-medium text-lg group-hover:text-primary transition-colors">AI Readiness Quiz</div>
                </div>
              </Link>

              {/* Field Guides */}
              <Link to="/field-guides/analog" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors border border-foreground/10 group-hover:border-primary/30">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$47 – $297</div>
                  <div className="font-medium text-lg group-hover:text-primary transition-colors">Field Guides</div>
                </div>
              </Link>

              {/* Diagnostic - highlighted */}
              <Link to="/diagnostic" className="group relative flex items-start gap-5 md:gap-6 py-6 bg-foreground/[0.03] hover:bg-foreground/[0.06] rounded-xl px-2 transition-colors border border-foreground/10">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-foreground text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-lg">
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$1,500 · The Starting Point</div>
                  <div className="font-medium text-xl">AI Readiness Diagnostic</div>
                  <div className="text-sm text-foreground/50 mt-1">Scorecard + Gap Map + Action Plan + Loom Walkthrough</div>
                </div>
              </Link>

              {/* Lumina Labs */}
              <Link to="/products/lumina-labs" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[hsl(var(--waypoint-literacy))]/10 flex items-center justify-center flex-shrink-0 transition-colors border border-[hsl(var(--waypoint-literacy))]/20 group-hover:border-[hsl(var(--waypoint-literacy))]/50">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--waypoint-literacy))]" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$1,500 – $3,000</div>
                  <div className="font-medium text-lg text-[hsl(var(--waypoint-literacy))]">Lumina Labs</div>
                  <div className="text-xs text-foreground/50 mt-1">Team Workshop</div>
                </div>
              </Link>

              {/* Lumina Compass */}
              <Link to="/products/lumina-compass" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[hsl(var(--waypoint-integration))]/10 flex items-center justify-center flex-shrink-0 transition-colors border border-[hsl(var(--waypoint-integration))]/20 group-hover:border-[hsl(var(--waypoint-integration))]/50">
                  <Compass className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--waypoint-integration))]" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$15,000</div>
                  <div className="font-medium text-lg text-[hsl(var(--waypoint-integration))]">Lumina Compass</div>
                  <div className="text-xs text-foreground/50 mt-1">4-Week Sprint</div>
                </div>
              </Link>

              {/* S3 */}
              <Link to="/waypoints/s3" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[hsl(var(--waypoint-s3))]/10 flex items-center justify-center flex-shrink-0 transition-colors border border-[hsl(var(--waypoint-s3))]/20 group-hover:border-[hsl(var(--waypoint-s3))]/50">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--waypoint-s3))]" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$50K – $250K</div>
                  <div className="font-medium text-lg text-[hsl(var(--waypoint-s3))]">S³ Transformation</div>
                  <div className="text-xs text-foreground/50 mt-1">Scale · Sale · Succession</div>
                </div>
              </Link>

              {/* Ignite */}
              <Link to="/products/lumina-ignite" className="group relative flex items-start gap-5 md:gap-6 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[hsl(var(--waypoint-s3))]/10 flex items-center justify-center flex-shrink-0 transition-colors border border-[hsl(var(--waypoint-s3))]/20 group-hover:border-[hsl(var(--waypoint-s3))]/50">
                  <Flame className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--waypoint-s3))]" />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-foreground/40 mb-1">$3,000 – $7,500/mo</div>
                  <div className="font-medium text-lg">Lumina Ignite</div>
                  <div className="text-xs text-foreground/50 mt-1">Ongoing AI Retainer</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* Gradient transition */}
      <div className="section-divider-light-to-dark" />

      {/* Final CTA - DARK */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-40" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-white">
            Before you automate. <br className="hidden md:block" />
            <span className="font-medium">Get clear.</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            The AI Readiness Diagnostic tells you exactly where you stand and what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/diagnostic" className="gap-2">
                Begin Your Diagnostic
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
    </div>
  );
};

export default Index;
