import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";

const Index = () => {
  const handleIgniteCheckout = () => {
    window.open('https://buy.stripe.com/3cIbJ11La1yq7Hr7AX1Fe00', '_blank');
  };

  const handleCompassCheckout = () => {
    window.open('https://buy.stripe.com/dRmfZhcpOelc7Hr4oL1Fe01', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section with Animated Background */}
      <section className="px-8 py-32 md:py-40 max-w-6xl mx-auto text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="geometric-bg">
          <div className="geometric-shape shape-circle"></div>
          <div className="geometric-shape shape-square"></div>
          <div className="geometric-shape shape-triangle"></div>
          <div className="geometric-shape shape-circle"></div>
        </div>

        <div className="animate-fade-in relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full mb-8">
              AI Strategy & Ethics for Modern Teams
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-12 tracking-tight">
            Clarity, Not Chaos.<br />
            <span className="text-foreground/80">Guidance, Not Gimmicks.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            AI fluency and ethical transformation for values-aligned teams who refuse to compromise on integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-12 py-8 text-xl font-medium"
              onClick={handleCompassCheckout}
            >
              Apply for The Compass
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-12 py-8 text-xl font-medium"
              onClick={handleIgniteCheckout}
            >
              Start Ignite
            </Button>
          </div>
        </div>
      </section>

      {/* Why Genesis Lumina Section */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Why Genesis Lumina?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We're not another AI consultancy selling you the latest tools. We're stewards of responsible AI transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center animate-slide-in">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Ethics First</h3>
            <p className="text-foreground/70 leading-relaxed">
              Every strategy we build puts human values at the center. AI should amplify your integrity, not compromise it.
            </p>
          </div>
          
          <div className="text-center animate-slide-in [animation-delay:200ms]">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Precision Focus</h3>
            <p className="text-foreground/70 leading-relaxed">
              No generic playbooks. We craft bespoke AI strategies that align with your specific goals and constraints.
            </p>
          </div>
          
          <div className="text-center animate-slide-in [animation-delay:400ms]">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Team Fluency</h3>
            <p className="text-foreground/70 leading-relaxed">
              We don't just implement AI—we teach your team to master it with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Offer Cards Section */}
      <section className="px-8 py-32 max-w-6xl mx-auto bg-black/2">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Choose Your Path
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Whether you need ongoing guidance or an intensive transformation, we have the right program for your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {/* Ignite Program Card */}
          <Card className="border-2 border-foreground/10 shadow-lg bg-white animate-slide-in hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">✴</div>
                <h3 className="text-3xl md:text-4xl font-medium mb-6">
                  Lumina Ignite
                </h3>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Monthly AI advisory for teams building sustainable fluency—without the overwhelm.
                </p>
              </div>
              
              <ul className="space-y-4 mb-12 text-lg text-foreground/80">
                <li>• Strategic 60–90 min sessions monthly</li>
                <li>• Custom Notion portal with frameworks</li>
                <li>• AI Fluency Brief with actionable insights</li>
                <li>• Async support when you need it</li>
              </ul>
              
              <div className="text-center mb-8">
                <div className="text-3xl font-medium mb-2">$2,000/month</div>
                <p className="text-foreground/60">3-month minimum</p>
              </div>
              
              <Button 
                className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 py-6 text-lg font-medium"
                onClick={handleIgniteCheckout}
              >
                Start Ignite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Compass Program Card */}
          <Card className="border-2 border-black shadow-xl bg-black text-white animate-slide-in [animation-delay:200ms] hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">✫</div>
                <h3 className="text-3xl md:text-4xl font-medium mb-6">
                  The Lumina Compass
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Intensive 4-week sprint for leaders ready to integrate AI with precision and purpose.
                </p>
              </div>
              
              <ul className="space-y-4 mb-12 text-lg text-white/80">
                <li>• Deep 90-min calibration session</li>
                <li>• Hands-on precision workshops</li>
                <li>• Ethics & culture alignment</li>
                <li>• Strategic memo + implementation guide</li>
              </ul>
              
              <div className="text-center mb-8">
                <div className="text-3xl font-medium mb-2">$15,000</div>
                <p className="text-white/60">One client at a time</p>
              </div>
              
              <Button 
                className="w-full bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 py-6 text-lg font-medium"
                onClick={handleCompassCheckout}
              >
                Apply for Compass
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Founder Quote Section */}
      <section className="px-8 py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed mb-12 text-foreground/90">
            "AI without humans is like a car without a driver.<br />
            <span className="text-foreground/70">We see how that's going."</span>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-black/10 rounded-full"></div>
            <div className="text-left">
              <p className="text-xl font-medium">Donovan</p>
              <p className="text-foreground/60">Founder, Genesis Lumina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section with Carousel */}
      <section className="px-8 py-24 max-w-6xl mx-auto text-center bg-black/2">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-medium mb-12">Trusted by Forward-Thinking Teams</h3>
          <ClientLogoCarousel />
        </div>
      </section>

      {/* Newsletter Section with Substack Embed */}
      <section className="px-8 py-32 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Stay Ahead of the Curve
          </h3>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get insights on responsible AI implementation, industry trends, and practical frameworks delivered to your inbox.
          </p>
          <div className="flex justify-center">
            <iframe 
              src="https://genesislumina.substack.com/embed" 
              width="480" 
              height="320" 
              style={{border: "1px solid #EEE", background: "white"}} 
              frameBorder="0" 
              scrolling="no"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="px-8 py-24 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="mb-12">
          <Link to="/" className="text-2xl font-medium">
            Genesis Lumina
          </Link>
          <p className="text-foreground/60 mt-4 max-w-md mx-auto">
            AI fluency and ethical transformation for values-aligned teams.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
          <Link to="/about" className="hover-underline">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/ignite" className="hover-underline">Ignite</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/compass" className="hover-underline">Compass</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/faq" className="hover-underline">FAQ</Link>
        </div>
        
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://www.linkedin.com/company/genesislumina?trk=public_post_reshare_feed-actor-name" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.facebook.com/people/Genesis-Lumina/61576304277688/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-black transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://genesislumina.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-black transition-colors"
          >
            Substack
          </a>
        </div>
        
        <p className="text-sm text-foreground/50">
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
