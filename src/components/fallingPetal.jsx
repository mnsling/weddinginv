import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Falling Rose Petals Animation Component
// ---------------------------------------------------------------------------
export default function FallingPetals({ count = 22 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals with randomized speeds, sizes, positions, and drift angles
    const generatedPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Horizontal start percentage
      size: 12 + Math.random() * 14, // Petal width in px
      duration: 7 + Math.random() * 8, // Fall duration (seconds)
      delay: Math.random() * 10, // Initial delay before animation starts
      opacity: 0.5 + Math.random() * 0.4, // Opacity variation
      swayDuration: 3 + Math.random() * 3, // Sway frequency
      rotate: Math.random() * 360, // Initial rotation angle
      color: i % 3 === 0 ? "#A60934" : i % 2 === 0 ? "#751014" : "#E17A13", // Rich crimson & warm tones
    }));
    setPetals(generatedPetals);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
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
          {/* Individual Sway & Rotation Wrapper */}
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 30"
            fill={p.color}
            style={{
              opacity: p.opacity,
              animation: `sway ${p.swayDuration}s ease-in-out infinite alternate`,
              transform: `rotate(${p.rotate}deg)`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
            }}
          >
            {/* Smooth Rose Petal Path */}
            <path d="M12 0 C 20 5, 24 15, 18 25 C 12 30, 6 28, 2 20 C -2 10, 4 2, 12 0 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}