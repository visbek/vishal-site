// The "vth" mark. Geometry is fixed; colour comes from the surrounding text colour.
export default function Logo({ className, width }: { className?: string; width?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 0 212 120"
      fill="none"
      width={width}
      height={width ? (width * 120) / 212 : undefined}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points="18,41 66,41 42,106"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
      <path
        d="M100 16 V88 Q100 104 116 104 M80 44 H120 M152 16 V104 M152 70 Q152 44 176 44 Q200 44 200 70 V104"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
