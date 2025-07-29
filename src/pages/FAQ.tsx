import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Frequently Asked <span className="text-foreground/70">Questions</span>
          </h1>
          
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our four offers.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What exactly does Spark include?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Spark gets you one automation installed in 72 hours. We identify your biggest time-waster, build the automation, and train your team to use it. That's it—fast and simple. <Link to="/programs/spark" className="text-primary hover:underline">Learn more about Spark</Link>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                How do the Ignite tiers differ?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Core ($1K/mo): 1 call, 1 automation, basic SOPs. Build ($3K/mo): 2 calls, 2 automations, system audits, team training. Architect ($5K/mo): 4 calls, 3 automations, complete architecture, priority support. <a href="{{stripe_link_ignite_core}}" className="text-primary hover:underline">Start with Core</a> or <a href="{{stripe_link_ignite_build}}" className="text-primary hover:underline">go with Build</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What's the Compass timeline?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Week 1: Discovery (audit your mess). Week 2: Design (custom AI system). Week 3: Build (we build while you work). Week 4: Deliver (training + 30 days support). <a href="{{stripe_link_compass}}" className="text-primary hover:underline">Launch Compass</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                How do hourly sessions work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                $200/hour for strategic consultation. Perfect for quick questions, system reviews, or one-off guidance. Book when you need clarity without committing to a full program. <a href="{{stripe_link_hourly}}" className="text-primary hover:underline">Book a session</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Can I upgrade or downgrade Ignite tiers?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Yes. Start with Core and upgrade to Build or Architect anytime. Downgrade with 30 days notice. We make it easy to scale with your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What if I need something custom?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Book an hourly session first to discuss your needs. If it's a good fit, we can create a custom package that works for both of us.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

export default FAQ;