import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const Results = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            Real <span className="font-medium">Results</span> from Real Businesses
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-12">
            See how businesses transformed operations, saved time, and scaled with AI infrastructure.
          </p>

          <Button asChild size="lg">
            <a href="{{stripe_link_call}}">Get Results Like These</a>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, value: "20+ hrs", label: "Average weekly time saved per client" },
              { icon: DollarSign, value: "$150K+", label: "Average annual cost savings" },
              { icon: TrendingUp, value: "3x", label: "Average revenue growth enablement" }
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Placeholder */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">Client <span className="font-medium">Transformations</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((idx) => (
            <Card key={idx} className="p-8 border-2">
              <div className="mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/60">
                  CASE STUDY {idx}
                </span>
              </div>
              
              <h3 className="text-xl font-medium mb-3">
                [Client name] - [Industry]
              </h3>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Brief description of the challenge, solution implemented, and measurable results achieved.
              </p>

              <div className="pt-4 border-t border-foreground/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium mb-1">Time Saved</div>
                  <div className="text-foreground/60">[X] hrs/week</div>
                </div>
                <div>
                  <div className="font-medium mb-1">ROI</div>
                  <div className="text-foreground/60">[X]% increase</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-6">
            Case studies coming soon. Real client results are confidential but transformative.
          </p>
          <Button asChild variant="outline">
            <a href="{{stripe_link_call}}">Discuss Your Results</a>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Write Your <span className="font-medium">Success Story</span>?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Book a call to discuss your specific challenges and map out your transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="{{stripe_link_call}}">Book Strategy Call</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/quiz">Find Your Waypoint</Link>
            </Button>
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

export default Results;
