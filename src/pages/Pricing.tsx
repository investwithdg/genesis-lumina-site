import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
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
            Simple <span className="text-foreground/70">Pricing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Choose the solution that fits your needs. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spark */}
            <Card className="border-2 border-primary shadow-lg bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-medium mb-4">Spark</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$300</span>
                </div>
                <p className="text-foreground/70 text-sm">One automation installed in 72 hours</p>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="{{stripe_link_spark}}">Order Spark</a>
                </Button>
              </CardContent>
            </Card>

            {/* Ignite Core */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-medium mb-4">Ignite Core</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$1K</span>
                  <span className="text-foreground/60 text-sm ml-2">/mo</span>
                </div>
                <p className="text-foreground/70 text-sm">Monthly coaching starter tier</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="{{stripe_link_ignite_core}}">Start Core</a>
                </Button>
              </CardContent>
            </Card>

            {/* Ignite Build */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-medium mb-4">Ignite Build</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$3K</span>
                  <span className="text-foreground/60 text-sm ml-2">/mo</span>
                </div>
                <p className="text-foreground/70 text-sm">Advanced monthly coaching</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="{{stripe_link_ignite_build}}">Start Build</a>
                </Button>
              </CardContent>
            </Card>

            {/* Ignite Architect */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-medium mb-4">Ignite Architect</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$5K</span>
                  <span className="text-foreground/60 text-sm ml-2">/mo</span>
                </div>
                <p className="text-foreground/70 text-sm">Premium monthly coaching</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="{{stripe_link_ignite_architect}}">Start Architect</a>
                </Button>
              </CardContent>
            </Card>

            {/* Compass */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-medium mb-4">Compass</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$15K</span>
                </div>
                <p className="text-foreground/70 text-sm">4-week AI transformation sprint</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="{{stripe_link_compass}}">Launch Compass</a>
                </Button>
              </CardContent>
            </Card>

            {/* Hourly */}
            <Card className="border border-foreground/10 shadow-none bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-medium mb-4">Hourly</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-light">$200</span>
                  <span className="text-foreground/60 text-sm ml-2">/hr</span>
                </div>
                <p className="text-foreground/70 text-sm">Strategic consultation sessions</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="{{stripe_link_hourly}}">Book Session</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/70">
              Payment plans available for Compass and Ignite tiers.
            </p>
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