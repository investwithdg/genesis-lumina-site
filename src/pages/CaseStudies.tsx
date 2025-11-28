import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookCallButton from "@/components/BookCallButton";
import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: "[Client Name]",
      industry: "SaaS / Technology",
      challenge: "Manual data entry consuming 15+ hours weekly",
      solution: "Implemented automated Airtable-to-CRM sync with AI data validation",
      results: [
        { icon: Clock, label: "Time Saved", value: "15 hours/week" },
        { icon: TrendingUp, label: "Revenue Impact", value: "$48k/year" },
        { icon: Users, label: "Team Efficiency", value: "+40%" },
        { icon: Zap, label: "Error Reduction", value: "95%" },
      ],
      testimonial: "[Add client testimonial quote here about the transformation and impact on their business]",
      tags: ["Spark", "AI Literacy", "System Integration"],
    },
    {
      id: 2,
      client: "[Client Name]",
      industry: "E-commerce / Retail",
      challenge: "Disconnected systems causing inventory errors and customer delays",
      solution: "Built unified automation hub connecting Shopify, inventory management, and fulfillment",
      results: [
        { icon: Clock, label: "Processing Time", value: "-80%" },
        { icon: TrendingUp, label: "Cost Savings", value: "$72k/year" },
        { icon: Users, label: "Customer Satisfaction", value: "+35%" },
        { icon: Zap, label: "Order Accuracy", value: "99.8%" },
      ],
      testimonial: "[Add client testimonial quote here about system integration results and business growth]",
      tags: ["Ignite", "System Integration", "S³"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <Badge className="mb-6">Client Transformations</Badge>
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
          Real Results from <span className="text-foreground/70">Real Businesses</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          See how businesses like yours saved time, cut costs, and scaled faster with intelligent automation.
        </p>
      </section>

      {/* Case Studies */}
      <section className="px-8 py-16 max-w-6xl mx-auto space-y-24">
        {caseStudies.map((study, index) => (
          <div key={study.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="overflow-hidden">
              <CardHeader className="bg-accent/30 pb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="text-3xl md:text-4xl font-light mb-2">{study.client}</CardTitle>
                <p className="text-foreground/60">{study.industry}</p>
              </CardHeader>
              
              <CardContent className="p-8 space-y-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">The Challenge</h3>
                    <p className="text-foreground/70 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">The Solution</h3>
                    <p className="text-foreground/70 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-primary">The Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center space-y-3">
                        <div className="flex justify-center">
                          <result.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-semibold text-foreground">{result.value}</div>
                        <div className="text-sm text-foreground/60">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground/80 italic leading-relaxed">{study.testimonial}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Write Your <span className="text-foreground/70">Success Story</span>
        </h2>
        <p className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Let's identify your biggest automation opportunity and build a plan to 10x your efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookCallButton size="lg">Book Your Strategy Call</BookCallButton>
          <Link to="/quiz">
            <button className="px-8 py-4 text-lg font-medium border border-border rounded-md hover:bg-accent transition-colors">
              Take the Quiz First
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CaseStudies;