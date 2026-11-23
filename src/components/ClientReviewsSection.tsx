import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getStoredReviews, ClientReview } from "@/data/reviews";
import {
  Star,
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
  CheckCircle2,
  Sliders,
  MessageSquare,
  BookOpen,
} from "lucide-react";

interface ClientReviewsSectionProps {
  className?: string;
  showAllLink?: boolean;
  limit?: number;
}

export default function ClientReviewsSection({
  className = "",
  showAllLink = true,
  limit,
}: ClientReviewsSectionProps) {
  const [reviews, setReviews] = useState<ClientReview[]>([]);

  useEffect(() => {
    setReviews(getStoredReviews());
  }, []);

  const displayedReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <section className={`py-20 px-6 md:px-8 bg-neutral-50 border-t border-foreground/10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-mono text-foreground/70 mb-3 tracking-wide uppercase">
              <Award className="w-3.5 h-3.5 text-ember" />
              Verified Telemetry · Case Studies &amp; Client Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              What Happens When We Engineer Your Engine.
            </h2>
            <p className="text-sm md:text-base text-foreground/60 max-w-2xl mt-2 leading-relaxed">
              We do not measure our work in slides or vague advisory hours. We measure it in cycle time compression, process steps eliminated, and verified operational throughput.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {showAllLink && (
              <Button asChild variant="outline" size="sm" className="gap-2 text-xs font-mono">
                <Link to="/case-studies">
                  View Case Studies
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            )}
            <Button asChild size="sm" className="bg-foreground text-white hover:bg-foreground/90 gap-2 text-xs font-mono">
              <Link to="/review">
                Leave a Client Review
                <ArrowRight className="w-3.5 h-3.5 text-ember" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Real Case Study Telemetry Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg border border-foreground/10 shadow-sm mb-12">
          <div>
            <div className="text-2xl md:text-3xl font-light font-mono text-foreground">7-Stage</div>
            <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Webhook-Native Pipeline (PST)</div>
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

        {/* If Real Reviews Exist, Render Them */}
        {displayedReviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {displayedReviews.map((rev) => (
              <Card
                key={rev.id}
                className="p-6 md:p-8 flex flex-col justify-between bg-white border border-foreground/15 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {rev.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ember via-foreground to-foreground" />
                )}

                <div>
                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-4">
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
                    <span className="text-[11px] font-mono text-foreground/50 ml-1.5">
                      Verified Client
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">
                    &ldquo;{rev.headline}&rdquo;
                  </h3>

                  {/* Testimonial */}
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {rev.testimonial}
                  </p>
                </div>

                <div>
                  {/* Metric Badges */}
                  <div className="space-y-1.5 pt-4 border-t border-foreground/10 mb-5">
                    {rev.metrics.hoursSavedPerWeek && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200/60">
                        <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{rev.metrics.hoursSavedPerWeek}</span>
                      </div>
                    )}
                    {rev.metrics.roiGenerated && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200/60">
                        <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{rev.metrics.roiGenerated}</span>
                      </div>
                    )}
                    {rev.metrics.engineTransformed && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-700 bg-neutral-100 px-2 py-1 rounded border border-neutral-200/80">
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
          /* Empty State: Invitation to Submit Feedback + Case Study Proof Cards */
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 border-2 border-dashed border-foreground/20 bg-white flex flex-col justify-between text-left md:col-span-1">
              <div>
                <div className="w-10 h-10 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-ember" />
                </div>
                <div className="text-xs font-mono text-ember uppercase font-semibold mb-1">
                  COMMUNITY &amp; CLIENT FEEDBACK
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Completed an Engagement With Donovan?
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed mb-6">
                  We do not publish manufactured quotes. If your team has participated in a working session, workshop, or Compass sprint, share your before-and-after operational experience.
                </p>
              </div>

              <Button asChild size="sm" className="w-full bg-foreground text-white hover:bg-foreground/90 gap-1.5 text-xs font-mono">
                <Link to="/review">
                  Leave a Verified Review
                  <ArrowRight className="w-3.5 h-3.5 text-ember" />
                </Link>
              </Button>
            </Card>

            {/* Case Study 1: PST */}
            <Card className="p-8 border border-foreground/15 bg-white flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-foreground/50 uppercase">
                    PROVEN INSTALLATION
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
                    PROVEN INSTALLATION
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
      </div>
    </section>
  );
}
