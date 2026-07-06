import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  SupercarSide,
  SupercarFront,
  SupercarRear,
  EngineMotif,
  TelemetryMotif,
  AirflowMotif,
  WheelMotif,
} from "@/components/SupercarMotifs";

export type Motif =
  | "supercar-side"
  | "supercar-front"
  | "supercar-rear"
  | "chassis"
  | "telemetry"
  | "streaks"
  | "schematic"
  | "none";

interface SectionDarkProps {
  children: ReactNode;
  className?: string;
  /** legacy — mapped to nearest motif for backwards compat */
  withParticles?: boolean;
  withShapes?: boolean;
  collage?: "hero" | "geometric" | "streak" | "minimal" | "none";
  /** primary motif — supercar mascot or supporting motif */
  motif?: Motif;
  /** show subtle engineered grid overlay */
  grid?: boolean;
  /** dark scrim to guarantee text contrast when a heavy motif sits behind */
  scrim?: boolean;
}

const legacyMap = (
  collage?: SectionDarkProps["collage"],
  withParticles?: boolean,
  withShapes?: boolean
): Motif => {
  if (collage === "hero") return "supercar-side";
  if (collage === "geometric") return "chassis";
  if (collage === "streak") return "streaks";
  if (collage === "minimal") return "telemetry";
  if (withParticles && withShapes) return "supercar-side";
  if (withShapes) return "chassis";
  if (withParticles) return "streaks";
  return "none";
};

const SectionDark = ({
  children,
  className,
  withParticles,
  withShapes,
  collage,
  motif,
  grid = false,
  scrim = true,
}: SectionDarkProps) => {
  const resolved: Motif = motif ?? legacyMap(collage, withParticles, withShapes);

  return (
    <section
      className={cn(
        "relative bg-foreground text-white overflow-hidden",
        className
      )}
    >
      {grid && <div className="motif-layer grid-overlay opacity-50" aria-hidden />}

      {resolved !== "none" && (
        <>
          <div className="motif-layer" aria-hidden>
            {resolved === "supercar-side" && (
              <>
                <SupercarSide
                  className="absolute select-none"
                  style={{
                    right: "-8%",
                    bottom: "0",
                    width: "115%",
                    maxWidth: "1600px",
                    opacity: 0.85,
                  }}
                />
                <div className="streak-line streak-blue" style={{ top: "28%", left: "-10%", width: "60%", animationDelay: "0s" }} />
                <div className="streak-line" style={{ top: "54%", left: "-10%", width: "80%", animationDelay: "1.2s" }} />
                <div className="streak-line streak-ember" style={{ top: "72%", left: "-10%", width: "45%", animationDelay: "2.4s" }} />
              </>
            )}

            {resolved === "supercar-front" && (
              <SupercarFront
                className="absolute select-none"
                style={{ right: "-6%", top: "0", width: "62%", maxWidth: "820px", opacity: 0.75 }}
              />
            )}

            {resolved === "supercar-rear" && (
              <SupercarRear
                className="absolute select-none"
                style={{ left: "-4%", bottom: "0", width: "108%", maxWidth: "1500px", opacity: 0.8 }}
              />
            )}

            {resolved === "chassis" && (
              <EngineMotif
                className="absolute select-none"
                style={{
                  right: "-5%",
                  bottom: "0",
                  width: "70%",
                  maxWidth: "900px",
                  opacity: 0.8,
                }}
              />
            )}

            {resolved === "telemetry" && (
              <TelemetryMotif 
                className="absolute select-none" 
                style={{
                  left: "50%",
                  top: "50%",
                  width: "100%",
                  minWidth: "1200px",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.8,
                }} 
              />
            )}

            {resolved === "streaks" && (
              <AirflowMotif 
                className="absolute select-none" 
                style={{
                  left: "-5%",
                  bottom: "-10%",
                  width: "110%",
                  maxWidth: "1400px",
                  opacity: 0.85,
                }} 
              />
            )}

            {resolved === "schematic" && (
              <WheelMotif 
                className="absolute select-none" 
                style={{
                  right: "-10%",
                  top: "50%",
                  width: "80%",
                  maxWidth: "900px",
                  transform: "translateY(-50%)",
                  opacity: 0.75,
                }} 
              />
            )}
          </div>

          {/* Contrast scrim — a soft radial darkening so text is always legible */}
          {scrim && (
            <div
              className="motif-layer pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.35) 0%, hsl(var(--foreground) / 0.72) 60%, hsl(var(--foreground) / 0.86) 100%)",
              }}
            />
          )}
        </>
      )}

      {children}
    </section>
  );
};

export default SectionDark;
