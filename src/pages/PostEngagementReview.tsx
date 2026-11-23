import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { saveSubmittedReview, ClientReview } from "@/data/reviews";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  ShieldCheck,
  Award,
  Sparkles,
  BarChart3,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const NOTIFICATION_EMAIL = "info@wearegenesislumina.com";
const SUPABASE_URL = "https://bqsfdgfstkzbjxdotquo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2ZkZ2ZzdGt6Ymp4ZG90cXVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTk3NTMyMiwiZXhwIjoyMDk3NTUxMzIyfQ.vRXrYuAvYu0iuECLR54Y71BqigYpJnRauLOLIeMt-Nw";

const ENGAGEMENT_TYPES = [
  "Strategy Session / Executive Working Session",
  "Lumina Labs — Interactive Team Workshop",
  "Lumina Compass — 4-Week Systems Sprint",
  "Lumina Ignite — Fractional Systems Partner",
  "S³ Transformation — Full Operating System Overhaul",
  "Other Custom Systems Advisory",
];

export default function PostEngagementReview() {
  // Client Details
  const [clientName, setClientName] = useState("");
  const [clientTitle, setClientTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [operatingModel, setOperatingModel] = useState("");
  const [engagementType, setEngagementType] = useState("");

  // Verified Outcomes & Metrics
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState("");
  const [roiGenerated, setRoiGenerated] = useState("");
  const [engineTransformed, setEngineTransformed] = useState("");

  // 5-Dimension Post-Engagement Scorecard
  const [reliability, setReliability] = useState<number>(5);
  const [efficiency, setEfficiency] = useState<number>(5);
  const [measurability, setMeasurability] = useState<number>(5);
  const [transferability, setTransferability] = useState<number>(5);
  const [adaptability, setAdaptability] = useState<number>(5);

  // Review & Testimonial
  const [rating, setRating] = useState<number>(5);
  const [headline, setHeadline] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [attributionPermission, setAttributionPermission] = useState<"full" | "anonymous">("full");

  // Executive Peer Referrals
  const [referral1Name, setReferral1Name] = useState("");
  const [referral1Company, setReferral1Company] = useState("");
  const [referral1Email, setReferral1Email] = useState("");
  const [referral1Note, setReferral1Note] = useState("");

  const [referral2Name, setReferral2Name] = useState("");
  const [referral2Company, setReferral2Company] = useState("");
  const [referral2Email, setReferral2Email] = useState("");
  const [referral2Note, setReferral2Note] = useState("");

  const [canMentionReferrer, setCanMentionReferrer] = useState(true);

  // Status
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!clientName.trim() || !companyName.trim() || !workEmail.trim()) {
      setErrorMsg("Please provide your name, company name, and email.");
      return;
    }
    if (!headline.trim() || !testimonial.trim()) {
      setErrorMsg("Please provide a headline and testimonial summarizing the results.");
      return;
    }

    setSubmitting(true);

    const reviewId = `rev-${Date.now()}`;
    const displayName = attributionPermission === "full" ? clientName.trim() : "Executive Leadership";
    const displayTitle = attributionPermission === "full" ? clientTitle.trim() : `${operatingModel || "Operating"} Leader`;
    const displayCompany = attributionPermission === "full" ? companyName.trim() : "Mid-Market Enterprise";

    const newReview: ClientReview = {
      id: reviewId,
      clientName: displayName,
      clientTitle: displayTitle,
      companyName: displayCompany,
      operatingModel: operatingModel.trim() || "Operations",
      rating,
      headline: headline.trim(),
      testimonial: testimonial.trim(),
      metrics: {
        hoursSavedPerWeek: hoursSavedPerWeek.trim() || undefined,
        roiGenerated: roiGenerated.trim() || undefined,
        engineTransformed: engineTransformed.trim() || undefined,
      },
      dimensionGains: {
        reliability,
        efficiency,
        measurability,
        transferability,
        adaptability,
      },
      featured: true,
      date: new Date().toISOString().split("T")[0],
    };

    // 1. Save locally so it pops up live on site immediately
    saveSubmittedReview(newReview);

    const payload = {
      formType: "Post-Engagement Review, Impact Audit & Executive Referral",
      client_name: clientName.trim(),
      client_title: clientTitle.trim(),
      company_name: companyName.trim(),
      work_email: workEmail.trim(),
      operating_model: operatingModel.trim(),
      engagement_type: engagementType || "Not specified",
      rating: `${rating} of 5 Stars`,
      headline: headline.trim(),
      testimonial: testimonial.trim(),
      attribution_mode: attributionPermission,
      metrics: {
        hoursSavedPerWeek: hoursSavedPerWeek.trim(),
        roiGenerated: roiGenerated.trim(),
        engineTransformed: engineTransformed.trim(),
      },
      post_scorecard: {
        reliability,
        efficiency,
        measurability,
        transferability,
        adaptability,
      },
      executive_referrals: {
        canMentionReferrer: canMentionReferrer ? "Yes" : "No",
        referral_1: referral1Name.trim()
          ? {
              name: referral1Name.trim(),
              company: referral1Company.trim(),
              email: referral1Email.trim(),
              note: referral1Note.trim(),
            }
          : "None provided",
        referral_2: referral2Name.trim()
          ? {
              name: referral2Name.trim(),
              company: referral2Company.trim(),
              email: referral2Email.trim(),
              note: referral2Note.trim(),
            }
          : "None provided",
      },
      submitted_at: new Date().toISOString(),
    };

    // 2. Transmit email notification to Donovan
    try {
      await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("FormSubmit notice", err);
    }

    // 3. Sync to Supabase table
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/client_reviews`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          client_name: clientName.trim(),
          company_name: companyName.trim(),
          rating,
          headline: headline.trim(),
          testimonial: testimonial.trim(),
          metrics: newReview.metrics,
          referrals: payload.executive_referrals,
          raw_payload: payload,
          created_at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.warn("Supabase review sync notice", err);
    }

    setSubmitting(false);
    setCompleted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Header Banner */}
      <SectionDark className="pt-28 md:pt-36 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/80 mb-6 tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-ember" />
            Verified Impact &amp; Executive Peer Referrals
          </div>

          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Post-Engagement Review &amp; Impact Audit
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Documenting the concrete operational capacity returned to your business. Your verified metrics
            help us establish peer benchmarks and celebrate your team's engineered transformation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/60">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Verified ROI Capture
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Optional Anonymous Attribution
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <UserPlus className="w-3.5 h-3.5 text-amber-400" /> Executive Referral Program
            </span>
          </div>
        </div>
      </SectionDark>

      {/* Main Review Form */}
      <section className="px-6 md:px-8 py-16 bg-neutral-50 border-y border-foreground/10">
        <div className="max-w-3xl mx-auto">
          {completed ? (
            <Card className="p-8 md:p-12 border-2 border-emerald-600 bg-white shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="text-xs font-mono text-emerald-700 tracking-wider uppercase mb-2">
                REVIEW &amp; IMPACT LOGGED
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Thank You for Engineering the Standard
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Your review and impact metrics have been recorded. Your review is now live in the verified results showcase on Genesis Lumina!
                {referral1Name && (
                  <> We will also reach out with utmost discretion to the peers you recommended.</>
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-foreground text-white hover:bg-foreground/90 gap-2">
                  <Link to="/reviews">
                    View Live Client Reviews
                    <ArrowRight className="w-4 h-4 text-ember" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies">Explore Case Studies</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* SECTION 1: ENGAGEMENT & CLIENT PROFILE */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>01 // Engagement &amp; Leadership Profile</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Confirming your engagement details so we attribute the transformation properly.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Mark Vance"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Your Executive Title
                      </label>
                      <Input
                        placeholder="e.g. Director of Operations"
                        value={clientTitle}
                        onChange={(e) => setClientTitle(e.target.value)}
                        className="bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Company / Organization Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Propane Service Technologies"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="executive@company.com"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Operating Model / Industry
                      </label>
                      <Input
                        placeholder="e.g. Industrial Logistics, Non-Profit, SaaS"
                        value={operatingModel}
                        onChange={(e) => setOperatingModel(e.target.value)}
                        className="bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Engagement Completed
                      </label>
                      <select
                        value={engagementType}
                        onChange={(e) => setEngagementType(e.target.value)}
                        className="w-full px-3 py-2 border border-foreground/15 rounded-md text-sm bg-neutral-50 text-foreground"
                      >
                        <option value="">Select Engagement...</option>
                        {ENGAGEMENT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Card>
              </div>

              {/* SECTION 2: TANGIBLE ROI & OPERATIONAL GAINS */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>02 // Tangible ROI &amp; Operational Gains</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  What did we physically unlock for your business in terms of capacity, time, and revenue?
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-foreground uppercase mb-1.5">
                        Weekly Hours Saved
                      </label>
                      <Input
                        placeholder="e.g. 22 hrs/wk saved"
                        value={hoursSavedPerWeek}
                        onChange={(e) => setHoursSavedPerWeek(e.target.value)}
                        className="bg-neutral-50 text-sm"
                      />
                      <span className="text-[11px] text-foreground/50 mt-1 block">
                        Direct staff/founder time returned
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-foreground uppercase mb-1.5">
                        Financial / Capacity ROI
                      </label>
                      <Input
                        placeholder="e.g. $140,000+ unlocked"
                        value={roiGenerated}
                        onChange={(e) => setRoiGenerated(e.target.value)}
                        className="bg-neutral-50 text-sm"
                      />
                      <span className="text-[11px] text-foreground/50 mt-1 block">
                        Payroll avoided or capacity gained
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-foreground uppercase mb-1.5">
                        Primary Engine Transformed
                      </label>
                      <Input
                        placeholder="e.g. Field Dispatch Engine"
                        value={engineTransformed}
                        onChange={(e) => setEngineTransformed(e.target.value)}
                        className="bg-neutral-50 text-sm"
                      />
                      <span className="text-[11px] text-foreground/50 mt-1 block">
                        The core workflow engineered
                      </span>
                    </div>
                  </div>

                  {/* 5-Dimension Post Scorecard */}
                  <div className="pt-4 border-t border-foreground/10">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Post-Engagement 5-Dimension Health (1 to 5)
                    </div>
                    <p className="text-xs text-foreground/60 mb-4">
                      How does your operational engine score today following our architecture work?
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                      {[
                        { name: "Reliability", val: reliability, set: setReliability },
                        { name: "Efficiency", val: efficiency, set: setEfficiency },
                        { name: "Measurability", val: measurability, set: setMeasurability },
                        { name: "Transferability", val: transferability, set: setTransferability },
                        { name: "Adaptability", val: adaptability, set: setAdaptability },
                      ].map((dim) => (
                        <div key={dim.name} className="p-3 bg-neutral-50 rounded border border-foreground/10">
                          <div className="text-xs font-medium text-foreground mb-1.5">{dim.name}</div>
                          <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <button
                                type="button"
                                key={s}
                                onClick={() => dim.set(s)}
                                className={`w-6 h-6 text-xs font-mono font-bold rounded ${
                                  dim.val === s
                                    ? "bg-emerald-600 text-white"
                                    : "bg-white text-foreground/70 border border-foreground/15 hover:border-foreground/40"
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* SECTION 3: TESTIMONIAL & REVIEW */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>03 // Executive Testimonial &amp; Quote</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  In your own words: what was the experience like and what would you tell an executive considering Genesis Lumina?
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Overall Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-1 focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              rating >= star
                                ? "text-amber-400 fill-amber-400"
                                : "text-neutral-300 stroke-neutral-400"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono text-foreground/60 ml-2">
                        {rating === 5 ? "Exceptional (5/5)" : `${rating} of 5 Stars`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      One-Sentence Headline / Summary <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="e.g. Eliminated our dispatch bottleneck and saved 22 hours of weekly chaos."
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                      required
                      className="bg-neutral-50 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Detailed Review / Testimonial <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
                      placeholder="Describe the operational challenge before Genesis Lumina, how Donovan engineered the solution, and what the concrete difference has been for you and your team..."
                      required
                      className="w-full p-3 rounded-md border border-foreground/15 text-sm bg-neutral-50 text-foreground focus:ring-1 focus:ring-foreground"
                    />
                  </div>

                  {/* Attribution Permissions */}
                  <div className="pt-2 border-t border-foreground/10">
                    <label className="block text-xs font-mono font-semibold text-foreground uppercase mb-2">
                      Publishing &amp; Attribution Permission
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 text-xs text-foreground cursor-pointer">
                        <input
                          type="radio"
                          name="attribution"
                          checked={attributionPermission === "full"}
                          onChange={() => setAttributionPermission("full")}
                          className="text-foreground focus:ring-foreground"
                        />
                        <span>
                          <strong>Full Attribution:</strong> You may feature my name, title, and company on Genesis Lumina.
                        </span>
                      </label>
                      <label className="flex items-center gap-3 text-xs text-foreground cursor-pointer">
                        <input
                          type="radio"
                          name="attribution"
                          checked={attributionPermission === "anonymous"}
                          onChange={() => setAttributionPermission("anonymous")}
                          className="text-foreground focus:ring-foreground"
                        />
                        <span>
                          <strong>Sanitized Attribution:</strong> Publish with my title and industry only (e.g. &ldquo;Director of Operations, Industrial Logistics&rdquo;).
                        </span>
                      </label>
                    </div>
                  </div>
                </Card>
              </div>

              {/* SECTION 4: EXECUTIVE PEER REFERRALS */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>04 // Executive Peer Referrals (The Circle)</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Do you know 1 or 2 fellow founders, business owners, or operational executives whose organizations are currently drowning in manual friction?
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  {/* Referral 1 */}
                  <div className="p-4 bg-neutral-50 rounded-md border border-foreground/10 space-y-3">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase">
                      Executive Peer #1
                    </div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <Input
                        placeholder="Leader Name"
                        value={referral1Name}
                        onChange={(e) => setReferral1Name(e.target.value)}
                        className="bg-white text-xs"
                      />
                      <Input
                        placeholder="Company / Org"
                        value={referral1Company}
                        onChange={(e) => setReferral1Company(e.target.value)}
                        className="bg-white text-xs"
                      />
                      <Input
                        type="email"
                        placeholder="Work Email"
                        value={referral1Email}
                        onChange={(e) => setReferral1Email(e.target.value)}
                        className="bg-white text-xs"
                      />
                    </div>
                    <Input
                      placeholder="Brief context: what engine or workflow is giving them headaches?"
                      value={referral1Note}
                      onChange={(e) => setReferral1Note(e.target.value)}
                      className="bg-white text-xs"
                    />
                  </div>

                  {/* Referral 2 */}
                  <div className="p-4 bg-neutral-50 rounded-md border border-foreground/10 space-y-3">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase">
                      Executive Peer #2 (Optional)
                    </div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <Input
                        placeholder="Leader Name"
                        value={referral2Name}
                        onChange={(e) => setReferral2Name(e.target.value)}
                        className="bg-white text-xs"
                      />
                      <Input
                        placeholder="Company / Org"
                        value={referral2Company}
                        onChange={(e) => setReferral2Company(e.target.value)}
                        className="bg-white text-xs"
                      />
                      <Input
                        type="email"
                        placeholder="Work Email"
                        value={referral2Email}
                        onChange={(e) => setReferral2Email(e.target.value)}
                        className="bg-white text-xs"
                      />
                    </div>
                    <Input
                      placeholder="Brief context: what engine or workflow is giving them headaches?"
                      value={referral2Note}
                      onChange={(e) => setReferral2Note(e.target.value)}
                      className="bg-white text-xs"
                    />
                  </div>

                  <label className="flex items-center gap-2.5 text-xs text-foreground cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={canMentionReferrer}
                      onChange={(e) => setCanMentionReferrer(e.target.checked)}
                      className="rounded text-foreground focus:ring-foreground"
                    />
                    <span>
                      You have permission to mention that I recommended Genesis Lumina when reaching out.
                    </span>
                  </label>
                </Card>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full text-base py-6 bg-foreground text-white hover:bg-foreground/90 gap-2 font-medium"
                >
                  {submitting ? "Logging Review & Referrals..." : "Submit Review & Operational Impact"}
                  <ArrowRight className="w-5 h-5 text-ember" />
                </Button>
                <p className="text-center text-xs font-mono text-foreground/50 mt-3">
                  Transmits directly to Donovan Green · Thank you for your leadership and partnership.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
