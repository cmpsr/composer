#!/usr/bin/env node

require('dotenv').config();

const { exec } = require('child_process');

exec(`apollo client:codegen ${process.env.TYPES_DIR || 'src/types'} --outputFlat --includes "**/*.graphql" --endpoint https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'} --target typescript --globalTypesFile ${process.env.GLOBAL_TYPES_FILE || './src/types/global.ts'} --no-addTypename --header "Authorization: Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}"`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
