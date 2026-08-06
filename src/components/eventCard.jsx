import Rose from "./rose";

// ---------------------------------------------------------------------------
// Event Card Component
// ---------------------------------------------------------------------------
export default function EventCard({ label, title, address, time, mapQuery }) {
  return (
    <div className="event-card relative bg-white rounded-2xl border border-[#751014]/15 p-8 pt-14 text-center w-full max-w-sm mx-auto shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border border-[#751014]/20 shadow-sm flex items-center justify-center bg-white">
        <div className="w-14 h-14 rounded-full border border-[#ffdd69] flex items-center justify-center">
          <Rose size={30} tone="#751014" opacity={0.95} />
        </div>
      </div>
      <p className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#751014] mb-2">
        {label}
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-[#751014] mb-3">
        {title}
      </h3>
      <p className="text-[#333333]/80 text-sm leading-relaxed mb-1">{address}</p>
      <p className="text-[#333333] text-sm font-semibold mb-6">{time}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          mapQuery
        )}`}
        target="_blank"
        rel="noreferrer"
        className="link-underline inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] font-medium uppercase text-[#751014]"
      >
        <span>View directions</span>
        <span className="text-xs">→</span>
      </a>
    </div>
  );
}