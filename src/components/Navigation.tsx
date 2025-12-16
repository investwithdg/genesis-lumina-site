import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Compass } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const waypointLinks = [
    { title: "AI Literacy", path: "/waypoints/ai-literacy" },
    { title: "System Integration", path: "/waypoints/system-integration" },
    { title: "S³ (Scale·Sale·Succession)", path: "/waypoints/s3" },
  ];

  const fieldGuideLinks = [
    { title: "Analog", path: "/field-guides/analog" },
    { title: "Harvest", path: "/field-guides/harvest" },
    { title: "Audit", path: "/field-guides/audit" },
  ];

  const mainLinks = [
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Newsletter", path: "/newsletter" },
    { title: "Quiz", path: "/quiz" },
  ];

  const isCurrentPage = (path: string) => location.pathname === path;
  const isWaypointActive = waypointLinks.some(link => location.pathname === link.path);
  const isFieldGuideActive = fieldGuideLinks.some(link => location.pathname === link.path);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm nav-glow">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
            Genesis Lumina
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isWaypointActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                Waypoints
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {waypointLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isFieldGuideActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                Field Guides
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {fieldGuideLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${isCurrentPage(link.path) ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                {link.title}
              </Link>
            ))}

            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/quiz"><Compass className="w-4 h-4" />Find Your Waypoint</Link>
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
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Waypoints</div>
              {waypointLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Field Guides</div>
              {fieldGuideLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              {mainLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block px-2 py-2 text-sm rounded-md transition-colors ${isCurrentPage(link.path) ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-accent/50'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-4">
              <Button asChild variant="outline" size="sm" className="w-full gap-2">
                <Link to="/quiz" onClick={() => setIsMenuOpen(false)}><Compass className="w-4 h-4" />Find Your Waypoint</Link>
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
