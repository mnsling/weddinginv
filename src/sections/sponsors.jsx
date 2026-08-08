import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";

export default function Sponsors() {
  return (
    <section className="relative bg-white text-[#333333] py-24 md:py-36 overflow-hidden">
      <Rose
        size={220}
        tone="#751014"
        opacity={0.05}
        className="absolute -top-16 -left-16 pointer-events-none"
      />

      <Rose
        size={220}
        tone="#751014"
        opacity={0.05}
        className="absolute -bottom-16 -right-16 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          numeral="III"
          chapter="WITH LOVE & GRATITUDE"
          title="Wedding Entourage"
          theme="dark"
        />

        {/* Principal Sponsors */}
        <Reveal delay={80}>
          <div className="mb-20">
            <h3 className="text-[#751014] uppercase tracking-[0.35em] text-lg font-semibold text-center mb-8">
              Principal Sponsors
            </h3>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="space-y-3 font-display text-base md:text-lg">
                <p>Mr. Jose Uy</p>
                <p>Mr. Jose Go</p>
                <p>Mr. Philip Ling</p>
                <p>Mr. Orlando Juan</p>
              </div>

              <div className="space-y-3 font-display text-base md:text-lg">
                <p>Mrs. Erlie Uy</p>
                <p>Mrs. Roselyn Wu</p>
                <p>Mrs. Lesly Ling</p>
                <p>Mrs. Suraida Juan</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Best Man & Matron of Honor */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-8 md:gap-14 mb-20 text-center">
            <div>
              <h3 className="uppercase tracking-[0.35em] text-[#751014] font-semibold mb-5 text-sm md:text-base">
                Best Man
              </h3>

              <p className="font-display text-base md:text-lg">
                Mr. John Elijah Ramos
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.35em] text-[#751014] font-semibold mb-5 text-sm md:text-base">
                Matron of Honor
              </h3>

              <p className="font-display text-base md:text-lg">
                Mrs. Christine Anne Ramos
              </p>
            </div>
          </div>
        </Reveal>

        {/* Groomsmen & Bridesmaids */}
        <Reveal delay={160}>
          <div className="grid grid-cols-2 gap-8 md:gap-16 mb-20 text-center">
            <div>
              <h3 className="uppercase tracking-[0.35em] text-[#751014] font-semibold mb-6 text-sm md:text-base">
                Groomsmen
              </h3>

              <div className="space-y-2 font-display text-sm md:text-lg">
                <p>Mr. Mike Nicklaus Ling</p>
                <p>Mr. Rich Adrian Huang</p>
                <p>Mr. Miguel Ivan Colina</p>
                <p>Mr. Alraddadi Usman</p>
                <p>Mr. Christian Dhon Abejuela</p>
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.35em] text-[#751014] font-semibold mb-6 text-sm md:text-base">
                Bridesmaids
              </h3>

              <div className="space-y-2 font-display text-sm md:text-lg">
                <p>Ms. Kleah Hernaez</p>
                <p>Ms. Kateleen Marie Hatico</p>
                <p>Ms. Donita Jane Abear</p>
                <p>Ms. Jillian Corrinn Sevilla</p>
                <p>Ms. Shiela Mae Sheng</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Sponsors */}
        <Reveal delay={220}>
          <div className="mb-20">
            <h3 className="text-[#751014] uppercase tracking-[0.35em] text-lg font-semibold text-center mb-10">
              Secondary Sponsors
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center">
              <div>
                <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                  Candle
                </h4>

                <div className="space-y-2 font-display text-sm md:text-lg">
                  <p>Mr. Kurt Cañedo</p>
                  <p>Ms. Heidi Lynn Ling</p>
                </div>
              </div>

              <div>
                <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                  Veil
                </h4>

                <div className="space-y-2 font-display text-sm md:text-lg">
                  <p>Mr. Kyle Kyson Tay</p>
                  <p>Mrs. Sarah Tay</p>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex justify-center">
                <div>
                  <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                    Cord
                  </h4>

                  <div className="space-y-2 font-display text-sm md:text-lg">
                    <p>Mr. Anthony Stewart Ang</p>
                    <p>Mrs. Ruzette Tiffany Ang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bearers */}
        <Reveal delay={260}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center mb-20">
            <div>
              <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                Ring Bearer
              </h4>

              <p className="font-display text-sm md:text-lg">
                Andrei Richmond Ang
              </p>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                Coin Bearer
              </h4>

              <p className="font-display text-sm md:text-lg">
                Liamson Tay
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 flex justify-center">
              <div>
                <h4 className="uppercase tracking-[0.3em] text-[#751014] mb-5 text-sm md:text-base">
                  Bible Bearer
                </h4>

                <p className="font-display text-sm md:text-lg">
                  Rivers Sy
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Flower Girls */}
        <Reveal delay={300}>
          <div className="text-center">
            <h3 className="uppercase tracking-[0.3em] font-inter text-[#751014] mb-5 text-sm md:text-base">
              Flower Girls
            </h3>

            <div className="space-y-2 font-display text-sm md:text-lg">
              <p>Sofia Therese Ang</p>
              <p>Ember Kiera Cañedo</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}