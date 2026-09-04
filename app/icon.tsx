import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#171715",
          color: "#9C7A3C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          fontWeight: 700,
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
