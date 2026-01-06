import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLightProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

const SectionLight = ({ children, className, muted = false }: SectionLightProps) => {
  return (
    <section className={cn(
      "relative",
      muted ? "bg-foreground/[0.02]" : "bg-white",
      "text-foreground",
      className
    )}>
      {children}
    </section>
  );
};

export default SectionLight;
