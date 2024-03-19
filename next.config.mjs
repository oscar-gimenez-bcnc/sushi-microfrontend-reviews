/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "SushiMicroFrontendReviews",
        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./SushiMicroFrontendReviews": "./src/app/[id]/page.tsx",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
