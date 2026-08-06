// ---------------------------------------------------------------------------
// Countdown display — one ticking stat block (used 4x: days/hrs/min/sec)
// ---------------------------------------------------------------------------
export default function CountdownStat({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[52px] sm:min-w-[64px]">
      <span className="font-inter text-2xl sm:text-3xl md:text-4xl text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#ffdd69] mt-1.5">
        {label}
      </span>
    </div>
  );
}