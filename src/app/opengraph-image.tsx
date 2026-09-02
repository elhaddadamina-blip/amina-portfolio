import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Amina EL HADDAD — AI & Software Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #800020, #5c0018)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 30,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#F5F5DC",
            fontSize: 60,
            fontWeight: "bold",
            marginBottom: 40,
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          A
        </div>
        <div
          style={{
            color: "#F5F5DC",
            fontSize: 64,
            fontWeight: "bold",
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Amina EL HADDAD
        </div>
        <div
          style={{
            color: "rgba(245, 245, 245, 0.8)",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          AI & Software Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
