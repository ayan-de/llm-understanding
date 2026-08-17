import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 12,
          background: "linear-gradient(135deg, #7c5cbf 0%, #c4638a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 700,
          fontFamily: "system-ui",
          borderRadius: 6,
          letterSpacing: "-0.5px",
        }}
      >
        LLM
      </div>
    ),
    { ...size }
  );
}
