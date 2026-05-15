import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "bundui-images.netlify.app" },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
