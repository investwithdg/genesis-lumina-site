/**
 * Supercar mascot library — stylized editorial silhouettes.
 * All SVGs use currentColor for the primary stroke so brand tokens drive tint.
 * No manufacturer references, no license plates, no literal branding.
 */

interface MotifProps {
  className?: string;
  /** Extra style hook — used to compose opacity/transforms from parent */
  style?: React.CSSProperties;
}

/* ─────────────────────────────────────────────────────────────
   1. SIDE PROFILE — long, low, aerodynamic
   ───────────────────────────────────────────────────────────── */
export const SupercarSide = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 900 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Ground shadow line */}
    <line x1="20" y1="185" x2="880" y2="185" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

    {/* Chassis — single continuous stroke */}
    <path
      d="M 40 175
         Q 55 168 90 165
         L 140 155
         Q 175 150 205 148
         L 240 118
         Q 285 88 360 82
         L 520 78
         Q 605 82 655 108
         L 720 138
         Q 760 148 815 152
         Q 855 155 862 168
         L 862 175
         Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />

    {/* Roofline crease */}
    <path
      d="M 260 112 Q 340 88 460 82 Q 555 82 620 105"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.55"
    />

    {/* Window glass — greenhouse */}
    <path
      d="M 280 118 L 315 96 Q 350 88 410 86 L 505 86 Q 570 90 605 108 L 605 118 Z"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.7"
    />
    <line x1="435" y1="88" x2="435" y2="118" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

    {/* Side intake / vent slit */}
    <path d="M 500 138 L 585 138" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <path d="M 505 143 L 580 143" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

    {/* Front headlight sliver */}
    <path d="M 55 155 L 90 152 L 92 158 L 60 162 Z" fill="currentColor" opacity="0.55" />

    {/* Rear taillight — ember accent target (colored by parent via .accent-ember) */}
    <rect className="motif-taillight" x="828" y="150" width="26" height="6" fill="hsl(var(--ember))" opacity="0.85" />

    {/* Front wheel */}
    <circle cx="195" cy="175" r="26" stroke="currentColor" strokeWidth="1" />
    <circle cx="195" cy="175" r="14" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    <circle cx="195" cy="175" r="3" fill="currentColor" opacity="0.7" />
    {/* spokes */}
    {[0, 60, 120].map((r) => (
      <line
        key={r}
        x1="195"
        y1="175"
        x2={195 + 13 * Math.cos((r * Math.PI) / 180)}
        y2={175 + 13 * Math.sin((r * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    ))}

    {/* Rear wheel */}
    <circle cx="720" cy="175" r="28" stroke="currentColor" strokeWidth="1" />
    <circle cx="720" cy="175" r="15" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    <circle cx="720" cy="175" r="3" fill="currentColor" opacity="0.7" />
    {[30, 90, 150].map((r) => (
      <line
        key={r}
        x1="720"
        y1="175"
        x2={720 + 14 * Math.cos((r * Math.PI) / 180)}
        y2={175 + 14 * Math.sin((r * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    ))}

    {/* Wheel arches */}
    <path
      d="M 158 175 Q 195 132 232 175"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.5"
    />
    <path
      d="M 682 175 Q 720 130 758 175"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.5"
    />

    {/* Underbody splitter */}
    <line x1="85" y1="178" x2="150" y2="178" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
    <line x1="760" y1="178" x2="825" y2="178" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   2. FRONT THREE-QUARTER
   ───────────────────────────────────────────────────────────── */
export const SupercarFront = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 600 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Ground */}
    <line x1="30" y1="300" x2="570" y2="300" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

    {/* Body — wide, low stance */}
    <path
      d="M 90 285
         L 130 235
         Q 175 200 240 190
         L 380 190
         Q 445 200 490 235
         L 530 285
         L 490 290
         Q 480 275 450 273
         L 170 273
         Q 140 275 130 290 Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />

    {/* Windshield / cabin */}
    <path
      d="M 175 220 Q 235 175 310 173 Q 385 175 445 220 L 425 240 L 195 240 Z"
      stroke="currentColor"
      strokeWidth="0.85"
      opacity="0.7"
    />
    <line x1="310" y1="173" x2="310" y2="240" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />

    {/* Hood crease */}
    <path d="M 245 240 L 310 235 L 375 240" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

    {/* Headlights — slim */}
    <path d="M 155 250 Q 175 245 205 246" stroke="currentColor" strokeWidth="1" />
    <path d="M 465 250 Q 445 245 415 246" stroke="currentColor" strokeWidth="1" />

    {/* Ember dot — headlight signal */}
    <circle cx="176" cy="248" r="3" fill="hsl(var(--ember))" opacity="0.9" />
    <circle cx="444" cy="248" r="3" fill="hsl(var(--ember))" opacity="0.9" />

    {/* Grille / intake */}
    <path d="M 245 275 L 375 275 L 365 285 L 255 285 Z" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
    <line x1="255" y1="280" x2="365" y2="280" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />

    {/* Wheels — front-facing perspective, thin ellipses */}
    <ellipse cx="140" cy="290" rx="30" ry="18" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="140" cy="290" rx="16" ry="10" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
    <ellipse cx="480" cy="290" rx="30" ry="18" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="480" cy="290" rx="16" ry="10" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   3. REAR + EXHAUST STREAKS
   ───────────────────────────────────────────────────────────── */
export const SupercarRear = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 900 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="20" y1="215" x2="880" y2="215" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

    {/* Motion-blur streak trails behind the car */}
    <defs>
      <linearGradient id="blur-blue" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0" />
        <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id="blur-ember" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(var(--ember))" stopOpacity="0" />
        <stop offset="1" stopColor="hsl(var(--ember))" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="blur-white" x1="0" x2="1">
        <stop offset="0" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0.35" />
      </linearGradient>
    </defs>

    <rect x="60" y="140" width="500" height="1" fill="url(#blur-white)" />
    <rect x="30" y="165" width="600" height="1.5" fill="url(#blur-blue)" />
    <rect x="90" y="188" width="560" height="1" fill="url(#blur-ember)" />
    <rect x="60" y="205" width="530" height="1" fill="url(#blur-white)" />

    {/* Car body — rear three-quarter */}
    <path
      d="M 620 200
         Q 630 148 680 130
         L 780 118
         Q 830 122 855 148
         Q 870 170 870 200
         L 855 205
         Q 848 195 820 193
         L 685 193
         Q 655 195 645 205 Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />

    {/* Rear glass */}
    <path d="M 660 155 Q 705 132 785 130 L 830 145 L 815 168 L 675 168 Z" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />

    {/* Taillight bar — full ember signal */}
    <rect x="640" y="178" width="220" height="4" fill="hsl(var(--ember))" opacity="0.9" />

    {/* Exhaust tips */}
    <circle cx="678" cy="196" r="4" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="694" cy="196" r="4" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="820" cy="196" r="4" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="836" cy="196" r="4" stroke="currentColor" strokeWidth="0.6" />

    {/* Wheels */}
    <ellipse cx="695" cy="205" rx="28" ry="14" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="820" cy="205" rx="28" ry="14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   4. MASCOT BADGE — tight silhouette for chrome (nav, footer, sticky)
   ───────────────────────────────────────────────────────────── */
export const SupercarBadge = ({ className, style }: MotifProps) => (
  <svg
    viewBox="0 0 60 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
  >
    <path
      d="M 3 18
         L 8 17
         Q 10 15 14 14
         L 17 10
         Q 22 6 28 5.5
         L 40 5.5
         Q 46 7 49 11
         L 53 15
         Q 56 16 57 18
         Z"
      fill="currentColor"
    />
    <circle cx="15" cy="18" r="3" fill="currentColor" />
    <circle cx="15" cy="18" r="1.2" fill="hsl(var(--background))" />
    <circle cx="45" cy="18" r="3" fill="currentColor" />
    <circle cx="45" cy="18" r="1.2" fill="hsl(var(--background))" />
    {/* ember taillight speck */}
    <rect x="53" y="13" width="3" height="1.5" fill="hsl(var(--ember))" />
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
    {/* Outer chassis outline — tear-drop top-down */}
    <path
      d="M 100 250
         Q 100 130 260 100
         L 640 100
         Q 800 130 800 250
         Q 800 370 640 400
         L 260 400
         Q 100 370 100 250 Z"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.7"
    />
    {/* Inner monocoque */}
    <path
      d="M 200 250
         Q 210 175 300 160
         L 600 160
         Q 690 175 700 250
         Q 690 325 600 340
         L 300 340
         Q 210 325 200 250 Z"
      stroke="currentColor"
      strokeWidth="0.6"
      opacity="0.4"
    />
    {/* Centerline */}
    <line x1="100" y1="250" x2="800" y2="250" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    {/* Cross members */}
    <line x1="260" y1="100" x2="260" y2="400" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <line x1="450" y1="105" x2="450" y2="395" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />
    <line x1="640" y1="100" x2="640" y2="400" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4" />

    {/* Wheels */}
    <rect x="70" y="140" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="70" y="330" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="785" y="140" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />
    <rect x="785" y="330" width="45" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" opacity="0.65" />

    {/* Coordinate ticks */}
    <g opacity="0.5">
      <text x="120" y="90" fontSize="8" fontFamily="ui-monospace, monospace" fill="currentColor">FRONT</text>
      <text x="760" y="90" fontSize="8" fontFamily="ui-monospace, monospace" fill="currentColor">REAR</text>
    </g>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   6. TELEMETRY HUD — corner brackets, tick marks, running data
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
    {/* Corner brackets */}
    <g stroke="currentColor" strokeWidth="1" opacity="0.4">
      <path d="M 30 30 L 30 60 M 30 30 L 60 30" />
      <path d="M 970 30 L 970 60 M 970 30 L 940 30" />
      <path d="M 30 570 L 30 540 M 30 570 L 60 570" />
      <path d="M 970 570 L 970 540 M 970 570 L 940 570" />
    </g>
    {/* Sector tick strip — top */}
    <g stroke="currentColor" strokeWidth="0.5" opacity="0.35">
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={i} x1={100 + i * 34} y1="40" x2={100 + i * 34} y2={i % 5 === 0 ? "56" : "48"} />
      ))}
    </g>
    {/* Center crosshair */}
    <g stroke="currentColor" strokeWidth="0.35" opacity="0.25">
      <line x1="500" y1="280" x2="500" y2="320" />
      <line x1="480" y1="300" x2="520" y2="300" />
      <circle cx="500" cy="300" r="14" fill="none" />
    </g>
    {/* Left rail */}
    <g stroke="currentColor" strokeWidth="0.4" opacity="0.3">
      <line x1="30" y1="200" x2="30" y2="400" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1="30" y1={210 + i * 25} x2="42" y2={210 + i * 25} />
      ))}
    </g>
    {/* Mono readouts */}
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
      <path
        d="M 20 78 A 40 40 0 1 1 100 78"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
        fill="none"
      />
      {/* tick marks */}
      {Array.from({ length: 9 }).map((_, i) => {
        const a = (-135 + (i / 8) * 270) * (Math.PI / 180);
        const x1 = 60 + 34 * Math.cos(a);
        const y1 = 60 + 34 * Math.sin(a);
        const x2 = 60 + 40 * Math.cos(a);
        const y2 = 60 + 40 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />;
      })}
      {/* value arc */}
      <path
        d={`M 20 78 A 40 40 0 ${value > 50 ? 1 : 0} 1 ${x} ${y}`}
        stroke="hsl(var(--ember))"
        strokeWidth="1.5"
        fill="none"
      />
      {/* needle */}
      <line x1="60" y1="60" x2={x} y2={y} stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="11"
        fill="currentColor"
        fontWeight="600"
      >
        {value.toFixed(0).padStart(2, "0")}
      </text>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="5"
        letterSpacing="1"
        fill="currentColor"
        opacity="0.55"
      >
        {label}
      </text>
    </svg>
  );
};
