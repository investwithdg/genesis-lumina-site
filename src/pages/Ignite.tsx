import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Ignite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              ✴ Monthly AI Advisory Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Ignite Your Team's <span className="text-foreground/70">AI Fluency</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            A monthly clarity layer for values-aligned teams who know they need AI—but not the chaos.
          </p>
        </div>
      </section>

      {/* ... keep existing sections with same content */}
      
      {/* What You Get Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">What You Get</h2>
          
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/80 mb-16">
            <li>• One 60–90 min strategy session each month</li>
            <li>• Custom Notion portal stocked with frameworks and toolkits</li>
            <li>• Monthly "AI Fluency Brief" with actionable insights and trends</li>
            <li>• Optional: One async Loom or Notion thread reply per month</li>
          </ul>
        </div>
      </section>

      {/* Price + CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="text-2xl md:text-3xl font-medium mb-4">
            $2,000 / month
          </div>
          <p className="text-lg text-foreground/60 mb-12">
            (3-month minimum commitment)
          </p>
          <p className="text-sm text-foreground/50 mb-12">
            Cancel anytime after 3 months—no long-term lock-in.
          </p>
          
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium"
          >
            Start Ignite <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">How It Works</h2>
          
          <div className="space-y-12">
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">1. Launch Series (Month 1)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Three bite-sized recorded lessons + 60-min live onboarding call to set your AI foundation.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">2. Monthly Workshops (Ongoing)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Interactive sessions (e.g., Prompt Clinics, Workflow Builder Labs) to keep your team engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">3. As-Needed Support</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Submit "AI Use Case Forms" to request targeted guidance. We reply within 48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">4. Strategic Calibration</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Each session ends with a one-page "Fluency Brief" summarizing insights, next steps, and key metrics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium"
            >
              Start Ignite <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover-underline">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/ignite" className="hover-underline">Ignite</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/compass" className="hover-underline">Compass</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover-underline">FAQ</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Ignite;
