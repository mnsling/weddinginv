import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import SectionHeader from "../components/SectionHeader";

// ---------------------------------------------------------------------------
// Section VII — Closing / Footer (bg #751014)
// ---------------------------------------------------------------------------
export default function Closing() {
  return (
    <section className="relative bg-[#751014] px-6 py-12 md:py-16 text-center overflow-hidden">
      <Rose
        size={320}
        tone="#ffffff"
        opacity={0.06}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <Reveal delay={60}>
          <div className="flex justify-center mb-4">
            <Rose size={60} tone="#ffdd69" opacity={0.9} />
          </div>
        </Reveal>

        <SectionHeader
          numeral="VII"
          chapter="SEE YOU SOON"
          title="We Can't Wait"
          theme="light"
        />

        <Reveal delay={120}>
          <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#ffdd69] mb-8">
            With love, Ryan &amp; Abigail
          </p>
        </Reveal>

        {/* Centered Watermark */}
        <Reveal delay={160}>
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
            Website by <span className="font-medium text-white/70">Nicklaus Ling</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}