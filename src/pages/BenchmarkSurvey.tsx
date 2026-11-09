import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
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
  BarChart3,
  Cpu,
  Layers,
  FileText,
  TrendingUp,
} from "lucide-react";

const NOTIFICATION_EMAIL = "info@wearegenesislumina.com";
const CALENDAR_BOOKING_URL = "https://calendar.app.google/wPxj3Ct5uukBsjuc6";
const BENCHMARK_STORAGE_KEY = "gl_benchmark_submission_v1";

type Step = 1 | 2 | 3 | 4 | 5 | "completed";

const BenchmarkSurvey = () => {
  const [step, setStep] = useState<Step>(1);

  // Form State
  const [bottleneck, setBottleneck] = useState<string>("");
  const [headache, setHeadache] = useState<string>("");
  const [aiMaturity, setAiMaturity] = useState<string>("");
  const [priorAttempts, setPriorAttempts] = useState<string[]>([]);
  const [marginLoss, setMarginLoss] = useState<string>("");
  const [urgency, setUrgency] = useState<number>(3);

  // Profile
  const [scale, setScale] = useState<string>("");
  const [region, setRegion] = useState<string>("Midwest (IN, IL, OH, MI, KY, WI)");
  const [industry, setIndustry] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [requestArchitectureBrief, setRequestArchitectureBrief] = useState<boolean>(true);

  // Submission State
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  // Check if previously completed
  useEffect(() => {
    const saved = localStorage.getItem(BENCHMARK_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.completed) {
          setCompanyName(parsed.companyName || "");
          setWorkEmail(parsed.workEmail || "");
          setBottleneck(parsed.bottleneck || "");
          setStep("completed");
        }
      } catch (e) {
        console.warn("Could not parse saved benchmark progress", e);
      }
    }
  }, []);

  const scrollToSurvey = () => {
    const el = document.getElementById("benchmark-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const togglePriorAttempt = (attempt: string) => {
    if (priorAttempts.includes(attempt)) {
      setPriorAttempts(priorAttempts.filter((a) => a !== attempt));
    } else {
      setPriorAttempts([...priorAttempts, attempt]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !workEmail.trim() || !companyName.trim() || !scale) {
      setSubmitError("Please provide your name, work email, company name, and operating scale.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const payload = {
      _subject: `[Executive Benchmark] ${companyName} (${scale} · ${region})`,
      fullName,
      workEmail,
      companyName,
      websiteUrl: websiteUrl.trim() || "Not provided",
      operatingScale: scale,
      region,
      industry: industry.trim() || "Not specified",
      primaryConstraintEngine: bottleneck || "Not specified",
      groundLevelHeadache: headache.trim() || "Not provided",
      aiGovernanceMaturity: aiMaturity || "Not specified",
      priorWorkaroundAttempts: priorAttempts.length > 0 ? priorAttempts.join("; ") : "None indicated",
      estimatedAnnualMarginLeakage: marginLoss || "Not specified",
      urgencyScore: `${urgency} of 5`,
      requestedSystemsBrief: requestArchitectureBrief ? "Yes" : "No",
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      localStorage.setItem(
        BENCHMARK_STORAGE_KEY,
        JSON.stringify({
          completed: true,
          companyName,
          workEmail,
          bottleneck,
          submittedAt: new Date().toISOString(),
        })
      );
    } catch (err) {
      console.warn("Benchmark dispatch network notice", err);
      localStorage.setItem(
        BENCHMARK_STORAGE_KEY,
        JSON.stringify({
          completed: true,
          companyName,
          workEmail,
          bottleneck,
          submittedAt: new Date().toISOString(),
        })
      );
    } finally {
      setSubmitting(false);
      setStep("completed");
      scrollToSurvey();
    }
  };

  const handleReset = () => {
    localStorage.removeItem(BENCHMARK_STORAGE_KEY);
    setStep(1);
    setBottleneck("");
    setHeadache("");
    setAiMaturity("");
    setPriorAttempts([]);
    setMarginLoss("");
    setUrgency(3);
    setScale("");
    setFullName("");
    setWorkEmail("");
    setCompanyName("");
    setWebsiteUrl("");
    setSubmitError("");
    scrollToSurvey();
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Header */}
      <SectionDark className="min-h-[55vh] flex items-center" motif="supercar-front">
        <div className="px-6 md:px-8 py-24 md:py-32 max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            Executive Research Initiative · 90-Second Read
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]">
            The 2026 Mid-Market <span className="font-medium">Operations Benchmark</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
            A concise, 90-second benchmarking study for Midwest business owners and executive leadership. We are isolating where internal engines are leaking margin and how mid-market organizations are governing AI into 2026.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/60 mb-10">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> ~90 Seconds
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> 100% Confidential
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <FileText className="w-3.5 h-3.5 text-amber-400" /> Executive Peer Report Included
            </span>
          </div>

          <Button
            size="lg"
            onClick={scrollToSurvey}
            className="text-base md:text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 gap-2 font-medium"
          >
            Begin 90-Second Benchmark
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </SectionDark>

      {/* Main Survey Form Container */}
      <section id="benchmark-form" className="px-6 md:px-8 py-20 bg-neutral-50 border-y border-foreground/10">
        <div className="max-w-3xl mx-auto">
          {step !== "completed" && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-2">
                <span>BENCHMARK PROGRESS</span>
                <span>STEP {step} OF 5</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300 ease-out"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          <Card className="p-6 md:p-10 border-2 border-foreground/15 shadow-sm bg-white">
            {/* STEP 1: PRIMARY CONSTRAINING ENGINE */}
            {step === 1 && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-3">
                  <span>DIMENSION 1</span>
                  <span>SYSTEM CONSTRAINT</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Which internal engine is currently the primary constraint bounding your growth or leaking margin?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Per Business Performance Engineering doctrine, an organization’s throughput is governed by its single weakest critical engine.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      key: "founder-delivery",
                      title: "Founder / Key-Person Delivery Bottleneck",
                      desc: "Leadership is pulled into daily execution, client delivery, or firefighting. The business stalls if key people step away.",
                    },
                    {
                      key: "fragmented-systems",
                      title: "Fragmented Systems & Manual Handoffs",
                      desc: "Tools don't talk. Staff wastes hours copy-pasting data across spreadsheets, disconnected software, and email chains.",
                    },
                    {
                      key: "pipeline-volatility",
                      title: "Pipeline & Client Acquisition Volatility",
                      desc: "Revenue is lumpy and unpredictable. No engineered, repeatable client acquisition engine consistently generating pipeline.",
                    },
                    {
                      key: "delivery-margin-drag",
                      title: "Fulfillment & Operational Margin Erosion",
                      desc: "Top-line revenue is growing, but manual fulfillment, administrative overhead, and labor costs are consuming profit margins.",
                    },
                    {
                      key: "ai-tool-chaos",
                      title: "AI & Tool Sprawl Chaos",
                      desc: "Staff are experimenting with disparate AI tools ad-hoc, with zero institutional data governance, workflow integration, or measurable ROI.",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => {
                        setBottleneck(opt.title);
                        setStep(2);
                        scrollToSurvey();
                      }}
                      className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all flex items-start gap-4 group ${
                        bottleneck === opt.title
                          ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                          : "border-foreground/15 hover:border-foreground hover:bg-neutral-50"
                      }`}
                    >
                      <Layers className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-base text-foreground">{opt.title}</div>
                        <div className="text-xs text-foreground/60 mt-1 leading-relaxed">{opt.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: GROUND-LEVEL HEADACHE */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-3">
                  <span>DIMENSION 2</span>
                  <span>GROUND-LEVEL SIGNAL</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  In one or two sentences: What is the single most frustrating operational headache you had to deal with in the past 30 days?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Your qualitative feedback is completely anonymized and helps us identify the exact friction patterns across mid-market leadership.
                </p>

                <div className="space-y-4 mb-6">
                  <textarea
                    rows={4}
                    value={headache}
                    onChange={(e) => setHeadache(e.target.value)}
                    placeholder="e.g., We had a critical client onboarding delay because data was trapped in two different spreadsheets and our ops manager was out sick..."
                    className="w-full p-4 rounded-xl border border-foreground/20 text-sm md:text-base focus:outline-none focus:border-foreground transition-all"
                  />
                  <p className="text-xs text-foreground/50 italic">
                    Even a brief sentence provides an invaluable operational signal for the benchmark.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => {
                      setStep(3);
                      scrollToSurvey();
                    }}
                    className="bg-foreground text-white hover:bg-foreground/90 gap-2"
                  >
                    Continue to AI Governance <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: AI & AUTOMATION MATURITY */}
            {step === 3 && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-3">
                  <span>DIMENSION 3</span>
                  <span>AI & GOVERNANCE MATURITY</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Where does your organization currently sit on the AI and systems automation curve?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Select the level that most accurately reflects your current operating reality.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      key: "level-1",
                      level: "Level 1: Manual / Traditional Ops",
                      desc: "Core workflows run on human memory, email, and manual spreadsheet handoffs. No active AI integration.",
                    },
                    {
                      key: "level-2",
                      level: "Level 2: Ad-Hoc Experimentation",
                      desc: "Staff uses ChatGPT or personal AI subscriptions independently, but with zero formal company policy, security controls, or systems integration.",
                    },
                    {
                      key: "level-3",
                      level: "Level 3: Fragmented Automations",
                      desc: "Some Zapier or point-to-point automations are running, but tools are fragile, data remains siloed, and no central architecture exists.",
                    },
                    {
                      key: "level-4",
                      level: "Level 4: Governed Systems Architecture",
                      desc: "AI workflows and system handoffs are documented, secure, governed company-wide, and tied to measurable operational ROI.",
                    },
                  ].map((lvl) => (
                    <button
                      key={lvl.key}
                      type="button"
                      onClick={() => {
                        setAiMaturity(lvl.level);
                        setStep(4);
                        scrollToSurvey();
                      }}
                      className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all flex items-start gap-4 group ${
                        aiMaturity === lvl.level
                          ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                          : "border-foreground/15 hover:border-foreground hover:bg-neutral-50"
                      }`}
                    >
                      <Cpu className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-base text-foreground">{lvl.level}</div>
                        <div className="text-xs text-foreground/60 mt-1 leading-relaxed">{lvl.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground shrink-0 mt-1" />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-start pt-4 border-t border-foreground/10">
                  <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: PRIOR ATTEMPTS & MARGIN LOSS */}
            {step === 4 && (
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-3">
                  <span>DIMENSION 4</span>
                  <span>EFFORTS & FINANCIAL LEAKAGE</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  What have you attempted to resolve this constraint, and what is it costing you?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Select all prior approaches that apply to your business.
                </p>

                {/* Sub-A: Prior Attempts */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 label-mono">
                    Prior Resolution Attempts (Select All That Apply)
                  </label>
                  <div className="space-y-2">
                    {[
                      "Hired more headcount / contractors (increased payroll overhead without fixing the root system)",
                      "Purchased additional software / SaaS subscriptions (created more tool sprawl and silos)",
                      "Leadership absorbed the work personally (working 60+ hour weeks to keep operations moving)",
                      "Hired an outside agency or consultancy (received recommendations or slides, but no lasting architecture)",
                      "Haven't found a viable, systems-level fix yet",
                    ].map((attempt) => {
                      const isSelected = priorAttempts.includes(attempt);
                      return (
                        <div
                          key={attempt}
                          onClick={() => togglePriorAttempt(attempt)}
                          className={`p-3.5 rounded-lg border text-xs md:text-sm cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? "border-emerald-600 bg-emerald-50/60 font-medium text-foreground"
                              : "border-foreground/15 hover:bg-neutral-50 text-foreground/80"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                              isSelected
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "border-foreground/30 bg-white"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="flex-1 leading-relaxed">{attempt}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-B: Estimated Margin Loss */}
                <div className="mb-6 pt-4 border-t border-foreground/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2 label-mono">
                    Estimated Annual Margin or Revenue Lost to Operational Drag *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: "<50k", label: "Under $50k" },
                      { key: "50k-250k", label: "$50k – $250k" },
                      { key: "250k-1m", label: "$250k – $1M" },
                      { key: "1m+", label: "$1M+ / year" },
                    ].map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => setMarginLoss(m.label)}
                        className={`p-3 rounded-lg border text-center text-xs md:text-sm font-medium transition-all ${
                          marginLoss === m.label
                            ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                            : "border-foreground/20 hover:border-foreground bg-white text-foreground"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub-C: Urgency */}
                <div className="mb-6 pt-4 border-t border-foreground/10">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70 label-mono">
                      Urgency to Solve in the Next 90–180 Days
                    </label>
                    <span className="text-xs font-mono font-semibold text-emerald-700">
                      {urgency === 1 && "1 — Low Priority"}
                      {urgency === 2 && "2 — Moderate Concern"}
                      {urgency === 3 && "3 — Active Operational Need"}
                      {urgency === 4 && "4 — High Priority"}
                      {urgency === 5 && "5 — Critical / Top Priority"}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setUrgency(val)}
                        className={`py-3 rounded-lg border font-mono text-sm transition-all ${
                          urgency === val
                            ? "bg-foreground text-white border-foreground font-semibold"
                            : "border-foreground/20 hover:border-foreground/50 bg-neutral-50 text-foreground"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <Button variant="ghost" size="sm" onClick={() => setStep(3)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => {
                      setStep(5);
                      scrollToSurvey();
                    }}
                    className="bg-foreground text-white hover:bg-foreground/90 gap-2"
                  >
                    Continue to Final Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 5: EXECUTIVE DEMOGRAPHICS & DELIVERY */}
            {step === 5 && (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-3">
                  <span>FINAL STEP</span>
                  <span>EXECUTIVE DOSSIER & DELIVERY</span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground">
                  Where should we send your Executive Benchmark Comparison?
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  We will compile your responses against peer Midwest organizations and deliver the report directly to your inbox.
                </p>

                {/* Operating Scale */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2 label-mono">
                    Current Annual Operating Scale *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { key: "5m-25m", label: "$5M – $25M+ / year" },
                      { key: "1m-5m", label: "$1M – $5M / year" },
                      { key: "250k-1m", label: "$250k – $1M / year" },
                      { key: "under-250k", label: "Solopreneur / Under $250k" },
                    ].map((s) => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setScale(s.label)}
                        className={`p-3 text-left rounded-lg border text-xs md:text-sm font-medium transition-all ${
                          scale === s.label
                            ? "border-emerald-600 bg-emerald-50 text-emerald-900 border-2"
                            : "border-foreground/20 hover:border-foreground bg-white text-foreground"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region & Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Region
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full p-3.5 rounded-lg border border-foreground/20 bg-white text-sm focus:outline-none focus:border-foreground"
                    >
                      <option value="Midwest (IN, IL, OH, MI, KY, WI)">Midwest (IN, IL, OH, MI, KY, WI)</option>
                      <option value="East Coast / Northeast">East Coast / Northeast</option>
                      <option value="Southeast">Southeast</option>
                      <option value="Texas / Central">Texas / Central</option>
                      <option value="West Coast">West Coast</option>
                      <option value="National / Remote">National / Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Primary Industry
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Professional Services, Logistics, Health"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="border-foreground/20 py-5"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Your Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Mark Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="border-foreground/20 py-5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Work Email *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="mark@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="border-foreground/20 py-5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 label-mono">
                      Company Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Vance Logistics Corp"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="border-foreground/20 py-5"
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
                      className="border-foreground/20 py-5"
                    />
                  </div>
                </div>

                {/* Opt-in check */}
                <div className="p-4 rounded-xl bg-neutral-100 border border-foreground/10 mb-6">
                  <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-foreground/80 leading-relaxed">
                    <input
                      type="checkbox"
                      checked={requestArchitectureBrief}
                      onChange={(e) => setRequestArchitectureBrief(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-foreground/30 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>
                      <strong>Notify me of relevant architectures:</strong> Check this if you want Donovan Green to include a customized 3-point systems architecture note for your specific bottleneck alongside your benchmark findings.
                    </span>
                  </label>
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
                  className="w-full py-6 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-medium gap-2"
                >
                  {submitting ? "Compiling Benchmark Data..." : "Submit Benchmark & Request Peer Report →"}
                </Button>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-start">
                  <Button variant="ghost" size="sm" onClick={() => setStep(4)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 6: COMPLETED / THANK YOU SCREEN */}
            {step === "completed" && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 border border-emerald-300">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="inline-block text-xs uppercase tracking-widest font-semibold text-emerald-700 label-mono mb-2">
                  BENCHMARK SUBMISSION RECORDED
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                  Thank You for Your Contribution
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-lg mx-auto mb-6 text-sm md:text-base">
                  Your responses for <strong>{companyName || "your organization"}</strong> have been recorded into our 2026 executive dataset. Your company report and peer comparison will be delivered to <strong>{workEmail || "your email"}</strong>.
                </p>

                {bottleneck && (
                  <div className="p-4 rounded-xl bg-neutral-100 border border-foreground/10 max-w-md mx-auto text-left mb-8 text-xs text-foreground/80">
                    <span className="font-semibold block uppercase tracking-wider text-foreground/60 label-mono mb-1">
                      Identified Primary Constraint:
                    </span>
                    <span className="font-medium text-foreground">{bottleneck}</span>
                  </div>
                )}

                {/* Parallel Paths for High Intent VITOs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
                  {/* Path 1: Live Briefing */}
                  <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 label-mono block mb-1">
                        EXECUTIVE BRIEFING
                      </span>
                      <h4 className="font-medium text-base text-foreground mb-1">Discuss Results Live</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                        Schedule a 15-minute diagnostic walkthrough with Donovan Green to review your peer comparison.
                      </p>
                    </div>
                    <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-1 text-xs">
                      <a href={CALENDAR_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Select Calendar Slot <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                  </div>

                  {/* Path 2: Full 50-Question Readiness Audit */}
                  <div className="p-5 rounded-xl bg-white border border-foreground/15 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 label-mono block mb-1">
                        DEEP DIAGNOSTIC
                      </span>
                      <h4 className="font-medium text-base text-foreground mb-1">50-Question Readiness Audit</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                        Perform a comprehensive self-serve read across all 5 organizational engine dimensions ($297).
                      </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full border-foreground/20 hover:bg-neutral-50 text-foreground gap-1 text-xs">
                      <a href="https://buy.stripe.com/7sY4gzdtS3GygdX3kH1Fe0a" target="_blank" rel="noopener noreferrer">
                        Run 50-Q Audit ($297) →
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs">
                  <Link to="/approach" className="text-foreground/60 hover:text-foreground underline underline-offset-4">
                    Explore the BPE Doctrine
                  </Link>
                  <span className="text-foreground/30">•</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-foreground/50 hover:text-foreground underline underline-offset-4"
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Why This Benchmark Matters */}
      <SectionLight className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 label-mono mb-2 block">
              RESEARCH METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-light">Why We Conduct This Benchmark</h2>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto mt-2">
              Most business research looks at superficial vanity metrics. We measure business as an interconnected mechanical system of engines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Engine Health Scoring",
                desc: "We evaluate organizations across 5 universal dimensions: Reliability, Efficiency, Measurability, Transferability, and Adaptability.",
              },
              {
                icon: Cpu,
                title: "AI & Systems Reality",
                desc: "Separating legitimate workflow architecture from ad-hoc employee tool sprawl and unstructured experimentation.",
              },
              {
                icon: TrendingUp,
                title: "Peer-Level Insight",
                desc: "Comparing your operational friction points against verified mid-market operators facing identical scaling and succession dynamics.",
              },
            ].map((col) => (
              <div key={col.title} className="p-6 rounded-xl border border-foreground/10 bg-white shadow-sm">
                <col.icon className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-medium text-lg mb-2 text-foreground">{col.title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default BenchmarkSurvey;
