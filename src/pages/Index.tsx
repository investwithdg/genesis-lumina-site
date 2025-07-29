import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-6xl mx-auto relative">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Stop duct-taping your business with <span className="text-foreground/70">broken systems</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto mb-12">
            Get AI automations that actually work. No more manual chaos. No more wasted time.
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <a href="{{stripe_link_spark}}">Order Spark for $300</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-slide-in">
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
            Every day you spend copy-pasting data and managing tasks manually is a day your competitors pull ahead. Your team burns out while your business stays stuck.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Choose Your Solution</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spark */}
            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Spark</h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                One automation installed in 72 hours.
              </p>
              <div className="text-2xl font-bold mb-4">$300</div>
              <Button asChild size="sm" className="w-full">
                <a href="{{stripe_link_spark}}">Order Spark</a>
              </Button>
            </Card>

            {/* Ignite */}
            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Ignite</h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                Monthly coaching with automations built.
              </p>
              <div className="text-2xl font-bold mb-4">$1K-$5K/mo</div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/programs/ignite">Choose Tier</Link>
              </Button>
            </Card>

            {/* Compass */}
            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Compass</h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                4-week AI transformation sprint.
              </p>
              <div className="text-2xl font-bold mb-4">$15K</div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="{{stripe_link_compass}}">Launch Compass</a>
              </Button>
            </Card>

            {/* Hourly */}
            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Hourly</h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                Strategic consultation sessions.
              </p>
              <div className="text-2xl font-bold mb-4">$200/hr</div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="{{stripe_link_hourly}}">Book Session</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="bg-foreground/5 rounded-lg p-12">
            <p className="text-lg text-foreground/60">Insert testimonial or logo grid here</p>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="/lovable-uploads/f552ec4f-6970-4548-ab52-33f1bb821143.png"
              alt="Donovan Green"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-medium">Donovan Green</div>
              <div className="text-sm text-foreground/60">Founder, Genesis Lumina</div>
            </div>
          </div>
          <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
            "AI isn't magic—it's a tool. The magic happens when you know exactly how to wield it for your unique business goals."
          </blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Ready to stop duct-taping your business?</h2>
          <p className="text-xl text-foreground/70 mb-8">Choose your solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <a href="{{stripe_link_spark}}">Start with Spark - $300</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link to="/pricing">See All Options</Link>
            </Button>
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

export default Index;