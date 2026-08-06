import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";
import TimelineItem from "../components/timelineItem";

// ---------------------------------------------------------------------------
// Section IV — Timeline / Schedule of Events (bg white)
// ---------------------------------------------------------------------------
export default function Timeline() {
  return (
    <section className="relative bg-white text-[#333333] py-24 md:py-36 overflow-hidden">
      <Rose
        size={200}
        tone="#751014"
        opacity={0.03}
        className="absolute -left-20 -top-14 pointer-events-none"
      />
      <Rose
        size={280}
        tone="#751014"
        opacity={0.03}
        className="absolute -right-24 bottom-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-lg md:max-w-5xl mx-auto px-6">
        <SectionHeader
          numeral="V"
          chapter="THE DAY"
          title="Schedule of Events"
          theme="dark"
        />

        <Reveal delay={120}>
          <div className="pl-4 sm:pl-0 md:flex md:items-start md:justify-between">
            <TimelineItem time="2:30 PM" label="Assembly" />
            <TimelineItem time="3:00 PM" label="Ceremony" />
            <TimelineItem time="4:00 PM" label="Pictorials" />
            <TimelineItem time="6:00 PM" label="Cocktails" />
            <TimelineItem time="7:00 PM" label="Program" />
            <TimelineItem time="7:30 PM" label="Dinner" />
            <TimelineItem time="9:00 PM" label="Party" last />
          </div>
        </Reveal>
      </div>
    </section>
  );
}