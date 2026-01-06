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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            What's <span className="font-medium">Covered</span>
          </h2>
          
          <div className="space-y-4">
            {[
              "AI fundamentals explained without technical jargon",
              "Real-world use cases specific to your industry",
              "Hands-on exercises with AI tools your team can use",
              "Framework for identifying automation opportunities",
              "Q&A session to address your team's specific questions",
              "Resource kit with templates and continued learning materials"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-literacy))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Investment - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            The <span className="font-medium">Investment</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-foreground/60">
            <Clock className="w-5 h-5" />
            <span className="text-lg">2-3 hour intensive workshop</span>
          </div>

          <div className="inline-block p-8 border-2 border-[hsl(var(--waypoint-literacy))] rounded-2xl glow-literacy mb-8">
            <div className="text-5xl font-light mb-2">$1,500 – $3,000</div>
            <div className="text-foreground/60">Based on team size and format</div>
          </div>

          <p className="text-foreground/60 mb-12 max-w-xl mx-auto">
            Pricing varies by team size, location (for in-person), and customization requirements. Enterprise packages available for larger organizations.
          </p>

          <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto">
            Schedule Your Workshop
          </BookCallButton>
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
