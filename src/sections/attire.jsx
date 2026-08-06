import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import SectionHeader from "../components/SectionHeader";
import Swatch from "../components/Swatch";
import bgImage from "../assets/bg.jpg";

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

// ---------------------------------------------------------------------------
// Section V — Attire / Dress Code (bg image, fades to white top & bottom)
// ---------------------------------------------------------------------------
export default function Attire() {
  return (
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
  );
}