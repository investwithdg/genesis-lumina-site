import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { ArrowRight, ClipboardCheck, BarChart3, FileText, Users, Shield, CheckCircle } from "lucide-react";

const Audit = () => {
  // Replace with your Gumroad/Stripe link
  const purchaseUrl = "#";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 bg-foreground/5 rounded-full text-sm mb-6">
          S³ Waypoint
        </div>
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
          Audit <span className="font-medium">by Lumina</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-2">
          The organizational readiness diagnostic.
        </p>
        <p className="text-3xl font-medium mb-8">$297</p>
        <Button asChild size="lg" className="px-8">
          <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
            Get the Audit Assessment
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
              Leadership teams think they're "using AI" when they're really just experimenting. 
              No one knows if the org is ready to <strong>scale, sell, or transition</strong>—and 
              they don't know what infrastructure gaps exist until an investor or buyer exposes them.
            </p>
          </Card>
        </div>
      </section>

      {/* What It Delivers */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-center">What You'll Receive</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-center">
              30-75 Question Assessment Across Five S³ Dimensions
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              <Card className="p-4 text-center">
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="text-sm font-medium">Data Systems</p>
                <p className="text-xs text-foreground/60">Leadership dashboards</p>
              </Card>
              <Card className="p-4 text-center">
                <FileText className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="text-sm font-medium">Documentation</p>
                <p className="text-xs text-foreground/60">Knowledge architecture</p>
              </Card>
              <Card className="p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="text-sm font-medium">Succession</p>
                <p className="text-xs text-foreground/60">Equity preparation</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="text-sm font-medium">Cultural</p>
                <p className="text-xs text-foreground/60">Leadership continuity</p>
              </Card>
              <Card className="p-4 text-center">
                <ClipboardCheck className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="text-sm font-medium">Operational</p>
                <p className="text-xs text-foreground/60">Founder dependency</p>
              </Card>
            </div>
          </div>

          <Card className="p-8 border-2 border-foreground/10">
            <h3 className="text-lg font-medium mb-4">Gap Analysis Report Includes:</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
                <span>Scoring breakdown across all five dimensions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
                <span>Critical gaps prioritized by business impact</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
                <span>Roadmap to close gaps with timeline</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
                <span>Next-step recommendations tailored to your goals</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Outcome Guarantee */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-foreground/70" />
          <h2 className="text-2xl font-medium mb-4">Outcome Guarantee</h2>
          <p className="text-xl text-foreground/80 italic">
            "You will receive a documented, operationally sound, and investment-grade 
            organizational read that helps you identify whether you're ready to scale, 
            sell, or transition to the next leader."
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-center">Who This Is For</h2>
          <Card className="p-8 border-2 border-foreground/10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              This is the <strong>pre-flight check</strong> for serious organizations. It's not 
              generic content—it's a personalized readiness assessment that qualifies you for 
              the next stage and creates clarity around infrastructure gaps before investors 
              or buyers find them.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-6">
            Ready to find out if you're <span className="font-medium">investment-ready</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Audit Assessment — $297
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg">
              Book a Strategy Session
            </BookCallButton>
          </div>
          <p className="text-sm text-foreground/60 mt-6">
            Ready for full S³ transformation? The Audit is your first step toward{" "}
            <Link to="/waypoints/s3" className="underline hover:text-foreground">
              S³ engagements
            </Link>
            —where we transform organizational infrastructure for scale, sale, or succession.
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
            <Link to="/newsletter" className="hover:text-foreground">Newsletter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Audit;