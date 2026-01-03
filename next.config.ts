import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents:true,
  reactCompiler: true,
    compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
 
};

export default nextConfig;
