import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Spark = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Get One <span className="text-foreground/70">Automation</span> Built
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Stop doing manual tasks that steal your time. Get one high-impact automation delivered in 72 hours.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What's Included</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Quick Strategy Call</h3>
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

      {/* Pricing & CTA */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <Card className="p-8 max-w-md mx-auto">
            <CardContent className="p-0">
              <div className="text-4xl font-bold mb-4">$300</div>
              <p className="text-foreground/80 mb-6">One automation, delivered in 72 hours</p>
              <Button asChild size="lg" className="w-full mb-4">
                <a href="{{stripe_link_spark}}">Order Spark</a>
              </Button>
              <p className="text-sm text-foreground/60">
                Need ongoing support? Check out <Link to="/programs/ignite" className="text-primary hover:underline">Ignite</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Delivery Promise */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-medium mb-4">72-Hour Delivery Promise</h3>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Your automation will be live and saving you time within 72 hours of order confirmation. 
            That's not a goal—it's a guarantee.
          </p>
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