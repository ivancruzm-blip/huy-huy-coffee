const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      loaders: {
        '@next/swc': {}
      }
    }
  }
};

export default nextConfig;
