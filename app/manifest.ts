import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dashboard PWA",
    short_name: "Dashboard",
    description: "Dashboard, A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
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
