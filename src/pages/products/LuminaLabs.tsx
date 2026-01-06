import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Users, Lightbulb, CheckCircle, Clock, ArrowRight } from "lucide-react";

const LuminaLabs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--waypoint-literacy))]/5 to-transparent pointer-events-none" />
        <div className="geometric-bg">
          <div className="geometric-shape shape-circle" />
          <div className="geometric-shape shape-square" />
        </div>
        
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center glow-literacy">
              <Users className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">AI Literacy Product</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Lumina <span className="font-medium">Labs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 max-w-3xl">
            Hands-on AI workshops that give your team practical skills in 2-3 hours. Live or virtual, custom to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallButton size="lg" className="text-lg px-10 py-6 h-auto">
              Book Your Workshop
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Link to="/waypoints/ai-literacy">Learn About AI Literacy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Intensive <span className="font-medium">Team Training</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            Lumina Labs delivers concentrated AI literacy to your entire team in a single session. No fluff, no jargon—just practical knowledge your team can use immediately.
          </p>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Workshop <span className="font-medium">Format</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Flexible delivery to fit your team's needs</p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users,
              title: "Live In-Person",
              desc: "On-site workshops at your location. Ideal for team building and hands-on collaboration. Best for teams of 5-50."
            },
            {
              icon: Lightbulb,
              title: "Virtual Sessions",
              desc: "Interactive online workshops via Zoom. Perfect for distributed teams. Includes breakout rooms and live Q&A."
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-literacy))] transition-all hover:glow-literacy">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-literacy))]/10 text-[hsl(var(--waypoint-literacy))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* What's Covered */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What's <span className="font-medium">Covered</span></h2>
          
          <div className="space-y-4">
            {[
              "AI fundamentals explained without technical jargon",
              "Real-world use cases specific to your industry",
              "Hands-on exercises with AI tools your team can use",
              "Framework for identifying automation opportunities",
              "Q&A session to address your team's specific questions",
              "Resource kit with templates and continued learning materials"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6">The <span className="font-medium">Investment</span></h2>
        
        <div className="flex items-center justify-center gap-2 mb-4 text-foreground/60">
          <Clock className="w-5 h-5" />
          <span>2-3 hour intensive workshop</span>
        </div>

        <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-literacy))] rounded-lg glow-literacy mb-8">
          <div className="text-4xl font-light mb-2">$1,500 – $3,000</div>
          <div className="text-sm text-foreground/60">Based on team size and format</div>
        </div>

        <p className="text-sm text-foreground/60 mb-12 max-w-xl mx-auto">
          Pricing varies by team size, location (for in-person), and customization requirements. Enterprise packages available for larger organizations.
        </p>

        <BookCallButton size="lg" className="text-lg px-8">
          Schedule Your Workshop
        </BookCallButton>
      </section>

      {/* Related Waypoint */}
      <section className="px-8 py-12 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-foreground/60 mb-4">This product is part of the AI Literacy waypoint</p>
          <Link to="/waypoints/ai-literacy" className="font-medium text-[hsl(var(--waypoint-literacy))] hover:underline flex items-center justify-center gap-1">
            Explore AI Literacy
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

export default LuminaLabs;