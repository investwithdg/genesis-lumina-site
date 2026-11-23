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
  Sparkles,
  Award,
  CheckCircle2,
  Building2,
  Sliders,
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
              Verified Telemetry · Client Results &amp; Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              What Happens When We Engineer Your Engine.
            </h2>
            <p className="text-sm md:text-base text-foreground/60 max-w-2xl mt-2 leading-relaxed">
              We do not measure our work in slide decks or vague advisory hours. We measure it in staff hours returned, bottlenecks permanently eliminated, and operational throughput unlocked.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {showAllLink && (
              <Button asChild variant="outline" size="sm" className="gap-2 text-xs font-mono">
                <Link to="/reviews">
                  View All Reviews &amp; Metrics
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

        {/* Aggregate Impact Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg border border-foreground/10 shadow-sm mb-12">
          <div>
            <div className="text-2xl md:text-3xl font-light font-mono text-foreground">55+ hrs/wk</div>
            <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Capacity Returned</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-light font-mono text-emerald-600">5.0 / 5.0</div>
            <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-light font-mono text-foreground">$250K+</div>
            <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Capacity Unlocked</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-light font-mono text-blue-600">100%</div>
            <div className="text-xs font-mono text-foreground/50 uppercase mt-0.5">Engineered Systems Retention</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <Card
              key={rev.id}
              className="p-6 md:p-8 flex flex-col justify-between bg-white border border-foreground/15 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Subtle top indicator for featured */}
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
                    Verified Engagement
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
      </div>
    </section>
  );
}
