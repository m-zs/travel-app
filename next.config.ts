import type { NextConfig } from "next";

const isDockerDev = process.env.WATCHPACK_POLLING === "true";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  ...(isDockerDev && {
    watchOptions: {
      pollIntervalMs: 1000,
    },
  }),
};

export default nextConfig;
