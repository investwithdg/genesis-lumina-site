import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import { Mail, Lightbulb, Zap, Gift, ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-8">
              <Mail className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              The Genesis Lumina <span className="font-medium">Newsletter</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              AI + systems insights, exclusive tips, and early access offers—delivered to your inbox.
            </p>
            
            <Button asChild size="lg" className="text-lg px-10 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                Subscribe on Substack
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* What You'll Get - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            What You'll <span className="font-medium">Get</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
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
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Recent Topics - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-light mb-12 text-center text-white">
            Recent <span className="font-medium">Topics</span>
          </h2>
          
          <div className="space-y-4">
            {[
              "How to audit your operations for AI-readiness in 60 minutes",
              "The 3 automations every solo founder should build first",
              "Why most AI implementations fail (and how to avoid it)",
              "Building a Notion system that runs your business",
              "The hidden cost of manual workflows"
            ].map((topic, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  {idx + 1}
                </div>
                <p className="text-white/80">{topic}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                View All Past Issues
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* Subscribe CTA - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to <span className="font-medium">Level Up</span>?
          </h2>
          <p className="text-lg text-foreground/60 mb-10">
            Join founders, operators, and leaders who are building smarter with AI.
          </p>
          
          <div className="bg-card border-2 border-border rounded-xl p-8 md:p-10 shadow-sm">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
                Subscribe Free on Substack
              </a>
            </Button>
            
            <p className="text-sm text-foreground/60 mt-6">
              Free to subscribe. Unsubscribe anytime. We never share your email.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Newsletter;
