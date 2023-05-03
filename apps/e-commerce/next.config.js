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
};
