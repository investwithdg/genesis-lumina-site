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
import { ArrowRight, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero */}
      <SectionDark className="min-h-screen flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <span className="inline-block text-xs md:text-sm tracking-[0.2em] font-semibold text-white/60 mb-6">
              BUSINESS PERFORMANCE ENGINEERING
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              Every business runs on <span className="font-medium">engines.</span>
              <br className="hidden md:block" />
              We engineer the ones that <span className="font-medium">determine performance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Genesis Lumina diagnoses, engineers, measures, and governs the business engines that decide how your organization actually performs — so growth compounds instead of leaks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
                <Link to="/pear" className="gap-2">
                  Book PEAR (free)
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/approach">Read the doctrine</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* Laws */}
      <SectionLight className="px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">THE REALITY</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-3xl">
              Four laws govern how <span className="font-medium">every business</span> performs.
            </h2>
          </div>
          <LawsGrid />
        </div>
      </SectionLight>

      {/* Engine Families */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="text-xs tracking-[0.2em] font-semibold text-white/40 mb-3">THE ARCHITECTURE</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white max-w-3xl">
              Eight engine families. <span className="font-medium">One shared language.</span>
            </h2>
          </div>
          <EngineFamiliesGrid dark />
          <div className="mt-10">
            <Button asChild variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 gap-2">
              <Link to="/engines">Explore the Engine Library <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* Engine Health */}
      <SectionLight className="px-4 md:px-8 py-24 md:py-32" muted>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">THE MEASUREMENT</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Every engine is scored on <span className="font-medium">five dimensions.</span>
            </h2>
            <p className="text-lg text-foreground/60">
              Engine health is not an opinion. It's a read on how the mechanism is currently operating — and where the next unit of engineering effort should go.
            </p>
          </div>
          <EngineHealthBar />
        </div>
      </SectionLight>

      {/* Offer Stack */}
      <SectionLight className="px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] font-semibold text-foreground/40 mb-3">HOW WE WORK WITH YOU</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              The <span className="font-medium">offer stack.</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A single ladder — from a free 30-minute call to a full network transformation. Every rung serves a specific stage of engine work.
            </p>
          </div>
          <OfferStackLadder />
        </div>
      </SectionLight>

      {/* Proof — Case Studies */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="text-xs tracking-[0.2em] font-semibold text-white/40 mb-3">PROOF</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              Engines <span className="font-medium">installed.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link to="/case-studies/pst" className="group block p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <p className="text-xs text-white/50 mb-2">Preferred Solutions Transport · Operations engine</p>
              <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-emerald-300 transition-colors">From Manual to Machine.</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">A webhook-native, 7-stage operational engine installed in a live logistics environment — architected, deployed, and transferred into team ownership.</p>
              <span className="text-sm font-medium text-white flex items-center gap-1">Read installation <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/case-studies/optimist" className="group block p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <p className="text-xs text-white/50 mb-2">Optimist Business Solutions · Intake engine</p>
              <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-emerald-300 transition-colors">From Bottleneck to Breakthrough.</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">An AI-routed intake engine that compressed a 2-week manual process into a single day — 51% of process steps eliminated by design.</p>
              <span className="text-sm font-medium text-white flex items-center gap-1">Read installation <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Testimonial */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-24" muted>
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-10 h-10 mx-auto mb-6 text-foreground/20" />
          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-6">
            "Donovan is AI. He's The Answer."
          </blockquote>
          <div className="text-foreground/60">
            <p className="font-medium text-foreground/80">Jamar Wright</p>
            <p className="text-sm">Owner/Operator, Revive Beauty Salon</p>
          </div>
        </div>
      </SectionLight>

      {/* Logos */}
      <SectionLight className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <ClientLogoCarousel />
        </div>
      </SectionLight>

      {/* Final CTA */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Start with a <span className="font-medium">clear read.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Thirty minutes. Free. You leave with an engine health snapshot, the current constraint, and the honest next step — even if it isn't us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR (free)<ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/field-guides">Prefer to read? Field Guides</Link>
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

export default Index;
