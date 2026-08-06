// ---------------------------------------------------------------------------
// Corner Floral Branch Graphic
// ---------------------------------------------------------------------------
export default function CornerFloral({ tone = "#751014", opacity = 0.25, className = "" }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M 10,110 C 20,60 60,20 110,10"
        stroke={tone}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <path
        d="M 30,90 C 25,75 35,60 50,65 C 45,80 35,85 30,90 Z"
        stroke={tone}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 70,50 C 65,35 75,20 90,25 C 85,40 75,45 70,50 Z"
        stroke={tone}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="20" cy="100" r="4" stroke={tone} strokeWidth="1" />
      <circle cx="100" cy="20" r="4" stroke={tone} strokeWidth="1" />
    </svg>
  );
}