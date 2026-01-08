import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ClipboardCheck, BarChart3, FileText, Shield, CheckCircle, ArrowRight, ArrowLeft, TrendingUp, ShieldCheck } from "lucide-react";

const Audit = () => {
  const purchaseUrl = "#";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-s3))] text-[hsl(var(--waypoint-s3-foreground))] flex items-center justify-center glow-s3">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">S³ Waypoint • Field Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-tight text-white">
              Audit <span className="font-medium">by Lumina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-4">
              The organizational readiness diagnostic.
            </p>
            
            <div className="flex items-center gap-4 mb-12">
              <p className="text-4xl font-medium text-white">$297</p>
              <span className="text-sm text-white/40 px-3 py-1 rounded-full border border-white/20">{"0"} copies sold</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                  Get the Audit Guide
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
            Leadership teams think they're "using AI" when they're really just experimenting. No one knows if the org is ready to scale, sell, or transition—and they don't know what infrastructure gaps exist until an investor or buyer exposes them.
          </p>
        </div>
      </SectionLight>

      {/* What You'll Get - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">What You'll <span className="font-medium">Get</span></h2>
          <p className="text-lg text-white/60 text-center mb-12">A comprehensive organizational readiness assessment</p>

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
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-s3))] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-s3))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Assessment Dimensions - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
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
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Outcome Guarantee - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--waypoint-s3))]" />
          <h2 className="text-3xl font-light mb-4 text-white">Outcome <span className="font-medium">Guarantee</span></h2>
          <p className="text-xl text-white/80 italic mb-6">
            "You will receive a documented, operationally sound, and investment-grade organizational read that helps you identify whether you're ready to scale, sell, or transition to the next leader."
          </p>
          <p className="text-white/60">
            If the audit doesn't provide clear, actionable insights, email us for a full refund. No questions asked.
          </p>
        </div>
      </SectionDark>

      {/* Who This Is For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
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
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-s3))] flex-shrink-0 mt-3" />
                <p className="text-xl text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* CTA - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">Ready to Know Where <span className="font-medium">You Stand</span>?</h2>
          <p className="text-lg text-white/70 mb-8">
            Get the pre-flight check for S³ engagements and uncover your organization's true readiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Get the Audit Guide — $297
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
              Book a Strategy Session
            </BookCallButton>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-white/60 mb-12">
            <span>Previous Guide:</span>
            <Link to="/field-guides/harvest" className="font-medium text-[hsl(var(--waypoint-integration))] hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Harvest
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/60 mb-4">Not ready? Get weekly insights instead:</p>
            <NewsletterCTA dark compact />
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Audit;
