import React, { useEffect, useRef, useState } from "react";

/**
 * Ryan & Abigail — Wedding Invitation
 * -----------------------------------
 * Streamlined Hero section featuring "YOU ARE INVITED" as a subtle gold subtext
 * above the names, maximizing focus on the central moon gate ring and roses.
 */

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
// Standard Section Header (Used for lower sections)
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
// Countdown Hook
// ---------------------------------------------------------------------------
function useDaysUntil(dateString) {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const target = new Date(dateString).getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
      setDays(diff);
    };
    update();
    const id = setInterval(update, 1000 * 60 * 60);
    return () => clearInterval(id);
  }, [dateString]);
  return days;
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
// Timeline Row Component
// ---------------------------------------------------------------------------
function TimelineRow({ time, label, last = false }) {
  return (
    <div className="flex gap-6 md:gap-10 group">
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
  );
}

// ---------------------------------------------------------------------------
// Attire Swatch Component
// ---------------------------------------------------------------------------
function Swatch({ hex }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md"
        style={{ backgroundColor: hex }}
      />
      <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
        {hex}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function WeddingInvite() {
  const days = useDaysUntil("2026-10-03T15:00:00");

  const palette = [
    "#693e21",
    "#751014",
    "#a60934",
    "#344c15",
    "#6f7b32",
    "#e17a13",
    "#ffdd69",
    "#ebd1b7",
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#333333] overflow-x-hidden antialiased selection:bg-[#751014] selection:text-white">
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

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
          .pulse-dot { animation: none !important; }
        }
      `}</style>

      <div className="font-body">
        {/* -------------------------------------------------- HERO SECTION (BG #751014) */}
        <section className="relative bg-[#751014] text-white py-16 md:py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Corner Roses */}
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
            {/* Subtle Gold "YOU ARE INVITED" Subtext Header */}
            <Reveal delay={40}>
              <p className="text-[#ffdd69] text-[10px] sm:text-xs tracking-[0.45em] uppercase font-medium mb-3">
                ✦ You Are Invited ✦
              </p>
            </Reveal>

            <Reveal delay={100} scale>
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center my-4">
                {/* Outer Ring & Gold Inset */}
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-lg" />
                <div className="absolute inset-3 rounded-full border border-[#ffdd69]/50" />

                {/* Top & Bottom Rose Accents on Ring */}
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
              <div className="inline-block mt-5 px-5 py-1.5 rounded-full bg-white/10 border border-[#ffdd69]/30 backdrop-blur-sm">
                <p className="text-[#ffdd69] text-[11px] tracking-[0.25em] uppercase font-medium">
                  {days > 0 ? `${days} days to go` : "Today is the day"}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------ PARENTS (SECTION II - BG WHITE) */}
        <section className="relative bg-white text-[#333333] py-24 md:py-36 text-center overflow-hidden">
          <Rose
            size={220}
            tone="#751014"
            opacity={0.04}
            className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Rose
            size={220}
            tone="#751014"
            opacity={0.04}
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
        <section className="relative bg-[#751014] text-white py-24 md:py-36">
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
            size={280}
            tone="#751014"
            opacity={0.03}
            className="absolute -right-24 bottom-10 pointer-events-none"
          />

          <div className="relative z-10 max-w-lg mx-auto px-6">
            <SectionHeader
              numeral="IV"
              chapter="THE DAY"
              title="Schedule of Events"
              theme="dark"
            />

            <Reveal delay={120}>
              <div className="pl-4 sm:pl-0">
                <TimelineRow time="2:30 PM" label="Wedding Assembly" />
                <TimelineRow time="3:00 PM" label="Ceremony" />
                <TimelineRow time="6:00 PM" label="Cocktails" />
                <TimelineRow time="7:00 PM" label="Reception & Dinner" />
                <TimelineRow time="9:00 PM" label="Party" last />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------ ATTIRE (SECTION V - BG #751014) */}
        <section className="relative bg-[#751014] text-white py-24 md:py-36 text-center">
          <div className="relative max-w-3xl mx-auto px-6">
            <SectionHeader
              numeral="V"
              chapter="ATTIRE DRESS CODE"
              title="Formal Attire"
              theme="light"
            />

            <Reveal delay={100}>
              <p className="text-white/80 text-sm md:text-base mb-14 max-w-md mx-auto leading-relaxed font-light">
                We'd love for our photos together to feel warm and cohesive —
                here's a guide for what to wear.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
              <Reveal delay={140}>
                <div className="bg-white rounded-2xl p-8 border border-white/20 shadow-md">
                  <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
                    Gentlemen
                  </p>
                  <p className="font-display text-2xl md:text-3xl text-[#333333]">
                    Suit &amp; Tie
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-white rounded-2xl p-8 border border-white/20 shadow-md">
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
        <section className="relative bg-white px-6 py-28 md:py-36 text-center">
          <div className="relative z-10 max-w-xl mx-auto">
            <Reveal delay={60}>
              <div className="flex justify-center mb-6">
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
              <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#751014]">
                With love, Ryan &amp; Abigail
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}