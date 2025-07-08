import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Ignite = () => {
  const handleIgniteCheckout = () => {
    window.open('https://buy.stripe.com/3cIbJ11La1yq7Hr7AX1Fe00', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              ✴ Monthly AI Advisory Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Ignite Your Team's <span className="text-foreground/70">AI Fluency</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Monthly AI advisory with strategic sessions, comprehensive frameworks, team workshops, and ongoing support to scale your AI capabilities. Month-to-month, cancel anytime.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">What You Get</h2>
          
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/80 mb-16">
            <li>• Monthly 90-minute strategic sessions with your team</li>
            <li>• Complete Notion workspace with AI frameworks and templates</li>
            <li>• Monthly "AI Fluency Brief" with actionable insights and trends</li>
            <li>• Priority email support with 48-hour response time</li>
            <li>• Team workshop sessions for hands-on implementation</li>
            <li>• Access to private community for ongoing guidance</li>
          </ul>
        </div>
      </section>

      {/* Price + CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="text-2xl md:text-3xl font-medium mb-4">
            $2,000 / month
          </div>
          <p className="text-lg text-foreground/60 mb-12">
            Month to month, cancel anytime
          </p>
          
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium"
            onClick={handleIgniteCheckout}
          >
            Start Ignite <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/70 mb-4">Need a quick start? Try our entry-level option:</p>
            <Link to="/programs/flash">
              <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                Flash Automation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">How It Works</h2>
          
          <div className="space-y-12">
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">1. Launch Series (Month 1)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Three bite-sized recorded lessons + 60-min live onboarding call to set your AI foundation.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">2. Monthly Workshops (Ongoing)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Interactive sessions (e.g., Prompt Clinics, Workflow Builder Labs) to keep your team engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">3. As-Needed Support</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Submit "AI Use Case Forms" to request targeted guidance. We reply within 48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">4. Strategic Calibration</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Each session ends with a one-page "Fluency Brief" summarizing insights, next steps, and key metrics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium"
              onClick={handleIgniteCheckout}
            >
              Start Ignite <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
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

export default Ignite;