/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

const withImages = require("next-images");

module.exports = withImages({
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // SVG 파일을 처리하기 위한 로더 추가

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-react-loader",
        },
      ],
    });

    return config;
  },
});
