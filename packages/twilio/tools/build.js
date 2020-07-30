const fs = require('fs');
const execSync = require('child_process').execSync;
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

const exec = (command, extraEnv) => {
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });
};

console.log(`Convert / Babel-ify Typescript files ...`);

exec('babel src -d lib --extensions .ts,tsx --ignore src/__mocks__,__tests__,**/*.test.* && tsc -d --declarationDir lib --declarationMap --emitDeclarationOnly');

console.log('\nBuilding CommonJS modules ...');

exec('babel lib -d cjs --ignore src/__mocks__,__tests__,**/*.test.*', {
  BABEL_ENV: 'cjs',
});

console.log('\nBuilding ES modules ...');

exec('babel lib -d es --ignore src/__mocks__,__tests__,**/*.test.*', {
  BABEL_ENV: 'es',
});

console.log('\nBuilding twilio.js ...');

exec('rollup -c -f umd -o umd/twilio.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development',
});

console.log('\nBuilding twilio.min.js ...');

exec('rollup -c -f umd -o umd/twilio.min.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production',
});

const size = gzipSize.sync(
  fs.readFileSync('umd/twilio.min.js')
);

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));
