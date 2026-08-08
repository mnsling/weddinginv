import { useEffect, useRef, useState } from "react";

import FallingPetals from "./components/fallingPetal";
import Hero from "./sections/hero";
import Parents from "./sections/parents";
import Sponsors from "./sections/sponsors";
import Details from "./sections/details";
import Timeline from "./sections/timeline";
import Attire from "./sections/attire";
import RSVP from "./sections/rsvp";
import Closing from "./sections/closing";

import backgroundMusic from "./assets/audio.mp3";

/**
 * Ryan & Abigail — Wedding Invitation
 *
 * This file only composes sections and holds the global styles that every
 * section relies on.
 */

export default function WeddingInvite() {
  const audioRef = useRef(null);

  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    // Try autoplay immediately
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log(
          "Autoplay was blocked. Music will start after user interaction."
        );
      }
    };

    tryAutoplay();

    // If autoplay is blocked, start after first interaction
    const startMusic = async () => {
      if (!audio.paused) return;

      try {
        await audio.play();
        setMusicPlaying(true);

        // Remove listeners after successful playback
        window.removeEventListener("click", startMusic);
        window.removeEventListener("touchstart", startMusic);
        window.removeEventListener("keydown", startMusic);
        window.removeEventListener("scroll", startMusic);
      } catch (error) {
        console.log("Audio still blocked:", error);
      }
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("keydown", startMusic);
    window.addEventListener("scroll", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
      window.removeEventListener("scroll", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log("Could not play audio:", error);
      }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <div className="relative overflow-hidden">

      {/* Background Music */}
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
        playsInline
      />

      {/* Falling Rose Petals Animation Layer */}
      <FallingPetals />

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        aria-label={musicPlaying ? "Pause music" : "Play music"}
        className="
          fixed
          bottom-5
          right-5
          z-[100]
          w-11
          h-11
          rounded-full
          bg-white/80
          backdrop-blur-md
          shadow-lg
          flex
          items-center
          justify-center
          text-[#751014]
          hover:bg-white
          transition-all
          duration-300
        "
      >
        {musicPlaying ? (
          /* Sound On */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        ) : (
          /* Sound Off */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+SC:wght@400;600&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');

        .font-mea {
          font-family: 'Mea Culpa', cursive;
        }

        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-script {
          font-family: 'Pinyon Script', cursive;
        }

        .font-cjk {
          font-family: 'Noto Serif SC', serif;
        }

        .font-body,
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        .reveal {
          transition-property: opacity, transform;
          transition-duration: 850ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: rgba(117, 16, 20, 0.3);
        }

        .link-underline {
          position: relative;
          padding-bottom: 2px;
        }

        .link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0.3);
          transform-origin: left;
          transition:
            transform 400ms cubic-bezier(0.16,1,0.3,1),
            opacity 300ms;
          opacity: 0.5;
        }

        .link-underline:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .pulse-dot {
          animation: pulseDot 2.6s ease-out infinite;
        }

        @keyframes pulseDot {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }

          70% {
            transform: scale(3);
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        /* Falling Petals */
        @keyframes fall {
          0% {
            top: -10%;
          }

          100% {
            top: 108%;
          }
        }

        @keyframes sway {
          0% {
            transform: translateX(0px) rotate(0deg);
          }

          50% {
            transform: translateX(45px) rotate(180deg);
          }

          100% {
            transform: translateX(-35px) rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .pulse-dot {
            animation: none !important;
          }
        }
      `}</style>

      <div className="font-body">
        <Hero />
        <Parents />
        <Sponsors />
        <Details />
        <Timeline />
        <Attire />
        <RSVP />
        <Closing />
      </div>
    </div>
  );
}