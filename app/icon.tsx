import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// At 32px the strokes are thicker so the mark stays readable.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#3D3BF3",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={20} height={(20 * 120) / 212} viewBox="4 0 212 120" fill="none">
          <polygon points="18,41 66,41 42,106" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="18" strokeLinejoin="round" />
          <path
            d="M100 16 V88 Q100 104 116 104 M80 44 H120 M152 16 V104 M152 70 Q152 44 176 44 Q200 44 200 70 V104"
            stroke="#FFFFFF"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
