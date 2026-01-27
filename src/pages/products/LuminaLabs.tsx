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
              <span className="text-sm font-medium text-white/60">AI Literacy Product</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Lumina <span className="font-medium">Labs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Hands-on AI workshops that give your team practical skills in 2-3 hours. Live or virtual, custom to your needs.
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
            Your team is <span className="font-medium">stuck in the dark</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Some team members are curious, others skeptical. No one's on the same page about what AI can do for YOUR business. You need a fast, focused session that gets everyone aligned and excited.
          </p>
        </div>
      </SectionLight>

      {/* The Solution - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            Intensive <span className="font-medium">Team Training</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Lumina Labs delivers concentrated AI literacy to your entire team in a single session. No fluff, no jargon—just practical knowledge your team can use immediately.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Live In-Person",
                desc: "On-site workshops at your location. Ideal for team building and hands-on collaboration. Best for teams of 5-50."
              },
              {
                icon: Lightbulb,
                title: "Virtual Sessions",
                desc: "Interactive online workshops via Zoom. Perfect for distributed teams. Includes breakout rooms and live Q&A."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-literacy))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* What's Covered - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            What's <span className="font-medium">Included</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Everything your team needs to get started with AI
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Pre-Workshop Intake Survey",
                desc: "We learn your team's current knowledge, fears, and goals before the session."
              },
              {
                title: "2-3 Hour Live Workshop",
                desc: "Focused, interactive training tailored to your industry and team size."
              },
              {
                title: "Slide Deck Provided",
                desc: "Full presentation materials for your team to reference afterward."
              },
              {
                title: "Hands-On Exercises",
                desc: "Real practice with AI tools your team can use immediately."
              },
              {
                title: "Follow-Up Resources",
                desc: "Templates, guides, and continued learning materials."
              },
              {
                title: "Q&A Session",
                desc: "Dedicated time for your team's specific questions and concerns."
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            The <span className="font-medium">Investment</span>
          </h2>
          <p className="text-lg text-foreground/60 text-center mb-12">
            Pricing based on format and team size
          </p>

          {/* Pricing Table */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                format: "Virtual",
                participants: "Up to 15",
                price: "$1,500",
                features: ["2-3 hour session", "Zoom/Meet delivery", "Breakout rooms", "Recording provided"]
              },
              {
                format: "Virtual",
                participants: "16-30",
                price: "$2,000",
                features: ["2-3 hour session", "Zoom/Meet delivery", "Multiple breakout rooms", "Recording provided"],
                popular: true
              },
              {
                format: "In-Person",
                participants: "Up to 30",
                price: "$3,000",
                note: "+ travel",
                features: ["2-3 hour session", "On-site delivery", "Hands-on collaboration", "Printed materials"]
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
                  <p className="text-sm text-foreground/60">{item.participants} participants</p>
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

          <div className="text-center">
            <p className="text-foreground/60 mb-8">
              Enterprise packages available for larger organizations. Contact us for custom pricing.
            </p>
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto">
              Schedule Your Workshop
            </BookCallButton>
          </div>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to <span className="font-medium">Align Your Team</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a call to discuss your team's needs and customize your workshop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Book Your Workshop Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">
                Not Ready? Take the Diagnostic
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
