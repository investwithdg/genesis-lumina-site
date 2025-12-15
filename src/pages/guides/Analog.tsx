import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { ArrowRight, MapPin, Lightbulb, Target, CheckCircle } from "lucide-react";

const Analog = () => {
  // Replace with your Gumroad/Stripe link
  const purchaseUrl = "#";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 bg-foreground/5 rounded-full text-sm mb-6">
          AI Literacy Waypoint
        </div>
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
          Analog <span className="font-medium">by Lumina</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-2">
          The pre-build system design guide.
        </p>
        <p className="text-3xl font-medium mb-8">$47</p>
        <Button asChild size="lg" className="px-8">
          <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
            Get the Analog Guide
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
              Most people throw AI into chaos and expect order. They don't have a system 
              to design before they automate. Ideas scatter, projects stall, and AI becomes 
              another tool that doesn't stick—because the foundation was never built.
            </p>
          </Card>
        </div>
      </section>

      {/* What It Teaches */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <MapPin className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Visual Data Mapping</h3>
              <p className="text-foreground/70 text-sm">
                Map data relationships and workflows visually using mind mapping and color coding.
              </p>
            </Card>
            <Card className="p-6">
              <Lightbulb className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">Cognitive Scaffolding</h3>
              <p className="text-foreground/70 text-sm">
                Create structures that help LLMs understand context and produce better outputs.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="w-8 h-8 mb-4 text-foreground/70" />
              <h3 className="font-medium mb-2">The Analog Methodology</h3>
              <p className="text-foreground/70 text-sm">
                Design system architecture on paper before building it digitally.
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
            "You will understand how to map data with AI systems in a visceral way."
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-center">Who This Is For</h2>
          <Card className="p-8 border-2 border-foreground/10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              If your thinking is chaotic, projects are half-finished, and ideas are everywhere—
              you start here. <strong>Analog teaches you how to build systems.</strong> Then 
              Harvest teaches you how to scale those systems with AI.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-6">
            Ready to build <span className="font-medium">your foundation</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Analog Guide — $47
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg">
              Book a Strategy Session
            </BookCallButton>
          </div>
          <p className="text-sm text-foreground/60 mt-6">
            Ready for hands-on implementation? Check out{" "}
            <Link to="/programs/compass" className="underline hover:text-foreground">
              Lumina Compass
            </Link>
            —our 4-week implementation sprint.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© Genesis Lumina</p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/quiz" className="hover:text-foreground">Find Your Waypoint</Link>
            <Link to="/programs" className="hover:text-foreground">Programs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Analog;