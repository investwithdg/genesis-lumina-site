import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
const Newsletter = () => {
  return <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black text-white rounded-full">📧 The Genesis Lumina Newsletter</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Stay Ahead of the <span className="text-foreground/70">AI Curve</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Weekly insights on responsible AI implementation, industry trends, and practical frameworks for values-aligned teams.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What You'll Get</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4">Weekly AI Insights</h3>
              <p className="text-foreground/80 leading-relaxed">
                Curated trends, tools, and strategies that matter for responsible AI implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4">Practical Frameworks</h3>
              <p className="text-foreground/80 leading-relaxed">
                Actionable templates and workflows you can implement immediately in your team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4">Exclusive Content</h3>
              <p className="text-foreground/80 leading-relaxed">
                Behind-the-scenes insights and early access to Genesis Lumina resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Embed Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Join 2,000+ Forward-Thinking Leaders</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get actionable AI insights delivered to your inbox every week. No spam, just value.
          </p>
          
          <div className="flex justify-center mb-12">
            <iframe src="https://genesislumina.substack.com/embed" width="480" height="320" style={{
            border: "1px solid #EEE",
            background: "white"
          }} frameBorder="0" scrolling="no" className="rounded-lg shadow-lg" />
          </div>
          
          <p className="text-sm text-foreground/60">
            Free to subscribe. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Social Proof & Next Steps */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <Card className="border border-foreground/10 shadow-none bg-black/2 p-8">
            <CardContent className="text-center">
              <h3 className="text-2xl font-medium mb-6">Ready to Take the Next Step?</h3>
              <p className="text-lg text-foreground/70 mb-8">
                Once you're subscribed, explore our AI programs designed to transform your team's capabilities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/programs/flash">
                  <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white">
                    Flash
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/programs/ignite">
                  <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white">
                    Ignite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/programs/compass">
                  <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                    Compass
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
    </div>;
};
export default Newsletter;