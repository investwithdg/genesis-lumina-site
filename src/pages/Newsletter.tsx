import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Mail, Lightbulb, Zap, Gift, ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
        <div className="geometric-bg">
          <div className="geometric-shape shape-circle" />
          <div className="geometric-shape shape-square" />
          <div className="geometric-shape shape-triangle" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8">
            <Mail className="w-8 h-8" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            The Genesis Lumina <span className="text-muted-foreground">Newsletter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            AI + systems insights, exclusive tips, and early access offers—delivered to your inbox.
          </p>
          
          <Button asChild size="lg" className="text-lg px-10 py-6 h-auto">
            <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
              Subscribe on Substack
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            What You'll <span className="font-medium">Get</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Every issue is designed to help you work smarter, not harder.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "AI + Systems Insights",
                desc: "Practical strategies for integrating AI into your workflows. No hype, no jargon—just what works."
              },
              {
                icon: Zap,
                title: "Exclusive Tips",
                desc: "Techniques and shortcuts from real client engagements. Things you won't find anywhere else."
              },
              {
                icon: Gift,
                title: "Early Access Offers",
                desc: "Be the first to know about new products, workshops, and limited availability engagements."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="px-8 py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to <span className="font-medium">Level Up</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join founders, operators, and leaders who are building smarter with AI.
          </p>
          
          <div className="bg-card border-2 border-border rounded-xl p-8 md:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                  Subscribe Free on Substack
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Free to subscribe. Unsubscribe anytime. We never share your email.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Topics */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">
            Recent <span className="font-medium">Topics</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "How to audit your operations for AI-readiness in 60 minutes",
              "The 3 automations every solo founder should build first",
              "Why most AI implementations fail (and how to avoid it)",
              "Building a Notion system that runs your business",
              "The hidden cost of manual workflows"
            ].map((topic, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-primary/20 hover:bg-muted/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  {idx + 1}
                </div>
                <p className="text-foreground/90">{topic}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                View All Past Issues
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-border">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-muted-foreground/30">│</span>
          <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
          <span className="text-muted-foreground/30">│</span>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Newsletter;