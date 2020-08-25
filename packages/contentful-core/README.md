# contentful-core

Base Composer components for standing up a React/NextJS app that can dynamically
render components based on Contentful Model types mapped to components and queries.

## Install

Via [npm](https://npmjs.com/package/@cmpsr/contentful-core):

```sh
npm i --save @cmpsr/contentful-core
```

Via [Yarn](https://yarn.fyi/@cmpsr/contentful-core):

```sh
yarn add @cmpsr/contentful-core
```

## How to use

### Required `.env` variables

```
CONTENTFUL_PREVIEW={true|false}
CONTENTFUL_SPACE_ID={Contentful space ID}
CONTENTFUL_ENVIRONMENT={Contentful environment} (defaults to `master`)
CONTENTFUL_ACCESS_TOKEN_DELIVERY={Contentful Delivery Token}
CONTENTFUL_ACCESS_TOKEN_PREVIEW={Contentful Preview Token}
CONTENTFUL_ACCESS_TOKEN={Contentful token used to generate schema/types}
```

### `ContentfulProvider`

```js

```

### `ComponentRenderer`

```js

```

### Utility Scripts

The utility scripts make it easy to generate GraphQL schemas and the associated Typescript definitions for your Contentful setup.

_Required script environment variables_

`CONTENTFUL_SPACE_ID` - The Contentful Space ID.
`CONTENTFUL_ACCESS_TOKEN` - The Contentful API access token. This could be the Delivery or Preview API access token, depending on your needs.

#### Generate Schema

Within your project directory, run the following command to generate the `fragmentTypes.json` based on your Contentful models.

```sh
node ./node_modules/@cmpsr/contentful-core/scripts/graphql-schema.js
```

_Environment Variables_

`SCHEMA_DIR` - Directory to write the `fragmentsTypes.json` to. Defaults to: `./src/schema`

#### Generate Types

Within your project directory, run the following command to generate the `fragmentTypes.json` based on your Contentful models.

```sh
node ./node_modules/@cmpsr/contentful-core/scripts/graphql-types.js
```

_Environment Variables_

`TYPES_DIR` - Directory to write the `types` files to. Defaults to: `./src/types`
`GLOBAL_TYPES_FILE` - Path and name for the global types files. Defaults to: `./src/types/global.ts`

**Add to `package.json`**

```json
{
  "scripts": {
    ...
    "graphql:schema": "./node_modules/@cmpsr/contentful-core/scripts/graphql-schema.js",
    "graphql:types": "./node_modules/@cmpsr/contentful-core/scripts/graphql-types.js"
  }
}
```

## Examples

### NextJS

#### 1. Define Apollo Client

`lib/apollo.js`

```js
import { withApollo } from 'next-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createContentfulLink } from '@cmpsr/contentful-core/lib/client';

import introspectionQueryResultData from '../../schema/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const apolloClient = new ApolloClient({
  link: createContentfulLink({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  }),
  cache: new InMemoryCache({ fragmentMatcher }),
});

export default withApollo(apolloClient);
```

#### 2. Wrap Next App (or Page(s))

`pages/_app.js`

```js
import React from 'react'
import withApollo from '../lib/apollo'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default withApollo({ ssr: true })(MyApp);
```

`pages/index.js`

```js
import React from 'react'
import withApollo from '../lib/apollo'

const Home = props => {
  ...
};

export default withApollo({ ssr: true })(Home);
```


### React App

_Coming soon..._
