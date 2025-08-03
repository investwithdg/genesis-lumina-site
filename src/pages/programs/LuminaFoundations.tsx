import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { CheckCircle, BookOpen, Users, TrendingUp, Shield, Lightbulb, Download, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LuminaFoundations = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section - Z-Pattern Left */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                <Star className="w-4 h-4 mr-2" />
                Certification Program
              </Badge>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Lumina Foundations: Your Certified Path to AI Fluency
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Master the core skills for applying, optimizing, and governing AI in any organization.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional working with AI technology"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes Section - Z-Pattern Right */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
                  alt="AI and automation concepts"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Outcomes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Lumina Foundations is a three-part, certification-based series designed to equip you with practical AI skills, ethical frameworks, and strategic mindsets—fully stand-alone yet cumulatively powerful.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  "Automate daily workflows with confidence",
                  "Design effective prompts that drive business results", 
                  "Integrate AI into your team's processes for measurable ROI",
                  "Navigate ethical, regulatory, and bias challenges responsibly"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Methodology Section - Z-Pattern Left */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our four-pillar approach to AI mastery. Each area builds upon the others to create comprehensive AI fluency.
            </p>
          </div>
          
          <Tabs defaultValue="practical" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto p-2 gap-2 bg-accent/50">
              <TabsTrigger value="practical" className="flex-col h-20 text-center">
                <TrendingUp className="h-6 w-6 mb-2" />
                <div>
                  <div className="font-semibold text-sm">Practical Application</div>
                  <div className="text-xs text-muted-foreground">Drive Results with Applied AI</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="ethical" className="flex-col h-20 text-center">
                <Shield className="h-6 w-6 mb-2" />
                <div>
                  <div className="font-semibold text-sm">Ethical Use</div>
                  <div className="text-xs text-muted-foreground">Navigate AI Responsibly</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="literacy" className="flex-col h-20 text-center">
                <BookOpen className="h-6 w-6 mb-2" />
                <div>
                  <div className="font-semibold text-sm">AI Literacy</div>
                  <div className="text-xs text-muted-foreground">Build Your AI Fluency</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="creativity" className="flex-col h-20 text-center">
                <Lightbulb className="h-6 w-6 mb-2" />
                <div>
                  <div className="font-semibold text-sm">Creative Thinking</div>
                  <div className="text-xs text-muted-foreground">Unlock Innovation with AI</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <div className="mt-12">
              <TabsContent value="practical" className="animate-fade-in">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">Practical Application + Optimization</CardTitle>
                        <p className="text-muted-foreground mt-2">Drive Results with Applied AI</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">AI in Data Analytics & Decision-Making</h4>
                        <p className="text-muted-foreground">Insights, forecasting, visualization, decision support</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">Prompt Engineering</h4>
                        <p className="text-muted-foreground">NLP fundamentals, prompt frameworks, business use cases, enhancement techniques</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">AI Integration & Workflow Optimization</h4>
                        <p className="text-muted-foreground">Ecosystem overview, integration roadmap, automation spotting, tool examples, impact measurement</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ethical" className="animate-fade-in">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">Ethical + Responsible Use</CardTitle>
                        <p className="text-muted-foreground mt-2">Navigate AI Responsibly</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Ethical Principles in AI (fairness, accountability, transparency, privacy)",
                        "Regulatory Landscape (GDPR, AI Act, ISO/NIST guidelines)",
                        "Bias & Diversity-in-Design (case studies, mitigation exercises)",
                        "Implementing Ethical AI (impact assessments, policy creation)",
                        "Navigating Compliance (role-play workshops)",
                        "Cross-Functional Teams (collaboration simulations)",
                        "Human-Centric Accountability (oversight best practices, feedback loops)"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                          <span className="text-primary font-bold text-lg">{index + 1}</span>
                          <p className="font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="literacy" className="animate-fade-in">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">Empowerment ← AI Literacy</CardTitle>
                        <p className="text-muted-foreground mt-2">Build Your AI Fluency</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">LLM Literacy</h4>
                        <p className="text-muted-foreground">How LLMs work, bias awareness, NLP building blocks</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">Continuous Learning & Adaptability</h4>
                        <p className="text-muted-foreground">Critical evaluation, metaphors for discernment</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">Curiosity-Driven Learning</h4>
                        <p className="text-muted-foreground">Exploration use cases, maximizing AI potential</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">AI Impact Assessments</h4>
                        <p className="text-muted-foreground">Risk ID, stakeholder engagement, capstone project</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="creativity" className="animate-fade-in">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">Enhancing Creativity + Strategic Thinking</CardTitle>
                        <p className="text-muted-foreground mt-2">Unlock Innovation with AI</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">AI as Creative Partner</h4>
                        <p className="text-muted-foreground">Idea generation, symbiotic workflows</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">Strategic Problem-Solving</h4>
                        <p className="text-muted-foreground">Diverse perspectives, idea refinement, human oversight</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your AI Skills?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Join professionals, educators, and SMB leaders who are mastering AI with confidence and ethics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold">
                <Star className="mr-2 h-5 w-5" />
                Enroll in Lumina Foundations
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Program Syllabus
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>14-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Certificate included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Lifetime access</span>
              </div>
            </div>
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
                <li><Link to="/programs/lumina-foundations" className="hover:text-foreground transition-colors">Foundations</Link></li>
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