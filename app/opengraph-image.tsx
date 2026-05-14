import { ImageResponse } from "next/og";

export const alt = "Gol al Mar · El Mundial en la Playa de Vilanova 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F2EFE4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "60px 72px",
        }}
      >
        {/* Top badge row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              background: "#0050FF",
              color: "#F2EFE4",
              padding: "8px 20px",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "4px",
              fontFamily: "sans-serif",
            }}
          >
            VILANOVA 2026
          </div>
          <div
            style={{
              color: "rgba(5,5,5,0.35)",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "4px",
              fontFamily: "sans-serif",
            }}
          >
            ENTRADA LIBRE · PLAYA DE VILANOVA
          </div>
        </div>

        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "144px",
              fontWeight: 900,
              color: "#050505",
              lineHeight: 0.88,
              fontFamily: "Impact, Arial Black, sans-serif",
              letterSpacing: "-3px",
            }}
          >
            WORLD CUP
          </div>
          <div
            style={{
              fontSize: "144px",
              fontWeight: 900,
              color: "#0050FF",
              lineHeight: 0.88,
              fontFamily: "Impact, Arial Black, sans-serif",
              letterSpacing: "-3px",
            }}
          >
            EN LA PLAYA
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "rgba(5,5,5,0.3)",
              marginTop: "20px",
              fontFamily: "Impact, Arial Black, sans-serif",
              letterSpacing: "8px",
            }}
          >
            GOL AL MAR
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1.5px solid rgba(5,5,5,0.12)",
            paddingTop: "20px",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              color: "rgba(5,5,5,0.45)",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            JUNIO — JULIO 2026 · 21:00H
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "rgba(5,5,5,0.45)",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            64 PARTIDOS · ⚽ GRATIS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
