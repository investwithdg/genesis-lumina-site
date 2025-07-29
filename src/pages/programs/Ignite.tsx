import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Ignite = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* A) Hero Banner */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Monthly AI <span className="text-foreground/70">Coaching</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Ongoing strategy, automations built monthly, and your path to AI transformation.
          </p>
        </div>
      </section>

      {/* B) What the Offer Is */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What Ignite Is</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Ignite is your monthly AI coaching program. Choose your tier, get strategy calls, automations built, 
            and systems training. It's like having an AI expert on your team without the full-time cost.
          </p>
        </div>
      </section>

      {/* C) Who It's For */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Perfect If You're</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Card */}
            <Card className="p-6 bg-gradient-to-br from-background to-muted border-border">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1K
                </div>
                <h3 className="text-xl font-bold mb-3">Core</h3>
                <p className="text-lg font-semibold text-foreground/80 mb-4">Save 5+ Hours Weekly</p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>✓ 1 call + async support</p>
                  <p>✓ Basic automation guidance</p>
                  <p>✓ Testing ongoing AI support</p>
                  <p>✓ Peace of mind with expert backup</p>
                </div>
              </CardContent>
            </Card>

            {/* Build Card */}
            <Card className="p-6 bg-gradient-to-br from-muted/50 to-muted border-foreground/20">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3K
                </div>
                <h3 className="text-xl font-bold mb-3">Build</h3>
                <p className="text-lg font-semibold text-foreground/80 mb-4">Speed to Market 3x Faster</p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>✓ 2 calls + 1 automation/month</p>
                  <p>✓ SOP review included</p>
                  <p>✓ Growing fast, need systems</p>
                  <p>✓ Team training for scale</p>
                </div>
              </CardContent>
            </Card>

            {/* Architect Card */}
            <Card className="p-6 bg-gradient-to-br from-foreground/5 to-foreground/10 border-foreground/30">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  5K
                </div>
                <h3 className="text-xl font-bold mb-3">Architect</h3>
                <p className="text-lg font-semibold text-foreground/80 mb-4">Complete System Mastery</p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>✓ Embedded ops coach</p>
                  <p>✓ Regular audits + automations</p>
                  <p>✓ Complete system overhaul</p>
                  <p>✓ Priority access and support</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* D) What You Get - Coaching Tiers */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What You Get</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core */}
            <Card className="p-8 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Core</h3>
              <div className="text-3xl font-bold mb-6">$1,000/mo</div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">1 strategy call per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">Async support between calls</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <a href="{{stripe_link_ignite_core}}">Start Ignite: Core</a>
              </Button>
            </Card>

            {/* Build */}
            <Card className="p-8 text-center border-2 border-primary hover:border-primary/50 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Build</h3>
              <div className="text-3xl font-bold mb-6">$3,000/mo</div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">2 strategy calls per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">1 automation/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">SOP review</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <a href="{{stripe_link_ignite_build}}">Start Ignite: Build</a>
              </Button>
            </Card>

            {/* Architect */}
            <Card className="p-8 text-center border-2 hover:border-primary/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Architect</h3>
              <div className="text-3xl font-bold mb-6">$5,000/mo</div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">Embedded ops coach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">Audits + automations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <a href="{{stripe_link_ignite_architect}}">Start Ignite: Architect</a>
              </Button>
            </Card>
          </div>
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

export default Ignite;