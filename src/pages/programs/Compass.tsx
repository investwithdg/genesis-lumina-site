import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

      {/* Zigzag Section 1: What Compass Is (Text Left, Image Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">What Compass Is</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              An intensive 4-week sprint where we audit your entire operation, design a custom AI system, 
              build everything for you, and train your team.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              This is transformation, not just automation. Complete system overhaul for businesses 
              ready to scale fast and invest seriously in AI infrastructure.
            </p>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="AI transformation workspace" 
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
                        <span>Have funding or revenue to invest seriously</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Need a complete system overhaul, not quick fixes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Have a team ready to learn new systems</span>
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
                        <span>Want custom architecture, not off-the-shelf tools</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Need fast results for growth or investor pressure</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Serious about AI transformation, not just testing</span>
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

      {/* Zigzag Section 2: 4-Week Process (Image Left, Text Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Code development and automation" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">4-Week Process</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Discovery → Design → Build → Deliver
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span><strong>Discovery:</strong> We audit your mess and find what's costing you the most time</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span><strong>Design:</strong> Custom AI system designed to eliminate your biggest bottlenecks</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span><strong>Build:</strong> We build and test everything while you keep running your business</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span><strong>Deliver:</strong> Your team gets trained and you get 30 days of support</span>
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