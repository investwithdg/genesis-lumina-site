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

      {/* Newsletter Form */}
      <section className="px-8 py-16 max-w-2xl mx-auto">
        <div className="animate-fade-in">
          <div className="bg-accent/30 border border-border rounded-lg p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <p className="text-xs text-foreground/60 text-center">
              Free to subscribe. Unsubscribe anytime. We'll never share your email.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/70 mb-4">Or subscribe via Substack:</p>
            <Button asChild variant="outline">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                Visit Our Substack
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
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