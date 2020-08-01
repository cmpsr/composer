const BABEL_ENV = process.env.BABEL_ENV;
const building = BABEL_ENV != undefined && BABEL_ENV !== 'cjs';

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-runtime',
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    'babel-plugin-dev-expression',
    'babel-plugin-transform-react-remove-prop-types'
  );
}

module.exports = (api) => {
  api.cache(false);

  return {
    ignore: ['node_modules'],
    env: {
      test: {
        presets: [
          '@babel/preset-typescript',
          '@babel/preset-env',
          '@babel/preset-react',
        ],
      },
    },
    presets: [
      ['@babel/preset-typescript', {
        'isTSX': true,
        'allExtensions': true,
        'onlyRemoveTypeImports': true,
      }],
      ['@babel/preset-env', {
        'loose': true,
        'modules': building ? false : 'commonjs',
        'targets': {
          'node': 'current',
        },
      }],
      ['@babel/preset-react', {
        development: process.env.BABEL_ENV !== 'build',
      }],
    ],
    plugins: plugins,
  };
};
