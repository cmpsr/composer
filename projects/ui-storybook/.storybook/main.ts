// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../../packages/components/src/**/*.stories.tsx',
    '../../../packages/blocks/src/**/*.stories.tsx',
    '../../../packages/signalwire/src/**/*.stories.tsx',
    '../../../packages/carousel/src/**/*.stories.tsx',
    '../../../packages/markdown-editor/src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-turbo-build',
    '@storybook/addon-viewport',
  ],
  features: { postcss: false, buildStoriesJson: true },
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
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // remove default rules for (t|j)s?(x) to be able to use swc-loader
    const rules = config.module.rules.filter((r) => {
      return !(r.test.test('.js') || r.test.test('.ts') || r.test.test('stories.mdx') || r.test.test('.md'));
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
          '@cmpsr/components': path.resolve(__dirname, '../../../packages/components/src'),
          '@cmpsr/blocks': path.resolve(__dirname, '../../../packages/blocks/src'),
          '@components': path.resolve(__dirname, '../../../packages/components/src/components'),
          '@theme': path.resolve(__dirname, '../../../packages/components/src/theme'),
          '@hooks': path.resolve(__dirname, '../../../packages/components/src/hooks'),
        },
      },
    };
  },
};
