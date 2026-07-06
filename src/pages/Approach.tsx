import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import LawsGrid from "@/components/LawsGrid";
import EngineFamiliesGrid from "@/components/EngineFamiliesGrid";
import EngineHealthBar from "@/components/EngineHealthBar";
import { ArrowRight } from "lucide-react";

const Approach = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-white/50 mb-6">
            THE DOCTRINE
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            <span className="font-medium">Business</span> is a network of <span className="font-medium">engines.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            A business is a coordinated network of repeatable engines that transform potential into value and capture value through exchange. Every meaningful outcome your business produces flows through one of them. Business Performance Engineering is the discipline of seeing, diagnosing, and governing those engines.
          </p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">REALITY</div>
          <h2 className="text-3xl md:text-5xl font-light mb-10 tracking-tight">The four laws.</h2>
          <LawsGrid />
        </div>
      </SectionLight>

      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-5xl mx-auto">
          <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">ARCHITECTURE</div>
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">Eight engine families.</h2>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl">
            Every engine belongs to a family — a category that serves a common organizational function. Families let us talk about capability without collapsing into industry-specific vocabulary.
          </p>
          <EngineFamiliesGrid />
          <div className="mt-10">
            <Button asChild variant="ghost" className="p-0 h-auto font-medium group">
              <Link to="/engines" className="flex items-center gap-2">
                See the Engine Library
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-xs tracking-[0.2em] font-semibold text-white/40 mb-3">MEASUREMENT</div>
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight text-white">Engine health.</h2>
          <p className="text-lg text-white/60 mb-10 max-w-3xl">
            Every engine is scored on five dimensions. Health is not an opinion — it's a read on how the engine is currently operating.
          </p>
          <EngineHealthBar dark />
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">HUMAN &amp; AI</div>
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight">Who does what.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-foreground/10 bg-white">
              <h3 className="font-medium mb-3">The human role</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">Provide discernment and accountability. Determine:</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• What should be multiplied</li>
                <li>• Why it matters</li>
                <li>• When to intervene</li>
                <li>• Where judgment is required</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-foreground/10 bg-white">
              <h3 className="font-medium mb-3">The role of AI</h3>
              <p className="text-foreground/70 leading-relaxed">
                A force multiplier that amplifies the capabilities of a well-designed engine. AI does not replace the engine. It does not replace judgment. It scales what has already been engineered to be worth scaling.
              </p>
              <p className="text-sm text-foreground/50 mt-4 italic">
                Transformation — not technology — is the fundamental work of every business.
              </p>
            </div>
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" withShapes>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to see <span className="font-medium">your engines?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR (free)<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/engines">Explore the Engine Library</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default Approach;
