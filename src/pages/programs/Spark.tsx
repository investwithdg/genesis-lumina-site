import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BusinessSystemsSelector from "@/components/BusinessSystemsSelector";

const Spark = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);

  const handleOrderSpark = () => {
    if (selectedSystem) {
      // In a real implementation, you'd pass the selected system to your order process
      window.open('{{stripe_link_spark}}', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* A) Hero Banner */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            One Automation. <span className="text-foreground/70">72 Hours.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Stop doing manual tasks that steal your time. Get one high-impact automation delivered fast.
          </p>
        </div>
      </section>

      {/* B) What the Offer Is */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What Spark Is</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Spark is your fastest path to AI automation. We identify one critical bottleneck in your business, 
            build a custom solution, and deliver it in 72 hours. No complexity, no long timelines—just results.
          </p>
        </div>
      </section>

      {/* C) Who It's For */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">Perfect If You're</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Drowning in manual tasks that should be automated</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Ready to test AI automation without huge risk</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Want results fast, not months of planning</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Solo founder or small team feeling overwhelmed</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Making money but fighting messy workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Need one specific problem solved immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Systems Selector */}
      <BusinessSystemsSelector 
        selectedSystem={selectedSystem}
        onSystemSelect={setSelectedSystem}
      />

      {/* D) What You Get */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What You Get</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">15-Minute Strategy Call</h3>
                <p className="text-foreground/80">We identify your biggest time-waster and design the perfect automation to eliminate it.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Custom Automation Built</h3>
                <p className="text-foreground/80">Your automation gets built, tested, and deployed—ready to save you hours every week.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Training & Handoff</h3>
                <p className="text-foreground/80">You get a walkthrough, simple instructions, and confidence to use your new automation immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E) CTA */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <Card className="p-8 max-w-md mx-auto">
            <CardContent className="p-0">
              <div className="text-4xl font-bold mb-4">$300</div>
              <p className="text-foreground/80 mb-6">One automation, delivered in 72 hours</p>
              <Button 
                size="lg" 
                className="w-full mb-4"
                onClick={handleOrderSpark}
                disabled={!selectedSystem}
              >
                {selectedSystem ? "Order Spark" : "Select System Above"}
              </Button>
              <p className="text-sm text-foreground/60">
                Need ongoing support? Check out <Link to="/programs/ignite" className="text-primary hover:underline">Ignite</Link>
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

export default Spark;