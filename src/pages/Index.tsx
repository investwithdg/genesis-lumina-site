
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 tracking-tight">
            Clarity, Not Chaos.<br />
            Guidance, Not Gimmicks.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            AI fluency and ethical transformation for values-aligned teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/compass">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-8 py-6 text-lg font-medium"
              >
                Apply for The Compass
              </Button>
            </Link>
            <Link to="/ignite">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-6 text-lg font-medium"
              >
                Start Ignite
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Cards Section */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Ignite Program Card */}
          <Card className="border-0 shadow-none bg-transparent animate-slide-in">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                ✴ Lumina Ignite
              </h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Ongoing monthly AI advisory for teams who know they need clarity—without chaos.
              </p>
              <ul className="space-y-3 mb-8 text-foreground/80">
                <li>• One 60–90 min strategy session/month</li>
                <li>• Custom Notion portal + toolkits</li>
                <li>• Monthly "Fluency Brief" report</li>
              </ul>
              <Link to="/ignite">
                <Button 
                  variant="ghost" 
                  className="group text-lg font-medium p-0 h-auto hover:bg-transparent"
                >
                  <span className="hover-underline">Start Ignite</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Compass Program Card */}
          <Card className="border-0 shadow-none bg-transparent animate-slide-in [animation-delay:200ms]">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                ✫ The Lumina Compass
              </h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                A 4-week private AI sprint for leaders ready to integrate AI with precision and purpose.
              </p>
              <ul className="space-y-3 mb-8 text-foreground/80">
                <li>• 90-min deep calibration call</li>
                <li>• Precision workshop: prompts, tools, decision layers</li>
                <li>• Ethics & culture alignment session</li>
                <li>• Final strategic memo + Loom walkthrough</li>
              </ul>
              <Link to="/compass">
                <Button 
                  variant="ghost" 
                  className="group text-lg font-medium p-0 h-auto hover:bg-transparent"
                >
                  <span className="hover-underline">Apply for Compass</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 text-foreground/90">
            "AI without humans is like a car without a driver. We see how that's going."
          </blockquote>
          <p className="text-lg text-foreground/60 text-right">
            – Donovan, Founder of Genesis Lumina
          </p>
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

export default Index;
