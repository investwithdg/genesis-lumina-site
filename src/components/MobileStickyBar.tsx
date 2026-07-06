import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 flex gap-3">
      <Button asChild size="sm" className="flex-1 gap-1 min-h-[44px]">
        <Link to="/pear">
          Book PEAR (free)
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm" className="flex-1 gap-1 min-h-[44px]">
        <Link to="/engines">
          <Compass className="w-4 h-4" />
          Explore Engines
        </Link>
      </Button>
    </div>
  );
};

export default MobileStickyBar;
