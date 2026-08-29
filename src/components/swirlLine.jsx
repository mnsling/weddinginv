export default function SwirlLine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1400 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main sweeping line */}
      <path
        className="swirl-path"
        d="
          M-80 430
          C140 150, 350 160, 470 350
          C560 490, 690 510, 790 370
          C910 200, 1080 130, 1230 300
          C1330 410, 1430 370, 1510 180
        "
      />

      {/* Small loop */}
      <path
        className="swirl-path swirl-path-delay"
        d="
          M470 350
          C420 280, 445 220, 505 235
          C560 250, 550 315, 505 330
          C465 343, 435 305, 455 270
        "
      />

      {/* Small botanical flourish */}
      <path
        className="swirl-path swirl-path-delay-2"
        d="
          M1050 190
          C1025 145, 1040 110, 1075 95
          C1090 135, 1080 170, 1050 190

          M1055 185
          C1090 150, 1130 155, 1150 185
          C1110 200, 1080 200, 1055 185
        "
      />
    </svg>
  );
}