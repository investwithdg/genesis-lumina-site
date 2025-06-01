
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="px-8 py-6 max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-medium hover-underline">
          Genesis Lumina
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What's the difference between Ignite and Compass?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Ignite is a monthly retainer ($2K/mo, 3-month minimum) for ongoing advisory, strategic briefs, and curated Notion portal access. Compass is a 4-week, $15K private sprint to build your custom AI strategy, including deep calls, hands-on workshops, and a final strategic memo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Who should apply for The Compass?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Leaders and founders who already understand AI's importance, want a laser-focused custom roadmap, and can commit to an intensive 4-week pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                What if we want to cancel Ignite before 3 months?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Ignite has a 3-month minimum. After that, you can cancel with 30 days' notice. No long-term lock-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Can I customize either program?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                We design each engagement based on your goals. If you need a hybrid or extended option, apply and let's discuss it on the intake call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-foreground/10 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                Do you offer nonprofit or educational discounts?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                Yes—apply, and if you qualify, we'll discuss a sliding scale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-foreground/10 rounded-lg px-6">
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
          <Link to="/ignite" className="hover-underline">Ignite</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/compass" className="hover-underline">Compass</Link>
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
