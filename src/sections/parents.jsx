import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import SectionHeader from "../components/SectionHeader";

// ---------------------------------------------------------------------------
// Section II — Parents (bg white)
// ---------------------------------------------------------------------------
export default function Parents() {
  return (
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
  );
}