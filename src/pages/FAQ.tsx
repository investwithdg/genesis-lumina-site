import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[50vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-8">
              <HelpCircle className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
              Frequently Asked <span className="font-medium">Questions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our products and services.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* FAQ Section - LIGHT */}
      <SectionLight className="px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* Lumina Labs */}
            <AccordionItem value="labs-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What is Lumina Labs?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Lumina Labs delivers 2-3 hour hands-on AI workshops for your team—live or virtual. We teach practical AI skills without technical jargon. Investment: $1,500 – $3,000 depending on team size and format. <Link to="/products/lumina-labs" className="text-primary hover:underline">Learn more →</Link>
              </AccordionContent>
            </AccordionItem>

            {/* Lumina Compass */}
            <AccordionItem value="compass-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What's included in Lumina Compass?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Lumina Compass is a 4-week flagship sprint that maps your operations, designs a custom AI system, and builds it while you work. You get a complete Notion portal, trained team, and 30 days post-launch support. Investment starts at $15,000. <Link to="/products/lumina-compass" className="text-primary hover:underline">Learn more →</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compass-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What's the Compass timeline?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                <strong>Week 1:</strong> Discovery & Audit — we map your current chaos.<br />
                <strong>Week 2:</strong> Design — we architect your custom AI system.<br />
                <strong>Week 3:</strong> Build — we build while you keep working.<br />
                <strong>Week 4:</strong> Deliver — training, handoff, and 30 days support.
              </AccordionContent>
            </AccordionItem>

            {/* Lumina Ignite */}
            <AccordionItem value="ignite-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                How does Lumina Ignite work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Ignite is a monthly retainer (3-month minimum) for ongoing system tuning, automation maintenance, and strategic support. As your business evolves, your systems evolve with it. Investment: $3,000 – $8,000/month based on scope. <Link to="/products/lumina-ignite" className="text-primary hover:underline">Learn more →</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ignite-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Can I upgrade my Ignite engagement?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Yes. Start at the level that fits your current needs and scale up as your business grows. We reassess scope monthly to ensure you're getting the right level of support.
              </AccordionContent>
            </AccordionItem>

            {/* S³ */}
            <AccordionItem value="s3-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What is S³ (Scale · Sale · Succession)?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                S³ is our highest-tier engagement for businesses preparing for major transitions—scaling to new markets, preparing for acquisition, or building succession-ready operations. Investment: $50K – $250K based on scope and timeline. <Link to="/waypoints/s3" className="text-primary hover:underline">Learn more →</Link>
              </AccordionContent>
            </AccordionItem>

            {/* Field Guides */}
            <AccordionItem value="guides-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What are the Field Guides?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Our Field Guides are self-serve digital products for immediate action:<br /><br />
                • <Link to="/field-guides/analog" className="text-primary hover:underline">Analog</Link> ($47) — System design foundations for AI<br />
                • <Link to="/field-guides/harvest" className="text-primary hover:underline">Harvest</Link> ($47) — AI extraction and synthesis playbook<br />
                • <Link to="/field-guides/audit" className="text-primary hover:underline">Audit</Link> ($297) — Organizational readiness assessment
              </AccordionContent>
            </AccordionItem>

            {/* Getting Started */}
            <AccordionItem value="start-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Which product is right for me?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                <strong>Just starting?</strong> Begin with a Field Guide or take our <Link to="/quiz" className="text-primary hover:underline">quiz</Link> to find your waypoint.<br /><br />
                <strong>Need team training?</strong> Lumina Labs delivers quick AI literacy.<br /><br />
                <strong>Ready for transformation?</strong> Lumina Compass gives you the full system in 4 weeks.<br /><br />
                <strong>Want ongoing support?</strong> Lumina Ignite keeps you optimized month over month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="start-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Do you offer custom engagements?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Yes. If our standard offerings don't fit your situation, book a strategy call to discuss a custom scope. We'll design something that works for both of us.
              </AccordionContent>
            </AccordionItem>

            {/* Guarantees */}
            <AccordionItem value="guarantee-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Do you offer any guarantees?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                Yes. Our Field Guides come with clear outcome guarantees. For our services, we stand behind our work—if you're not satisfied after the discovery phase, we'll refund your deposit. We only succeed when you succeed.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Still Have <span className="font-medium">Questions</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free strategy call and we'll answer all your questions personally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookCallButton size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              Book Your Free Strategy Call
            </BookCallButton>
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto border border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/quiz">Find Your Waypoint</Link>
            </Button>
          </div>

          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
