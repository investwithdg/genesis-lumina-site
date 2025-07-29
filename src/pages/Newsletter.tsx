import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Get the Genesis Lumina <span className="text-foreground/70">Newsletter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Learn AI+systems insights, get exclusive tips, and access early offers before anyone else.
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                Subscribe on Substack
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Embed */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-12">
            <iframe 
              src="https://genesislumina.substack.com/embed" 
              width="480" 
              height="320" 
              style={{border: "1px solid #EEE", background: "white"}} 
              frameBorder="0" 
              scrolling="no" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <p className="text-sm text-foreground/60">
            Free to subscribe. Unsubscribe anytime.
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

export default Newsletter;