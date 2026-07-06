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

interface MotifProps {
  className?: string;
  style?: React.CSSProperties;
}

/* Shared invert filter — makes dark line-art render white on dark surfaces. */
const invertOnDark: React.CSSProperties = {
  filter: "invert(1) brightness(1.15) contrast(1.05)",
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
    style={{ ...invertOnDark, ...style }}
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
    style={{ ...invertOnDark, ...style }}
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
    style={{ ...invertOnDark, ...style }}
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
   5. CHASSIS WIREFRAME — top-down, houses engine components
   ───────────────────────────────────────────────────────────── */
export const ChassisWireframe = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 900 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M 100 250 Q 100 130 260 100 L 640 100 Q 800 130 800 250 Q 800 370 640 400 L 260 400 Q 100 370 100 250 Z"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.7"
    />
    <path
      d="M 200 250 Q 210 175 300 160 L 600 160 Q 690 175 700 250 Q 690 325 600 340 L 300 340 Q 210 325 200 250 Z"
      stroke="currentColor"
      strokeWidth="0.6"
      opacity="0.4"
    />
    <line x1="100" y1="250" x2="800" y2="250" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <line x1="260" y1="100" x2="260" y2="400" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <line x1="450" y1="105" x2="450" y2="395" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <line x1="640" y1="100" x2="640" y2="400" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <rect x="70" y="140" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="70" y="330" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="785" y="140" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="785" y="330" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <g opacity="0.5">
      <text x="120" y="90" fontSize="8" fontFamily="ui-monospace, monospace" fill="currentColor">FRONT</text>
      <text x="760" y="90" fontSize="8" fontFamily="ui-monospace, monospace" fill="currentColor">REAR</text>
    </g>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   6. TELEMETRY HUD
   ───────────────────────────────────────────────────────────── */
export const TelemetryHUD = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 1000 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
    preserveAspectRatio="none"
  >
    <g stroke="currentColor" strokeWidth="1" opacity="0.4">
      <path d="M 30 30 L 30 60 M 30 30 L 60 30" />
      <path d="M 970 30 L 970 60 M 970 30 L 940 30" />
      <path d="M 30 570 L 30 540 M 30 570 L 60 570" />
      <path d="M 970 570 L 970 540 M 970 570 L 940 570" />
    </g>
    <g stroke="currentColor" strokeWidth="0.5" opacity="0.35">
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={i} x1={100 + i * 34} y1="40" x2={100 + i * 34} y2={i % 5 === 0 ? "56" : "48"} />
      ))}
    </g>
    <g stroke="currentColor" strokeWidth="0.35" opacity="0.25">
      <line x1="500" y1="280" x2="500" y2="320" />
      <line x1="480" y1="300" x2="520" y2="300" />
      <circle cx="500" cy="300" r="14" fill="none" />
    </g>
    <g stroke="currentColor" strokeWidth="0.4" opacity="0.3">
      <line x1="30" y1="200" x2="30" y2="400" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1="30" y1={210 + i * 25} x2="42" y2={210 + i * 25} />
      ))}
    </g>
    <g fontFamily="ui-monospace, 'JetBrains Mono', monospace" fontSize="10" fill="currentColor" opacity="0.5">
      <text x="70" y="42">T+00:34.812</text>
      <text x="880" y="42">SECTOR 03</text>
      <text x="70" y="568">ENGINE·03  RELIABILITY 0.72  Δ+14%</text>
      <text x="820" y="568">STATUS · OK</text>
    </g>
  </svg>
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
