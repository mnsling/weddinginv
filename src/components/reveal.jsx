import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Reveal-on-scroll wrapper
// ---------------------------------------------------------------------------
export default function Reveal({ children, delay = 0, className = "", scale = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : `translateY(24px) scale(${scale ? 0.97 : 1})`,
      }}
    >
      {children}
    </div>
  );
}