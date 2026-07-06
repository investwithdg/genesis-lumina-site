/**
 * Supercar mascot library.
 * Side / Front / Rear are editorial line-art PNG silhouettes rendered with
 * `filter: invert(1)` so the dark strokes appear as white line-art on our
 * dark backgrounds, tinted through opacity classes.
 *
 * Chassis, Telemetry, Gauge and Badge remain vector for crispness at any size.
 */
import supercarSideImg from "@/assets/supercar-side.png";
import supercarFrontImg from "@/assets/supercar-front.png";
import supercarRearImg from "@/assets/supercar-rear.png";
import motifEngineImg from "@/assets/motif-engine.png";
import motifWheelImg from "@/assets/motif-wheel.png";
import motifAirflowImg from "@/assets/motif-airflow.png";
import motifTelemetryImg from "@/assets/motif-telemetry.png";

interface MotifProps {
  className?: string;
  style?: React.CSSProperties;
}

/* Shared styling for photorealistic images to blend cleanly with dark surfaces. */
const imageBlend: React.CSSProperties = {
  mixBlendMode: "lighten",
};

/* ─────────────────────────────────────────────────────────────
   1. SIDE PROFILE — hero mascot
   ───────────────────────────────────────────────────────────── */
export const SupercarSide = ({ className, style }: MotifProps) => (
  <img
    src={supercarSideImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   2. FRONT THREE-QUARTER
   ───────────────────────────────────────────────────────────── */
export const SupercarFront = ({ className, style }: MotifProps) => (
  <img
    src={supercarFrontImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   3. REAR + EXHAUST STREAKS
   ───────────────────────────────────────────────────────────── */
export const SupercarRear = ({ className, style }: MotifProps) => (
  <img
    src={supercarRearImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   4. MASCOT BADGE — tight wedge for chrome (nav, footer, sticky)
      Kept as SVG so it stays crisp at 20-40px.
   ───────────────────────────────────────────────────────────── */
export const SupercarBadge = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 80 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
  >
    {/* Filled wedge silhouette — long, low, aggressive */}
    <path
      d="M 2 17
         L 10 15.5
         L 15 11
         Q 22 5.5 34 4.5
         L 52 4.5
         Q 60 5.5 64 9
         L 71 13
         L 76 15
         L 76 17
         L 70 17
         Q 68 14 63 14
         Q 58 14 56 17
         L 26 17
         Q 24 14 19 14
         Q 14 14 12 17
         Z"
      fill="currentColor"
    />
    {/* Front wheel arch cutout */}
    <circle cx="19" cy="17" r="3.2" fill="currentColor" />
    <circle cx="19" cy="17" r="1.4" fill="hsl(var(--background))" />
    {/* Rear wheel arch cutout */}
    <circle cx="63" cy="17" r="3.2" fill="currentColor" />
    <circle cx="63" cy="17" r="1.4" fill="hsl(var(--background))" />
    {/* Ember taillight */}
    <rect x="73" y="11.5" width="4" height="1.6" fill="hsl(var(--ember))" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   5. ENGINE MOTIF (replaces Chassis Wireframe)
   ───────────────────────────────────────────────────────────── */
export const EngineMotif = ({ className, style }: MotifProps) => (
  <img
    src={motifEngineImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   6. TELEMETRY MOTIF
   ───────────────────────────────────────────────────────────── */
export const TelemetryMotif = ({ className, style }: MotifProps) => (
  <img
    src={motifTelemetryImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   6b. AIRFLOW MOTIF
   ───────────────────────────────────────────────────────────── */
export const AirflowMotif = ({ className, style }: MotifProps) => (
  <img
    src={motifAirflowImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   6c. WHEEL MOTIF
   ───────────────────────────────────────────────────────────── */
export const WheelMotif = ({ className, style }: MotifProps) => (
  <img
    src={motifWheelImg}
    alt=""
    aria-hidden
    loading="lazy"
    className={className}
    style={{ ...imageBlend, ...style }}
  />
);

/* ─────────────────────────────────────────────────────────────
   7. GAUGE — analog dial for BPE metric surfaces
   ───────────────────────────────────────────────────────────── */
export const Gauge = ({
  value = 72,
  label = "RELIABILITY",
  className,
}: {
  value?: number;
  label?: string;
  className?: string;
}) => {
  const angle = -135 + (value / 100) * 270;
  const rad = (angle * Math.PI) / 180;
  const x = 60 + 40 * Math.cos(rad);
  const y = 60 + 40 * Math.sin(rad);
  return (
    <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden>
      <path d="M 20 78 A 40 40 0 1 1 100 78" stroke="currentColor" strokeWidth="0.8" opacity="0.35" fill="none" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = (-135 + (i / 8) * 270) * (Math.PI / 180);
        const x1 = 60 + 34 * Math.cos(a);
        const y1 = 60 + 34 * Math.sin(a);
        const x2 = 60 + 40 * Math.cos(a);
        const y2 = 60 + 40 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />;
      })}
      <path
        d={`M 20 78 A 40 40 0 ${value > 50 ? 1 : 0} 1 ${x} ${y}`}
        stroke="hsl(var(--ember))"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="60" y1="60" x2={x} y2={y} stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
      <text x="60" y="76" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="currentColor" fontWeight="600">
        {value.toFixed(0).padStart(2, "0")}
      </text>
      <text x="60" y="86" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="5" letterSpacing="1" fill="currentColor" opacity="0.55">
        {label}
      </text>
    </svg>
  );
};
