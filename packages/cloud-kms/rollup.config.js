import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = {
  input: './lib/index.js',
  output: {
    name: 'cloud-kms',
    file: './dist/index.js',
    format: 'umd',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
    banner: `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} Composer | ${pkg.license} License | https://github.com/${pkg.repository} !*/`,
    footer: '/* tbd */',
  },
  external: [
    /@babel\/runtime/,
  ],
  plugins: [
    babel({
      babelHelpers: process.env.BABEL_ENV === 'umd' ? 'bundled' : 'runtime',
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
