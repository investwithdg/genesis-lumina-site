import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import NewsletterCTA from "@/components/NewsletterCTA";
import EngineHealthBar from "@/components/EngineHealthBar";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
  Briefcase,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

const CALENDAR_BOOKING_URL = "https://calendar.app.google/XXdQMZcNjYjnACuz5";
const NOTIFICATION_EMAIL = "info@wearegenesislumina.com";
const QUALIFIED_STORAGE_KEY = "gl_strategy_session_qualified_v1";
const AUDIT_PURCHASE_URL = "https://buy.stripe.com/7sY4gzdtS3GygdX3kH1Fe0a";

type Step = "scale" | "bottleneck" | "role" | "commitment" | "details" | "result-qualified" | "result-disqualified";

const StrategySession = () => {
  const location = useLocation();

  // Scroll to intake if arrived via #diagnostic-intake hash
  useEffect(() => {
    if (location.hash === "#diagnostic-intake") {
      setTimeout(() => {
        const el = document.getElementById("diagnostic-intake");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  // Funnel state
  const [step, setStep] = useState<Step>("scale");
  const [revenue, setRevenue] = useState<string>("");
  const [bottleneck, setBottleneck] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [commitment, setCommitment] = useState<string>("");

  // Contact details
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  // 1. Revenue Scale
  const handleSelectScale = (selected: string) => {
    setRevenue(selected);
    if (selected === "pre-revenue") {
      setStep("result-disqualified");
      scrollToWidget();
    } else {
      setStep("bottleneck");
      scrollToWidget();
    }
  };

  // 2. Bottleneck
  const handleSelectBottleneck = (selected: string) => {
    setBottleneck(selected);
    setStep("role");
    scrollToWidget();
  };

  // 3. Role
  const handleSelectRole = (selected: string) => {
    setRole(selected);
    if (selected === "team-member") {
      setStep("result-disqualified");
      scrollToWidget();
    } else {
      setStep("commitment");
      scrollToWidget();
    }
  };

  // 4. Doctrine Commitment
  const handleSelectCommitment = (agreed: boolean) => {
    if (agreed) {
      setCommitment("Yes — agrees to review 5-minute Engine Doctrine briefing prior to diagnostic");
      setStep("details");
      scrollToWidget();
    } else {
      setCommitment("No / Not at this time");
      setStep("result-disqualified");
      scrollToWidget();
    }
  };

  // 5. Final Contact Details Submission & Email Dispatch
  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !workEmail.trim() || !companyName.trim()) {
      setSubmitError("Please fill in your name, work email, and company name.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const payload = {
      _subject: `[Strategy Session] Pre-Qualified Lead: ${companyName} (${revenue})`,
      fullName,
      workEmail,
      companyName,
      websiteUrl: websiteUrl.trim() || "Not provided",
      revenueScale: revenue,
      constrainingEngine: bottleneck,
      leadershipRole: role,
      doctrineCommitment: commitment,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Dispatches lead brief to info@wearegenesislumina.com via formsubmit JSON endpoint
      await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      localStorage.setItem(QUALIFIED_STORAGE_KEY, "true");
    } catch (err) {
      console.warn("Intake dispatch network notice (continuing to booking)", err);
      localStorage.setItem(QUALIFIED_STORAGE_KEY, "true");
    } finally {
      setSubmitting(false);
      setStep("result-qualified");
      scrollToWidget();
    }
  };

  const scrollToWidget = () => {
    const el = document.getElementById("diagnostic-intake");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleReset = () => {
    setStep("scale");
    setRevenue("");
    setBottleneck("");
    setRole("");
    setCommitment("");
    setSubmitError("");
    scrollToWidget();
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <SectionDark className="min-h-[65vh] flex items-center" motif="supercar-front">
        <div className="px-6 md:px-8 py-28 md:py-36 max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block text-xs tracking-[0.25em] font-semibold text-emerald-300 mb-6 label-mono uppercase">
            ORIENTATION BEFORE EXECUTION · TIER 0 DIAGNOSTIC
          </span>
          <h1 className="text-4xl md:text-7xl font-light tracking-tight text-white mb-6">
            Every business runs on <span className="font-medium">engines.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            A working diagnostic session, not a sales call. We inspect your business as an interconnected mechanical system, isolate the single engine constraining performance, and score it.
          </p>
          <p className="text-sm text-white/50 max-w-xl mx-auto mb-8 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            45 minutes · No fee · Reserved exclusively for verified operating businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Button
              size="lg"
              onClick={scrollToWidget}
              className="text-base md:text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 gap-2 font-medium w-full sm:w-auto"
            >
              Book 45-Min Session (Live with Donovan)
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 py-6 h-auto border-white/30 text-white bg-transparent hover:bg-white/10 gap-2 w-full sm:w-auto"
            >
              <a href={AUDIT_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                Skip Call · Take 50-Q Audit ($297)
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Live Strategy Session: 45 min · Free · Qualification-gated
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Self-Serve Audit: 50 Questions · $297 · Instant automated scoring
            </span>
          </div>
        </div>
      </SectionDark>

      {/* INTERACTIVE PREQUALIFICATION GATE */}
      <section id="diagnostic-intake" className="px-6 md:px-8 py-20 bg-neutral-50 border-y border-foreground/10">
        <div className="max-w-3xl mx-auto">
          {/* Asynchronous No-Call Banner */}
          <div className="mb-8 p-5 rounded-2xl bg-white border border-foreground/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 label-mono mb-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Asynchronous Self-Serve Option
              </div>
              <p className="text-sm font-medium text-foreground">
                Don't want to get on a phone call? Run the diagnostic directly.
              </p>
              <p className="text-xs text-foreground/60 mt-0.5 max-w-lg">
                The 50-Question S³ Readiness Assessment delivers the exact same 5-dimension scorecard on your own time with instant automated scoring.
              </p>
            </div>
            <Button asChild size="sm" className="whitespace-nowrap bg-foreground text-white hover:bg-foreground/90 shrink-0">
              <a href={AUDIT_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                Launch Audit ($297) →
              </a>
            </Button>
          </div>

          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 label-mono mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> PRE-SESSION QUALIFICATION
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Verify Your <span className="font-medium">Diagnostic Fit</span>
            </h2>
            <p className="text-sm md:text-base text-foreground/60 max-w-xl mx-auto mt-2">
              Strategy Sessions are conducted directly by Donovan Green. Complete this 60-second diagnostic check to unlock the calendar schedule.
            </p>
          </div>

          <Card className="p-6 md:p-10 border-2 border-foreground/15 shadow-sm bg-white">
            {/* STEP 1: REVENUE SCALE */}
            {step === "scale" && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-4">
                  <span>STEP 1 OF 4</span>
                  <span>OPERATING SCALE</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  What is your business's current annual revenue or operating scale?
                </h3>
                <p className="text-sm text-foreground/60 mb-4">
                  Select your current run-rate to ensure appropriate diagnostic modeling.
                </p>

                <div className="p-3 mb-5 rounded-lg bg-neutral-100/70 border border-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="text-foreground/70">Prefer immediate automated scoring without waiting on a calendar call?</span>
                  <a
                    href={AUDIT_PURCHASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-4 flex items-center gap-1 whitespace-nowrap"
                  >
                    Take 50-Question Self-Serve Audit ($297) →
                  </a>
                </div>

                <div className="space-y-3">
                  {[
                    { key: "5m-25m", label: "$5M – $25M+ / year", desc: "Multi-tiered operations, institutional scaling, or succession prep." },
                    { key: "1m-5m", label: "$1M – $5M / year", desc: "Proven product-market fit, hitting severe manual delivery bottlenecks." },
                    { key: "250k-1m", label: "$250k – $1M / year", desc: "Active recurring revenue, founder currently operating as the primary engine." },
                    { key: "solopreneur", label: "Solopreneur / Boutique Operator (Under $250k)", desc: "Solo practice, consultant, or agency founder ready for systems architecture & diagnostic." },
                    { key: "pre-revenue", label: "Pre-Revenue / Idea Stage ($0)", desc: "Unlaunched concept, pre-client validation, or early exploratory phase." },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelectScale(opt.key)}
                      className="w-full text-left p-4 md:p-5 rounded-xl border border-foreground/15 hover:border-foreground hover:bg-neutral-50 transition-all flex items-start gap-4 group"
                    >
                      <Building2 className="w-5 h-5 text-foreground/40 group-hover:text-foreground shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-base text-foreground">{opt.label}</div>
                        <div className="text-xs text-foreground/60 mt-0.5">{opt.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: CONSTRAINING ENGINE */}
            {step === "bottleneck" && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-4">
                  <span>STEP 2 OF 4</span>
                  <span>PRIMARY CONSTRAINT</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Which engine is currently bounding your performance or leaking the most margin?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Per BPE Law 03, overall throughput is dictated by the weakest critical engine.
                </p>

                <div className="space-y-3">
                  {[
                    { key: "founder-delivery", title: "Founder Bottleneck & Delivery Chaos", desc: "Everything runs through the founder. You cannot step away without client work stalling." },
                    { key: "systems-handoffs", title: "Fragmented Systems & Manual Handoffs", desc: "Tools don't talk. Team wastes hours copy-pasting data across spreadsheets and platforms." },
                    { key: "pipeline-sales", title: "Client Acquisition & Sales Volatility", desc: "Revenue is lumpy. No repeatable, automated engine predictably generating qualified pipeline." },
                    { key: "scale-sale-exit", title: "Scale, Acquirability, or Succession Prep", desc: "Positioning the organization to operate independently of key persons for institutional capital or sale." },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelectBottleneck(opt.title)}
                      className="w-full text-left p-4 md:p-5 rounded-xl border border-foreground/15 hover:border-foreground hover:bg-neutral-50 transition-all flex items-start gap-4 group"
                    >
                      <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-base text-foreground">{opt.title}</div>
                        <div className="text-xs text-foreground/60 mt-0.5">{opt.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground shrink-0 mt-1" />
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-start">
                  <Button variant="ghost" size="sm" onClick={() => setStep("scale")} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: ROLE & AUTHORITY */}
            {step === "role" && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-4">
                  <span>STEP 3 OF 4</span>
                  <span>DECISION AUTHORITY</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  What is your role within the organization?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Strategy Sessions require operational authority to inspect and modify internal systems.
                </p>

                <div className="space-y-3">
                  {[
                    { key: "founder-ceo", label: "Founder / CEO / Managing Partner", desc: "Direct enterprise ownership and final decision authority." },
                    { key: "solopreneur", label: "Solopreneur / Solo Operator / Principal Consultant", desc: "Solo business owner managing client delivery, looking to engineer systems & leverage." },
                    { key: "coo-operations", label: "COO / VP of Operations / General Manager", desc: "Leadership authority over systems, delivery, and team workflows." },
                    { key: "team-member", label: "Team Member / Individual Contributor / Researcher", desc: "Staff or departmental contributor exploring tools." },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelectRole(opt.key)}
                      className="w-full text-left p-4 md:p-5 rounded-xl border border-foreground/15 hover:border-foreground hover:bg-neutral-50 transition-all flex items-start gap-4 group"
                    >
                      <Briefcase className="w-5 h-5 text-foreground/40 group-hover:text-foreground shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-base text-foreground">{opt.label}</div>
                        <div className="text-xs text-foreground/60 mt-0.5">{opt.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground shrink-0 mt-1" />
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-start">
                  <Button variant="ghost" size="sm" onClick={() => setStep("bottleneck")} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: DOCTRINE COMMITMENT */}
            {step === "commitment" && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-4">
                  <span>STEP 4 OF 4</span>
                  <span>DOCTRINE PROTOCOL</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Commitment to the Diagnostic Protocol
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                  A Strategy Session is a structured diagnostic working session, not a casual sales pitch. We walk through your business as a set of engines, find the constraint, and map the fix.
                </p>

                <div className="p-5 rounded-xl bg-neutral-100 border border-foreground/10 mb-6">
                  <p className="text-sm font-medium text-foreground mb-1">Pre-Session Agreement:</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    "I agree to review the 5-minute Engine Doctrine briefing prior to the call so our 45 minutes are spent working on my business rather than explaining basic concepts."
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    onClick={() => handleSelectCommitment(true)}
                    className="w-full py-6 text-base bg-foreground text-white hover:bg-foreground/90 gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    I agree — Continue to Final Details
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleSelectCommitment(false)}
                    className="w-full py-6 text-base text-foreground/60 border-foreground/20 hover:bg-neutral-100"
                  >
                    Not ready to make this commitment
                  </Button>
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-start">
                  <Button variant="ghost" size="sm" onClick={() => setStep("role")} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 5: CONTACT DETAILS */}
            {step === "details" && (
              <form onSubmit={handleSubmitDetails}>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-4">
                  <span>FINAL STEP</span>
                  <span>CONTACT & COMPANY</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Where should we send your pre-session dossier?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Your information is delivered directly to Donovan Green before your diagnostic.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Your Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="border-foreground/20 text-base py-5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Work Email *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="border-foreground/20 text-base py-5"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                        Company Name *
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="e.g. Acme Logistics"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="border-foreground/20 text-base py-5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                        Website URL
                      </label>
                      <Input
                        type="text"
                        placeholder="https://company.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="border-foreground/20 text-base py-5"
                      />
                    </div>
                  </div>
                </div>

                {submitError && (
                  <div className="p-3 mb-4 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {submitError}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full py-6 text-base bg-foreground text-white hover:bg-foreground/90 gap-2"
                >
                  {submitting ? "Verifying and Unlocking..." : "Submit and Unlock Google Calendar →"}
                </Button>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-start">
                  <Button variant="ghost" size="sm" onClick={() => setStep("commitment")} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </form>
            )}

            {/* OUTCOME A: QUALIFIED · CALENDAR UNLOCKED */}
            {step === "result-qualified" && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 border border-emerald-300">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="inline-block text-xs uppercase tracking-widest font-semibold text-emerald-700 label-mono mb-2">
                  PROFILE APPROVED · DIAGNOSTIC UNLOCKED
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                  You're Pre-Qualified for a Diagnostic
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Your operational profile meets our diagnostic criteria. Your intake dossier has been delivered directly to <strong>Donovan Green</strong>. Choose how you would like to proceed:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                  {/* Option 1: Live Working Session */}
                  <div className="p-6 rounded-xl bg-emerald-50/60 border-2 border-emerald-300 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 label-mono block mb-1">
                        PATHWAY A · LIVE WORKING SESSION
                      </span>
                      <h4 className="font-medium text-lg text-foreground mb-1">Book with Donovan Green</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                        45-minute working diagnostic session. Come with core operating metrics accessible.
                      </p>
                    </div>
                    <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 text-sm font-medium">
                      <a href={CALENDAR_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Open Google Calendar
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>

                  {/* Option 2: Self-Serve Immediately */}
                  <div className="p-6 rounded-xl bg-white border-2 border-foreground/15 flex flex-col justify-between hover:border-foreground/30 transition-all">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 label-mono block mb-1">
                        PATHWAY B · ASYNCHRONOUS AUDIT
                      </span>
                      <h4 className="font-medium text-lg text-foreground mb-1">Skip the Call · Run Audit Now</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                        Get the exact same 50-question readiness read without scheduling or waiting. Instant automated scoring ($297).
                      </p>
                    </div>
                    <Button asChild variant="outline" size="lg" className="w-full border-foreground/20 hover:bg-neutral-50 text-foreground gap-2 text-sm font-medium">
                      <a href={AUDIT_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                        Purchase Audit ($297) →
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-foreground/50">
                  Need to review the engine doctrine before proceeding?{" "}
                  <Link to="/approach" className="underline underline-offset-4 hover:text-foreground">
                    Read the BPE Doctrine here
                  </Link>
                </p>
              </div>
            )}

            {/* OUTCOME B: DISQUALIFIED / FOUNDATIONAL STAGE */}
            {step === "result-disqualified" && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-5 border border-amber-300">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <span className="inline-block text-xs uppercase tracking-widest font-semibold text-amber-700 label-mono mb-2">
                  FOUNDATIONAL STAGE DETECTED
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-3">
                  Foundational Self-Serve Pathway Recommended
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-lg mx-auto mb-6 text-sm md:text-base">
                  Our 1:1 Strategy Sessions are engineered specifically for operational businesses with active commercial operations and live client delivery. If you want the diagnostic read without scheduling a phone call, you can purchase and complete our self-serve 50-Question Audit directly:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-md mx-auto">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                    <a href={AUDIT_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                      Take 50-Question Audit ($297) →
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-foreground/20">
                    <Link to="/field-guides">Browse All Guides</Link>
                  </Button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-100 border border-foreground/10 max-w-md mx-auto text-left mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1 label-mono">
                    Solopreneur or Operator Ready for Diagnostic?
                  </div>
                  <p className="text-xs text-foreground/70 mb-3 leading-relaxed">
                    If you are an active solopreneur or boutique practice seeking our <strong>$2,500 Diagnostic Assessment</strong> to systematically untangle your delivery, you can proceed directly to scheduling:
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setRevenue("Solopreneur / Ready for $2,500 Diagnostic");
                      setStep("bottleneck");
                      scrollToWidget();
                    }}
                    className="text-xs font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-4 flex items-center gap-1"
                  >
                    Proceed with Diagnostic Intake →
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-foreground/50 hover:text-foreground underline underline-offset-4"
                >
                  Adjust prequalification answers
                </button>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* What You Leave With */}
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

      {/* 5 Dimensions */}
      <SectionLight className="px-8 py-24" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">The five dimensions of engine health</h2>
          <p className="text-lg text-foreground/60 mb-10">Every engine gets scored on the same axes. This is the doctrine.</p>
          <EngineHealthBar />
        </div>
      </SectionLight>

      {/* How Booking Works */}
      <SectionLight className="px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">How booking works</h2>
          <p className="text-lg text-foreground/60 mb-10">There's no free-for-anyone tier here. That's deliberate.</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">1</div>
              <p className="text-foreground/80">Complete the 60-second operational prequalification check above to verify diagnostic fit.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">2</div>
              <p className="text-foreground/80">Select your 45-minute working session directly on Donovan Green's Google Calendar.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 font-mono text-sm">3</div>
              <p className="text-foreground/80">Show up ready to inspect your internal systems, with zero pitch decks or superficial agency fluff.</p>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* Final Callout */}
      <SectionDark className="px-8 py-24" motif="schematic">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Forty-five minutes. <span className="font-medium">One clear read.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            A working diagnostic session — the kind of conversation most operators only get after they've already hired someone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToWidget}
              className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 gap-2"
            >
              Qualify for a Strategy Session
              <ArrowRight className="w-5 h-5" />
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
