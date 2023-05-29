const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: [
    "@app/ui",
    "@app/features-product",
    "@app/features-checkout",
    "@app/features-layout",
    "@app/database",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};
