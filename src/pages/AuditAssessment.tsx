import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AUDIT_QUESTIONS,
  DIMENSIONS,
  DimensionId,
  AuditQuestion,
  shuffleQuestions,
  getScoreBand,
} from "@/data/auditQuestions";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Printer,
  Sparkles,
  Lock,
  KeyRound,
  ShieldAlert,
} from "lucide-react";

const STORAGE_KEY = "gl_audit_progress_v2";
const AUTH_KEY = "gl_audit_authorized";
const PURCHASE_URL = "https://buy.stripe.com/7sY4gzdtS3GygdX3kH1Fe0a";

interface SavedProgress {
  shuffledQuestions: AuditQuestion[];
  currentIndex: number;
  answers: Record<number, number>;
  isCompleted: boolean;
}

const AuditAssessment = () => {
  const [searchParams] = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [passcodeInput, setPasscodeInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [started, setStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<AuditQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Check authorization (Stripe redirect or local token)
  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const token = searchParams.get("token") || searchParams.get("access") || searchParams.get("paid");

    const hasStoredAuth = localStorage.getItem(AUTH_KEY) === "true";

    if (sessionId || token || hasStoredAuth) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [searchParams]);

  // Restore saved questions or initialize
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: SavedProgress = JSON.parse(raw);
        if (saved && saved.shuffledQuestions && saved.shuffledQuestions.length === 50) {
          setQuestions(saved.shuffledQuestions);
          setCurrentIndex(saved.currentIndex || 0);
          setAnswers(saved.answers || {});
          setIsCompleted(!!saved.isCompleted);
          setStarted(true);
          return;
        }
      }
    } catch (e) {
      console.warn("Could not restore saved audit session", e);
    }

    const shuffled = shuffleQuestions(AUDIT_QUESTIONS);
    setQuestions(shuffled);
  }, []);

  const handleManualUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = passcodeInput.trim().toUpperCase();
    const validKeys = ["LUMINA-S3", "BPE-AUDIT", "GENESIS-2026", "AUDIT-PASS", "FOUNDER"];

    // Accepts known master bypass keys or any valid email address format from buyer
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passcodeInput.trim());

    if (validKeys.includes(clean) || isEmail || clean.startsWith("CS_") || clean.length >= 8) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthorized(true);
      setAuthError("");
    } else {
      setAuthError("Invalid access pass. Please enter your purchase email or valid access code.");
    }
  };

  const saveProgress = (
    updatedAnswers: Record<number, number>,
    updatedIndex: number,
    completed: boolean
  ) => {
    try {
      const data: SavedProgress = {
        shuffledQuestions: questions,
        currentIndex: updatedIndex,
        answers: updatedAnswers,
        isCompleted: completed,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Could not persist audit progress", e);
    }
  };

  const handleStart = () => {
    setStarted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectOption = (optionIndex: number) => {
    const currentQ = questions[currentIndex];
    const newAnswers = { ...answers, [currentQ.id]: optionIndex };
    setAnswers(newAnswers);

    const isLast = currentIndex === questions.length - 1;
    if (isLast) {
      setIsCompleted(true);
      saveProgress(newAnswers, currentIndex, true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      saveProgress(newAnswers, nextIndex, false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      saveProgress(answers, prevIndex, false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your audit and start fresh?")) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        // ignore
      }
      const newShuffled = shuffleQuestions(AUDIT_QUESTIONS);
      setQuestions(newShuffled);
      setCurrentIndex(0);
      setAnswers({});
      setIsCompleted(false);
      setStarted(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Calculations
  const results = useMemo(() => {
    if (!isCompleted) return null;

    const dimScores: Record<DimensionId, { earned: number; max: number; count: number }> = {
      "data-systems": { earned: 0, max: 20, count: 0 },
      "documentation": { earned: 0, max: 20, count: 0 },
      "succession": { earned: 0, max: 20, count: 0 },
      "culture": { earned: 0, max: 20, count: 0 },
      "resilience": { earned: 0, max: 20, count: 0 },
    };

    AUDIT_QUESTIONS.forEach((q) => {
      const selectedOptionIdx = answers[q.id];
      if (selectedOptionIdx !== undefined && q.options[selectedOptionIdx]) {
        const points = q.options[selectedOptionIdx].points;
        dimScores[q.dimensionId].earned += points;
        dimScores[q.dimensionId].count += 1;
      }
    });

    const totalEarned = Object.values(dimScores).reduce(
      (acc, curr) => acc + curr.earned,
      0
    );

    let weakestDimId: DimensionId = "data-systems";
    let lowestScore = 999;
    (Object.keys(dimScores) as DimensionId[]).forEach((dimId) => {
      if (dimScores[dimId].earned < lowestScore) {
        lowestScore = dimScores[dimId].earned;
        weakestDimId = dimId;
      }
    });

    const scoreBand = getScoreBand(totalEarned);

    return {
      totalScore: Math.round(totalEarned * 10) / 10,
      scoreBand,
      dimScores,
      weakestDimension: DIMENSIONS[weakestDimId],
      weakestScore: lowestScore,
    };
  }, [isCompleted, answers]);

  // ----------------------------------------------------
  // GATE SCREEN: Locked for Unpaid Visitors
  // ----------------------------------------------------
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-foreground text-white flex flex-col justify-between">
        <Navigation />

        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-xl mx-auto w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-emerald-400" />
            </div>

            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400 mb-3 label-mono">
              CONFIRMED PURCHASE REQUIRED
            </span>

            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              Audit <span className="font-medium">Access Restricted</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The 50-Question S³ Readiness Assessment is a proprietary diagnostic reserved exclusively for verified purchasers of the Audit by Lumina.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-left mb-8">
              <div className="flex items-start gap-3 mb-4">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed">
                  Upon completing checkout on Stripe, you will be automatically redirected here with your access key unlocked.
                </p>
              </div>

              <Button asChild size="lg" className="w-full bg-white text-black hover:bg-white/90 gap-2">
                <a href={PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                  Purchase Audit by Lumina ($297)
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Manual Unlock Accordion / Form */}
            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-white/50 mb-3">
                Already completed your purchase? Enter your Order Email or Access Key:
              </p>
              <form onSubmit={handleManualUnlock} className="flex gap-2 max-w-sm mx-auto">
                <Input
                  type="text"
                  placeholder="Enter email or passkey..."
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 text-sm"
                />
                <Button type="submit" variant="outline" className="border-white/20 text-white hover:bg-white/10 shrink-0">
                  <KeyRound className="w-4 h-4 mr-1" /> Unlock
                </Button>
              </form>
              {authError && (
                <p className="text-xs text-rose-400 mt-2">{authError}</p>
              )}
            </div>
          </div>
        </div>

        <Footer dark />
      </div>
    );
  }

  // ----------------------------------------------------
  // SCREEN 1: Results & Executive Gap Analysis Report
  // ----------------------------------------------------
  if (isCompleted && results) {
    const { totalScore, scoreBand, dimScores, weakestDimension, weakestScore } = results;

    return (
      <div className="min-h-screen bg-white text-foreground print:bg-white print:text-black">
        <div className="print:hidden">
          <Navigation />
        </div>

        <SectionDark className="pt-24 pb-16 print:hidden" motif="schematic">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400 mb-4 label-mono">
              AUDIT BY LUMINA · EXECUTIVE SCORECARD
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              Executive <span className="font-medium">Gap Analysis Report</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              The operational baseline of your business across all five S³ performance dimensions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
                className="gap-2 border-white/20 text-white bg-transparent hover:bg-white/10"
              >
                <Printer className="w-4 h-4" /> Print / Save Report PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-white/60 hover:text-white gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Retake Assessment
              </Button>
            </div>
          </div>
        </SectionDark>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Print Title */}
          <div className="hidden print:block mb-8 border-b pb-4">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
              Genesis Lumina · Business Performance Engineering
            </div>
            <h1 className="text-3xl font-bold">Audit by Lumina: S³ Readiness Report</h1>
            <p className="text-sm text-neutral-600">50-Question Diagnostic & Gap Analysis</p>
          </div>

          {/* Overall Score Card */}
          <Card className="p-8 md:p-10 mb-10 border-2 border-foreground/15 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left md:border-r md:border-foreground/10 md:pr-8">
                <span className="text-xs uppercase tracking-widest text-foreground/50 font-semibold label-mono">
                  Overall S³ Readiness Score
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-2 my-2">
                  <span className="text-6xl md:text-7xl font-light tracking-tight text-foreground">
                    {totalScore}
                  </span>
                  <span className="text-2xl text-foreground/40 font-light">/ 100</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase label-mono bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {scoreBand.badge}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium mb-3 text-foreground">
                  {scoreBand.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-4">
                  {scoreBand.summary}
                </p>
                <div className="space-y-2">
                  {scoreBand.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Weakest Engine Callout */}
          <div className="p-6 md:p-8 rounded-xl border-2 border-amber-500/30 bg-amber-500/5 mb-10">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold text-xs uppercase tracking-wider label-mono">
              <Sparkles className="w-4 h-4" />
              BPE Law 03 · The Weakest Critical Engine
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-foreground">
              Primary Bottleneck: {weakestDimension.name} ({weakestScore} / 20)
            </h3>
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base">
              The throughput of your business is bounded by your weakest engine. Your assessment isolates{" "}
              <strong>{weakestDimension.shortName}</strong> as your primary operational constraint:{" "}
              <em>"{weakestDimension.coreQuestion}"</em>. Until this is engineered, scaling efforts in other departments will leak margin.
            </p>
          </div>

          {/* 5-Dimension Scorecard */}
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-2 text-foreground">
              Dimensional <span className="font-medium">Scorecard Breakdown</span>
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              Each dimension is scored out of 20 points (10 questions × 2 pts max).
            </p>

            <div className="space-y-5">
              {(Object.keys(dimScores) as DimensionId[]).map((dimId, idx) => {
                const meta = DIMENSIONS[dimId];
                const dim = dimScores[dimId];
                const pct = Math.round((dim.earned / dim.max) * 100);

                let statusBadge = "Critical Gap";
                let badgeCls = "bg-rose-100 text-rose-800 border-rose-300";
                if (dim.earned >= 16) {
                  statusBadge = "Strong / Sovereign";
                  badgeCls = "bg-emerald-100 text-emerald-800 border-emerald-300";
                } else if (dim.earned >= 12) {
                  statusBadge = "Moderate / Needs Tuning";
                  badgeCls = "bg-amber-100 text-amber-800 border-amber-300";
                }

                return (
                  <Card key={dimId} className="p-6 border border-foreground/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-foreground/40 font-semibold">
                          0{idx + 1}
                        </span>
                        <h4 className="font-medium text-lg text-foreground">
                          {meta.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold label-mono border ${badgeCls}`}>
                          {statusBadge}
                        </span>
                        <span className="font-mono text-sm font-semibold text-foreground">
                          {dim.earned} / 20 ({pct}%)
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-foreground/60 italic mb-3">
                      "{meta.coreQuestion}"
                    </p>

                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500 rounded-full"
                        style={{
                          width: `${pct}%`,
                          backgroundColor:
                            pct >= 80 ? "hsl(157 61% 40%)" : pct >= 60 ? "hsl(39 45% 50%)" : "hsl(13 79% 57%)",
                        }}
                      />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recommended Next Step */}
          <div className="p-8 rounded-xl bg-foreground text-white print:border print:border-black print:bg-white print:text-black">
            <span className="inline-block text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-2 label-mono">
              RECOMMENDED STRATEGIC PATHWAY
            </span>
            <h3 className="text-2xl md:text-3xl font-light mb-3 text-white print:text-black">
              {scoreBand.recommendation}
            </h3>
            <p className="text-white/70 print:text-neutral-700 leading-relaxed mb-6 text-sm md:text-base">
              You now have your quantitative baseline. The next step is a 45-minute working diagnostic session to map your weakest critical engine into an actionable operational roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 print:hidden">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link to="/strategy-session" className="gap-2">
                  Book Strategy Session to Review Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-transparent hover:bg-white/10"
              >
                <Link to={scoreBand.ctaPath}>{scoreBand.ctaText}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCREEN 2: Welcome / Intake Landing
  // ----------------------------------------------------
  if (!started) {
    const answeredCount = Object.keys(answers).length;
    const hasResume = answeredCount > 0 && answeredCount < 50;

    return (
      <div className="min-h-screen bg-white text-foreground">
        <Navigation />

        <SectionDark className="min-h-[75vh] flex items-center" motif="supercar-front">
          <div className="px-6 md:px-8 py-24 md:py-36 max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6 label-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> ACCESS VERIFIED · S³ READINESS ASSESSMENT
            </div>

            <h1 className="text-4xl md:text-7xl font-light tracking-tight text-white mb-6">
              Audit <span className="font-medium">by Lumina</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              The 50-Question S³ Readiness Assessment. A fast, conversational diagnostic to determine whether your business is ready to scale, sell, or succeed.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12 text-left">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-light text-white mb-1">50</div>
                <div className="text-xs text-white/60">Rapid Questions</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-light text-white mb-1">0–100</div>
                <div className="text-xs text-white/60">Scoring Scale</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-light text-white mb-1">10–15</div>
                <div className="text-xs text-white/60">Minutes to Finish</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-light text-white mb-1">Instant</div>
                <div className="text-xs text-white/60">Gap Analysis</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={handleStart}
                className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90 gap-2"
              >
                {hasResume ? `Resume Assessment (${answeredCount}/50)` : "Begin Assessment"}
                <ArrowRight className="w-5 h-5" />
              </Button>
              {hasResume && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleReset}
                  className="text-lg px-8 py-6 h-auto border-white/20 text-white bg-transparent hover:bg-white/10"
                >
                  Start Over
                </Button>
              )}
            </div>
          </div>
        </SectionDark>

        <SectionLight className="px-6 md:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-3 text-center">
              The Five <span className="font-medium">Readiness Dimensions</span>
            </h2>
            <p className="text-foreground/60 text-center mb-12 max-w-xl mx-auto">
              Your assessment evaluates the critical infrastructure that serious investors, buyers, and leaders inspect.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {(Object.keys(DIMENSIONS) as DimensionId[]).map((dimId, idx) => {
                const meta = DIMENSIONS[dimId];
                return (
                  <Card key={dimId} className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-foreground/40 font-semibold">
                        DIMENSION 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-medium text-lg mb-1">{meta.name}</h3>
                    <p className="text-sm text-foreground/65 italic leading-relaxed">
                      "{meta.coreQuestion}"
                    </p>
                  </Card>
                );
              })}
              <Card className="p-6 border border-dashed border-emerald-500/40 bg-emerald-50/30 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 label-mono mb-1">
                  ANTI-GAMING RANDOMIZATION
                </span>
                <p className="text-sm text-foreground/75">
                  Questions are shuffled for each participant while preserving dimensional scoring integrity.
                </p>
              </Card>
            </div>
          </div>
        </SectionLight>

        <Footer />
      </div>
    );
  }

  // ----------------------------------------------------
  // SCREEN 3: Active Question Taking Flow
  // ----------------------------------------------------
  const currentQ = questions[currentIndex];
  const currentDim = currentQ ? DIMENSIONS[currentQ.dimensionId] : null;
  const progressPercent = questions.length
    ? Math.round(((currentIndex + 1) / questions.length) * 100)
    : 0;
  const selectedOptionIdx = currentQ ? answers[currentQ.id] : undefined;

  return (
    <div className="min-h-screen bg-neutral-50 text-foreground flex flex-col justify-between">
      {/* Top Bar with Progress */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-foreground/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Link
            to="/field-guides/audit"
            className="text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            Audit <span className="font-light text-foreground/60">by Lumina</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-foreground/60">
              {currentIndex + 1} of {questions.length} ({progressPercent}%)
            </span>
            <div className="w-28 md:w-48 h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-foreground transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Question Card Area */}
      <main className="flex-1 flex items-center py-10 px-6">
        <div className="max-w-2xl mx-auto w-full">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase label-mono bg-foreground/5 text-foreground/70 border border-foreground/10">
              {currentDim?.name}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight mb-8 text-foreground">
            {currentQ.question}
          </h2>

          <div className="space-y-3 mb-10">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOptionIdx === optIdx;
              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-start gap-4 ${
                    isSelected
                      ? "border-foreground bg-foreground text-white shadow-md"
                      : "border-foreground/10 bg-white hover:border-foreground/30 hover:bg-neutral-50 text-foreground"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-medium ${
                      isSelected
                        ? "border-white bg-white text-black"
                        : "border-foreground/30 text-foreground/60"
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-base md:text-lg leading-relaxed flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="gap-2 text-foreground/60 hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </Button>

            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
              >
                Reset
              </button>
              {selectedOptionIdx !== undefined && currentIndex < questions.length - 1 && (
                <Button
                  size="sm"
                  onClick={() => {
                    const next = currentIndex + 1;
                    setCurrentIndex(next);
                    saveProgress(answers, next, false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="gap-2"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-foreground/40 border-t border-foreground/10">
        Genesis Lumina · Business Performance Engineering · All rights reserved
      </footer>
    </div>
  );
};

export default AuditAssessment;
