const execSync = require("child_process").execSync;

const exec = (command, extraEnv) => {
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  });
};

console.log(`Convert / Babel-ify Typescript files ...`);

exec(
  "babel src -d dist/lib --extensions .ts,.tsx --ignore '__mocks__,__tests__,**/*.test.ts,**/*.test.tsx' --copy-files --no-copy-ignored",
  {
    BABEL_ENV: "es",
  }
);

console.log("\nGenerate TypeScript definitions");

exec("tsc -d");

console.log("\nBuilding CommonJS modules ...");

exec(
  "babel src -d dist/cjs --extensions .ts,.tsx --ignore '__mocks__,__tests__,**/*.test.ts,**/*.test.tsx' --copy-files --no-copy-ignored",
  {
    BABEL_ENV: "cjs",
  }
);

console.log("\nBuilding ES modules ...");

exec(
  "babel src -d dist/es --extensions .ts,.tsx --ignore '__mocks__,__tests__,**/*.test.ts,**/*.test.tsx' --copy-files --no-copy-ignored",
  {
    BABEL_ENV: "es",
  }
);
