import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Falling Autumn Petals / Leaves Animation
// ---------------------------------------------------------------------------

export default function FallingPetals({ count = 22 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Autumn wedding palette:
    // burgundy, wine red, burnt orange, olive & muted forest green
    const colors = [
      "#A60934", // crimson
      "#751014", // burgundy
      "#E17A13", // burnt orange
      "#6F7B32", // olive green
      "#344C15", // forest green
      "#9A6B32", // warm autumn brown
    ];

    const generatedPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,

      // Horizontal starting position
      left: Math.random() * 100,

      // Size
      size: 12 + Math.random() * 14,

      // Falling speed
      duration: 7 + Math.random() * 8,

      // Delay
      delay: Math.random() * 10,

      // Softer / more transparent
      opacity: 0.3 + Math.random() * 0.35,

      // Side-to-side movement
      swayDuration: 3 + Math.random() * 3,

      // Starting rotation
      rotate: Math.random() * 360,

      // Autumn color
      color: colors[i % colors.length],
    }));

    setPetals(generatedPetals);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-5%]"
          style={{
            left: `${p.left}%`,
            animation: `fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {/* Individual Petal / Leaf */}
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 30"
            fill={p.color}
            style={{
              opacity: p.opacity,
              animation: `sway ${p.swayDuration}s ease-in-out infinite alternate`,
              transform: `rotate(${p.rotate}deg)`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.10))",
            }}
          >
            {/* Soft organic leaf / petal shape */}
            <path
              d="
                M12 1
                C18 5, 23 11, 21 18
                C19 25, 13 29, 12 29
                C11 29, 5 25, 3 18
                C1 11, 6 5, 12 1
                Z
              "
            />

            {/* Subtle leaf vein */}
            <path
              d="M12 4 C11.5 10, 12.5 18, 12 26"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.7"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}