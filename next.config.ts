import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bughunt-demo-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
