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

const Ignite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Banner */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Monthly AI <span className="text-foreground/70">Coaching</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Strategy calls, automation building, and expert guidance. Stop fighting your systems.
          </p>
        </div>
      </section>

      {/* Zigzag Section 1: What Ignite Is (Text Left, Image Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">What Ignite Is</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Monthly AI coaching that transforms your business operations. We provide strategy calls, 
              build custom automations, and give you ongoing support to implement AI systems that actually work.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Perfect for founders and teams ready to move from manual chaos to automated clarity. 
              Stop spending hours on repetitive tasks and start focusing on growth.
            </p>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="AI coaching and automation" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section: Three Tiers */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Choose Your Level</h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Core Tier */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="p-6 bg-gradient-to-br from-background to-muted border-border h-full">
                  <CardContent className="p-0 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        1K
                      </div>
                      <h3 className="text-xl font-bold mb-3">Core</h3>
                      <p className="text-lg font-semibold text-foreground/80 mb-4">Save 5+ Hours Weekly</p>
                      <div className="space-y-2 text-sm text-foreground/70 mb-6">
                        <p>✓ 1 call + async support</p>
                        <p>✓ Basic automation guidance</p>
                        <p>✓ Testing ongoing AI support</p>
                        <p>✓ Perfect for solo founders</p>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <a href="{{stripe_link_ignite_core}}">Start Core</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Build Tier */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="p-6 bg-gradient-to-br from-muted/50 to-muted border-foreground/20 h-full">
                  <CardContent className="p-0 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        3K
                      </div>
                      <h3 className="text-xl font-bold mb-3">Build</h3>
                      <p className="text-lg font-semibold text-foreground/80 mb-4">Speed to Market 3x Faster</p>
                      <div className="space-y-2 text-sm text-foreground/70 mb-6">
                        <p>✓ 2 calls + 1 automation/month</p>
                        <p>✓ SOP review included</p>
                        <p>✓ Growing fast, need systems</p>
                        <p>✓ Perfect for small teams</p>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <a href="{{stripe_link_ignite_build}}">Start Build</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Architect Tier */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="p-6 bg-gradient-to-br from-foreground/5 to-foreground/10 border-foreground/30 h-full">
                  <CardContent className="p-0 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        5K
                      </div>
                      <h3 className="text-xl font-bold mb-3">Architect</h3>
                      <p className="text-lg font-semibold text-foreground/80 mb-4">Complete System Mastery</p>
                      <div className="space-y-2 text-sm text-foreground/70 mb-6">
                        <p>✓ Embedded ops coach</p>
                        <p>✓ Regular audits + automations</p>
                        <p>✓ Complete system overhaul</p>
                        <p>✓ Perfect for scaling teams</p>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <a href="{{stripe_link_ignite_architect}}">Start Architect</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Zigzag Section 2: What You Get (Image Left, Text Right) */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="AI automation and coding" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">What You Get</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Strategic Direction:</strong> Monthly calls to identify bottlenecks and plan automation priorities</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Custom Automations:</strong> We build the systems while you focus on running your business</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Ongoing Support:</strong> Async help when systems break or need adjustments</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Process Optimization:</strong> SOP reviews and workflow improvements included</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Growth Focused:</strong> Systems designed to scale with your business, not hold it back</span>
              </div>
            </div>
          </div>
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

export default Ignite;