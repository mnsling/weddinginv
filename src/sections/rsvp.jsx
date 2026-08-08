import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";

export default function RSVP() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-18 md:pb-32  text-[#333333]">
      {/* Decorative Flowers */}
      <Rose
        size={220}
        tone="#751014"
        opacity={0.05}
        className="absolute -top-16 -right-16 pointer-events-none"
      />

      <Rose
        size={200}
        tone="#751014"
        opacity={0.04}
        className="absolute -bottom-16 -left-16 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <SectionHeader
          numeral="VII"
          chapter="KINDLY RESPOND"
          title="RSVP"
          theme="dark"
        />

        <Reveal delay={80}>
          <div className="mt-12 text-center">
            {/* Reserved Seats */}
            <div className="flex items-end justify-center gap-2 mb-8">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#751014]">
                We Have Reserved
              </p>

              <div className="w-16 md:w-12 border-b border-[#751014]" />

              <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#751014]">
                Seat(s) For You
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] leading-5 text-[#751014]">
                Your presence means so much to us, and we would truly love to celebrate this special day with everyone we hold dear.
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] leading-5 text-[#751014]">
                As our venue has limited seating, the favor of your reply is requested on or before <span className="font-semibold">September 07, 2026.</span>
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] leading-5 text-[#751014]">
                Thank you for your kind understanding, we can't wait to celebrate with you!
              </p>
            </div>

            {/* Contact */}
            <p className="mt-6 text-[11px] md:text-xs uppercase tracking-[0.22em] leading-5 text-[#751014]">
              Kindly confirm your attendance with {" "}
              <span className="font-semibold">
                VM Weddings
              </span>{" "}
              (0956 756 0013) or contact the couples directly.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}