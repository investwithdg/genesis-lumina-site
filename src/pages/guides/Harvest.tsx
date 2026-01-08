import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Download, FolderSync, Layers, Zap, ArrowRight, Link as LinkIcon, ShieldCheck } from "lucide-react";

const Harvest = () => {
  const purchaseUrl = "https://buy.stripe.com/9B6aEX89ydh8f9T5sP1Fe08";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
                <LinkIcon className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">System Integration Waypoint • Field Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-tight text-white">
              Harvest <span className="font-medium">by Lumina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-4">
              The AI extraction and synthesis playbook.
            </p>
            
            <div className="flex items-center gap-4 mb-12">
              <p className="text-4xl font-medium text-white">$47</p>
              <span className="text-sm text-white/40 px-3 py-1 rounded-full border border-white/20">{"{X}"}+ copies sold</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                  Get the Harvest Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                Book a Strategy Session
              </BookCallButton>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">The <span className="font-medium">Problem</span></h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You generate billions in ChatGPT threads—frameworks, insights, strategies, products—then lose it all. You pay the "creative tax" by starting from zero every single time.
          </p>
        </div>
      </SectionLight>

      {/* What You'll Learn - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">What You'll <span className="font-medium">Learn</span></h2>
          <p className="text-lg text-white/60 text-center mb-12">Turn disposable AI outputs into compounding assets</p>

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
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Outcome Guarantee - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-integration))]" />
          <h2 className="text-3xl font-light mb-4">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-foreground/80 italic mb-6">
            "You'll never look at AI responses the same again."
          </p>
          <p className="text-foreground/60">
            If you don't feel confident building harvest systems after reading this guide, email us for a full refund. No questions asked.
          </p>
        </div>
      </SectionLight>

      {/* Who This Is For - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-light mb-12 text-center text-white">This Guide Is <span className="font-medium">For You</span> If:</h2>
          
          <div className="space-y-6">
            {[
              "You already use AI but treat outputs as disposable",
              "You find yourself recreating the same prompts and frameworks",
              "You want to shift from consumption to accumulation",
              "You're tired of paying the creative tax",
              "You're ready to build intellectual wealth, not just content"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-3" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* CTA - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Stop Losing <span className="font-medium">Your Best Ideas</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Build the infrastructure to capture, compound, and deploy everything AI creates for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Harvest Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60 mb-12">
            <span>Next Guide:</span>
            <Link to="/field-guides/audit" className="font-medium text-[hsl(var(--waypoint-s3))] hover:underline flex items-center gap-1">
              Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-foreground/10">
            <p className="text-foreground/60 mb-4">Not ready? Get weekly insights instead:</p>
            <NewsletterCTA compact />
          </div>
        </div>
      </SectionLight>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Harvest;
