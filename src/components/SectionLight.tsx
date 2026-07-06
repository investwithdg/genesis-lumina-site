import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLightProps {
  children: ReactNode;
  className?: string;
  /** muted variant now renders cream — the warm reveal */
  muted?: boolean;
}

const SectionLight = ({ children, className, muted = false }: SectionLightProps) => {
  return (
    <section
      className={cn(
        "relative text-foreground",
        muted ? "bg-cream" : "bg-background",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionLight;
