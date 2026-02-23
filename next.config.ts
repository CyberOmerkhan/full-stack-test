import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
};

module.exports = {
  images: {
    domains: [
      'content.pexels.com',
      'images.pexels.com',
    ]
  }
}

export default nextConfig;
