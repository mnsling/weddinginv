import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import SectionHeader from "../components/SectionHeader";

// ---------------------------------------------------------------------------
// Section VI — Closing (bg white)
// ---------------------------------------------------------------------------
export default function Closing() {
  return (
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
  );
}