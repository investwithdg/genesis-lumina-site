import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, TrendingUp, Handshake, Users } from "lucide-react";

const pillars = [
  { icon: TrendingUp, name: "Scale", desc: "Engineer your business to scale without you. Every critical engine is repeatable, transferable, and instrumented — capacity is bounded by the network, not by the founder's calendar." },
  { icon: Handshake, name: "Sale", desc: "Become acquirable on your terms. Institutional intelligence, governance rituals, and telemetry live outside of anyone's head — buyers pay for what they can see and verify." },
  { icon: Users, name: "Succession", desc: "Transfer institutional intelligence to the next generation of leadership. Founder judgment becomes documented decision patterns the next team can operate against." },
];

const S3Transformation = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" motif="supercar-side">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-rose-300 mb-6">
            TRANSFORMATION · SCALE · SALE · SUCCESSION
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">S³.</span> The culmination of BPE.
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-4">
            Three singular yet connected results: engineer your business to scale without you, become acquirable on your terms, and transfer institutional intelligence to the next generation of leadership. This is what engine performance engineering was built for.
          </p>
          <p className="text-2xl text-white/80 font-light">$150,000 – $500,000</p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10">Three results. One engagement.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="p-6 rounded-xl border border-foreground/10 bg-white">
                  <Icon className="w-6 h-6 text-rose-600 mb-4" />
                  <div className="text-xl font-medium mb-3">{p.name}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Outcome</h2>
          <div className="p-6 rounded-xl bg-rose-50 border border-rose-200 mb-10">
            <p className="text-lg">
              A business that performs independently of its founder — <span className="font-medium">scalable, sellable, succession-ready.</span>
            </p>
          </div>

          <h3 className="text-2xl font-light mb-6">Who qualifies</h3>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            S³ is not an entry point. It's the tier operators arrive at once their engine network is mature enough to be re-engineered as a whole. Every S³ engagement begins with a PEAR call, a full engine audit, and a scoping conversation about which of the three results is the actual mandate.
          </p>
          <p className="text-sm italic text-foreground/50">
            Most S³ engagements follow at least six months of Ignite at the Blaze or Phoenix tier.
          </p>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Is <span className="font-medium">S³</span> the right conversation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR to scope<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/ignite">Start at Ignite instead</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default S3Transformation;
