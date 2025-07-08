import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black/5 rounded-full">
              Our Story & Mission
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12 tracking-tight">
            Why We <span className="text-foreground/70">Exist</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Genesis Lumina is more than an AI consultancy—it's a movement to steward AI fluency with integrity and clarity.
          </p>
        </div>
      </section>

      {/* ... keep existing content sections */}
      
      {/* Narrative Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="animate-slide-in space-y-8 text-lg leading-relaxed">
          <p className="text-foreground/80">
            I'm Donovan. I started in real estate because I believed in building infrastructure that lasts. Along the way, I saw leaders drowning in AI hype—buying tools without understanding how to steer them.
          </p>
          
          <p className="text-foreground/80">
            Genesis Lumina was born from that frustration. AI without humans is like a car without a driver. My mission is simple: teach teams how to pilot AI safely and unleash its power for good.
          </p>
          
          <p className="text-foreground/80">
            We combine strategy, ethics, and practical frameworks so you never have to worry about "What now?" or "Did I break something?" Every engagement starts with clarity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Clarity Over Chaos</h3>
              <p className="text-foreground/80 leading-relaxed">
                We simplify complexity with straightforward frameworks and proven methods.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Stewardship Over Speed</h3>
              <p className="text-foreground/80 leading-relaxed">
                Responsible AI isn't an afterthought—it's the foundation of everything we build.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Human-First Fluency</h3>
              <p className="text-foreground/80 leading-relaxed">
                AI amplifies human potential. We prioritize education and mindset over automation alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h3 className="text-xl font-medium mb-8">Connect with Donovan</h3>
          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/donovan-r-green" target="_blank" rel="noopener noreferrer" className="text-lg hover-underline">LinkedIn</a>
            <a href="https://thecanvasnewsletter.substack.com/" target="_blank" rel="noopener noreferrer" className="text-lg hover-underline">Substack</a>
            <a href="https://www.instagram.com/investwithdg" target="_blank" rel="noopener noreferrer" className="text-lg hover-underline">Instagram</a>
            <a href="https://www.facebook.com/investwithdg" target="_blank" rel="noopener noreferrer" className="text-lg hover-underline">Facebook</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/about" className="hover-underline">About</Link>
          <span className="text-foreground/30">│</span>
          <Link to="/newsletter" className="hover-underline">Newsletter</Link>
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

export default About;
