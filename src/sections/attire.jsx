import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";
import Swatch from "../components/swatch";

import bgImage from "../assets/bg.png";
import Suit from "../assets/suit.png";
import Gown from "../assets/gown.png";

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

export default function Attire() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 md:py-32">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Very light white overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Top & Bottom Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0) 15%,
              rgba(255,255,255,0) 82%,
              rgba(255,255,255,1) 100%
            )
          `,
        }}
      />

      {/* Decorative Roses */}
      <Rose
        size={130}
        tone="#751014"
        opacity={0.10}
        className="absolute top-6 left-2 sm:left-8 pointer-events-none"
      />

      <Rose
        size={150}
        tone="#751014"
        opacity={0.08}
        className="absolute bottom-6 right-2 sm:right-8 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <SectionHeader
          numeral="VI"
          chapter="ATTIRE DRESS CODE"
          title="Formal Attire"
          theme="dark"
        />

        <Reveal delay={100}>
          <p className="text-[#4a3f3f] text-sm md:text-base mb-14 max-w-md mx-auto leading-relaxed font-normal">
            We'd love for our photos together to feel warm and cohesive.
            Here's a guide for what to wear.
          </p>
        </Reveal>

        {/* ============================= */}
        {/* ATTIRE */}
        {/* ============================= */}

        <div className="flex gap-10 md:gap-16 mb-16 items-center justify-center">

          {/* Gentlemen */}
          <div className="w-full max-w-[300px]">
            <Reveal delay={140}>

              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-[#751014] mb-4">
                Gentlemen
              </p>

              <div className="w-full h-[280px] md:h-[340px] flex items-center justify-center">
                <img
                  src={Suit}
                  alt="Formal Suit"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-display text-2xl md:text-3xl text-[#751014] mt-3">
                Suit & Tie
              </p>

              <p className="text-[10px] md:text-[11px] text-transparent font-semibold tracking-wider uppercase mt-2">
                Strictly No Black or White
              </p>

            </Reveal>
          </div>

          {/* Ladies */}
          <div className="w-full max-w-[300px]">
            <Reveal delay={200}>

              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-[#751014] mb-4">
                Ladies
              </p>

              <div className="w-full h-[280px] md:h-[340px] flex items-center justify-center">
                <img
                  src={Gown}
                  alt="Long Gown"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-display text-2xl md:text-3xl text-[#751014] mt-3">
                Long Gown
              </p>

              <p className="text-[10px] md:text-[11px] text-[#4a3f3f] font-semibold tracking-wider uppercase mt-2">
                Strictly No Black or White
              </p>

            </Reveal>
          </div>

        </div>

        {/* ============================= */}
        {/* SUGGESTED PALETTE */}
        {/* ============================= */}

        <Reveal delay={240}>
          <p className="text-[10px] md:text-[12px] tracking-[0.35em] uppercase font-bold text-[#751014] mb-8">
            Suggested Palette
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="flex flex-col items-center gap-4 md:gap-5">

            {/* First row — 5 colors */}
            <div className="flex justify-center gap-4 md:gap-6">
              {palette.slice(0, 6).map((hex) => (
                <Swatch key={hex} hex={hex} />
              ))}
            </div>

            {/* Second row — 4 colors */}
            <div className="flex justify-center gap-4 md:gap-6">
              {palette.slice(6).map((hex) => (
                <Swatch key={hex} hex={hex} />
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}