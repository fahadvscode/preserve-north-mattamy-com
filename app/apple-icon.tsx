import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 64,
          fontWeight: 700,
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        PN
      </div>
    ),
    { ...size },
  );
}
