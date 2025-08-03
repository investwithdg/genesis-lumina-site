import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "About",
    path: "/about"
  }, {
    name: "Programs",
    path: "/programs",
    sublinks: [{
      name: "Spark",
      path: "/programs/spark"
    }, {
      name: "Ignite", 
      path: "/programs/ignite"
    }, {
      name: "Compass",
      path: "/programs/compass"
    }, {
      name: "Lumina Foundations",
      path: "/programs/lumina-foundations"
    }]
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "Newsletter",
    path: "/newsletter"
  }, {
    name: "FAQ",
    path: "/faq"
  }];
  const isCurrentPage = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-foreground/10">
      <nav className="px-8 py-6 max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-medium hover-underline flex items-center gap-3">
          <img alt="Genesis Lumina Icon" className="w-8 h-8" src="/lovable-uploads/4fffd04e-c716-40c9-a33c-cf5acef012dd.png" />
          Genesis Lumina
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => 
            link.sublinks ? (
              <div key={link.name} className="relative group">
                <span className="text-sm font-medium transition-colors hover-underline text-foreground/70 cursor-pointer">
                  {link.name}
                </span>
                <div className="absolute top-full left-0 bg-white border border-foreground/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 min-w-[120px]">
                  {link.sublinks.map(sublink => (
                    <Link key={sublink.name} to={sublink.path} className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 ${isCurrentPage(sublink.path) ? "text-black" : "text-foreground/70"}`}>
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover-underline ${isCurrentPage(link.path) ? "text-black" : "text-foreground/70"}`}>
                {link.name}
              </Link>
            )
          )}
          <Link to="/newsletter">
            <Button size="sm" className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
              Sign up for our newsletter
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-white border-b border-foreground/10 md:hidden">
            <div className="px-8 py-6 space-y-4">
              {navLinks.map(link => 
                link.sublinks ? (
                  <div key={link.name} className="space-y-2">
                    <span className="block text-sm font-medium text-foreground/50">{link.name}</span>
                    {link.sublinks.map(sublink => (
                      <Link key={sublink.name} to={sublink.path} className={`block text-sm font-medium transition-colors ml-4 ${isCurrentPage(sublink.path) ? "text-black" : "text-foreground/70"}`} onClick={() => setIsMenuOpen(false)}>
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={link.name} to={link.path} className={`block text-sm font-medium transition-colors ${isCurrentPage(link.path) ? "text-black" : "text-foreground/70"}`} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                )
              )}
              <Link to="/newsletter" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                  Sign up for our newsletter
                </Button>
              </Link>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navigation;