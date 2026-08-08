export default function TimelineItem({
  time,
  label,
  icon,
  last = false,
}) {
  return (
    <div className="relative flex md:flex-col pb-10 items-center md:flex-1">
      {/* Mobile Vertical Line */}
      {!last && (
        <div className="absolute left-10 top-20 h-full w-[2px] bg-[#751014]/15 md:hidden" />
      )}

      {/* Desktop Horizontal Line */}
      {!last && (
        <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-[#751014]/15" />
      )}

      {/* Timeline Icon */}
      <div className="relative z-10 shrink-0">
        <img
          src={icon}
          alt={label}
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
          draggable={false}
        />
      </div>

      {/* Text */}
      <div className="ml-5 md:ml-0 md:mt-6 text-left md:text-center md:pb-0">
        <p className="text-[#751014] text-xs uppercase tracking-[0.28em] font-semibold">
          {time}
        </p>

        <h4 className="font-display text-lg mt-1 text-[#333333]">
          {label}
        </h4>
      </div>
    </div>
  );
}