const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-turbo-build',
  ],
  features: { postcss: false },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  // Disable React Docgen Typescript Plugin
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // remove default rules for (t|j)s?(x) to be able to use swc-loader
    const rules = config.module.rules.filter((r) => {
      return !(
        r.test.test('.js') ||
        r.test.test('.ts') ||
        r.test.test('stories.mdx') ||
        r.test.test('.md')
      );
    });
    rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    rules.push({
      test: /\.?(js|ts|jsx|tsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'swc-loader',
      },
    });
    config.module.rules = rules;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': path.resolve(__dirname, '../src/components'),
          '@theme': path.resolve(__dirname, '../src/theme'),
          '@hooks': path.resolve(__dirname, '../src/hooks'),
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
        },
      },
    };
  },
};
