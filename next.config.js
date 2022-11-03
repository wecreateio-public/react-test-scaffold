const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['cdn.wecreate.world', 'cdn.test.we-create.io', 'cdn.dev.we-create.io'],
  },
  // output: 'standalone',
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.md$/i,
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      }
    );

    return config;
  },
};

module.exports = nextConfig;
