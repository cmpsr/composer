# contentful-core

A utility package providing the `createContentfulLink` method for setting up a link with Apollo Client in React/Next.js applications using Contentful.

## Install

Install the package using npm:

```sh
npm install @cmpsr/contentful-core
```

## Usage

### `createContentfulLink`

This method creates an Apollo Client `HttpLink` for connecting to Contentful's GraphQL API.

Here's how to use `createContentfulLink` to configure Apollo Client in a Next.js application:

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createContentfulLink } from "@cmpsr/contentful-core";

const apolloClient = new ApolloClient({
  link: createContentfulLink({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
```
