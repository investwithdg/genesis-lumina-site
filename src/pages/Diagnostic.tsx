import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Clock, FileText, Map, ListChecks, Video } from "lucide-react";

const Diagnostic = () => {
  const purchaseUrl = "https://calendar.app.google/XXdQMZcNjYjnACuz5";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles>
        <div className="px-8 py-32 md:py-40 max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              Most organizations aren't failing at AI because they lack tools.
              <br />
              They're failing because they're building dependency instead of capability.
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              The Vulnerability <span className="font-medium">Assessment</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              A 72-hour Architectural Vulnerability Assessment for operators who want to know exactly where they're exposed — before the next disruption cycle makes it expensive.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                  Begin Your Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <div className="flex items-center gap-4 text-white/60">
                <Clock className="w-5 h-5" />
                <span>72-hour turnaround</span>
                <span className="text-white/30">•</span>
                <span className="text-white font-medium">$2,500</span>
              </div>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Question - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            "Where is your organization building dependency instead of capability — and what does that cost you when the tools change?"
          </p>
          <p className="text-lg text-foreground/60 mt-6">
            The Assessment exists to answer this question before the next vendor change, model shift, or disruption cycle makes the gap expensive. You get a clear picture of where you stand, where you're exposed, and exactly what to do next.
          </p>
        </div>
      </SectionLight>

      {/* What It Evaluates - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-white">
            What It <span className="font-medium">Evaluates</span>
          </h2>

          <div className="space-y-6">
            {[
              "How AI currently fits into your business",
              "What's working, what's fragile, and what's missing",
              "What should happen now, next, and later"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle className="w-6 h-6 text-white/70 flex-shrink-0 mt-0.5" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* What You Receive - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            What You <span className="font-medium">Receive</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            No implementation. No upsell pressure. Just an honest map of your exposure and a sequenced plan to address it.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: "Readiness Scorecard (PDF)",
                desc: "A clear assessment of where you stand across key AI readiness dimensions."
              },
              {
                icon: Map,
                title: "Gap Map (Miro or Whimsical)",
                desc: "Visual identification of what's missing between your current state and your goals."
              },
              {
                icon: ListChecks,
                title: "30/60/90-Day Action Plan",
                desc: "Prioritized steps in the right order—what to do now, next, and later."
              },
              {
                icon: Video,
                title: "Loom Walkthrough (20-30 min)",
                desc: "A recorded explanation of your results and exactly how to move forward."
              },
              {
                icon: ArrowRight,
                title: "Next Steps Recommendation",
                desc: "Clear guidance on which path is right for you—Labs, Compass, S³, or Ignite."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-foreground/10 hover:border-foreground/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-foreground text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Credit Toward Larger Engagement */}
          <div className="mt-12 p-6 rounded-xl bg-foreground text-white text-center">
            <p className="text-lg font-medium mb-2">Your $2,500 rolls forward</p>
            <p className="text-white/70">
              If you proceed to Lumina Compass or S³ within 30 days, your Assessment investment is credited toward the larger engagement.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* Who This Is For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Who This Is <span className="font-medium">For</span>
          </h2>

          <div className="space-y-5">
            {[
              "You know AI matters, but you're behind or scattered",
              "You don't trust the noise and need someone to tell you the truth",
              "You want to know what's real progress versus illusion",
              "You need to understand what order actually matters",
              "You're ready for orientation, not another tool pitch",
              "You've adopted AI tools but aren't sure you own the intelligence they're generating",
              "You've spent money on AI and still feel exposed — you just don't have language for why",
              "You want to know the difference between building capability and renting dependency",
              "You're preparing for scale, sale, or succession and need to know what's actually transferable",
              "You're done with tool pitches and ready for an architectural conversation"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-3" />
                <p className="text-lg text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* The Details - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-light text-white mb-2">72</p>
              <p className="text-white/60">Hours to complete</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-light text-white mb-2">$2,500</p>
              <p className="text-white/60">One-time investment</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-light text-white mb-2">4</p>
              <p className="text-white/60">Deliverables included</p>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* CTA - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Know <span className="font-medium">Where You Stand</span>?
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
            The Assessment is the starting point. Everything else follows from here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                Begin Your Assessment — $2,500
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <BookCallButton size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              Have Questions? Book a Call
            </BookCallButton>
          </div>
        </div>
      </SectionLight>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Diagnostic;