module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          theme: './src/theme',
          hooks: './src/hooks',
          utils: './src/utils',
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
