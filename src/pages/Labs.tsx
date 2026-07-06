import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Labs = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-amber-300 mb-6">FOR TEAMS · WORKSHOP</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">Lumina Labs.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-4">
            Your leadership team learns to see, diagnose, and govern their business engines. Not AI training — engine performance literacy. They leave understanding why their business performs the way it does and what levers actually move it.
          </p>
          <p className="text-2xl text-white/80 font-light">$7,500 – $15,000</p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Outcome</h2>
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 mb-10">
            <p className="text-lg">
              Team-wide engine literacy <span className="text-foreground/50">+</span> governance framework <span className="text-foreground/50">+</span> first engine diagnosis completed in-room.
            </p>
          </div>

          <h3 className="text-2xl font-light mb-6">What happens in the room</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Map your business as a network of engines across the eight families",
              "Score each critical engine across the five health dimensions",
              "Identify the weakest critical engine — the current constraint",
              "Install the governance framework your team will use to keep watching engines after we leave",
              "Complete one live engine diagnosis together, end-to-end",
              "Leave with the vocabulary that lets your team have BPE conversations without us",
            ].map((x) => (
              <div key={x} className="flex items-start gap-3 p-4 rounded-lg border border-foreground/10 bg-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{x}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-light mb-4">Who it's for</h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Leadership teams of 4–20 who need to make better decisions about where the business actually breaks down — before spending on the next tool, hire, or system.
          </p>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" withShapes>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Bring the doctrine <span className="font-medium">into the room.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR to scope Labs<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/compass">Compare with Compass</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Labs;
