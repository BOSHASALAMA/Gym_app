import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents:true,
  reactCompiler: true,
    compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
   compress: true,
     images: {
    formats: ['image/webp', 'image/avif'], // modern formats
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

};

export default nextConfig;
