import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const solutionsLinks = [
    { title: "Lumina Labs (Workshops)", path: "/products/lumina-labs" },
    { title: "Lumina Compass (Sprints)", path: "/products/lumina-compass" },
    { title: "Lumina Ignite (Retainer)", path: "/products/lumina-ignite" },
  ];

  const resourcesLinks = [
    { title: "Field Guide: Analog", path: "/field-guides/analog" },
    { title: "Field Guide: Harvest", path: "/field-guides/harvest" },
    { title: "Field Guide: Audit", path: "/field-guides/audit" },
    { title: "Quiz", path: "/quiz" },
    { title: "Newsletter", path: "/newsletter" },
    { title: "FAQ", path: "/faq" },
  ];

  const isCurrentPage = (path: string) => location.pathname === path;
  const isSolutionsActive = solutionsLinks.some(link => location.pathname === link.path);
  const isResourcesActive = resourcesLinks.some(link => location.pathname === link.path);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm nav-glow">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
            Genesis Lumina
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isSolutionsActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                Solutions
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {solutionsLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isResourcesActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                Resources
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {resourcesLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className={`text-sm font-medium transition-colors ${isCurrentPage('/about') ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
              About
            </Link>

            <Button asChild size="sm" className="gap-2">
              <Link to="/diagnostic">Start Diagnostic<ArrowRight className="w-4 h-4" /></Link>
            </Button>

            <BookCallButton size="sm">Book Call</BookCallButton>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Solutions</div>
              {solutionsLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Resources</div>
              {resourcesLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <Link to="/about" className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage('/about') ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </div>

            <div className="space-y-2 pt-4">
              <Button asChild size="sm" className="w-full gap-2">
                <Link to="/diagnostic" onClick={() => setIsMenuOpen(false)}>Start Diagnostic<ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <BookCallButton size="sm" className="w-full">Book Free Call</BookCallButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
