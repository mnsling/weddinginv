// ---------------------------------------------------------------------------
// Attire Swatch Component
// ---------------------------------------------------------------------------
export default function Swatch({ hex }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: hex }}
      />
    </div>
  );
}