import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BusinessSystemsSelector from "@/components/BusinessSystemsSelector";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

      {/* Zigzag Section 1: What Spark Is (Text Left, Image Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">What Spark Is</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Rapid AI automation delivered in 72 hours. You give us your messy process, 
              we give you a working automation that saves hours every week.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Perfect for testing AI automation without huge commitment. One specific process, 
              one clean solution, guaranteed to work.
            </p>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="AI automation and circuit board" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section: Perfect If You */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Perfect If You</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="p-6 h-full">
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Drowning in manual tasks that should be automated</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Ready to test AI automation without huge risk</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Want results fast, not months of planning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="p-6 h-full">
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Solo founder or small team feeling overwhelmed</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Making money but fighting messy workflows</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Need one specific problem solved immediately</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Business Systems Selector */}
      <BusinessSystemsSelector 
        selectedSystem={selectedSystem}
        onSystemSelect={setSelectedSystem}
      />

      {/* Zigzag Section 2: What You Get (Image Left, Text Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
              alt="MacBook with code automation" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">What You Get</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Complete form-to-automation transformation in 72 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Quick Assessment:</strong> Tell us your biggest time-waster through our simple form</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Custom Build:</strong> Automation built, tested, and deployed in 72 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Training & Handoff:</strong> Walkthrough, documentation, and confidence to use it immediately</span>
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