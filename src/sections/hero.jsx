import { useEffect, useState } from "react";

import Reveal from "../components/reveal";
import Rose from "../components/rose";
import CornerFloral from "../components/cornerFloral";
import CountdownStat from "../components/countdownStat";
import useCountdown from "../hooks/useCountdown";
import SwirlLine from "../components/swirlLine";
import monogram from "../assets/monogram.png";

// ---------------------------------------------------------------------------
// Section I — Hero
// ---------------------------------------------------------------------------

export default function Hero() {
  const countdown = useCountdown("2026-10-03T14:30:00");

  const [showIntro, setShowIntro] = useState(true);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    // Start the exit transition slightly before removing the intro
    const fadeTimer = setTimeout(() => {
      setHideIntro(true);
    }, 4400);

    const removeTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* ====================================================== */}
      {/* INTRO / LANDING SCREEN */}
      {/* ====================================================== */}

      {showIntro && (
        <div
          className={`
      fixed inset-0 z-[100]
      flex items-center justify-center
      bg-[#f7ecd7]
      overflow-hidden
      transition-all duration-[800ms] ease-in-out
      ${hideIntro
              ? "opacity-0 scale-[1.04]"
              : "opacity-100 scale-100"
            }
    `}
        >

          {/* Soft background glow */}
          <div
            className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(247,236,215,1)_70%)]
      "
          />

          {/* ============================= */}
          {/* SWIRLING CALLIGRAPHIC LINE */}
          {/* ============================= */}

          <SwirlLine
            className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[130%]
        md:w-[110%]
        h-auto
        pointer-events-none
        z-[1]
      "
          />

          {/* Corner Florals */}

          <CornerFloral
            tone="#b99242"
            opacity={0.18}
            className="absolute top-5 left-5"
          />

          <CornerFloral
            tone="#b99242"
            opacity={0.18}
            className="absolute top-5 right-5 rotate-90"
          />

          <CornerFloral
            tone="#b99242"
            opacity={0.18}
            className="absolute bottom-5 left-5 -rotate-90"
          />

          <CornerFloral
            tone="#b99242"
            opacity={0.18}
            className="absolute bottom-5 right-5 rotate-180"
          />

          {/* ============================= */}
          {/* MONOGRAM */}
          {/* ============================= */}

          <div className="relative z-10 flex flex-col items-center text-center px-6">

            <div className="intro-monogram">
              <img
                src={monogram}
                alt="Ryan and Abigail Monogram"
                className="
            w-56
            sm:w-64
            md:w-72
            lg:w-80
            h-auto
            object-contain
          "
              />
            </div>

            <div className="intro-line mt-7 mb-5" />

            <p
              className="
          intro-text
          text-[#3f2f29]
          text-[11px]
          md:text-sm
          tracking-[0.45em]
          uppercase
          font-medium
        "
            >
              Ryan & Abigail
            </p>

            <p
              className="
          intro-date
          text-[#751014]
          text-[10px]
          md:text-xs
          tracking-[0.35em]
          mt-3
        "
            >
              10 . 03 . 26
            </p>

          </div>
        </div>
      )}

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section
        className={`
          relative
          bg-[#751014]
          text-white
          py-16
          md:py-24
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden

          transition-all
          duration-[1200ms]
          ease-out

          ${showIntro && !hideIntro
            ? "opacity-0 scale-[1.03]"
            : "opacity-100 scale-100"
          }
        `}
      >
        {/* Subtle glow */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            bg-[radial-gradient(circle_at_center,rgba(255,221,105,0.05),transparent_65%)]
          "
        />

        {/* Corner Florals */}
        <CornerFloral
          tone="#ffdd69"
          opacity={0.15}
          className="absolute top-4 left-4"
        />

        <CornerFloral
          tone="#ffdd69"
          opacity={0.15}
          className="absolute top-4 right-4 rotate-90"
        />

        <CornerFloral
          tone="#ffdd69"
          opacity={0.15}
          className="absolute bottom-4 left-4 -rotate-90"
        />

        <CornerFloral
          tone="#ffdd69"
          opacity={0.15}
          className="absolute bottom-4 right-4 rotate-180"
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6">

          <Reveal delay={40}>
            <div className="flex items-center justify-center gap-3 mb-3">

              <Rose
                size={26}
                tone="#ffdd69"
                opacity={0.6}
              />

              <p className="text-[#ffdd69] text-[10px] sm:text-xs tracking-[0.45em] uppercase font-medium">
                You Are Invited
              </p>

              <Rose
                size={26}
                tone="#ffdd69"
                opacity={0.6}
              />

            </div>
          </Reveal>

          <Reveal delay={100} scale>
            <div className="flex flex-col items-center max-w-2xl mx-auto">

              <p className="text-[10px] tracking-[0.35em] uppercase text-[#ffdd69] mb-4 font-semibold">
                Together with their families
              </p>

              <Rose
                size={34}
                tone="#ffdd69"
                opacity={0.75}
                className="mb-2"
              />

              <div className="flex flex-col items-center">

                <h1 className="font-mea text-white text-6xl md:text-8xl leading-[1.05] tracking-wide">
                  Ryan Benedict
                </h1>

                <span className="font-script text-[#ffdd69] text-5xl md:text-7xl leading-none my-1">
                  &
                </span>

                <h1 className="font-mea text-white text-6xl md:text-8xl leading-[1.05] tracking-wide">
                  Abigail
                </h1>

              </div>

              <Rose
                size={34}
                tone="#ffdd69"
                opacity={0.75}
                className="mt-2"
              />

            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-lg md:text-xl tracking-[0.15em] text-[#ffdd69] font-display italic mb-2">
              to witness the beginning of forever
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="text-xs md:text-lg tracking-[0.3em] uppercase text-white/90 font-light mt-2">
              October 3, 2026
              <br />
              2:30 PM • Saturday
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                sm:gap-5
                px-6
                py-4
                rounded-2xl
                bg-white/10
                border
                border-[#ffdd69]/30
                backdrop-blur-sm
              "
            >
              {countdown.done ? (
                <p className="text-[#ffdd69] text-xs tracking-[0.25em] uppercase font-medium px-4">
                  Today is the day
                </p>
              ) : (
                <>
                  <CountdownStat
                    value={countdown.days}
                    label="Days"
                  />

                  <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">
                    :
                  </span>

                  <CountdownStat
                    value={countdown.hours}
                    label="Hrs"
                  />

                  <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">
                    :
                  </span>

                  <CountdownStat
                    value={countdown.minutes}
                    label="Min"
                  />

                  <span className="text-[#ffdd69]/40 font-display text-2xl -mt-3">
                    :
                  </span>

                  <CountdownStat
                    value={countdown.seconds}
                    label="Sec"
                  />
                </>
              )}
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}