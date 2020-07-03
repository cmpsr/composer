#!/usr/bin/env node

require('dotenv').config();

const fetch = require('node-fetch');
const fs = require('fs');

fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    ); // eslint-disable-line no-underscore-dangle
    result.data.__schema.types = filteredData; // eslint-disable-line no-underscore-dangle, no-param-reassign
    if (!fs.existsSync(`${process.env.SCHEMA_DIR || './src/schema'}`)) {
      fs.mkdirSync(`${process.env.SCHEMA_DIR || './src/schema'}`);
    }
    fs.writeFile(
      `${process.env.SCHEMA_DIR || './src/schema'}/fragmentTypes.json`,
      JSON.stringify(result.data),
      err => {
        if (err) {
          console.error('Error writing fragmentTypes file', err); // eslint-disable-line no-console
        } else {
          console.log('Fragment types successfully extracted!'); // eslint-disable-line no-console
        }
      }
    );
  });
