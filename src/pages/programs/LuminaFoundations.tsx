import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { CheckCircle, BookOpen, Users, TrendingUp, Shield, Lightbulb, Download } from "lucide-react";
import { Link } from "react-router-dom";

const LuminaFoundations = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Certification Program
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lumina Foundations: Your Certified Path to AI Fluency
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master the core skills for applying, optimizing, and governing AI in any organization.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Lumina Foundations is a three-part, certification-based series designed to equip attendees with practical AI skills, ethical frameworks, and strategic mindsets—fully stand-alone yet cumulatively powerful. This comprehensive program bridges the gap between AI theory and real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 px-4 bg-accent/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Automate daily workflows with confidence",
              "Design effective prompts that drive business results", 
              "Integrate AI into your team's processes for measurable ROI",
              "Navigate ethical, regulatory, and bias challenges responsibly"
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Methodology</h2>
          
          <div className="grid gap-12">
            {/* Practical Application + Optimization */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Practical Application + Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">AI in Data Analytics & Decision-Making</h4>
                    <p className="text-sm text-muted-foreground">Insights, forecasting, visualization, decision support</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prompt Engineering</h4>
                    <p className="text-sm text-muted-foreground">NLP fundamentals, prompt frameworks, business use cases, enhancement techniques</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Integration & Workflow Optimization</h4>
                    <p className="text-sm text-muted-foreground">Ecosystem overview, integration roadmap, automation spotting, tool examples, impact measurement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ethical + Responsible Use */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Ethical + Responsible Use</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Ethical Principles in AI (fairness, accountability, transparency, privacy)",
                    "Regulatory Landscape (GDPR, AI Act, ISO/NIST guidelines)",
                    "Bias & Diversity-in-Design (case studies, mitigation exercises)",
                    "Implementing Ethical AI (impact assessments, policy creation)",
                    "Navigating Compliance (role-play workshops)",
                    "Cross-Functional Teams (collaboration simulations)",
                    "Human-Centric Accountability (oversight best practices, feedback loops)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary font-semibold text-sm">{index + 1}.</span>
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Empowerment ← AI Literacy */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Empowerment ← AI Literacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">LLM Literacy</h4>
                    <p className="text-sm text-muted-foreground">How LLMs work, bias awareness, NLP building blocks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Learning & Adaptability</h4>
                    <p className="text-sm text-muted-foreground">Critical evaluation, metaphors for discernment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Curiosity-Driven Learning</h4>
                    <p className="text-sm text-muted-foreground">Exploration use cases, maximizing AI potential</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Impact Assessments</h4>
                    <p className="text-sm text-muted-foreground">Risk ID, stakeholder engagement, capstone project</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhancing Creativity + Strategic Thinking */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Enhancing Creativity + Strategic Thinking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-semibold text-sm">1.</span>
                    <div>
                      <h4 className="font-semibold mb-1">AI as Creative Partner</h4>
                      <p className="text-sm text-muted-foreground">Idea generation, symbiotic workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-semibold text-sm">2.</span>
                    <div>
                      <h4 className="font-semibold mb-1">Strategic Problem-Solving</h4>
                      <p className="text-sm text-muted-foreground">Diverse perspectives, idea refinement, human oversight</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your AI Skills?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join professionals, educators, and SMB leaders who are mastering AI with confidence and ethics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Enroll in Lumina Foundations
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Download className="h-5 w-5 mr-2" />
              Download Program Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/programs/spark" className="hover:text-foreground transition-colors">Spark</Link></li>
                <li><Link to="/programs/ignite" className="hover:text-foreground transition-colors">Ignite</Link></li>
                <li><Link to="/programs/compass" className="hover:text-foreground transition-colors">Compass</Link></li>
                <li><Link to="/programs/lumina-foundations" className="hover:text-foreground transition-colors">Lumina Foundations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/newsletter" className="hover:text-foreground transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Ready to transform your organization with AI?
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Genesis Lumina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuminaFoundations;