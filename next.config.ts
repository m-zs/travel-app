import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isDockerDev = process.env.DOCKER_DEV === "true";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    root: projectRoot,
  },
  ...(isDockerDev && {
    watchOptions: {
      pollIntervalMs: 1000,
    },
  }),
};

export default nextConfig;
