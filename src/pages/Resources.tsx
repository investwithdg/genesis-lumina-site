import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Newspaper, FileText, Download, Calculator, Map } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import ROICalculator from "@/components/ROICalculator";
import WaypointDiagram from "@/components/WaypointDiagram";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            AI <span className="font-medium">Resources</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Frameworks, guides, and insights to help you navigate your AI transformation journey.
          </p>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="px-8 py-16 max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Free <span className="text-foreground/70">Tools & Resources</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Calculate your ROI, explore the framework, and download guides to get started
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="animate-fade-in">
          <ROICalculator />
        </div>

        {/* Waypoint Diagram */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <WaypointDiagram />
        </div>

        {/* Downloadable Resources */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <Card className="hover-scale">
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>ROI Calculator PDF</CardTitle>
              <CardDescription>
                Download a printable version of the ROI calculator with detailed formulas and examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2" disabled>
                <Download className="w-4 h-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <Map className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Waypoint Framework Guide</CardTitle>
              <CardDescription>
                Complete guide to the three-stage transformation framework with examples and worksheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2" disabled>
                <Download className="w-4 h-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-8 py-16 max-w-6xl mx-auto bg-accent/20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-scale">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Case Studies</CardTitle>
              <CardDescription>
                Real transformation stories with metrics and results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Blog & Insights</CardTitle>
              <CardDescription>
                Automation tips and AI implementation strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <Newspaper className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Newsletter</CardTitle>
              <CardDescription>
                Weekly AI insights and exclusive offers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/newsletter">Subscribe Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Ready for <span className="text-foreground/70">Personalized Guidance?</span>
        </h2>
        
        <p className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Book a free strategy call to get a custom automation roadmap for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookCallButton size="lg">Book Your Strategy Call</BookCallButton>
          <Button asChild variant="outline" size="lg">
            <Link to="/quiz">Take the Quiz</Link>
          </Button>
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

export default Resources;
