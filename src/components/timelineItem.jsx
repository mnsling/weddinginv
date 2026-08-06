// ---------------------------------------------------------------------------
// Responsive Timeline Item Component
// ---------------------------------------------------------------------------
export default function TimelineItem({ time, label, last = false }) {
  return (
    <>
      {/* MOBILE LAYOUT: Vertical (hidden on md screens and above) */}
      <div className="flex gap-6 group md:hidden">
        <div className="flex flex-col items-center">
          <div className="relative w-3 h-3 my-1">
            <div className="absolute inset-0 rounded-full bg-[#751014] pulse-dot" />
            <div className="absolute inset-0 rounded-full bg-[#751014]" />
          </div>
          {!last && <div className="w-px flex-1 bg-[#751014]/20 my-1" />}
        </div>
        <div className="pb-9 transition-transform duration-300 group-hover:translate-x-1">
          <p className="text-[#751014] text-[11px] font-semibold tracking-[0.25em] uppercase mb-1">
            {time}
          </p>
          <p className="font-display text-2xl text-[#333333] font-medium tracking-wide">
            {label}
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT: Horizontal Step (hidden below md screens) */}
      <div className="hidden md:flex flex-1 flex-col items-center text-center group relative">
        {/* Step Marker & Connecting Line */}
        <div className="relative w-full flex items-center justify-center mb-6">
          <div className="relative z-10 w-4 h-4 rounded-full bg-[#751014] flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="absolute inset-0 rounded-full bg-[#751014] pulse-dot" />
          </div>
          {!last && (
            <div className="absolute left-1/2 w-full h-[2px] bg-[#751014]/20 top-1/2 -translate-y-1/2 z-0" />
          )}
        </div>

        {/* Text Details */}
        <div className="transition-transform duration-300 group-hover:-translate-y-1 px-2">
          <p className="text-[#751014] text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            {time}
          </p>
          <p className="font-display text-xl lg:text-2xl text-[#333333] font-medium tracking-wide leading-tight">
            {label}
          </p>
        </div>
      </div>
    </>
  );
}