import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import SectionHeader from "../components/SectionHeader";
import EventCard from "../components/EventCard";

// ---------------------------------------------------------------------------
// Section III — Details (bg #751014)
// ---------------------------------------------------------------------------
export default function Details() {
  return (
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
  );
}