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
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{
                left: `${(i * 8) + 5}%`,
                animation: `float ${18 + (i % 5) * 2}s infinite linear`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>
      )}
      
      {withShapes && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Subtle gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/[0.03] blur-3xl" />
          
          {/* Geometric accents */}
          <div 
            className="absolute top-20 left-10 w-16 h-16 border border-white/10 rounded-full"
            style={{ animation: 'drift 30s infinite linear' }}
          />
          <div 
            className="absolute top-32 right-16 w-10 h-10 border border-white/10"
            style={{ animation: 'drift 25s infinite linear reverse' }}
          />
          <div 
            className="absolute bottom-32 left-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-white/5"
            style={{ animation: 'drift 35s infinite linear' }}
          />
          <div 
            className="absolute bottom-40 right-32 w-14 h-14 border border-white/10 rounded-full"
            style={{ animation: 'drift 28s infinite linear reverse' }}
          />
        </div>
      )}
      
      {children}
    </section>
  );
};

export default SectionDark;
