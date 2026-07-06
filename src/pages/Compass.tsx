import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, Hammer, SlidersHorizontal, Zap, CheckCircle2 } from "lucide-react";

const modes = [
  { icon: Hammer, name: "Build", tag: "You don't have the engine.", desc: "We architect and install the engine from scratch — repeatable, measurable, transferable, and producing outcome from day one." },
  { icon: SlidersHorizontal, name: "Optimize", tag: "You have one that needs to perform better.", desc: "We diagnose the health gap, re-engineer the weakest dimensions, and lift the engine's throughput without rebuilding what already works." },
  { icon: Zap, name: "Supercharge", tag: "Strong engine, needs tuning + red-line testing.", desc: "We push the engine to its ceiling — instrument telemetry, run it hard against edge cases, and lock in the performance envelope your team can rely on." },
];

const Compass = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" motif="supercar-side">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-indigo-300 mb-6">FOR BUSINESS · THE SPRINT</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">Lumina Compass.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-4">
            The 4-week engine engagement. One critical engine — built, optimized, or supercharged — that your team owns, governs, and extends.
          </p>
          <p className="text-2xl text-white/80 font-light">Starting at $35,000</p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Three modes.</h2>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl">
            Every Compass engagement starts by naming which mode applies. The mode determines the plan, the deliverables, and the definition of done.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {modes.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="p-6 rounded-xl border border-foreground/10 bg-white">
                  <Icon className="w-6 h-6 text-indigo-600 mb-4" />
                  <div className="font-medium text-lg mb-1">{m.name}</div>
                  <div className="text-sm text-foreground/50 italic mb-4">{m.tag}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Outcome</h2>
          <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 mb-10">
            <p className="text-lg">
              Engineered business capability — built, optimized, or supercharged — that your team <span className="font-medium">owns, governs, and extends.</span>
            </p>
          </div>

          <h3 className="text-2xl font-light mb-6">What gets installed</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Engine architecture — the mechanism itself, documented end-to-end",
              "Telemetry — measurable signals on the five health dimensions",
              "Governance — the ritual and cadence your team uses to keep the engine healthy",
              "Ownership transfer — walkthroughs, SOPs, and Loom recordings so we're not a dependency",
            ].map((x) => (
              <div key={x} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-foreground/10">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            The <span className="font-medium">four weeks.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { w: "Week 1", t: "Diagnose", d: "Confirm the mode. Score the engine on all five health dimensions. Lock the definition of done." },
              { w: "Week 2", t: "Engineer", d: "Architect the engine (Build), rework weak dimensions (Optimize), or instrument the envelope (Supercharge)." },
              { w: "Week 3", t: "Install", d: "Deploy live. Wire the telemetry. Stress-test against edge cases with your team in the loop." },
              { w: "Week 4", t: "Transfer", d: "Documentation, governance ritual, ownership walkthrough. You leave the sprint operating the engine yourselves." },
            ].map((s) => (
              <div key={s.w} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-semibold text-indigo-300 mb-2">{s.w}</div>
                <div className="text-white font-medium mb-2">{s.t}</div>
                <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Every Compass starts with <span className="font-medium">PEAR.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Free 30-minute call to confirm the mode, name the engine, and decide whether Compass is even the right move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR (free)<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/case-studies">See Compass engine installations</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Compass;
