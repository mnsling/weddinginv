import Reveal from "../components/reveal";
import Rose from "../components/rose";
import CornerFloral from "../components/cornerFloral";
import CountdownStat from "../components/countdownStat";
import useCountdown from "../hooks/useCountdown";

// ---------------------------------------------------------------------------
// Section I — Hero (bg #751014)
// ---------------------------------------------------------------------------
export default function Hero() {
  const countdown = useCountdown("2026-10-03T15:00:00");

  return (
    <section className="relative bg-[#751014] text-white py-16 md:py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <CornerFloral tone="#ffdd69" opacity={0.15} className="absolute top-4 left-4" />
      <CornerFloral tone="#ffdd69" opacity={0.15} className="absolute top-4 right-4 rotate-90" />
      <CornerFloral tone="#ffdd69" opacity={0.15} className="absolute bottom-4 left-4 -rotate-90" />
      <CornerFloral tone="#ffdd69" opacity={0.15} className="absolute bottom-4 right-4 rotate-180" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6">
        <Reveal delay={40}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Rose size={26} tone="#ffdd69" opacity={0.6} />
            <p className="text-[#ffdd69] text-[10px] sm:text-xs tracking-[0.45em] uppercase font-medium">
              You Are Invited
            </p>
            <Rose size={26} tone="#ffdd69" opacity={0.6} />
          </div>
        </Reveal>

        <Reveal delay={100} scale>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#ffdd69] mb-4 font-semibold">
              Together with their families
            </p>

            <Rose size={34} tone="#ffdd69" opacity={0.75} className="mb-2" />

            <h1 className="font-script text-white text-5xl sm:text-6xl md:text-8xl leading-[1.25] tracking-wide px-2">
              Ryan &amp; Abigail
            </h1>

            <Rose size={34} tone="#ffdd69" opacity={0.75} className="mt-2" />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="text-lg md:text-xl tracking-[0.15em] text-[#ffdd69] font-display italic mb-2">
            to witness the beginning of forever
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 font-semibold mt-2">
            October 3, 2026 · Saturday
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5 px-6 py-4 rounded-2xl bg-white/10 border border-[#ffdd69]/30 backdrop-blur-sm">
            {countdown.done ? (
              <p className="text-[#ffdd69] text-xs tracking-[0.25em] uppercase font-medium px-4">
                Today is the day
              </p>
            ) : (
              <>
                <CountdownStat value={countdown.days} label="Days" />
                <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                <CountdownStat value={countdown.hours} label="Hrs" />
                <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                <CountdownStat value={countdown.minutes} label="Min" />
                <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">:</span>
                <CountdownStat value={countdown.seconds} label="Sec" />
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}