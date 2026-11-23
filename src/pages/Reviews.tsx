import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { getStoredReviews, ClientReview } from "@/data/reviews";
import {
  Star,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Award,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Building2,
  UserPlus,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export default function Reviews() {
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setReviews(getStoredReviews());
  }, []);

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) =>
          r.operatingModel?.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Header Banner */}
      <SectionDark className="pt-28 md:pt-36 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/80 mb-6 tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-ember" />
            Verified Telemetry · The Proof Standard
          </div>

          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Client Reviews &amp; Operational Telemetry
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            In Business Performance Engineering, every engagement is bounded by measurable telemetry: hours returned to leadership, friction permanently removed from workflows, and capacity unlocked without headcount.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 gap-2 font-medium">
              <Link to="/strategy-session">
                Reserve Strategy Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 gap-2">
              <Link to="/review">
                Leave a Verified Review
                <Award className="w-4 h-4 text-ember" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* Main Reviews Container */}
      <section className="px-6 md:px-8 py-16 bg-neutral-50 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto">
          {/* Real Case Study Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg border border-foreground/10 shadow-sm mb-12">
            <div>
              <div className="text-2xl md:text-3xl font-light font-mono text-foreground">7-Stage</div>
              <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Webhook Pipeline (PST)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light font-mono text-emerald-600">51%</div>
              <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Steps Eliminated (Optimist)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light font-mono text-foreground">2wk → 1d</div>
              <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Intake Cycle Time (Optimist)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light font-mono text-blue-600">100%</div>
              <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Team Ownership Transfer</div>
            </div>
          </div>

          {/* Filter Pills if reviews exist */}
          {reviews.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-foreground/50 uppercase mr-2">Filter By:</span>
                {[
                  { label: "All Engagements", val: "all" },
                  { label: "Industrial & Logistics", val: "logistics" },
                  { label: "Non-Profit & Community", val: "non-profit" },
                  { label: "Advisory & B2B", val: "advisory" },
                ].map((tab) => (
                  <button
                    key={tab.val}
                    type="button"
                    onClick={() => setFilter(tab.val)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${
                      filter === tab.val
                        ? "bg-foreground text-white border-foreground"
                        : "bg-white text-foreground/70 border-foreground/15 hover:border-foreground/40"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-foreground/50">
                Showing {filteredReviews.length} verified review{filteredReviews.length === 1 ? "" : "s"}
              </div>
            </div>
          )}

          {/* Reviews Grid or Empty State */}
          {filteredReviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredReviews.map((rev) => (
                <Card
                  key={rev.id}
                  className="p-6 md:p-8 flex flex-col justify-between bg-white border border-foreground/15 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {rev.featured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ember via-foreground to-foreground" />
                  )}

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rev.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-neutral-200 stroke-neutral-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-foreground/40">
                        {rev.date}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 leading-snug">
                      &ldquo;{rev.headline}&rdquo;
                    </h3>

                    {/* Testimonial body */}
                    <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-6">
                      {rev.testimonial}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Badges */}
                    <div className="space-y-1.5 pt-4 border-t border-foreground/10 mb-5">
                      {rev.metrics.hoursSavedPerWeek && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200/60">
                          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{rev.metrics.hoursSavedPerWeek}</span>
                        </div>
                      )}
                      {rev.metrics.roiGenerated && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
                          <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{rev.metrics.roiGenerated}</span>
                        </div>
                      )}
                      {rev.metrics.engineTransformed && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200/80">
                          <Sliders className="w-3.5 h-3.5 flex-shrink-0 text-foreground/60" />
                          <span className="truncate">{rev.metrics.engineTransformed}</span>
                        </div>
                      )}
                    </div>

                    {/* Client Bio */}
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-bold text-foreground">{rev.clientName}</div>
                        {rev.participantRole && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-foreground/5 text-foreground/70 border border-foreground/10">
                            {rev.participantRole}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-foreground/60">{rev.clientTitle}</div>
                      <div className="text-[11px] font-mono text-ember font-medium mt-0.5">
                        {rev.companyName}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* Transparent Empty State with Proven Case Studies */
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-8 border-2 border-dashed border-foreground/20 bg-white flex flex-col justify-between md:col-span-1">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-ember" />
                  </div>
                  <div className="text-xs font-mono text-ember uppercase font-semibold mb-1">
                    VERIFIED CLIENT REVIEWS
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Have You Completed an Engagement With Us?
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed mb-6">
                    Genesis Lumina operates on verifiable telemetry rather than fabricated quotes. If you have completed a working session, workshop, or Compass engagement with Donovan Green, be the first to log your operational impact.
                  </p>
                </div>

                <Button asChild className="w-full bg-foreground text-white hover:bg-foreground/90 gap-1.5 text-xs font-mono">
                  <Link to="/review">
                    Leave a Verified Review &amp; Referral
                    <ArrowRight className="w-3.5 h-3.5 text-ember" />
                  </Link>
                </Button>
              </Card>

              {/* Case Study 1: PST */}
              <Card className="p-8 border border-foreground/15 bg-white flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-foreground/50 uppercase">
                      PROVEN CASE STUDY
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                      Operations Engine
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    Preferred Solutions Transport (PST)
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed mb-4">
                    A webhook-native, 7-stage operational dispatch engine installed in a live logistics environment — architected, deployed, and transferred into team ownership.
                  </p>
                  <div className="text-xs font-mono text-foreground/80 mb-6 bg-neutral-50 p-2.5 rounded border border-foreground/10">
                    <strong>Outcome:</strong> 22 hours/week saved; enabled 30% volume growth with zero admin hires.
                  </div>
                </div>

                <Button asChild variant="outline" size="sm" className="w-full text-xs font-mono gap-1.5">
                  <Link to="/case-studies/pst">
                    Read Technical Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Card>

              {/* Case Study 2: Optimist */}
              <Card className="p-8 border border-foreground/15 bg-white flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-foreground/50 uppercase">
                      PROVEN CASE STUDY
                    </span>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                      Intake Engine
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    Optimist Business Solutions
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed mb-4">
                    An AI-routed intake engine that compressed a 2-week manual qualification process into a single day — eliminating 51% of process steps by design.
                  </p>
                  <div className="text-xs font-mono text-foreground/80 mb-6 bg-neutral-50 p-2.5 rounded border border-foreground/10">
                    <strong>Outcome:</strong> 51% steps eliminated; cycle time reduced from 2 weeks to 1 day.
                  </div>
                </div>

                <Button asChild variant="outline" size="sm" className="w-full text-xs font-mono gap-1.5">
                  <Link to="/case-studies/optimist">
                    Read Technical Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Card>
            </div>
          )}

          {/* Action Callouts */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border border-foreground/15 bg-white flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-ember uppercase tracking-wider mb-2">
                  CLIENT CONTRIBUTION
                </div>
                <h3 className="text-xl font-light text-foreground mb-2">
                  Have You Completed an Engagement With Us?
                </h3>
                <p className="text-xs text-foreground/60 mb-6 leading-relaxed">
                  Log your post-engagement operational telemetry, record hours saved, and submit peer referrals for business owners experiencing operational friction.
                </p>
              </div>
              <Button asChild variant="outline" className="gap-2 w-full text-xs font-mono">
                <Link to="/review">
                  Submit Post-Engagement Review &amp; Referrals
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border border-foreground/15 bg-foreground text-white flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  OPERATIONAL DIAGNOSTIC
                </div>
                <h3 className="text-xl font-light text-white mb-2">
                  Ready to Diagnose Your Critical Bottleneck?
                </h3>
                <p className="text-xs text-white/70 mb-6 leading-relaxed">
                  Reserve a 45-minute working session with Donovan Green. We isolate your primary constraint and engineer an immediate capacity roadmap.
                </p>
              </div>
              <Button asChild className="gap-2 w-full text-xs font-mono bg-white text-foreground hover:bg-white/90">
                <Link to="/strategy-session">
                  Schedule Strategy Session
                  <ArrowRight className="w-3.5 h-3.5 text-ember" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
