// ---------------------------------------------------------------------------
// Rose SVG Line-Art
// ---------------------------------------------------------------------------
export default function Rose({ size = 140, tone = "#751014", opacity = 1, className = "" }) {
  const outerPetals = Array.from({ length: 7 });
  const innerPetals = Array.from({ length: 6 });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <g transform="translate(80,80)">
        {outerPetals.map((_, i) => {
          const angle = (360 / outerPetals.length) * i;
          return (
            <path
              key={`o-${i}`}
              d="M0,0 C -16,-18 -14,-46 0,-62 C 14,-46 16,-18 0,0 Z"
              stroke={tone}
              strokeWidth="1.1"
              transform={`rotate(${angle})`}
            />
          );
        })}
        {innerPetals.map((_, i) => {
          const angle = (360 / innerPetals.length) * i + 20;
          return (
            <path
              key={`i-${i}`}
              d="M0,0 C -9,-10 -8,-27 0,-36 C 8,-27 9,-10 0,0 Z"
              stroke={tone}
              strokeWidth="1.1"
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="5" stroke={tone} strokeWidth="1.1" />
      </g>
    </svg>
  );
}