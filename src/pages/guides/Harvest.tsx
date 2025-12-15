import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Download, FolderSync, Layers, Zap, CheckCircle, ArrowRight, Link as LinkIcon } from "lucide-react";

const Harvest = () => {
  const purchaseUrl = "https://buy.stripe.com/9B6aEX89ydh8f9T5sP1Fe08";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
              <LinkIcon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">System Integration Waypoint • Field Guide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            Harvest <span className="font-medium">by Lumina</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-4">
            The AI extraction and synthesis playbook.
          </p>
          
          <p className="text-3xl font-medium mb-12">$47</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Harvest Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8">
              Book a Strategy Session
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">The <span className="font-medium">Problem</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            You generate billions in ChatGPT threads—frameworks, insights, strategies, products—then lose it all. You pay the "creative tax" by starting from zero every single time.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What You'll <span className="font-medium">Learn</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Turn disposable AI outputs into compounding assets</p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Download,
              title: "Capture → Place → Synthesize → Deploy",
              desc: "The complete workflow for extracting value from every AI conversation."
            },
            {
              icon: FolderSync,
              title: "Harvest Infrastructure",
              desc: "Build your system with Notion templates, staging areas, and review loops."
            },
            {
              icon: Layers,
              title: "Intellectual Asset Building",
              desc: "Transform ephemeral AI responses into reusable, compounding knowledge assets."
            },
            {
              icon: Zap,
              title: "Free Creation",
              desc: "Eliminate the cognitive load of remembering what you've already thought."
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all hover:glow-integration">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))]/10 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcome Guarantee */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-integration))]" />
          <h2 className="text-3xl font-light mb-4">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-foreground/80 italic">
            "You'll never look at AI responses the same again."
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">This Guide Is <span className="font-medium">For You</span> If:</h2>
        
        <div className="space-y-6">
          {[
            "You already use AI but treat outputs as disposable",
            "You find yourself recreating the same prompts and frameworks",
            "You want to shift from consumption to accumulation",
            "You're tired of paying the creative tax",
            "You're ready to build intellectual wealth, not just content"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-2" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Stop Losing <span className="font-medium">Your Best Ideas</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Build the infrastructure to capture, compound, and deploy everything AI creates for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Harvest Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <span>Next Guide:</span>
            <Link to="/guides/audit" className="font-medium text-[hsl(var(--waypoint-s3))] hover:underline flex items-center gap-1">
              Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
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

export default Harvest;
