const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/page-a',
        destination: '/page-b',
      },
    ];
  },
};

module.exports = nextConfig;
