import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Network, Zap, RefreshCw, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const SystemIntegration = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[hsl(var(--waypoint-integration))] text-[hsl(var(--waypoint-integration-foreground))] flex items-center justify-center glow-integration">
              <Network className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground/60">Waypoint 02</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            System <span className="font-medium">Integration</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
            Turn knowledge into action. Build AI automations that eliminate manual work and connect your business systems seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallButton size="lg" className="text-lg px-8">
              Book Your Free Strategy Call
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/quiz">Find Your Stage</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">You understand AI, but <span className="font-medium">nothing's automated</span></h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
            You've got the knowledge. Now you need systems that actually work. Your team is still copying data between tools, chasing manual tasks, and wasting hours on work that should run itself.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What We <span className="font-medium">Build</span></h2>
        <p className="text-lg text-foreground/60 text-center mb-12">Practical automations that save time and eliminate chaos</p>

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
            <Card key={idx} className="p-6 border-2 hover:border-[hsl(var(--waypoint-integration))] transition-all hover:glow-integration">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--waypoint-integration))]/10 text-[hsl(var(--waypoint-integration))] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What You <span className="font-medium">Get</span></h2>
          
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
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Automations */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">Example <span className="font-medium">Automations</span></h2>
        
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
            <Card key={idx} className="p-6 border hover:border-[hsl(var(--waypoint-integration))] transition-all">
              <h3 className="font-medium mb-2 text-lg">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-8 py-16 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">This Waypoint Is <span className="font-medium">For You</span> If:</h2>
          
          <div className="space-y-6">
            {[
              "You understand AI but need help implementing practical solutions",
              "Your team is drowning in repetitive manual tasks",
              "You're using multiple tools that don't talk to each other",
              "You want to reclaim 10-20 hours per week for your team",
              "You're ready to invest in systems that actually work"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--waypoint-integration))] flex-shrink-0 mt-2" />
                <p className="text-lg text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-gradient-to-b from-white to-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to <span className="font-medium">Automate Your Business</span>?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Book a call to map your automation strategy and start building systems that run themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8">
              Claim Your Strategy Session
            </BookCallButton>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/quiz">Take the Quiz</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-foreground/60">
            <Link to="/waypoints/ai-literacy" className="font-medium text-[hsl(var(--waypoint-literacy))] hover:underline flex items-center gap-1">
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
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SystemIntegration;
