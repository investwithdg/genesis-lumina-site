
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

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              Common Questions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Frequently Asked <span className="text-foreground/70">Questions</span>
          </h1>
          
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our AI advisory programs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What's the difference between Flash, Ignite, and Compass?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                <strong>Flash ($300):</strong> Entry-level automation installs delivered in 7-10 days. Perfect for testing AI with minimal risk.<br/><br/>
                <strong>Ignite ($2K/mo):</strong> Monthly AI advisory with strategic sessions, Notion frameworks, and ongoing support. Month-to-month, cancel anytime.<br/><br/>
                <strong>Compass ($15K):</strong> Elite 4-week AI integration sprint with deep calibration, hands-on workshops, and strategic implementation guide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                How many Flash automations can I purchase?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                You can purchase a maximum of 3 Flash automations at a time. Each automation focuses on one specific business process or bottleneck and is delivered within 7-10 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Who should apply for Compass?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Leaders and founders who already understand AI's importance, want a laser-focused custom roadmap, and can commit to an intensive 4-week pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What exactly does Ignite include?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Ignite includes monthly 90-minute strategic sessions, complete Notion workspace with AI frameworks and templates, priority email support, team workshop sessions, and access to our private community. You'll get hands-on guidance for implementing AI tools, process optimization strategies, and ongoing support for your AI initiatives. It's designed as ongoing partnership, not just consulting calls.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Can I cancel Ignite anytime?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Yes! Ignite is now month-to-month with no minimum commitment. You can cancel anytime with 30 days' notice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Can I customize either program?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                We design each engagement based on your goals. If you need a hybrid or extended option, apply and let's discuss it on the intake call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Do you offer nonprofit or educational discounts?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Yes—apply, and if you qualify, we'll discuss a sliding scale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                How soon can we start?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                After you submit your form and we confirm alignment, you'll receive onboarding access within 48 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover-underline">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs" className="hover-underline">Programs</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/pricing" className="hover-underline">Pricing</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/newsletter" className="hover-underline">Newsletter</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover-underline">FAQ</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FAQ;
