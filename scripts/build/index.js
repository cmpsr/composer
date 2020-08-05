const fs = require('fs');
const execSync = require("child_process").execSync;

const exec = (command, extraEnv) => {
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  });
};

console.log(`Building ES modules ...`);

exec(
  "babel src -d dist/lib --extensions .ts,.tsx --ignore '__mocks__,__tests__,**/*.test.ts,**/*.test.tsx' --copy-files --no-copy-ignored",
  {
    BABEL_ENV: "es",
  }
);

console.log("\nGenerate TypeScript definitions");

exec("tsc -p tsconfig.build.json");

console.log("\nBuilding CommonJS modules ...");

exec(
  "babel src -d dist --extensions .ts,.tsx --ignore '__mocks__,__tests__,**/*.test.ts,**/*.test.tsx' --copy-files --no-copy-ignored",
  {
    BABEL_ENV: "cjs",
  }
);

console.log("\nCopy package.json to dist directory ...");

// Read the current package’s package.json file
const packageFile = fs.readFileSync(`${process.cwd()}/package.json`);
const packageJson = JSON.parse(packageFile);

// Delete private, since we want to publish the public package via the /dist directory
delete packageJson.private;

// Dynamically set the files that should be available in the published package
const distFiles = fs.readdirSync(`${process.cwd()}/dist`);
packageJson.files = distFiles;

// Although this could already be set in the package.json file, we will set the directories,
// main, module and types settings dynamically in the event we ever modify this build script,
// so that it is the same for all packages
packageJson.main = 'index.js';
packageJson.module = 'lib/index.js';
packageJson.types = 'lib/index.d.js';
packageJson.directories = {
  ...packageJson.directories,
  lib: 'lib',
};

// Write updated package.json file to /dist directory of package
const packageData = JSON.stringify(packageJson, null, 2);
fs.writeFileSync(`${process.cwd()}/dist/package.json`, packageData);
