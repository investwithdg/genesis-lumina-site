import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionDarkProps {
  children: ReactNode;
  className?: string;
  /** legacy prop — kept for compat, now renders collage */
  withParticles?: boolean;
  /** legacy prop — kept for compat, now renders collage */
  withShapes?: boolean;
  /** which collage composition to render behind content */
  collage?: "hero" | "geometric" | "streak" | "minimal" | "none";
  /** show subtle engineered grid overlay */
  grid?: boolean;
}

const SectionDark = ({
  children,
  className,
  withParticles,
  withShapes,
  collage,
  grid = false,
}: SectionDarkProps) => {
  // Resolve composition: explicit prop wins, else legacy flags map to defaults
  const composition =
    collage ??
    (withParticles && withShapes
      ? "hero"
      : withShapes
      ? "geometric"
      : withParticles
      ? "streak"
      : "none");

  return (
    <section
      className={cn(
        "relative bg-foreground text-white overflow-hidden",
        className
      )}
    >
      {/* Engineered grid backdrop */}
      {grid && <div className="collage-layer grid-overlay opacity-60" aria-hidden />}

      {/* Collage composition (static hard-edged geometry, Matisse-inspired) */}
      {composition !== "none" && (
        <div className="collage-layer" aria-hidden>
          {composition === "hero" && (
            <>
              {/* Deep-green vertical bar */}
              <div className="collage-panel collage-green" style={{ top: "-4%", right: "8%", width: "14%", height: "62%", opacity: 0.85 }} />
              {/* Blue rectangle offset */}
              <div className="collage-panel collage-blue" style={{ bottom: "-6%", left: "-2%", width: "22%", height: "38%", opacity: 0.75 }} />
              {/* Cream slab */}
              <div className="collage-panel collage-cream" style={{ top: "18%", left: "12%", width: "5%", height: "4px", opacity: 0.85 }} />
              {/* Ember dot — brake-light signal */}
              <div className="collage-panel collage-ember" style={{ top: "22%", right: "26%", width: "10px", height: "10px", borderRadius: "9999px" }} />
              {/* Streaks */}
              <div className="streak-line streak-blue" style={{ top: "34%", left: "-10%", width: "45%", animationDelay: "0s" }} />
              <div className="streak-line" style={{ top: "62%", left: "-10%", width: "70%", animationDelay: "1.4s" }} />
              <div className="streak-line streak-ember" style={{ top: "78%", left: "-10%", width: "35%", animationDelay: "2.6s" }} />
              {/* Outlined triangle */}
              <div
                className="collage-panel"
                style={{
                  bottom: "22%",
                  right: "6%",
                  width: 0,
                  height: 0,
                  borderLeft: "40px solid transparent",
                  borderRight: "40px solid transparent",
                  borderBottom: "70px solid hsl(var(--primary) / 0.55)",
                }}
              />
            </>
          )}

          {composition === "geometric" && (
            <>
              <div className="collage-panel collage-green" style={{ top: "10%", left: "6%", width: "6%", height: "40%", opacity: 0.7 }} />
              <div className="collage-panel collage-blue" style={{ bottom: "10%", right: "10%", width: "16%", height: "14%", opacity: 0.6 }} />
              <div className="collage-panel collage-cream" style={{ top: "30%", right: "22%", width: "3%", height: "3%", opacity: 0.9 }} />
              <div className="collage-panel collage-outline" style={{ top: "18%", right: "8%", width: "80px", height: "80px", borderRadius: "9999px" }} />
              <div className="streak-line" style={{ top: "72%", left: "-10%", width: "60%", animationDelay: "0.8s" }} />
            </>
          )}

          {composition === "streak" && (
            <>
              <div className="streak-line streak-blue" style={{ top: "22%", left: "-10%", width: "55%", animationDelay: "0s" }} />
              <div className="streak-line" style={{ top: "48%", left: "-10%", width: "75%", animationDelay: "1.2s" }} />
              <div className="streak-line streak-ember" style={{ top: "70%", left: "-10%", width: "40%", animationDelay: "2.4s" }} />
              <div className="collage-panel collage-green" style={{ top: "0", right: "0", width: "3px", height: "35%", opacity: 0.6 }} />
            </>
          )}

          {composition === "minimal" && (
            <>
              <div className="collage-panel collage-ember" style={{ top: "12%", right: "8%", width: "6px", height: "6px" }} />
              <div className="collage-panel collage-green" style={{ bottom: "0", left: "0", width: "40%", height: "2px", opacity: 0.7 }} />
            </>
          )}
        </div>
      )}

      {children}
    </section>
  );
};

export default SectionDark;
