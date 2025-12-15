import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { ArrowRight, Database, Layers, Repeat, Sparkles, CheckCircle } from "lucide-react";

const Harvest = () => {
  // Replace with your Gumroad/Stripe link
  const purchaseUrl = "#";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 bg-foreground/5 rounded-full text-sm mb-6">
          System Integration Waypoint
        </div>
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
          Harvest <span className="font-medium">by Lumina</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-2">
          The AI extraction and synthesis playbook.
        </p>
        <p className="text-3xl font-medium mb-8">$47</p>
        <Button asChild size="lg" className="px-8">
          <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
            Get the Harvest Guide
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </section>

      {/* Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-center">The Problem</h2>
          <Card className="p-8 border-2 border-foreground/10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              People generate billions in ChatGPT threads—frameworks, insights, strategies, 
              products—then lose it all. They pay the <strong>"creative tax"</strong> by 
              starting from zero every single time.
            </p>
          </Card>
        </div>
      </section>

      {/* What It Teaches */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Database className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Capture → Place → Synthesize → Deploy</h3>
              <p className="text-foreground/70 text-sm">
                The complete workflow for turning AI conversations into lasting assets.
              </p>
            </Card>
            <Card className="p-6">
              <Layers className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Harvest Infrastructure</h3>
              <p className="text-foreground/70 text-sm">
                Build Notion templates, staging areas, and review loops that compound over time.
              </p>
            </Card>
            <Card className="p-6">
              <Repeat className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Compounding Intellectual Assets</h3>
              <p className="text-foreground/70 text-sm">
                Turn disposable AI outputs into reusable frameworks that grow in value.
              </p>
            </Card>
            <Card className="p-6">
              <Sparkles className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Free Creation</h3>
              <p className="text-foreground/70 text-sm">
                Eliminate the cognitive load of remembering what you've already thought.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcome Guarantee */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-foreground/70" />
          <h2 className="text-2xl font-medium mb-4">Outcome Guarantee</h2>
          <p className="text-xl text-foreground/80 italic">
            "You'll never look at AI responses the same again."
          </p>
        </div>
      </section>

      {/* Key Framework */}
      <section className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-center">The Mindset Shift</h2>
          <Card className="p-8 border-2 border-foreground/10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              This guide introduces the shift from treating AI conversations as <em>ephemeral</em> 
              to treating them as <strong>raw material</strong> that must be systematically 
              captured, contextualized, and synthesized into reusable assets.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              Stop paying the creative tax. Start building wealth from every AI interaction.
            </p>
          </Card>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-center">Who This Is For</h2>
          <Card className="p-8 border-2 border-foreground/10 bg-background">
            <p className="text-lg text-foreground/80 leading-relaxed">
              For operators who already use AI but treat outputs as disposable. This is the 
              mindset shift from <strong>consumption to accumulation</strong>—from paying the 
              creative tax to building intellectual wealth.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-6">
            Ready to <span className="font-medium">stop losing your best ideas</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Harvest Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg">
              Book a Strategy Session
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© Genesis Lumina</p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/quiz" className="hover:text-foreground">Find Your Waypoint</Link>
            <Link to="/newsletter" className="hover:text-foreground">Newsletter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Harvest;