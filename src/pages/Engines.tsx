import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import EngineFamiliesGrid, { engineFamilies } from "@/components/EngineFamiliesGrid";
import { ArrowRight } from "lucide-react";

const Engines = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[50vh] flex items-center" motif="chassis">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-white/50 mb-6">ENGINE LIBRARY</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            The <span className="font-medium">engines</span> that determine performance.
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Genesis Lumina's catalog of proven business engines — repeatable mechanisms that transform organizational potential into measurable business value across industries.
          </p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Eight families.</h2>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl">
            Engines are grouped by the organizational function they serve. Every engine in the library qualifies against four criteria: repeatable, measurable, transferable, and produces a consistent outcome.
          </p>
          <EngineFamiliesGrid />
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">How engines get installed.</h2>
            <p className="text-lg text-foreground/60">
              Every engine we install passes the same test: proven repeatable, measurable, transferable, and producing a consistent business outcome. That's the Engine Library standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: "Labs", d: "Team learns to see and diagnose engines across the eight families.", href: "/labs" },
              { t: "Compass", d: "One engine gets built, optimized, or supercharged over four weeks.", href: "/compass" },
              { t: "Ignite", d: "Multiple engines developed and governed over months — driven by the Engine Tree.", href: "/ignite" },
              { t: "S³", d: "The full network re-engineered for scale, sale, or succession.", href: "/s3" },
            ].map((x) => (
              <Link key={x.t} to={x.href} className="block p-5 rounded-xl border border-foreground/10 bg-white hover:border-foreground/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{x.t}</span>
                  <ArrowRight className="w-4 h-4 text-foreground/40" />
                </div>
                <p className="text-sm text-foreground/60">{x.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Not sure which engine to engineer first?
          </h2>
          <p className="text-lg text-white/70 mb-10">
            That's what a Strategy Session is for. Forty-five minutes, five dimensions, one clear next step.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
            <Link to="/strategy-session" className="gap-2">Reserve a Strategy Session<ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Engines;
