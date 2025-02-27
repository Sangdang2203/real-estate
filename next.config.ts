import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-image-host.com",
        port: "",
        pathname: "/path/to/images/**",
      },
    ],
  },
};

export default nextConfig;
