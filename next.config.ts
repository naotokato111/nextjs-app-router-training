import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  experimental: {
    dynamicIO: true,
    taint: true,
    // typedRoutes: true,
  },
  async redirects() {
    return [
      {
        // fetching
        source: "/examples/caching-data",
        destination: "/examples/data-cache/fetch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
