const path = require('path');

// Optional subpath the app is served under (e.g. example.com/waterinsight).
// Defaults to "waterinsight"; set NEXT_PUBLIC_SUBPATH='' to serve from the root.
const subpath = (process.env.NEXT_PUBLIC_SUBPATH ?? 'waterinsight').replace(
  /^\/+|\/+$/g,
  '',
);
const basePath = subpath ? `/${subpath}` : '';

module.exports = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    moduleResolution: 'bundler',
    include: ['app/**/*.ts', 'app/**/*.tsx'],
  },
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // The following aliases are added to ensure that both the Next.js instance and
      // the `veda-ui` library use the same instances of Jotai for state management.
      // This resolves the issue of "Detected multiple Jotai instances," which can cause
      // unexpected behavior due to multiple instances of Jotai's default store.
      // For more details, refer to the GitHub discussion:
      // https://github.com/pmndrs/jotai/discussions/2044
      jotai: path.resolve(__dirname, 'node_modules', 'jotai'),
      'jotai-devtools': path.resolve(
        __dirname,
        'node_modules',
        'jotai-devtools',
      ),
      'jotai-location': path.resolve(
        __dirname,
        'node_modules',
        'jotai-location',
      ),
      'jotai-optics': path.resolve(__dirname, 'node_modules', 'jotai-optics'),
    };
    return config;
  },
  sassOptions: {
    includePaths: [
      'node_modules/@uswds/uswds',
      'node_modules/@uswds/uswds/dist',
      'node_modules/@uswds/uswds/packages',
    ],
  },
};
