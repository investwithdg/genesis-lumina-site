import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ArrowRight, BookOpen } from "lucide-react";

const guides = [
  { title: "The Analog Guide", slug: "analog", price: "$47", desc: "The doctrine, distilled. Engine families, the five health dimensions, and the force-multiplier principles — no software required." },
  { title: "The Audit Guide", slug: "audit", price: "$97", desc: "A structured walkthrough for scoring your own critical engines. You leave with a self-run engine health snapshot." },
  { title: "The Harvest Guide", slug: "harvest", price: "$297", desc: "The Compass playbook in reader form. How to Build, Optimize, and Supercharge a single engine over four weeks — done yourself." },
];

const FieldGuides = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[50vh] flex items-center" motif="supercar-side">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10 text-center">
          <BookOpen className="w-8 h-8 text-white/50 mx-auto mb-4" />
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-white/50 mb-6">SELF-SERVE · $47 – $297</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">Field Guides.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Structured frameworks for identifying and diagnosing your own engine performance gaps. The doctrine in your hands — engine families, health criteria, force multiplier principles.
          </p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link key={g.slug} to={`/field-guides/${g.slug}`} className="block p-6 rounded-xl border border-foreground/10 bg-white hover:border-foreground/30 transition-colors">
                <div className="text-sm text-foreground/50 mb-2">{g.price}</div>
                <h3 className="text-xl font-medium mb-3">{g.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">{g.desc}</p>
                <span className="text-sm font-medium flex items-center gap-1">
                  Read the guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-xl bg-emerald-50/40 border border-dashed border-foreground/20 text-center max-w-2xl mx-auto">
            <p className="text-sm text-foreground/70 mb-4">
              Outcome: foundational BPE literacy + self-assessment capability.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/pear" className="gap-2">Prefer a live diagnosis? Book PEAR (free)<ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </SectionLight>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default FieldGuides;
