import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Compass = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* A) Hero Banner */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            4-Week AI <span className="text-foreground/70">Sprint</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Complete AI system built in 30 days. From chaos to clarity, fast.
          </p>
        </div>
      </section>

      {/* B) What the Offer Is */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What Compass Is</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Compass is an intensive 4-week sprint where we audit your entire operation, design a custom AI system, 
            build everything for you, and train your team. It's transformation, not just automation.
          </p>
        </div>
      </section>

      {/* C) Who It's For */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">Perfect If You</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Have funding or revenue to invest seriously</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Need a complete system overhaul, not quick fixes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Have a team ready to learn new systems</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Want custom architecture, not off-the-shelf tools</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Need fast results for growth or investor pressure</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Serious about AI transformation, not just testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D) What You Get - Four-Step Breakdown */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What You Get: Discovery → Design → Build → Deliver</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Discovery</h3>
              <p className="text-sm text-foreground/80">
                We audit your mess and find what's costing you the most time.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Design</h3>
              <p className="text-sm text-foreground/80">
                Custom AI system designed to eliminate your biggest bottlenecks.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Build</h3>
              <p className="text-sm text-foreground/80">
                We build and test everything while you keep running your business.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Deliver</h3>
              <p className="text-sm text-foreground/80">
                Your team gets trained and you get 30 days of support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* E) CTA */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <Card className="p-8 max-w-md mx-auto">
            <CardContent className="p-0">
              <div className="text-4xl font-bold mb-4">$15,000</div>
              <p className="text-foreground/80 mb-6">4-week AI transformation sprint</p>
              <Button asChild size="lg" className="w-full mb-4">
                <a href="{{stripe_link_compass}}">Launch Compass</a>
              </Button>
              <p className="text-sm text-foreground/60">
                Want ongoing support? Check out <Link to="/programs/ignite" className="text-primary hover:underline">Ignite</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
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

export default Compass;