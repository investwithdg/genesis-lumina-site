import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import SectionDark from "@/components/SectionDark";
import SectionLight from "@/components/SectionLight";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { User, Linkedin, Award, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - DARK */}
      <SectionDark className="min-h-[60vh] flex items-center" withParticles withShapes>
        <div className="px-8 py-32 md:py-40 max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 tracking-tight text-white">
              About <span className="font-medium">Genesis Lumina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Transforming businesses through intelligent automation and Kingdom-driven values.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* Founder Section - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Headshot Placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-foreground/5 border-2 border-dashed border-foreground/20 flex flex-col items-center justify-center text-foreground/40">
                <User className="w-16 h-16 mb-4" />
                <span className="text-sm font-medium">{"{YOUR_HEADSHOT}"}</span>
                <span className="text-xs mt-1">Upload your photo</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-2">
                Donovan <span className="font-medium">Green</span>
              </h2>
              <p className="text-lg text-foreground/60 mb-6">Founder, Genesis Lumina</p>
              
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  A seasoned entrepreneur with deep expertise in real estate and automation, combining technical excellence with Kingdom-driven values.
                </p>
                <p>
                  Our mission is clear: help leaders implement automation that saves time while maintaining integrity and human dignity.
                </p>
              </div>

              {/* Credentials Placeholders */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-foreground/5 text-center">
                  <div className="text-2xl font-light text-foreground">{"1"}</div>
                  <div className="text-sm text-foreground/60">Years in Business</div>
                </div>
                <div className="p-4 rounded-lg bg-foreground/5 text-center">
                  <div className="text-2xl font-light text-foreground">{"40+"}</div>
                  <div className="text-sm text-foreground/60">Clients Served</div>
                </div>
                <div className="p-4 rounded-lg bg-foreground/5 text-center">
                  <div className="text-2xl font-light text-foreground">{"25+"}</div>
                  <div className="text-sm text-foreground/60">Systems Built</div>
                </div>
                <div className="p-4 rounded-lg bg-foreground/5 text-center">
                  <div className="text-2xl font-light text-foreground">{"1000+"}+</div>
                  <div className="text-sm text-foreground/60">Hours Automated</div>
                </div>
              </div>

              {/* LinkedIn Placeholder */}
              <a 
                href="{https://www.linkedin.com/in/donovan-r-green/}" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </SectionLight>

      {/* What We Do - DARK */}
      <SectionDark className="px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white">
            What We <span className="font-medium">Do</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "Bridge the gap between AI potential and business reality",
              "Deliver practical automation solutions that actually work",
              "Transform chaos into clarity through proven frameworks",
              "Prioritize speed, simplicity, and scalability"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <p className="text-xl text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* Trust Signals - LIGHT */}
      <SectionLight className="px-8 py-24 md:py-32" muted>
        <div className="max-w-5xl mx-auto">
          {/* Featured In Placeholder */}
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-8">Featured In</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="w-32 h-12 rounded bg-foreground/5 border border-dashed border-foreground/20 flex items-center justify-center text-xs text-foreground/40">
                  {"{LOGO_" + idx + "}"}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Work With */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-8">Technologies We Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Notion", "Make", "Zapier", "Airtable", "ChatGPT", "Claude"].map((tech, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full bg-foreground/5 text-foreground/70 text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLight>

      {/* CTA Section - DARK */}
      <SectionDark className="px-8 py-24 md:py-32" withShapes>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to <span className="font-medium">Transform Your Operations</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free strategy session to discuss how we can help.
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

export default About;
