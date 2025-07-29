import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Target, Compass as CompassIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
            Choose Your <span className="text-foreground/70">Transformation Path</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            From quick wins to complete transformation. Pick what fits your business stage and goals.
          </p>
        </div>
      </section>

      {/* Journey Visualization */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Your AI Transformation Journey</h2>
            <p className="text-lg text-foreground/70">Start anywhere. Scale everywhere.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Spark</h3>
              <p className="text-sm text-foreground/70">Quick automation win</p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-foreground/40 hidden md:block" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ignite</h3>
              <p className="text-sm text-foreground/70">Ongoing optimization</p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-foreground/40 hidden md:block" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <CompassIcon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compass</h3>
              <p className="text-sm text-foreground/70">Complete transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="animate-slide-in">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Spark - Quick Win */}
            <Card className="border-2 border-primary shadow-lg bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4">Spark</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$300</span>
                </div>
                <p className="text-foreground/70 text-sm mb-6">Perfect if you need one specific automation fast</p>
                
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">One automation built in 72 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Save 5-10 hours per week immediately</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Perfect for testing AI automation</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full mb-4">
                  <a href="{{stripe_link_spark}}">Order Spark</a>
                </Button>
                <p className="text-xs text-center text-foreground/60">
                  Great for: Solo founders, small teams, specific pain points
                </p>
              </CardContent>
            </Card>

            {/* Ignite - Ongoing Growth */}
            <Card className="border-2 border-secondary shadow-lg bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4">Ignite</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$1K-$5K</span>
                  <span className="text-foreground/60 text-sm ml-2">/mo</span>
                </div>
                <p className="text-foreground/70 text-sm mb-6">Perfect if you want ongoing AI coaching and automation</p>
                
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Monthly 1:1 coaching calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Automations built monthly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Business systems optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm">3 tiers: Core ($1K), Build ($3K), Architect ($5K)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full mb-4">
                  <Link to="/programs/ignite">Choose Your Tier</Link>
                </Button>
                <p className="text-xs text-center text-foreground/60">
                  Great for: Growing teams, ongoing optimization, system building
                </p>
              </CardContent>
            </Card>

            {/* Compass - Complete Transformation */}
            <Card className="border-2 border-accent shadow-lg bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CompassIcon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4">Compass</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$15K</span>
                </div>
                <p className="text-foreground/70 text-sm mb-6">Perfect if you need complete AI transformation in 4 weeks</p>
                
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">4-week intensive sprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">Complete business system overhaul</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">Multiple automations deployed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">Team training included</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full mb-4">
                  <a href="{{stripe_link_compass}}">Launch Compass</a>
                </Button>
                <p className="text-xs text-center text-foreground/60">
                  Great for: Funded startups, rapid scaling, complete transformation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hourly Consultation */}
          <div className="max-w-2xl mx-auto">
            <Card className="border border-foreground/20 bg-foreground/5">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-medium mb-4">Need Strategic Guidance?</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-light">$200</span>
                  <span className="text-foreground/60 text-sm ml-2">/hour</span>
                </div>
                <p className="text-foreground/70 text-sm mb-4">Book a one-time consultation to get clarity on your AI strategy</p>
                <Button asChild variant="outline" className="w-full max-w-xs mx-auto">
                  <a href="{{stripe_link_hourly}}">Book Session</a>
                </Button>
              </CardHeader>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/70 mb-4">
              Payment plans available for Compass and Ignite tiers.
            </p>
            <p className="text-sm text-foreground/60">
              Not sure which is right for you? <a href="{{stripe_link_hourly}}" className="text-primary hover:underline">Book a consultation</a> to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Focus Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto bg-foreground/5">
        <div className="animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What You Actually Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Time Back</h3>
              <p className="text-foreground/70 text-sm">5-20+ hours per week freed up from manual tasks</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Stress Reduction</h3>
              <p className="text-foreground/70 text-sm">No more copy-paste hell or forgotten follow-ups</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Growth Acceleration</h3>
              <p className="text-foreground/70 text-sm">Focus on strategy while AI handles the busywork</p>
            </div>
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

export default Pricing;