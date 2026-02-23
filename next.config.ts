import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://content.pexels.com/images/canva/canva-branded-ads/en-US/affinity-for-free_1024w.png')]
  }
}

export default nextConfig;
