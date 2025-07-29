import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Target, Compass as CompassIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useState } from "react";

type ProgramType = 'spark' | 'ignite' | 'compass' | 'strategic';

const Pricing = () => {
  const [activeProgram, setActiveProgram] = useState<ProgramType>('spark');
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
            <button 
              onClick={() => setActiveProgram('spark')}
              className={`flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                activeProgram === 'spark' ? 'bg-primary/10 shadow-lg' : 'hover:bg-foreground/5'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                activeProgram === 'spark' ? 'bg-primary' : 'bg-primary/70'
              }`}>
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Spark</h3>
              <p className="text-sm text-foreground/70">Quick automation win</p>
            </button>
            
            <ArrowRight className="w-6 h-6 text-foreground/40 hidden md:block" />
            
            <button 
              onClick={() => setActiveProgram('ignite')}
              className={`flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                activeProgram === 'ignite' ? 'bg-secondary/10 shadow-lg' : 'hover:bg-foreground/5'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                activeProgram === 'ignite' ? 'bg-secondary' : 'bg-secondary/70'
              }`}>
                <Target className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ignite</h3>
              <p className="text-sm text-foreground/70">Ongoing optimization</p>
            </button>
            
            <ArrowRight className="w-6 h-6 text-foreground/40 hidden md:block" />
            
            <button 
              onClick={() => setActiveProgram('compass')}
              className={`flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                activeProgram === 'compass' ? 'bg-accent/10 shadow-lg' : 'hover:bg-foreground/5'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                activeProgram === 'compass' ? 'bg-accent' : 'bg-accent/70'
              }`}>
                <CompassIcon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compass</h3>
              <p className="text-sm text-foreground/70">Complete transformation</p>
            </button>
          </div>
          
          <div className="text-center mb-8">
            <button 
              onClick={() => setActiveProgram('strategic')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                activeProgram === 'strategic' ? 'bg-foreground/10 shadow-lg' : 'hover:bg-foreground/5'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span className="font-medium">Strategic Guidance</span>
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {activeProgram === 'spark' && (
            <div className="max-w-2xl mx-auto">
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
                  <CardTitle className="text-3xl font-medium mb-4">Spark</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-light">$300</span>
                  </div>
                  <p className="text-foreground/70 text-lg mb-8">Perfect if you need one specific automation fast</p>
                  
                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>One automation built in 72 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Save 5-10 hours per week immediately</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Perfect for testing AI automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Basic documentation included</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mb-4 text-lg py-6">
                    <a href="{{stripe_link_spark}}">Order Spark Now</a>
                  </Button>
                  <p className="text-sm text-center text-foreground/60">
                    Great for: Solo founders, small teams, specific pain points
                  </p>
                </CardHeader>
              </Card>
            </div>
          )}

          {activeProgram === 'ignite' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Core Tier */}
              <Card className="border-2 border-secondary/50 shadow-lg bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-medium mb-4">Core</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-light">$1K</span>
                    <span className="text-foreground/60 text-sm ml-2">/mo</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-6">Perfect for getting started with AI coaching</p>
                  
                  <div className="text-left space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Monthly 1:1 coaching call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">1 automation per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full mb-4">
                    <Link to="/programs/ignite">Start Core</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Build Tier */}
              <Card className="border-2 border-secondary shadow-lg bg-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-medium mb-4">Build</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-light">$3K</span>
                    <span className="text-foreground/60 text-sm ml-2">/mo</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-6">Perfect for growing teams needing more automation</p>
                  
                  <div className="text-left space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Bi-weekly coaching calls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">3 automations per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">System optimization</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full mb-4">
                    <Link to="/programs/ignite">Choose Build</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Architect Tier */}
              <Card className="border-2 border-secondary/70 shadow-lg bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-medium mb-4">Architect</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-light">$5K</span>
                    <span className="text-foreground/60 text-sm ml-2">/mo</span>
                  </div>
                  <p className="text-foreground/70 text-sm mb-6">Perfect for complete business transformation</p>
                  
                  <div className="text-left space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Weekly coaching calls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">5+ automations per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">24/7 support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Complete system architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Team training included</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full mb-4">
                    <Link to="/programs/ignite">Start Architect</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeProgram === 'compass' && (
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-accent shadow-lg bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CompassIcon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-medium mb-4">Compass</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-light">$15K</span>
                  </div>
                  <p className="text-foreground/70 text-lg mb-8">Perfect if you need complete AI transformation in 4 weeks</p>
                  
                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>4-week intensive sprint</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>Complete business system overhaul</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>Multiple automations deployed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>Team training included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>6 months of support included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span>ROI guarantee</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mb-4 text-lg py-6">
                    <a href="{{stripe_link_compass}}">Launch Compass</a>
                  </Button>
                  <p className="text-sm text-center text-foreground/60">
                    Great for: Funded startups, rapid scaling, complete transformation
                  </p>
                </CardHeader>
              </Card>
            </div>
          )}

          {activeProgram === 'strategic' && (
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-foreground/20 shadow-lg bg-foreground/5">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-medium mb-4">Strategic Guidance</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-light">$200</span>
                    <span className="text-foreground/60 text-lg ml-2">/hour</span>
                  </div>
                  <p className="text-foreground/70 text-lg mb-8">Book a one-time consultation to get clarity on your AI strategy</p>
                  
                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-foreground" />
                      <span>1-hour focused consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-foreground" />
                      <span>AI readiness assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-foreground" />
                      <span>Custom roadmap provided</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-foreground" />
                      <span>Implementation priorities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-foreground" />
                      <span>Tool recommendations</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mb-4 text-lg py-6">
                    <a href="{{stripe_link_hourly}}">Book Session</a>
                  </Button>
                  <p className="text-sm text-center text-foreground/60">
                    Perfect for: Quick clarity, specific questions, decision making
                  </p>
                </CardHeader>
              </Card>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/70 mb-4">
              Payment plans available for Compass and Ignite tiers.
            </p>
            <p className="text-sm text-foreground/60">
              Not sure which is right for you? <button onClick={() => setActiveProgram('strategic')} className="text-primary hover:underline">Book a consultation</button> to discuss your needs.
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