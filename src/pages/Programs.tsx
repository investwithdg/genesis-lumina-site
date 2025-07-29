import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Rocket, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Programs = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              AI Programs & Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Choose Your <span className="text-foreground/70">AI Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            From quick automation wins to comprehensive AI transformation—we meet you where you are.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Spark */}
            <Card className="border border-foreground/10 shadow-none bg-white p-8 text-center">
              <CardContent>
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Spark</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  One high-impact automation delivered in 72 hours. Perfect for testing AI without risk.
                </p>
                <div className="space-y-3 text-sm text-foreground/60 mb-8">
                  <p>• 72-hour delivery</p>
                  <p>• Single workflow automation</p>
                  <p>• $300 productized service</p>
                  <p>• Perfect for quick wins</p>
                </div>
                <Link to="/programs/spark">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ignite */}
            <Card className="border border-foreground/10 shadow-none bg-white p-8 text-center">
              <CardContent>
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Ignite</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Monthly AI advisory with strategic sessions, frameworks, and ongoing support.
                </p>
                <div className="space-y-3 text-sm text-foreground/60 mb-8">
                  <p>• Monthly strategic sessions</p>
                  <p>• Notion frameworks included</p>
                  <p>• Month-to-month, cancel anytime</p>
                  <p>• Ongoing AI guidance</p>
                </div>
                <Link to="/programs/ignite">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Compass */}
            <Card className="border border-foreground/10 shadow-none bg-white p-8 text-center">
              <CardContent>
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Compass</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Elite 4-week AI integration sprint with deep calibration and strategic implementation.
                </p>
                <div className="space-y-3 text-sm text-foreground/60 mb-8">
                  <p>• 4-week intensive program</p>
                  <p>• Deep AI calibration</p>
                  <p>• Hands-on workshops</p>
                  <p>• Custom roadmap delivery</p>
                </div>
                <Link to="/programs/compass">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Not sure which program is right for you? Check out our pricing comparison or subscribe to our newsletter for insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                View Pricing
              </Button>
            </Link>
            <Link to="/newsletter">
              <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                Subscribe to Newsletter
              </Button>
            </Link>
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

export default Programs;