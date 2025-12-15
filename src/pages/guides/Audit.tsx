import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { ClipboardCheck, BarChart3, FileText, Shield, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

const Audit = () => {
  const purchaseUrl = "#";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center glow-s3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">S³ Waypoint • Field Guide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            Audit <span className="font-medium">by Lumina</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-4">
            The organizational readiness diagnostic.
          </p>
          
          <p className="text-3xl font-medium mb-12">$297</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Audit Guide
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
            Leadership teams think they're "using AI" when they're really just experimenting. No one knows if the org is ready to scale, sell, or transition—and they don't know what infrastructure gaps exist until an investor or buyer exposes them.
          </p>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What You'll <span className="font-medium">Get</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">A comprehensive organizational readiness assessment</p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: ClipboardCheck,
              title: "30-75 Question Assessment",
              desc: "Deep dive across five S³ readiness dimensions tailored to your organization."
            },
            {
              icon: BarChart3,
              title: "Scoring Breakdown",
              desc: "Clear metrics across data systems, documentation, succession, culture, and resilience."
            },
            {
              icon: FileText,
              title: "Gap Analysis Report",
              desc: "Critical gaps prioritized by impact with a roadmap to close them."
            },
            {
              icon: Shield,
              title: "Investment-Grade Read",
              desc: "Documentation that satisfies investors, buyers, and board members."
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-s3))] transition-all hover:glow-s3">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-s3))]/10 text-[hsl(var(--waypoint-s3))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Assessment Dimensions */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Five S³ Readiness <span className="font-medium">Dimensions</span></h2>
          
          <div className="space-y-4">
            {[
              "Data systems and leadership dashboards",
              "Documentation and knowledge architecture",
              "Succession systems and equity preparation",
              "Cultural and leadership continuity",
              "Operational resilience and founder dependency"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Guarantee */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-s3))]" />
          <h2 className="text-3xl font-light mb-4">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-foreground/80 italic">
            "You will receive a documented, operationally sound, and investment-grade organizational read that helps you identify whether you're ready to scale, sell, or transition to the next leader."
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">This Guide Is <span className="font-medium">For You</span> If:</h2>
        
        <div className="space-y-6">
          {[
            "You're preparing for investment, acquisition, or leadership transition",
            "You need to identify infrastructure gaps before stakeholders do",
            "You want a clear roadmap from experimentation to enterprise readiness",
            "You're building toward scale, sale, or succession",
            "You need documentation that satisfies serious buyers or investors"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-2" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Know Where <span className="font-medium">You Stand</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Get the pre-flight check for S³ engagements and uncover your organization's true readiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Audit Guide — $297
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton variant="outline" size="lg" className="text-lg px-8">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <span>Previous Guide:</span>
            <Link to="/guides/harvest" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              Harvest
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

export default Audit;
