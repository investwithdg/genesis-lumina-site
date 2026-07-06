import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What is Business Performance Engineering (BPE)?",
    a: (
      <>
        The discipline of identifying, diagnosing, engineering, measuring, governing, and continuously improving the business engines that determine organizational performance. Read the full doctrine on the <Link to="/approach" className="text-primary hover:underline">Approach page</Link>.
      </>
    ),
  },
  {
    q: "What is a business engine?",
    a: <>A repeatable mechanism that transforms organizational potential into measurable business value. Sales is an engine. Hiring is an engine. Client Delivery is an engine. Every meaningful outcome your business produces flows through one.</>,
  },
  {
    q: "What is PEAR and how do I book it?",
    a: (
      <>
        PEAR is the Performance Engineering Analysis & Roadmap — a free 30-minute live diagnostic call. You leave with an engine health snapshot, a prioritized constraint map, and a recommended next step. <Link to="/pear" className="text-primary hover:underline">Book PEAR here →</Link>
      </>
    ),
  },
  {
    q: "What is Lumina Labs?",
    a: (
      <>
        A workshop for leadership teams — $7,500 – $15,000. Your team learns to see, diagnose, and govern their business engines. Not AI training. Engine performance literacy. <Link to="/labs" className="text-primary hover:underline">Learn more →</Link>
      </>
    ),
  },
  {
    q: "What is Lumina Compass?",
    a: (
      <>
        The 4-week engine engagement, starting at $35,000. Three modes: Build (you don't have the engine), Optimize (you have one that needs to perform better), or Supercharge (strong engine, needs tuning + red-line testing). Your team leaves owning, governing, and extending the result. <Link to="/compass" className="text-primary hover:underline">Learn more →</Link>
      </>
    ),
  },
  {
    q: "How does Lumina Ignite work?",
    a: (
      <>
        Ongoing engine development partnership at $7.5K – $25K/month across three tiers: <strong>Ember → Blaze → Phoenix</strong>. Every month is driven by your PEAR Tree — the living map of your engine architecture, health scores, and engineering roadmap. <Link to="/ignite" className="text-primary hover:underline">Learn more →</Link>
      </>
    ),
  },
  {
    q: "What is S³ (Scale · Sale · Succession)?",
    a: (
      <>
        The culmination tier — $150K – $500K. Three connected results: engineer your business to scale without you, become acquirable on your terms, and transfer institutional intelligence to the next generation of leadership. Most S³ engagements follow at least six months of Ignite. <Link to="/s3" className="text-primary hover:underline">Learn more →</Link>
      </>
    ),
  },
  {
    q: "What are the Field Guides?",
    a: (
      <>
        Self-serve BPE literacy — $47 – $297. The doctrine in your hands: engine families, health criteria, force multiplier principles. <Link to="/field-guides" className="text-primary hover:underline">Browse the guides →</Link>
      </>
    ),
  },
  {
    q: "Which offer is right for me?",
    a: (
      <>
        Start with PEAR. It's free, it's thirty minutes, and it produces an honest routing — including "none of the above" if that's the accurate answer. Most operators discover they need Compass or Ignite, but a meaningful minority leave with a Field Guide and a to-do list they can run themselves.
      </>
    ),
  },
  {
    q: "Do you offer any guarantees?",
    a: <>Yes. For every paid engagement, if you're not satisfied after the diagnosis phase we refund the deposit. Compass and Ignite include ownership transfer as a deliverable — you leave operating what we built, not depending on us to run it.</>,
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <SectionDark className="min-h-[50vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-8">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight text-white">
            Frequently Asked <span className="font-medium">Questions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Business Performance Engineering, the offer stack, and everything in between.
          </p>
        </div>
      </SectionDark>

      <SectionLight className="px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionLight>

      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Still have <span className="font-medium">questions</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book PEAR. Ask them live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-white !text-black hover:bg-white/90">
              <Link to="/pear" className="gap-2">Book PEAR (free)<ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
          <NewsletterCTA dark compact />
        </div>
      </SectionDark>

      <Footer dark />
      <MobileStickyBar />
    </div>
  );
};

export default FAQ;
