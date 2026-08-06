import FallingPetals from "./components/fallingPetal";
import Hero from "./sections/hero";
import Parents from "./sections/parents";
import Sponsors from "./sections/sponsors";
import Details from "./sections/details";
import Timeline from "./sections/timeline";
import Attire from "./sections/attire";
import RSVP from "./sections/rsvp";
import Closing from "./sections/closing";

/**
 * Ryan & Abigail — Wedding Invitation
 * -----------------------------------
 * This file only composes sections and holds the global styles that every
 * section relies on (fonts, the .reveal transition, keyframes, etc).
 * Section markup lives in ./sections, shared UI pieces live in ./components,
 * and the countdown logic lives in ./hooks.
 */
export default function WeddingInvite() {
  return (
    <div className="min-h-screen w-full bg-white text-[#333333] overflow-x-hidden antialiased selection:bg-[#751014] selection:text-white relative">
      {/* Falling Rose Petals Animation Layer */}
      <FallingPetals count={25} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+SC:wght@400;600&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');

        .font-mea { font-family: 'Mea Culpa', cursive; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-cjk { font-family: 'Noto Serif SC', serif; }
        .font-body, .font-inter { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }

        .reveal {
          transition-property: opacity, transform;
          transition-duration: 850ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: rgba(117, 16, 20, 0.3);
        }

        .link-underline { position: relative; padding-bottom: 2px; }
        .link-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -1px;
          width: 100%; height: 1px;
          background: currentColor;
          transform: scaleX(0.3);
          transform-origin: left;
          transition: transform 400ms cubic-bezier(0.16,1,0.3,1), opacity 300ms;
          opacity: 0.5;
        }
        .link-underline:hover::after { transform: scaleX(1); opacity: 1; }

        .pulse-dot {
          animation: pulseDot 2.6s ease-out infinite;
        }
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(3); opacity: 0; }
          100% { opacity: 0; }
        }

        /* Falling Petals Animations */
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
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
          .pulse-dot { animation: none !important; }
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