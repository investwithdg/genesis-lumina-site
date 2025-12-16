import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Flame, RefreshCw, Zap, HeadphonesIcon, CheckCircle, ArrowRight } from "lucide-react";

const LuminaIgnite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
              <Flame className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">System Integration Product</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            Lumina <span className="font-medium">Ignite</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
            Monthly AI retainer for ongoing system optimization, new automations, and strategic guidance. Your dedicated AI partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallButton size="lg" className="text-lg px-8">
              Schedule a Call to Inquire
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/waypoints/system-integration">Learn About System Integration</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Your Ongoing <span className="font-medium">AI Partner</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            Ignite is a monthly retainer that keeps your AI systems running, evolving, and improving. As your business grows and changes, we're there to build new automations, optimize existing ones, and provide strategic guidance.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What's <span className="font-medium">Included</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Continuous improvement, not one-time fixes</p>

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
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all hover:glow-integration">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))]/10 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Monthly Deliverables */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Monthly <span className="font-medium">Deliverables</span></h2>
          
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
          <div className="text-4xl font-light mb-2">$3,000 – $8,000/mo</div>
          <div className="text-sm text-foreground/60">3-month minimum commitment</div>
        </div>

        <p className="text-sm text-foreground/60 mb-12 max-w-xl mx-auto">
          Tier and pricing based on business size, complexity, and desired scope. Schedule a call to discuss your needs and get a custom quote.
        </p>

        <BookCallButton size="lg" className="text-lg px-8">
          Schedule a Call to Inquire
        </BookCallButton>
      </section>

      {/* Who It's For */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Ignite Is <span className="font-medium">For You</span> If:</h2>
          
          <div className="space-y-6">
            {[
              "You've completed Compass and want ongoing support",
              "Your business is growing and automations need to scale",
              "You want a dedicated AI partner, not one-off projects",
              "You need flexibility to add new automations as needs arise",
              "You value strategic guidance alongside technical execution"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-2" />
                <p className="text-lg text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Waypoint */}
      <section className="px-8 py-12">
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

export default LuminaIgnite;