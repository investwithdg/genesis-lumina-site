import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
const Flash = () => {
  const handleFlashCheckout = () => {
    window.open('https://buy.stripe.com/7sYfZhdtScd46Dn5sP1Fe02', '_blank');
  };
  return <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black text-white rounded-full">
              ⚡ Quick AI Automation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Jump into AI & Automations <span className="text-foreground/70">with Confidence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Your entry point into AI automation. One simple bottleneck solved in 7-10 days.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What You Get</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-medium mb-4">Single Process Focus</h3>
              <p className="text-foreground/80 leading-relaxed">
                We identify one key bottleneck or improvement in your business process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-xl font-medium mb-4">Custom Automation</h3>
              <p className="text-foreground/80 leading-relaxed">
                A tailored AI solution designed specifically for your workflow.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-6">📋</div>
              <h3 className="text-xl font-medium mb-4">Implementation Guide</h3>
              <p className="text-foreground/80 leading-relaxed">
                Clear documentation and training to get your team up and running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">How It Works</h2>
          
          <div className="space-y-8">
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-foreground/60" />
                  <h3 className="text-xl font-medium">Days 1-2: Discovery Call</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We identify the perfect automation opportunity and map out your current process.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-foreground/60" />
                  <h3 className="text-xl font-medium">Days 3-7: Build & Test</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We create and refine your custom automation, ensuring it works perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-foreground/60" />
                  <h3 className="text-xl font-medium">Days 8-10: Delivery & Training</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Complete handoff with documentation, training, and 30 days of support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price + CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="text-2xl md:text-3xl font-medium mb-4">
            $300 per automation
          </div>
          <p className="text-lg text-foreground/60 mb-8">
            Maximum 3 automations at a time
          </p>
          <p className="text-sm text-foreground/50 mb-12">
            Perfect for teams wanting to test AI automation with minimal risk.
          </p>
          
          <Button size="lg" className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium" onClick={handleFlashCheckout}>
            Get Your Flash Automation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/70 mb-4">Ready for more comprehensive AI strategy?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs/ignite">
                <Button variant="outline" className="border-black hover:bg-black hover:text-white">Explore Ignite</Button>
              </Link>
              <Link to="/programs/compass">
                <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                  Apply for Compass ($15,000)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover-underline">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs/flash" className="hover-underline">Flash</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs/ignite" className="hover-underline">Ignite</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/programs/compass" className="hover-underline">Compass</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover-underline">FAQ</Link>
        </div>
        <p className="text-xs text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>;
};
export default Flash;