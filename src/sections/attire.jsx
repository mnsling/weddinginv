import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";
import Swatch from "../components/swatch";
import bgImage from "../assets/bg.jpg";
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
    <section className="relative min-h-screen overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top & Bottom Fade */}
      <div
        className="absolute inset-0"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <SectionHeader
          numeral="VI"
          chapter="ATTIRE DRESS CODE"
          title="Formal Attire"
          theme="light"
        />

        <Reveal delay={100}>
          <p className="text-white/90 text-sm md:text-base mb-14 max-w-md mx-auto leading-relaxed font-light">
            We'd love for our photos together to feel warm and cohesive.
            Here's a guide for what to wear.
          </p>
        </Reveal>

        {/* Attire Cards */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-16 items-stretch justify-center">
          
          {/* Gentlemen */}
          <div className="flex-1">
            <Reveal delay={140} className="h-full">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl h-full flex flex-col justify-center items-center">
                <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
                  Gentlemen
                </p>

                <div className="w-full h-[420px] flex items-center justify-center">
                  <img
                    src={Suit}
                    alt="Formal Suit"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="font-display text-2xl md:text-3xl text-[#333]">
                  Suit & Tie
                </p>

                <p className="text-[11px] text-[#ffffff] tracking-wider uppercase mt-2">
                  Strictly No Black or White
                </p>
              </div>
            </Reveal>
          </div>

          {/* Ladies */}
          <div className="flex-1">
            <Reveal delay={200} className="h-full">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl h-full flex flex-col justify-center items-center">
                <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
                  Ladies
                </p>

                <div className="w-full h-[420px] flex items-center justify-center">
                  <img
                    src={Gown}
                    alt="Long Gown"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="font-display text-2xl md:text-3xl text-[#333]">
                  Long Gown
                </p>

                <p className="text-[11px] text-[#751014] tracking-wider uppercase mt-2">
                  Strictly No Black or White
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Suggested Palette */}
        <Reveal delay={240}>
          <p className="text-[10px] md:text-[12px] tracking-[0.35em] uppercase font-semibold text-[#ffdd69] mb-8">
            Suggested Palette
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {palette.map((hex) => (
              <Swatch key={hex} hex={hex} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}