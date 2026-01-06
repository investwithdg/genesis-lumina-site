import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionDarkProps {
  children: ReactNode;
  className?: string;
  withParticles?: boolean;
  withShapes?: boolean;
}

const SectionDark = ({ children, className, withParticles = false, withShapes = false }: SectionDarkProps) => {
  return (
    <section className={cn("relative bg-foreground text-white overflow-hidden", className)}>
      {withParticles && (
        <div className="hero-particles">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      )}
      
      {withShapes && (
        <div className="geometric-bg">
          <div className="geometric-shape shape-circle" />
          <div className="geometric-shape shape-square" />
          <div className="geometric-shape shape-triangle" />
          <div className="geometric-shape shape-circle" style={{ top: '70%', left: '80%' }} />
        </div>
      )}
      
      {children}
    </section>
  );
};

export default SectionDark;
