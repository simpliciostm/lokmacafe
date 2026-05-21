import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Noura Atelier - Experiencia Arabe Contemporanea Premium";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(215,191,141,0.24), transparent 35%), radial-gradient(circle at 80% 85%, rgba(125,92,63,0.28), transparent 40%), #192119",
          color: "#f6f2ea",
          padding: "60px"
        }}
      >
        <p style={{ fontSize: 28, letterSpacing: "0.32em", textTransform: "uppercase", color: "#d7bf8d" }}>
          Noura Atelier
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <h1 style={{ fontSize: 76, lineHeight: 1.05, margin: 0 }}>
            Experiencia arabe contemporanea com alma premium.
          </h1>
          <p style={{ fontSize: 32, lineHeight: 1.3, color: "rgba(246,242,234,0.82)", margin: 0 }}>
            Cafe de origem, especiarias elegantes e hospitalidade em cada detalhe.
          </p>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
