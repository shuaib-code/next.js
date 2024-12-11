import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dashboard",
    short_name: "Dashboard",
    description: "Dashboard, A Progressive Web App built with Next.js",
    start_url: "/logo.html",
    display: "standalone",
    background_color: "#1e1e2f",
    theme_color:
      "linear-gradient(to bottom, rgba(0, 191, 255, 0.6), rgba(135, 206, 235, 0.6))",
    icons: [
      {
        src: "/dashboard-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/dashboard-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
