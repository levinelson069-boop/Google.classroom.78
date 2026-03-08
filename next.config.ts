import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.itch.zone',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'games.crazygames.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'azgames.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kdata1.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freedomgamingzone.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gamecollections.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'game316009.konggames.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ozgames.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eaglercraft.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'marketjs.cdn.msnfun.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
