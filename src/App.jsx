import React, { useEffect, useRef, useState } from "react";
import bgImage from "./assets/bg.jpg"; // Background image import

/**
 * Ryan & Abigail — Wedding Invitation
 * -----------------------------------
 * Features floating rose petal animation system and responsive sections.
 */

// ---------------------------------------------------------------------------
// Falling Rose Petals Animation Component
// ---------------------------------------------------------------------------
function FallingPetals({ count = 22 }) {
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

// ---------------------------------------------------------------------------
// Reveal-on-scroll wrapper
// ---------------------------------------------------------------------------
function Reveal({ children, delay = 0, className = "", scale = false }) {
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

// ---------------------------------------------------------------------------
// Standard Section Header
// ---------------------------------------------------------------------------
function SectionHeader({ numeral, chapter, title, theme = "dark" }) {
  const isDarkBg = theme === "light";

  return (
    <div className="flex flex-col items-center text-center mb-10 md:mb-14">
      {numeral && (
        <Reveal>
          <p
            className={`font-display italic text-base md:text-lg font-light mb-1 ${
              isDarkBg ? "text-white/80" : "text-[#751014]/80"
            }`}
          >
            {numeral}
          </p>
        </Reveal>
      )}

      <Reveal delay={40}>
        <div
          className={`w-px h-5 md:h-7 mb-3 ${
            isDarkBg ? "bg-white/30" : "bg-[#751014]/30"
          }`}
        />
      </Reveal>

      {chapter && (
        <Reveal delay={80}>
          <p
            className={`text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-medium mb-2 ${
              isDarkBg ? "text-[#ffdd69]" : "text-[#751014]"
            }`}
          >
            {chapter}
          </p>
        </Reveal>
      )}

      <Reveal delay={chapter ? 120 : 80}>
        <h2
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide ${
            isDarkBg ? "text-white" : "text-[#751014]"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      <Reveal delay={chapter ? 160 : 120}>
        <div className="flex items-center gap-3 mt-4 opacity-40">
          <span
            className={`h-px w-8 ${isDarkBg ? "bg-white" : "bg-[#751014]"}`}
          />
          <span
            className={`text-[8px] ${isDarkBg ? "text-white" : "text-[#751014]"}`}
          >
            ✦
          </span>
          <span
            className={`h-px w-8 ${isDarkBg ? "bg-white" : "bg-[#751014]"}`}
          />
        </div>
      </Reveal>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Rose SVG Line-Art
// ---------------------------------------------------------------------------
function Rose({ size = 140, tone = "#751014", opacity = 1, className = "" }) {
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

// ---------------------------------------------------------------------------
// Corner Floral Branch Graphic
// ---------------------------------------------------------------------------
function CornerFloral({ tone = "#751014", opacity = 0.25, className = "" }) {
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

// ---------------------------------------------------------------------------
// Countdown Hook — ticks every second, returns days/hours/minutes/seconds
// ---------------------------------------------------------------------------
function useCountdown(dateString) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  useEffect(() => {
    const target = new Date(dateString).getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        done: false,
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [dateString]);

  return timeLeft;
}

// ---------------------------------------------------------------------------
// Countdown display — four ticking stat blocks
// ---------------------------------------------------------------------------
function CountdownStat({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[52px] sm:min-w-[64px]">
      <span className="font-inter text-2xl sm:text-3xl md:text-4xl text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#ffdd69] mt-1.5">
        {label}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Event Card Component
// ---------------------------------------------------------------------------
function EventCard({ label, title, address, time, mapQuery }) {
  return (
    <div className="event-card relative bg-white rounded-2xl border border-[#751014]/15 p-8 pt-14 text-center w-full max-w-sm mx-auto shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border border-[#751014]/20 shadow-sm flex items-center justify-center bg-white">
        <div className="w-14 h-14 rounded-full border border-[#ffdd69] flex items-center justify-center">
          <Rose size={30} tone="#751014" opacity={0.95} />
        </div>
      </div>
      <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
        {label}
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-[#751014] mb-3">
        {title}
      </h3>
      <p className="text-[#333333]/80 text-sm leading-relaxed mb-1">{address}</p>
      <p className="text-[#333333] text-sm font-semibold mb-6">{time}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          mapQuery
        )}`}
        target="_blank"
        rel="noreferrer"
        className="link-underline inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] font-medium uppercase text-[#751014]"
      >
        <span>View directions</span>
        <span className="text-xs">→</span>
      </a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Responsive Timeline Item Component
// ---------------------------------------------------------------------------
function TimelineItem({ time, label, last = false }) {
  return (
    <>
      {/* MOBILE LAYOUT: Vertical (hidden on md screens and above) */}
      <div className="flex gap-6 group md:hidden">
        <div className="flex flex-col items-center">
          <div className="relative w-3 h-3 my-1">
            <div className="absolute inset-0 rounded-full bg-[#751014] pulse-dot" />
            <div className="absolute inset-0 rounded-full bg-[#751014]" />
          </div>
          {!last && <div className="w-px flex-1 bg-[#751014]/20 my-1" />}
        </div>
        <div className="pb-9 transition-transform duration-300 group-hover:translate-x-1">
          <p className="text-[#751014] text-[11px] font-semibold tracking-[0.25em] uppercase mb-1">
            {time}
          </p>
          <p className="font-display text-2xl text-[#333333] font-medium tracking-wide">
            {label}
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT: Horizontal Step (hidden below md screens) */}
      <div className="hidden md:flex flex-1 flex-col items-center text-center group relative">
        {/* Step Marker & Connecting Line */}
        <div className="relative w-full flex items-center justify-center mb-6">
          <div className="relative z-10 w-4 h-4 rounded-full bg-[#751014] flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="absolute inset-0 rounded-full bg-[#751014] pulse-dot" />
          </div>
          {!last && (
            <div className="absolute left-1/2 w-full h-[2px] bg-[#751014]/20 top-1/2 -translate-y-1/2 z-0" />
          )}
        </div>

        {/* Text Details */}
        <div className="transition-transform duration-300 group-hover:-translate-y-1 px-2">
          <p className="text-[#751014] text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            {time}
          </p>
          <p className="font-display text-xl lg:text-2xl text-[#333333] font-medium tracking-wide leading-tight">
            {label}
          </p>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Attire Swatch Component
// ---------------------------------------------------------------------------
function Swatch({ hex }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: hex }}
      />
      <span className="text-[10px] font-mono tracking-wider text-white/90 font-medium uppercase drop-shadow-sm">
        {hex}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function WeddingInvite() {
  const countdown = useCountdown("2026-10-03T15:00:00");

  const palette = [
    "#693e21",
    "#751014",
    "#a60934",
    "#344c15",
    "#6f7b32",
    "#e17a13",
    "#ffdd69",
    "#ed9e9e",
    "#ebd1b7",
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#333333] overflow-x-hidden antialiased selection:bg-[#751014] selection:text-white relative">
      {/* Falling Rose Petals Animation Layer */}
      <FallingPetals count={25} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+SC:wght@400;600&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-cjk { font-family: 'Noto Serif SC', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }

        .reveal {
          transition-property: opacity, transform;
          transition-duration: 850ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: rgba(117, 16, 20, 0.3);
        }

        .link-underline { position: relative; padding-bottom: 2px; }
        .link-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -1px;
          width: 100%; height: 1px;
          background: currentColor;
          transform: scaleX(0.3);
          transform-origin: left;
          transition: transform 400ms cubic-bezier(0.16,1,0.3,1), opacity 300ms;
          opacity: 0.5;
        }
        .link-underline:hover::after { transform: scaleX(1); opacity: 1; }

        .pulse-dot {
          animation: pulseDot 2.6s ease-out infinite;
        }
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(3); opacity: 0; }
          100% { opacity: 0; }
        }

        /* Falling Petals Animations */
        @keyframes fall {
          0% {
            top: -10%;
          }
          100% {
            top: 108%;
          }
        }

        @keyframes sway {
          0% {
            transform: translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateX(45px) rotate(180deg);
          }
          100% {
            transform: translateX(-35px) rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
          .pulse-dot { animation: none !important; }
        }
      `}</style>

      <div className="font-body">
        {/* -------------------------------------------------- HERO SECTION (BG #751014) */}
        <section className="relative bg-[#751014] text-white py-16 md:py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <CornerFloral
            tone="#ffdd69"
            opacity={0.15}
            className="absolute top-4 left-4"
          />
          <CornerFloral
            tone="#ffdd69"
            opacity={0.15}
            className="absolute top-4 right-4 rotate-90"
          />
          <CornerFloral
            tone="#ffdd69"
            opacity={0.15}
            className="absolute bottom-4 left-4 -rotate-90"
          />
          <CornerFloral
            tone="#ffdd69"
            opacity={0.15}
            className="absolute bottom-4 right-4 rotate-180"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6">
            <Reveal delay={40}>
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rose size={26} tone="#ffdd69" opacity={0.6} />
                <p className="text-[#ffdd69] text-[10px] sm:text-xs tracking-[0.45em] uppercase font-medium">
                  You Are Invited
                </p>
                <Rose size={26} tone="#ffdd69" opacity={0.6} />
              </div>
            </Reveal>

            <Reveal delay={100} scale>
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center my-4">
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-lg" />
                <div className="absolute inset-3 rounded-full border border-[#ffdd69]/50" />

                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#751014] px-3 rounded-full">
                  <Rose size={50} tone="#ffdd69" opacity={0.9} />
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#751014] px-3 rounded-full">
                  <Rose size={50} tone="#ffdd69" opacity={0.9} />
                </div>

                <div className="text-center px-6 py-2">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#ffdd69] mb-3 font-semibold">
                    Together with their families
                  </p>
                  <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-white font-normal tracking-tight">
                    Ryan <br />
                    <span className="text-3xl sm:text-5xl md:text-6xl italic font-light text-[#ffdd69]">
                      &amp;
                    </span>
                    <br /> Abigail
                  </h1>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-lg md:text-xl tracking-[0.15em] text-[#ffdd69] font-display italic mb-2">
                to witness the beginning of forever
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 font-semibold mt-2">
                October 3, 2026 · Saturday
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5 px-6 py-4 rounded-2xl bg-white/10 border border-[#ffdd69]/30 backdrop-blur-sm">
                {countdown.done ? (
                  <p className="text-[#ffdd69] text-xs tracking-[0.25em] uppercase font-medium px-4">
                    Today is the day
                  </p>
                ) : (
                  <>
                    <CountdownStat value={countdown.days} label="Days" />
                    <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                    <CountdownStat value={countdown.hours} label="Hrs" />
                    <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                    <CountdownStat value={countdown.minutes} label="Min" />
                    <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                    <CountdownStat value={countdown.seconds} label="Sec" />
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------ PARENTS (SECTION II - BG WHITE) */}
        <section className="relative bg-white text-[#333333] py-24 md:py-36 text-center overflow-hidden">
          <Rose
            size={220}
            tone="#751014"
            opacity={0.06}
            className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Rose
            size={220}
            tone="#751014"
            opacity={0.06}
            className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <SectionHeader
              numeral="II"
              chapter="WITH THE BLESSINGS OF"
              title="Our Families"
              theme="dark"
            />

            <Reveal delay={80}>
              <p className="font-display text-2xl md:text-3xl leading-relaxed text-[#333333] mb-12 max-w-xl mx-auto font-light">
                We joyfully invite you to witness our marriage and share in the
                beginning of our life together.
              </p>
            </Reveal>

            <Reveal delay={110}>
              <div className="flex justify-center mb-8">
                <Rose size={40} tone="#751014" opacity={0.6} />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0 bg-gray-50/80 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative">
                <div className="sm:pr-8 sm:border-r sm:border-gray-200">
                  <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-3">
                    Parents of the Groom
                  </p>
                  <p className="font-display text-xl text-[#333333] leading-snug">
                    Mr. Zhi Cong Huang
                  </p>
                  <p className="font-display text-xl text-[#333333] leading-snug">
                    Mrs. Shirley Yu Huang
                  </p>
                </div>
                <div className="sm:pl-8">
                  <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-3">
                    Parents of the Bride
                  </p>
                  <p className="font-display text-xl text-[#333333] leading-snug">
                    Mr. Michael Ho Ling
                  </p>
                  <p className="font-display text-xl text-[#333333] leading-snug">
                    Mrs. Marie Angelie Sy Ling
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ----------------------------------------------------- DETAILS (SECTION III - BG #751014) */}
        <section className="relative bg-[#751014] text-white py-24 md:py-36 overflow-hidden">
          <Rose
            size={200}
            tone="#ffdd69"
            opacity={0.06}
            className="absolute -top-16 -left-14 pointer-events-none"
          />
          <Rose
            size={240}
            tone="#ffffff"
            opacity={0.05}
            className="absolute -bottom-20 -right-16 pointer-events-none"
          />
          <div className="relative max-w-4xl mx-auto px-6">
            <SectionHeader
              numeral="III"
              chapter="THE DETAILS"
              title="When & Where"
              theme="light"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 pt-4">
              <Reveal delay={100}>
                <EventCard
                  label="Ceremony"
                  title="Redemptorist Church"
                  address="J.P. Laurel Avenue, Davao City"
                  time="3:00 PM"
                  mapQuery="Redemptorist Church, J.P. Laurel Avenue, Davao City"
                />
              </Reveal>
              <Reveal delay={180}>
                <EventCard
                  label="Reception"
                  title="Acacia Hotel Davao"
                  address="J.P. Laurel Avenue, Davao City"
                  time="Following the ceremony"
                  mapQuery="Acacia Hotel Davao, J.P. Laurel Avenue, Davao City"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- TIMELINE (SECTION IV - BG WHITE) */}
        <section className="relative bg-white text-[#333333] py-24 md:py-36 overflow-hidden">
          <Rose
            size={200}
            tone="#751014"
            opacity={0.03}
            className="absolute -left-20 -top-14 pointer-events-none"
          />
          <Rose
            size={280}
            tone="#751014"
            opacity={0.03}
            className="absolute -right-24 bottom-10 pointer-events-none"
          />

          <div className="relative z-10 max-w-lg md:max-w-5xl mx-auto px-6">
            <SectionHeader
              numeral="IV"
              chapter="THE DAY"
              title="Schedule of Events"
              theme="dark"
            />

            <Reveal delay={120}>
              <div className="pl-4 sm:pl-0 md:flex md:items-start md:justify-between">
                <TimelineItem time="2:30 PM" label="Wedding Assembly" />
                <TimelineItem time="3:00 PM" label="Ceremony" />
                <TimelineItem time="6:00 PM" label="Cocktails" />
                <TimelineItem time="7:00 PM" label="Reception & Dinner" />
                <TimelineItem time="9:00 PM" label="Party" last />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------ ATTIRE (SECTION V - BG IMAGE WITH SEAMLESS FADE) */}
        <section className="relative text-white py-24 md:py-36 text-center bg-white overflow-hidden">
          {/* Background Image Container with Top & Bottom Fade Mask */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url(${bgImage})`,
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <Rose
            size={130}
            tone="#ffdd69"
            opacity={0.18}
            className="absolute top-6 left-2 sm:left-8 pointer-events-none"
          />
          <Rose
            size={150}
            tone="#ffffff"
            opacity={0.14}
            className="absolute bottom-6 right-2 sm:right-8 pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <SectionHeader
              numeral="V"
              chapter="ATTIRE DRESS CODE"
              title="Formal Attire"
              theme="light"
            />

            <Reveal delay={100}>
              <p className="text-white/90 text-sm md:text-base mb-14 max-w-md mx-auto leading-relaxed font-light">
                We'd love for our photos together to feel warm and cohesive —
                here's a guide for what to wear.
              </p>
            </Reveal>

            {/* Equal Height Flex Cards */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-16 items-stretch justify-center">
              <div className="flex-1">
                <Reveal delay={140} className="h-full">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg h-full flex flex-col justify-center items-center">
                    <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
                      Gentlemen
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-[#333333]">
                      Suit &amp; Tie
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="flex-1">
                <Reveal delay={200} className="h-full">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg h-full flex flex-col justify-center items-center">
                    <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
                      Ladies
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-[#333333]">
                      Long Gown
                    </p>
                    <p className="text-[11px] text-[#751014] tracking-wider uppercase font-medium mt-1">
                      strictly no black or white
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={240}>
              <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#ffdd69] mb-8">
                Suggested Palette
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-xl mx-auto">
                {palette.map((hex) => (
                  <Swatch key={hex} hex={hex} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ----------------------------------------------------- CLOSING (SECTION VI - BG WHITE) */}
        <section className="relative bg-white px-6 py-12 md:py-16 text-center overflow-hidden">
          <Rose
            size={320}
            tone="#751014"
            opacity={0.04}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <Reveal delay={60}>
              <div className="flex justify-center mb-4">
                <Rose size={60} tone="#751014" opacity={0.85} />
              </div>
            </Reveal>

            <SectionHeader
              numeral="VI"
              chapter="SEE YOU SOON"
              title="We Can't Wait"
              theme="dark"
            />

            <Reveal delay={120}>
              <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#751014] mb-8">
                With love, Ryan &amp; Abigail
              </p>
            </Reveal>

            {/* Centered Watermark */}
            <Reveal delay={160}>
              <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400 font-light">
                Website by <span className="font-medium text-gray-600">Nicklaus Ling</span>
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}