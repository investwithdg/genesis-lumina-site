import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import NewsletterCTA from "@/components/NewsletterCTA";
import EngineHealthBar from "@/components/EngineHealthBar";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

const BOOK = "https://calendar.app.google/XXdQMZcNjYjnACuz5";

const PEAR = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-emerald-300 mb-6">
            PERFORMANCE ENGINEERING ANALYSIS &amp; ROADMAP
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">PEAR.</span> Free · 30 min.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A live diagnostic call. We identify your critical engines, assess health across five dimensions, and map the highest-leverage constraint. You leave with a clear read on where performance is leaking and what to engineer first.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="gap-2">
              Book your PEAR call
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">What you leave with</h2>
          <p className="text-lg text-foreground/60 mb-10">Three outcomes in thirty minutes.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Engine health snapshot", d: "A read on your critical engines across Reliability, Efficiency, Measurability, Transferability, and Adaptability." },
              { t: "Prioritized constraint map", d: "The single engine whose performance is bounding the rest of the business — with the reason it's the constraint." },
              { t: "Recommended next step", d: "Whether that's a Field Guide, Labs, Compass, or nothing at all. Honest routing, not a pitch." },
            ].map((x) => (
              <div key={x.t} className="p-6 rounded-xl border border-foreground/10 bg-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-3" />
                <h3 className="font-medium mb-2">{x.t}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">The five dimensions of engine health</h2>
          <p className="text-lg text-foreground/60 mb-10">Every engine gets scored on the same axes. This is the doctrine.</p>
          <EngineHealthBar />
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" withShapes>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Thirty minutes. <span className="font-medium">One clear read.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            No pitch deck. No form maze. A working diagnostic call — the kind of conversation most operators only get after they've already hired someone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="gap-2">
                Book PEAR (free)
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/approach">Read the doctrine first</Link>
            </Button>
          </div>
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default PEAR;
