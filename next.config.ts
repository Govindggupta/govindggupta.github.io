import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: isGitHubPages ? `/${process.env.BASE_PATH}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.PAGES_BASE_PATH ?? "",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
