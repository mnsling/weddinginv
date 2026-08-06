import Reveal from "../components/Reveal";
import Rose from "../components/Rose";
import CornerFloral from "../components/CornerFloral";
import CountdownStat from "../components/CountdownStat";
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
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center my-4">
            <div className="absolute inset-0 rounded-full border border-white/20 shadow-lg" />
            <div className="absolute inset-3 rounded-full border border-[#ffdd69]/50" />

            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#751014] px-3 rounded-full">
              <Rose size={50} tone="#ffdd69" opacity={0.9} />
            </div>
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#751014] px-3 rounded-full">
              <Rose size={50} tone="#ffdd69" opacity={0.9} />
            </div>

            <div className="text-center px-6 py-2">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#ffdd69] mb-3 font-semibold">
                Together with their families
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-white font-normal tracking-tight">
                Ryan <br />
                <span className="text-3xl sm:text-5xl md:text-6xl italic font-light text-[#ffdd69]">
                  &amp;
                </span>
                <br /> Abigail
              </h1>
            </div>
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