import Reveal from "../components/reveal";
import Rose from "../components/rose";
import SectionHeader from "../components/sectionHeader";
import TimelineItem from "../components/timelineItem";

import assemblyIcon from "../assets/assembly.png";
import ceremonyIcon from "../assets/ceremony.png";
import pictorialIcon from "../assets/pictorial.png";
import cocktailsIcon from "../assets/cocktails.png";
import programIcon from "../assets/program.png";
import dinnerIcon from "../assets/dinner.png";
import partyIcon from "../assets/party.png";

// ---------------------------------------------------------------------------
// Section V — Schedule of Events
// ---------------------------------------------------------------------------
export default function Timeline() {
  return (
    <section className="relative bg-white py-24 md:py-36 overflow-hidden">
      <Rose
        size={200}
        tone="#751014"
        opacity={0.05}
        className="absolute -left-16 top-1/3 pointer-events-none"
      />

      <Rose
        size={280}
        tone="#751014"
        opacity={0.05}
        className="absolute -right-20 bottom-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          numeral="V"
          chapter="THE DAY"
          title="Schedule of Events"
          theme="dark"
        />

        {/* Desktop Timeline */}
        <Reveal delay={120}>
          <div className="hidden md:flex justify-between items-start mt-20">
            <TimelineItem
              time="2:30 PM"
              label="Assembly"
              icon={assemblyIcon}
            />

            <TimelineItem
              time="3:00 PM"
              label="Ceremony"
              icon={ceremonyIcon}
            />

            <TimelineItem
              time="4:00 PM"
              label="Pictorial"
              icon={pictorialIcon}
            />

            <TimelineItem
              time="6:00 PM"
              label="Cocktails"
              icon={cocktailsIcon}
            />

            <TimelineItem
              time="7:00 PM"
              label="Program"
              icon={programIcon}
            />

            <TimelineItem
              time="7:30 PM"
              label="Dinner"
              icon={dinnerIcon}
            />

            <TimelineItem
              time="9:00 PM"
              label="Party"
              icon={partyIcon}
              last
            />
          </div>
        </Reveal>

        {/* Mobile Timeline */}
        <Reveal delay={120}>
          <div className="md:hidden mt-14">
            <TimelineItem
              time="2:30 PM"
              label="Assembly"
              icon={assemblyIcon}
            />

            <TimelineItem
              time="3:00 PM"
              label="Ceremony"
              icon={ceremonyIcon}
            />

            <TimelineItem
              time="4:00 PM"
              label="Pictorial"
              icon={pictorialIcon}
            />

            <TimelineItem
              time="6:00 PM"
              label="Cocktails"
              icon={cocktailsIcon}
            />

            <TimelineItem
              time="7:00 PM"
              label="Program"
              icon={programIcon}
            />

            <TimelineItem
              time="7:30 PM"
              label="Dinner"
              icon={dinnerIcon}
            />

            <TimelineItem
              time="9:00 PM"
              label="Party"
              icon={partyIcon}
              last
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}