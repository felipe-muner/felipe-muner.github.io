import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;
