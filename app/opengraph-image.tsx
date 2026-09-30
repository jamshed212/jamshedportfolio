import { ImageResponse } from "next/og";

export const alt = "Jamshed Khan - Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            marginBottom: 24,
            color: "#a1a1aa",
          }}
        >
          Jamshed Khan
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Full Stack Developer
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#d4d4d8",
          }}
        >
          React • Next.js • WordPress • Shopify • APIs • AI Automation
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#71717a",
            marginTop: 45,
          }}
        >
          jamshedportfolio.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}