import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import LawsGrid from "@/components/LawsGrid";
import EngineFamiliesGrid from "@/components/EngineFamiliesGrid";
import EngineHealthBar from "@/components/EngineHealthBar";
import OfferStackLadder from "@/components/OfferStackLadder";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import { SupercarSide } from "@/components/SupercarMotifs";
import { ArrowRight, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-foreground text-white">
      <Navigation />

      {/* Hero — the mascot enters */}
      <SectionDark className="min-h-[92vh] flex items-center" motif="none" scrim={false}>
        {/* Hero supercar — full background */}
        <SupercarSide
          className="absolute inset-0 w-full h-full object-cover supercar-enter pointer-events-none select-none"
          style={{ opacity: 0.75 }}
        />
        {/* Subtle left-side scrim so headline stays legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--foreground) / 0.85) 0%, hsl(var(--foreground) / 0.55) 45%, hsl(var(--foreground) / 0.25) 100%)",
          }}
        />
        <div className="px-6 md:px-8 py-32 md:py-40 max-w-6xl mx-auto relative z-10 w-full on-motif">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-ember" />
            <span className="label-mono text-white/75">BUSINESS PERFORMANCE ENGINEERING</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.98] mb-10 tracking-tight text-white max-w-5xl">
            Every business runs on <span className="font-semibold">engines.</span>
            <br className="hidden md:block" />
            We engineer the ones that <span className="font-semibold">determine performance.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-12">
            Genesis Lumina diagnoses, engineers, measures, and governs the business engines that decide how your organization actually performs — so growth compounds instead of leaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-white text-foreground hover:bg-white/90 rounded-md gap-2 label-mono">
              <Link to="/strategy-session">Strategy Session — No Fee<ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-white/25 text-white bg-transparent hover:bg-white/10 rounded-md label-mono">
              <Link to="/approach">Read the Doctrine</Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* Laws */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32" collage="geometric">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-ember" />
              <span className="label-mono text-white/50">01 — THE REALITY</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.02]">
              Four laws govern how <span className="font-semibold">every business</span> performs.
            </h2>
          </div>
          <LawsGrid dark />
        </div>
      </SectionDark>

      {/* Engine Families */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32" collage="streak">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-ember" />
              <span className="label-mono text-white/50">02 — THE ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.02]">
              Eight engine families. <span className="font-semibold">One shared language.</span>
            </h2>
          </div>
          <EngineFamiliesGrid dark />
          <div className="mt-10">
            <Button asChild variant="outline" className="border-white/25 text-white bg-transparent hover:bg-white/10 gap-2 rounded-md label-mono">
              <Link to="/engines">Explore the Engine Library <ArrowRight className="w-3.5 h-3.5" /></Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* Engine Health — cream reveal (rare light break) */}
      <SectionLight className="px-4 md:px-8 py-24 md:py-32" muted>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-ember" />
              <span className="label-mono text-foreground/50">03 — THE MEASUREMENT</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-6 leading-[1.02]">
              Every engine is scored on <span className="font-semibold">five dimensions.</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Engine health is not an opinion. It's a read on how the mechanism is currently operating — and where the next unit of engineering effort should go.
            </p>
          </div>
          <EngineHealthBar />
        </div>
      </SectionLight>

      {/* Offer Stack */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32" collage="minimal">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-6 bg-ember" />
              <span className="label-mono text-white/50">04 — HOW WE WORK WITH YOU</span>
              <span className="h-px w-6 bg-ember" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.02]">
              The <span className="font-semibold">offer stack.</span>
            </h2>
            <p className="text-lg text-white/60">
              A single ladder — from a free 30-minute call to a full network transformation. Every rung serves a specific stage of engine work.
            </p>
          </div>
          <OfferStackLadder dark />
        </div>
      </SectionDark>

      {/* Proof — Case Studies */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32" collage="geometric">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-ember" />
              <span className="label-mono text-white/50">05 — PROOF</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.02]">
              Engines <span className="font-semibold">installed.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/case-studies/pst" className="edge-hover edge-green group block p-7 rounded-md bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all relative">
              <p className="label-mono text-white/45 mb-3">PST · OPERATIONS ENGINE</p>
              <h3 className="font-display text-2xl font-medium text-white mb-3 tracking-tight">From Manual to Machine.</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">A webhook-native, 7-stage operational engine installed in a live logistics environment — architected, deployed, and transferred into team ownership.</p>
              <span className="label-mono text-white flex items-center gap-2">Read installation <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link to="/case-studies/optimist" className="edge-hover edge-blue group block p-7 rounded-md bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all relative">
              <p className="label-mono text-white/45 mb-3">OPTIMIST · INTAKE ENGINE</p>
              <h3 className="font-display text-2xl font-medium text-white mb-3 tracking-tight">From Bottleneck to Breakthrough.</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">An AI-routed intake engine that compressed a 2-week manual process into a single day — 51% of process steps eliminated by design.</p>
              <span className="label-mono text-white flex items-center gap-2">Read installation <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Testimonial */}
      <SectionDark className="px-4 md:px-8 py-16 md:py-24" collage="minimal">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-8 h-8 mx-auto mb-6 text-white/20" />
          <blockquote className="font-display text-2xl md:text-4xl font-light text-white leading-snug mb-6 tracking-tight">
            "Donovan is AI. He's The Answer."
          </blockquote>
          <div>
            <p className="font-medium text-white/80">Jamar Wright</p>
            <p className="label-mono text-white/45 mt-1">Owner/Operator · Revive Beauty Salon</p>
          </div>
        </div>
      </SectionDark>

      {/* Logos */}
      <SectionDark className="px-8 py-14 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <ClientLogoCarousel />
        </div>
      </SectionDark>

      {/* Final CTA */}
      <SectionDark className="px-8 py-24 md:py-32" collage="hero">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-6 bg-ember" />
            <span className="label-mono text-white/50">START THE READ</span>
            <span className="h-px w-6 bg-ember" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6 tracking-tight leading-[1.02]">
            Start with a <span className="font-semibold">clear read.</span>
          </h2>
          <p className="text-lg text-white/65 mb-10">
            Forty-five minutes. No fee. You leave with an engine health snapshot, the current constraint, and the honest next step — even if it isn't us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-white text-foreground hover:bg-white/90 rounded-md gap-2 label-mono">
              <Link to="/strategy-session">Reserve a Strategy Session<ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 h-auto border-white/25 text-white bg-transparent hover:bg-white/10 rounded-md label-mono">
              <Link to="/field-guides">Field Guides</Link>
            </Button>
          </div>
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
