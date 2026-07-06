import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, Flame, Sprout } from "lucide-react";

const tiers = [
  { name: "Ember", price: "$7,500 / mo", tag: "Governance + one active engine track", desc: "Monthly engine measurement, PEAR Tree updates, and one active engineering track — Build, Optimize, or Supercharge — moving forward every month." },
  { name: "Blaze", price: "$15,000 / mo", tag: "Two active engine tracks + governance cadence", desc: "Two engines under active engineering at any time, plus a bi-weekly governance ritual with your leadership. Institutional intelligence starts compounding." },
  { name: "Phoenix", price: "$25,000 / mo", tag: "Multi-engine network + embedded partner", desc: "Full engine network under continuous engineering. Weekly cadence, embedded governance, and roadmap ownership at the network level. This is the tier that produces S³-grade businesses." },
];

const Ignite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" motif="supercar-rear">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-orange-300 mb-6">
            ONGOING · EMBER → BLAZE → PHOENIX
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">Lumina Ignite.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-4">
            Your ongoing engine development partner. Every month is driven by your PEAR Tree — the living map of your engine architecture, health scores, and engineering roadmap. We don't just advise. We build, measure, and govern alongside you.
          </p>
          <p className="text-2xl text-white/80 font-light">$7.5K – $25K / month</p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl md:text-4xl font-light">The PEAR Tree.</h2>
          </div>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl">
            Your engine health home base. Every engine on the tree carries live scores across the five dimensions, an engineering priority, and a roadmap. It's the living map we work from every month — not a slide deck we update quarterly.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-foreground/10 bg-emerald-50/40">
              <h3 className="font-medium mb-3">What the tree tracks</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Every critical engine in your business</li>
                <li>• Current health score on all five dimensions</li>
                <li>• Which family it belongs to</li>
                <li>• Where it currently constrains the network</li>
                <li>• The next engineering move — and why</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-foreground/10 bg-white">
              <h3 className="font-medium mb-3">What Ignite does each month</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Re-score engines against telemetry</li>
                <li>• Advance the active engineering track(s)</li>
                <li>• Run the governance ritual with your leadership</li>
                <li>• Update the tree — and the roadmap</li>
                <li>• Deliver measurable performance gains, compounding</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10">Three tiers. One progression.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-foreground/10 bg-white">
                <Flame className="w-6 h-6 text-orange-500 mb-4" />
                <div className="text-xl font-medium">{t.name}</div>
                <div className="text-sm text-foreground/50 mb-4">{t.price}</div>
                <div className="text-sm font-medium text-foreground/70 mb-3">{t.tag}</div>
                <p className="text-sm text-foreground/60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-orange-50 border border-orange-200 max-w-3xl">
            <p className="text-lg">
              Outcome: continuous engine development <span className="text-foreground/50">+</span> measurable performance gains <span className="text-foreground/50">+</span> institutional intelligence that compounds monthly.
            </p>
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Grow the tree. <span className="font-medium">Harvest the compound.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Most Ignite engagements start after a Compass sprint installs the first engine. Some start straight from PEAR when the roadmap is already clear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR (free)<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/s3">See where Ignite leads → S³</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Ignite;
