import { ImageResponse } from "next/og";

export const alt = "Preserve North by Mattamy Homes — Oakville";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #171715 0%, #2B2B28 58%, #3a372f 100%)",
          padding: "64px",
          color: "#F5F2EC",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#9C7A3C",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Pre-construction · Oakville, Ontario · Builder Spotlight
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Preserve North by Mattamy Homes
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#9C7A3C",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#EAE4D8",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Phase 4 of The Preserve — townhomes and detached homes near Dundas Street West and Sixth Line.
        </div>
      </div>
    ),
    { ...size },
  );
}
