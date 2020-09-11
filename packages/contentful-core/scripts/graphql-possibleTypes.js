#!/usr/bin/env node

require('dotenv').config();

const fetch = require('node-fetch');
const fs = require('fs');

fetch(
  `https://graphql.contentful.com/content/v1/spaces/${
    process.env.CONTENTFUL_SPACE_ID
  }/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'}`,
  {
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
  }
)
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {};

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          (subtype) => subtype.name
        );
      }
    });

    if (!fs.existsSync(`${process.env.TYPES_DIR || './src/types'}`)) {
      fs.mkdirSync(`${process.env.TYPES_DIR || './src/types'}`);
    }

    fs.writeFile(
      `${process.env.TYPES_DIR || './src/types'}/possibleTypes.json`,
      JSON.stringify(possibleTypes),
      (err) => {
        if (err) {
          console.error('Error writing possibleTypes.json', err);
        } else {
          console.log('Fragment types successfully extracted!');
        }
      }
    );
  });
