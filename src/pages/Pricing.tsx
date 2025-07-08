import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              Transparent Pricing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Simple, Clear <span className="text-foreground/70">Pricing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Choose the AI program that fits your needs and budget. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Flash */}
            <Card className="border-2 border-black shadow-lg bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-medium mb-4">Flash</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$300</span>
                  <span className="text-foreground/60 text-sm ml-2">per automation</span>
                </div>
                <p className="text-foreground/70">Perfect for quick wins</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">7-10 day delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Single process automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Maximum 3 at a time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Email support</span>
                  </div>
                </div>
                <Link to="/programs/flash">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ignite */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-medium mb-4">Ignite</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$2,000</span>
                  <span className="text-foreground/60 text-sm ml-2">per month</span>
                </div>
                <p className="text-foreground/70">Ongoing AI guidance</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Monthly strategic sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Notion frameworks included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Month-to-month, cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Team workshops</span>
                  </div>
                </div>
                <Link to="/programs/ignite">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Compass */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-medium mb-4">Compass</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$15,000</span>
                  <span className="text-foreground/60 text-sm ml-2">one-time</span>
                </div>
                <p className="text-foreground/70">Complete AI transformation</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">4-week intensive program</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Deep AI calibration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Hands-on workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Custom roadmap delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">90-day support included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Executive-level strategy</span>
                  </div>
                </div>
                <Link to="/programs/compass">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Questions About Pricing?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            We offer flexible payment options and educational discounts.
          </p>
          <Link to="/faq">
            <Button variant="outline" className="border-black hover:bg-black hover:text-white">
              View FAQ
            </Button>
          </Link>
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

export default Pricing;