module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          theme: './src/theme',
        },
      },
    ],
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
