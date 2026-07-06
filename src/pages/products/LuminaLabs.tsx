import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Users, Lightbulb, CheckCircle, Clock, ArrowRight, ArrowLeft } from "lucide-react";

const LuminaLabs = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[70vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-literacy))] text-[hsl(var(--waypoint-literacy-foreground))] flex items-center justify-center glow-literacy">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">AI Governance Workshop</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Labs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              A 3-hour workshop that teaches your leadership team to govern AI — not just use it. Live or virtual, built around your organization's actual exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/waypoints/ai-literacy">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Learn About AI Literacy First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Your team knows how to use AI. <span className="font-medium">Nobody knows how to govern it.</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Your team is adopting AI tools. Maybe they're using them daily. But who owns the logic? What happens when the vendor raises prices, changes terms, or gets acquired? What intelligence walks out the door when a team member leaves? The question isn't what AI can do for your business. It's whether your business can govern what AI is already doing.
          </p>
        </div>
      </SectionLight>

      {/* The Solution - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            The Workshop <span className="font-medium">Arc (3 Hours)</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12 max-w-3xl mx-auto">
            Lumina Labs builds your leadership team's capacity to govern AI — to evaluate, deploy, own, and institutionalize AI systems without becoming dependent on any vendor, tool, or model. One session. Five frameworks. One governing decision your team makes before they leave the room.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                part: "Part 1",
                title: "Demystify the Machine",
                time: "45 min",
                desc: "How AI actually makes decisions. Not technical — strategic. Leaders leave with enough understanding to govern AI systems without relying on technical staff to interpret them for every decision."
              },
              {
                part: "Part 2",
                title: "The Dependency Audit",
                time: "45 min",
                desc: "Where is your organization already renting AI logic from someone else? Live exercise. Teams map their current exposure in real time and identify what's at risk when the landscape shifts."
              },
              {
                part: "Part 3",
                title: "Literacy as Infrastructure",
                time: "30 min",
                desc: "SOPs, prompts, workflows, and institutional standards as organizational IP. If a team member leaves, does your AI intelligence leave with them? This section reframes literacy as an asset-building activity — not a training activity."
              },
              {
                part: "Part 4",
                title: "The Governance Framework",
                time: "30 min",
                desc: "A repeatable lens for evaluating any AI tool, system, or vendor. Build vs. buy vs. govern. Teams leave with a working framework they own."
              },
              {
                part: "Part 5",
                title: "Your First Governing Decision",
                time: "30 min",
                desc: "Every team leaves with one concrete internal AI standard they've defined, documented, and own. Not homework. Done in the room."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="text-xs font-medium text-white/40 mb-2">{item.part} — {item.time}</div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* What's Included - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            What's <span className="font-medium">Included</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Everything your team needs to govern AI decisions
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Pre-Workshop Intake Survey",
                desc: "We learn your team's current AI exposure, existing tool stack, and governance gaps before the session."
              },
              {
                title: "3-Hour Live Workshop",
                desc: "Governance-focused, built around your industry and organizational context."
              },
              {
                title: "Governance Framework Reference (1-pager)",
                desc: "A branded document your team keeps and applies to every future AI decision."
              },
              {
                title: "Dependency Audit Worksheet",
                desc: "Teams leave with a completed map of their current exposure."
              },
              {
                title: "Q&A Throughout",
                desc: "No waiting until the end. Questions are part of the session design."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-foreground/10 hover:border-[hsl(var(--waypoint-literacy))] transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Investment / Pricing Table - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            The <span className="font-medium">Investment</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Pricing based on format and team size
          </p>

          {/* Pricing Table */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                format: "Virtual",
                participants: "Up to 15",
                price: "$3,000",
                features: ["3-hour session", "Zoom/Meet delivery", "All frameworks included", "Recording provided"]
              },
              {
                format: "Virtual",
                participants: "16–30",
                price: "$4,500",
                features: ["3-hour session", "Zoom/Meet delivery", "Breakout exercises", "Recording provided"],
                popular: true
              },
              {
                format: "In-Person",
                participants: "Up to 30",
                price: "$7,500",
                note: "+ travel",
                features: ["3-hour session", "On-site delivery", "Hands-on collaboration", "Printed materials"]
              },
              {
                format: "Executive Cohort",
                participants: "C-suite, up to 10",
                price: "$5,000",
                note: "flat",
                features: ["2-hour focused session", "Governance framework", "Completed dependency audit", "First AI standard defined"]
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-xl border-2 ${item.popular ? 'border-[hsl(var(--waypoint-literacy))]' : 'border-foreground/10'} relative`}>
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--waypoint-literacy))] text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="font-medium mb-1">{item.format}</h3>
                  <p className="text-sm text-foreground/60">{item.participants}</p>
                  <div className="text-3xl font-light mt-2">
                    {item.price}
                    {item.note && <span className="text-sm text-foreground/60"> {item.note}</span>}
                  </div>
                </div>
                <div className="space-y-2">
                  {item.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10 mb-8">
            <p className="text-foreground/70 leading-relaxed text-center">
              The Executive Cohort is a focused 2-hour session designed for leadership teams of 10 or fewer. They walk out with a governance framework, a completed dependency audit, and their first organizational AI standard. This is a strategy budget conversation, not a training budget conversation.
            </p>
          </div>

          <div className="text-center">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto">
              Schedule Your Workshop
            </BookCallButton>
          </div>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="schematic">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to <span className="font-medium">Govern What You've Already Built</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a call to discuss your team's current exposure and customize your session.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Book Your Workshop Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">
                Not Ready? Take the Assessment
              </Link>
            </Button>
          </div>

          <div className="mb-12">
            <NewsletterCTA dark />
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <span>Part of the AI Literacy waypoint</span>
            <Link to="/waypoints/ai-literacy" className="font-medium text-[hsl(var(--waypoint-literacy-glow))] hover:underline flex items-center gap-1">
              Explore AI Literacy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer dark />
    </div>
  );
};

export default LuminaLabs;