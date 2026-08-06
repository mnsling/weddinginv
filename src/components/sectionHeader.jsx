import Reveal from "./reveal";

// ---------------------------------------------------------------------------
// Standard Section Header
// ---------------------------------------------------------------------------
export default function SectionHeader({ numeral, chapter, title, theme = "dark" }) {
  const isDarkBg = theme === "light";

  return (
    <div className="flex flex-col items-center text-center mb-10 md:mb-14">
      {numeral && (
        <Reveal>
          <p
            className={`font-display italic text-base md:text-lg font-light mb-1 ${
              isDarkBg ? "text-white/80" : "text-[#751014]/80"
            }`}
          >
            {numeral}
          </p>
        </Reveal>
      )}

      <Reveal delay={40}>
        <div
          className={`w-px h-5 md:h-7 mb-3 ${
            isDarkBg ? "bg-white/30" : "bg-[#751014]/30"
          }`}
        />
      </Reveal>

      {chapter && (
        <Reveal delay={80}>
          <p
            className={`text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-medium mb-2 ${
              isDarkBg ? "text-[#ffdd69]" : "text-[#751014]"
            }`}
          >
            {chapter}
          </p>
        </Reveal>
      )}

      <Reveal delay={chapter ? 120 : 80}>
        <h2
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide ${
            isDarkBg ? "text-white" : "text-[#751014]"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      <Reveal delay={chapter ? 160 : 120}>
        <div className="flex items-center gap-3 mt-4 opacity-40">
          <span
            className={`h-px w-8 ${isDarkBg ? "bg-white" : "bg-[#751014]"}`}
          />
          <span
            className={`text-[8px] ${isDarkBg ? "text-white" : "text-[#751014]"}`}
          >
            ✦
          </span>
          <span
            className={`h-px w-8 ${isDarkBg ? "bg-white" : "bg-[#751014]"}`}
          />
        </div>
      </Reveal>
    </div>
  );
}