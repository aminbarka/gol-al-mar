import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
    short_name: "Gol al Mar",
    description:
      "Mira el Mundial 2026 en una pantalla gigante en la Playa de Vilanova. Entrada libre.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2EFE4",
    theme_color: "#0050FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
