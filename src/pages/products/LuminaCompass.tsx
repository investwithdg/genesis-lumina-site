import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Compass, Map, Wrench, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

const LuminaCompass = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--waypoint-integration))]/5 to-transparent pointer-events-none" />
        <div className="geometric-bg">
          <div className="geometric-shape shape-circle" />
          <div className="geometric-shape shape-square" />
        </div>
        
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
              <Compass className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">System Integration Product</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Lumina <span className="font-medium">Compass</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 max-w-3xl">
            A 4-week flagship sprint that maps your systems, builds your automations, and delivers a complete Notion command center.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallButton size="lg" className="text-lg px-10 py-6 h-auto">
              Book Your Strategy Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/waypoints/system-integration">Learn About System Integration</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Your <span className="font-medium">AI Sprint</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            Compass is our intensive 4-week engagement where we audit your entire operation, design your AI infrastructure, build your automations, and train your team. You walk away with a complete system, not a plan.
          </p>
        </div>
      </section>

      {/* The 4 Weeks */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">The <span className="font-medium">4 Weeks</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Discovery → Design → Build → Deliver</p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              week: "Week 1",
              icon: Map,
              title: "Discovery",
              desc: "Full systems audit. We map every process, tool, and workflow to identify automation opportunities."
            },
            {
              week: "Week 2",
              icon: Compass,
              title: "Design",
              desc: "Custom automation architecture. We design the systems and integrations specific to your business."
            },
            {
              week: "Week 3",
              icon: Wrench,
              title: "Build",
              desc: "Hands-on implementation. We build and test your automations, integrations, and Notion command center."
            },
            {
              week: "Week 4",
              icon: GraduationCap,
              title: "Deliver",
              desc: "Training and handoff. Your team learns the systems and you get complete documentation."
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all hover:glow-integration">
              <div className="text-xs font-medium text-foreground/40 mb-3">{item.week}</div>
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))]/10 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What You <span className="font-medium">Get</span></h2>
          
          <div className="space-y-4">
            {[
              "Complete systems audit and process mapping",
              "Custom automation roadmap prioritized by ROI",
              "5-10 core automations built and tested",
              "Notion command center with all documentation",
              "Tool integrations across your tech stack",
              "Team training sessions (recorded for future hires)",
              "30-day post-launch support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6">The <span className="font-medium">Investment</span></h2>
        
        <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-integration))] rounded-lg glow-integration mb-8">
          <div className="text-4xl font-light mb-2">Starting at $15,000</div>
          <div className="text-sm text-foreground/60">4-week intensive engagement</div>
        </div>

        <p className="text-sm text-foreground/60 mb-12 max-w-xl mx-auto">
          Final pricing based on business complexity, number of integrations, and team size. ROI typically realized within 60-90 days.
        </p>

        <BookCallButton size="lg" className="text-lg px-8">
          Book Your Strategy Call
        </BookCallButton>
      </section>

      {/* Related Waypoint */}
      <section className="px-8 py-12 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-foreground/60 mb-4">This product is part of the System Integration waypoint</p>
          <Link to="/waypoints/system-integration" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center justify-center gap-1">
            Explore System Integration
            <ArrowRight className="w-4 h-4" />
          </Link>
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

export default LuminaCompass;