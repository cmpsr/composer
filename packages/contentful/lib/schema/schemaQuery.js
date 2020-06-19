#!/usr/bin/env node

const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://graphql.contentful.com/content/v1/spaces/4f3rgqwzdznj", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer xixsQ_6fIA76T5Ua9h3AqTtj-5q5jiu0iUGikwevZFI",
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
    fs.writeFile(
      "./src/schema/fragmentTypes.json",
      JSON.stringify(result.data),
      err => {
        if (err) {
          console.error("Error writing fragmentTypes file", err); // eslint-disable-line no-console
        } else {
          console.log("Fragment types successfully extracted!"); // eslint-disable-line no-console
        }
      }
    );
  });
