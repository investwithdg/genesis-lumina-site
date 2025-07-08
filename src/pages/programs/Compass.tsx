import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Compass = () => {
  const handleCompassCheckout = () => {
    window.open('https://buy.stripe.com/dRmfZhcpOelc7Hr4oL1Fe01', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black text-white rounded-full">
              ✫ Elite 4-Week AI Sprint
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Integrate AI with <span className="text-foreground/70">Precision & Purpose</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            A private advisory sprint for leaders who already know AI matters—and want to do it right.
          </p>
        </div>
      </section>

      {/* Benefits Overview Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Why The Compass?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🧭</div>
              <h3 className="text-xl font-medium mb-4">Clarity First</h3>
              <p className="text-foreground/80 leading-relaxed">
                Get a custom AI roadmap that aligns with your strategic goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="text-xl font-medium mb-4">Ethics & Culture</h3>
              <p className="text-foreground/80 leading-relaxed">
                Embed responsible AI practices so you never sacrifice trust.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-xl font-medium mb-4">Precision Build</h3>
              <p className="text-foreground/80 leading-relaxed">
                Hands-on workshops to design prompts, workflows, and integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Compass Works Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">The 4-Week Sprint</h2>
          
          <div className="space-y-8">
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">Week 1: Deep Calibration Call (90 min)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We interview leadership, map existing tools, and set objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">Week 2: Precision Systems Workshop</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Craft high-impact prompts, select tools, and define decision-making layers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">Week 3: Culture & Ethics Alignment</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Develop policies, governance frameworks, and team-wide guidelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">Week 4: Final Strategic Memo + Loom Walkthrough</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Deliver a comprehensive Notion doc + 30-min Loom demo for your team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment + CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="text-2xl md:text-3xl font-medium mb-4">
            $15,000 total investment
          </div>
          <p className="text-lg text-foreground/60 mb-8">
            (50% deposit to begin)
          </p>
          <p className="text-sm text-foreground/50 mb-12">
            We accept only one Compass client at a time to ensure exclusivity and focus.
          </p>
          
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-6 text-lg font-medium"
            onClick={handleCompassCheckout}
          >
            Apply for Compass <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/70 mb-4">Want to start with ongoing monthly support?</p>
            <Link to="/programs/ignite">
              <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                Explore Ignite - $2,000/month
              </Button>
            </Link>
          </div>

          <p className="text-sm text-foreground/60 mt-8">
            Have questions? Check our <Link to="/faq" className="hover-underline">FAQ</Link> or contact us directly.
          </p>
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
    </div>
  );
};

export default Compass;