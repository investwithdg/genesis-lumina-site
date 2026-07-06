import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArrowRight, BookOpen } from "lucide-react";

const caseStudies = [
  {
    slug: "pst",
    client: "Preferred Solutions Transport",
    headline: "From Manual to Machine.",
    description: "A Compass-grade engagement that installed a webhook-native, 7-stage operational system in a live logistics environment — architected, deployed, and transferred into team ownership.",
    stats: [
      { value: "7-Stage", label: "Pipeline" },
      { value: "Webhook-Native", label: "Architecture" },
      { value: "Team-Owned", label: "Infrastructure" },
    ],
  },
  {
    slug: "optimist",
    client: "Optimist Business Solutions",
    headline: "From Bottleneck to Breakthrough.",
    description: "An infrastructure rebuild that compressed a 2-week manual intake into a 1-day AI-routed system — eliminating 51% of process steps.",
    stats: [
      { value: "AI-Routed", label: "Intake Architecture" },
      { value: "51%", label: "Steps Eliminated" },
      { value: "2wk → 1d", label: "Cycle Time" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero - DARK */}
      <SectionDark className="min-h-[50vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-white/60" />
              <span className="text-sm font-medium text-white/60">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              Proof of <span className="font-medium">Principle</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Real engagements. Real infrastructure. Real results your team owns.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Case Study Cards - LIGHT */}
      <SectionLight className="px-4 md:px-8 py-16 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map((cs) => (
            <Card key={cs.slug} className="overflow-hidden border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <div className="p-8 md:p-12">
                <p className="text-sm font-medium text-foreground/50 mb-2">{cs.client}</p>
                <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">{cs.headline}</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-3xl">{cs.description}</p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {cs.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl bg-foreground/5">
                      <div className="text-2xl md:text-3xl font-light">{stat.value}</div>
                      <div className="text-xs text-foreground/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button asChild variant="ghost" className="group p-0 h-auto font-medium">
                  <Link to={`/case-studies/${cs.slug}`} className="flex items-center gap-2">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionLight>

      {/* CTA - DARK */}
      <SectionDark className="px-4 md:px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to build <span className="font-medium">your case study</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free 30-minute PEAR call and see which engines your business runs on — and which one is bounding the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">
                Book PEAR (free)
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      <Footer dark />
    </div>
  );
};

export default CaseStudies;
