import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { BookOpen, Newspaper, Mail } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            AI <span className="font-medium">Resources</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Frameworks, guides, and insights to help you navigate your AI transformation journey.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-2 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Guides & Frameworks</h3>
            <p className="text-foreground/70 mb-6 text-sm">
              Practical resources to help you think strategically about AI implementation.
            </p>
            <div className="text-sm text-foreground/50">Coming soon</div>
          </Card>

          <Card className="p-8 text-center border-2 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Blog & Insights</h3>
            <p className="text-foreground/70 mb-6 text-sm">
              Deep dives on AI strategy, automation, and business transformation.
            </p>
            <div className="text-sm text-foreground/50">Coming soon</div>
          </Card>

          <Card className="p-8 text-center border-2 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Newsletter</h3>
            <p className="text-foreground/70 mb-6 text-sm">
              Weekly insights on AI, automation, and scaling intelligent systems.
            </p>
            <Button asChild size="sm" variant="outline">
              <Link to="/newsletter">Subscribe</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="px-8 py-24 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Building Our <span className="font-medium">Resource Library</span></h2>
          <p className="text-lg text-foreground/70 mb-8">
            We're curating high-quality resources to help you on your AI journey. In the meantime, book a call to get personalized guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="{{stripe_link_call}}">Book a Call</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/newsletter">Get Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/results" className="hover:text-primary transition-colors">Results</Link>
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

export default Resources;
