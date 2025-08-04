import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            About <span className="text-foreground/70">Genesis Lumina</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Transforming businesses through intelligent automation and Kingdom-driven values.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in space-y-8 text-lg leading-relaxed">
          <p className="text-foreground/80">
            Genesis Lumina bridges the gap between AI potential and business reality. While countless businesses struggle with manual tasks and poorly implemented automation, we deliver practical solutions that actually work.
          </p>
          
          <p className="text-foreground/80">
            Founded by Donovan Green, a seasoned entrepreneur with deep expertise in real estate and automation, Genesis Lumina combines technical excellence with Kingdom-driven values. Our mission is clear: help leaders implement automation that saves time while maintaining integrity and human dignity.
          </p>
          
          <p className="text-foreground/80">
            From real estate empires to startup MVPs, Genesis Lumina has helped hundreds of businesses transform chaos into clarity. Our frameworks prioritize speed, simplicity, and scalability—because your business growth shouldn't wait for perfect systems.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-medium mb-8">Learn how we can transform your operations</h3>
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <a href="{{stripe_link_hourly}}">Book an Hourly Session</a>
          </Button>
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

export default About;