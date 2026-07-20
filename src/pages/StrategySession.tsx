import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import NewsletterCTA from "@/components/NewsletterCTA";
import EngineHealthBar from "@/components/EngineHealthBar";
import { ArrowRight, CheckCircle2, ExternalLink, Clock } from "lucide-react";

const BOOK = "https://calendar.app.google/XXdQMZcNjYjnACuz5";

/**
 * Strategy Session — Tier 0 entry point (Offer Architecture v4).
 * Replaces the retired "PEAR" page (2026-07-15). Source of truth:
 * `CRO/Revenue Architecture/GL Offer Architecture v4 — BPE.md` (Tier 0)
 * and `Reports/CRO/2026-07-15_gl-strategy-session-funnel-build.md`.
 *
 * KNOWN GAP (flagged by CTO, 2026-07-15): the confirmation-gate mechanic
 * described below (doctrine video + intake within 24 hours, auto-cancel
 * on miss) is the *approved doctrine*, but the infrastructure that
 * enforces it — a completion-tracked video host (Loom/Wistia) wired via
 * Make/Zapier/Calendly automation to auto-cancel unconfirmed bookings —
 * is NOT built yet. Today, the booking button below goes straight to a
 * Google Calendar link with no gate behind it. Do not represent this
 * page as having a live confirmation gate until that automation exists.
 */
const StrategySession = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[60vh] flex items-center" motif="supercar-front">
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block text-xs tracking-[0.2em] font-semibold text-emerald-300 mb-6">
            STRATEGY SESSION
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            Every business runs on <span className="font-medium">engines.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            A working session, not a sales call. We walk through your business as a set of engines, find the one that's constraining the rest, and score it. No fee to book.
          </p>
          <p className="text-sm text-white/50 max-w-xl mx-auto mb-10 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            45 minutes · no cost · slot confirmed by a short pre-session step, not a payment
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="gap-2">
              Reserve a Strategy Session
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">What you leave with</h2>
          <p className="text-lg text-foreground/60 mb-10">Three outcomes in forty-five minutes.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Engine health snapshot", d: "A read on your critical engines across Reliability, Efficiency, Measurability, Transferability, and Adaptability." },
              { t: "Weakest engine identified", d: "The single engine whose performance is bounding the rest of the business — with the reason it's the constraint." },
              { t: "A specific next step", d: "Whether that's a Field Guide, Compass, Labs, Ignite — or nothing at all. Honest routing, not a pitch." },
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

      <SectionLight className="px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">How booking works</h2>
          <p className="text-lg text-foreground/60 mb-10">There's no free-for-anyone tier here. That's deliberate.</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">1</div>
              <p className="text-foreground/80">Reserve a time. No payment, no card, nothing to purchase.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">2</div>
              <p className="text-foreground/80">Within 24 hours, complete a short doctrine breakdown and a brief intake — this is what confirms your slot.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">3</div>
              <p className="text-foreground/80">Show up for 45 minutes already understanding the Engine framework, so we spend the time on your business instead of background.</p>
            </div>
          </div>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Forty-five minutes. <span className="font-medium">One clear read.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            No pitch deck. No form maze. A working diagnostic session — the kind of conversation most operators only get after they've already hired someone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="gap-2">
                Reserve a Strategy Session
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

export default StrategySession;
