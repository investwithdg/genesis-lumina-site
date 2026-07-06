import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Network, Zap, RefreshCw, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const SystemIntegration = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[80vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
                <Network className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-white/60">Waypoint 02 · Once foundations are set</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              System <span className="font-medium">Integration</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-3xl">
              Turn knowledge into action. Build AI automations that eliminate manual work and connect your business systems seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton size="lg" className="text-lg px-10 py-6 h-auto bg-white !text-black hover:bg-white/90">
                Book Your Free Strategy Call
              </BookCallButton>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
                <Link to="/diagnostic">Get Your Diagnostic First</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* The Problem - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            You understand AI, but <span className="font-medium">nothing's automated</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            You've got the knowledge. Now you need systems that actually work. Your team is still copying data between tools, chasing manual tasks, and wasting hours on work that should run itself.
          </p>
        </div>
      </SectionLight>

      {/* What We Build - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            What We <span className="font-medium">Build</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Practical automations that save time and eliminate chaos</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Connect your tools (CRM, email, spreadsheets) so data flows automatically. No more copy-paste marathons."
              },
              {
                icon: RefreshCw,
                title: "Process Integration",
                desc: "Map your business processes and identify automation opportunities. Build systems that run 24/7."
              },
              {
                icon: Network,
                title: "Tool Orchestration",
                desc: "Get all your systems talking to each other. One source of truth, zero manual handoffs."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))] text-white flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Deliverables - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            What You <span className="font-medium">Get</span>
          </h2>
          
          <div className="space-y-4">
            {[
              "Process audit to identify automation opportunities",
              "Custom automation roadmap prioritized by ROI",
              "Implementation of 3-5 core automations",
              "Tool integration across your existing tech stack",
              "Team training on new workflows",
              "Documentation and handoff for ongoing maintenance",
              "30-day support to ensure smooth adoption"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Example Automations - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Example <span className="font-medium">Automations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lead Capture → CRM → Email Sequence",
                desc: "Website form submissions automatically create CRM records and trigger personalized email campaigns."
              },
              {
                title: "Invoice Generation → Payment Tracking → Reminders",
                desc: "Automatically generate invoices, track payments, and send reminders without manual follow-up."
              },
              {
                title: "Customer Support Ticket Routing",
                desc: "AI categorizes support requests and routes them to the right team member with relevant context."
              },
              {
                title: "Reporting Dashboard Auto-Population",
                desc: "Pull data from multiple sources into a live dashboard. No more manual spreadsheet updates."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all">
                <h3 className="font-medium mb-2 text-lg">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* Products for This Stage - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-white">
            Products for <span className="font-medium">This Stage</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-12">Ready to build your systems? Choose your path.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-5 h-5 text-[hsl(var(--waypoint-integration))]" />
                <span className="text-xs font-medium text-white/40">SPRINT</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Lumina Compass</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">4-week intensive. Full systems audit, build, and training.</p>
              <div className="flex flex-col gap-3">
                <span className="font-medium text-white">$35,000</span>
                <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/products/lumina-compass">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="w-5 h-5 text-[hsl(var(--waypoint-integration))]" />
                <span className="text-xs font-medium text-white/40">RETAINER</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Lumina Ignite</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Monthly AI partner. Ongoing optimization and new builds.</p>
              <div className="flex flex-col gap-3">
                <span className="font-medium text-white">$3K–$8K/mo</span>
                <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/products/lumina-ignite">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[hsl(var(--waypoint-integration))]" />
                <span className="text-xs font-medium text-white/40">FIELD GUIDE</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Harvest</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Automation templates and workflows for DIY implementation.</p>
              <div className="flex flex-col gap-3">
                <span className="font-medium text-white">$97</span>
                <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/field-guides/harvest">Get the Guide</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--waypoint-integration))]" />
                <span className="text-xs font-medium text-white/40">FIELD GUIDE</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Audit</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Self-assessment tool to identify your automation opportunities.</p>
              <div className="flex flex-col gap-3">
                <span className="font-medium text-white">$150</span>
                <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/field-guides/audit">Get the Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionDark>

      {/* Who This Is For - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            This Waypoint Is <span className="font-medium">For You</span> If:
          </h2>
          
          <div className="space-y-6">
            {[
              "You understand AI but need help implementing practical solutions",
              "Your team is drowning in repetitive manual tasks",
              "You're using multiple tools that don't talk to each other",
              "You want to reclaim 10-20 hours per week for your team",
              "You're ready to invest in systems that actually work"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-3" />
                <p className="text-xl text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" motif="schematic">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
            Ready to <span className="font-medium">Automate Your Business</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a call to map your automation strategy and start building systems that run themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Claim Your Strategy Session
            </BookCallButton>
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/diagnostic">Start with the Diagnostic</Link>
            </Button>
          </div>

          <div className="mb-12">
            <NewsletterCTA dark />
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/60">
            <Link to="/waypoints/ai-literacy" className="font-medium text-[hsl(var(--waypoint-literacy-glow))] hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              AI Literacy
            </Link>
            <span>•</span>
            <Link to="/waypoints/s3" className="font-medium text-[hsl(var(--waypoint-s3))] hover:underline flex items-center gap-1">
              S³ (Scale·Sale·Succession)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer dark />
    </div>
  );
};

export default SystemIntegration;
