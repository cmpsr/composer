# What it is

This is a library to render content from [contentful](https://www.contentful.com) into a [nextjs](https://nextjs.org/) application.

## Using the library

The library exposes the following:

- `getPageContent(context: GetServerSidePropsContext, domain?: string)`. This method takes the nextjs' `context` object and get the page slug to use it to retrieve the content from contentful. To avoid collisions between similar routes in different projects stored in the same contentful space you can pass domain parameter to this function, or you can set the `SITE_DOMAIN` env variable to avoid having to pass it in every single call. To retrieve content in preview you can enable [nextjs preview mode](https://nextjs.org/docs/advanced-features/preview-mode) or you can append `?preview=anything` as a query param to the page (_anything_ will enable preview mode, we only check that the query param exists).
- `getStaticPageContent(slug: string, preview = false, domain: string | undefined = undefined)`. The main difference between this method and the previous one is that it will not look for previously visited pageId or randomize the variant returned (will always return the first one). It is intended to be used from nextjs `getStaticProps` ([see the docs](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)).
- `generateMdx(blocks: Block[], globalVariables: PropsValue = {}): Promise<Model[]>`. This function takes the output of the `getPageContent`/`getStaticPageContent` and compiles the code to MDX using [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
- `MdxRenderer` component. Takes the compiled MDX code from `generateMdx` and renders the content using react. The component accepts the `content` to render and a custom `componentMap` that can be used to render custom components.
- `getDefaultTheme(preview: boolean, domain: string)` retrieve the default theme for a given domain or undefined if no default theme is defined. By default `preview` is set to `false` and `domain` to `process.env.SITE_DOMAIN`. This call use a cache first approach for data fetching. Taking into account that the default theme can not be loaded at the app level because [nextjs Custom app does not support data fetching](https://nextjs.org/docs/advanced-features/custom-app#caveats) we strongly recommend that each page has a theme associated to avoid a second request to contentful.
- `getStaticRoutes(domain?: string, preview?: string)`. Returns the list of routes (ids and slugs) that has been defined as static in contentful. This function can be used in the [nextjs getStaticPaths function](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) to generate the page at build time. By default it will use `process.env.SITE_DOMAIN` for the domain and `false` for the preview mode.

### Global variables

Using the CML syntax we provide a mechanism for defining placeholders that are replaced during the mdx generation phase. Those placeholders are replaced by the values provided in the `Block` or by _global variables_ than can be defined at a top level, in the replica/page for example. This allows us to avoid having to define the same value multiple times in the same page.

The global variables are responsive values defined using the `PropsValue` format:

```typescript
const globalVariables = {
  base: {
    variableName: "variable value",
  },
  lg: {
    variableName: "variable value for lg+ breakpoints",
  },
};
```

## Requirements

You will need to define this environment variables to make the library work:

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN_DELIVERY=
CONTENTFUL_ACCESS_TOKEN_PREVIEW=
SITE_DOMAIN=
```

The `CONTENTFUL_ACCESS_TOKEN_PREVIEW` is only needed if you will be rendering non published content.

### Peer dependencies

The following dependencies should be provided to the library:

- @apollo/client `>= 3.6.2`
- @cmpsr/components `version matching package.json definition`
- next `>= 12.1.6`
- react `>= 18.1.0`
- react-dom `>= 18.1.0`

## Example of usage

```tsx
import { generateMdx, getPageContent } from "@cmpsr/nextjs-contentful-renderer";
import { MdxRenderer } from "@cmpsr/nextjs-contentful-renderer/client";
import { ComposerProvider } from "@cmpsr/components";

const Page: NextPage<PageProps> = ({ content, title, metaConfiguration }) => {
  const metaTags = Object.values(metaConfiguration) || [];

  const Wrapper = ({ children }) =>
    theme ? (
      <ComposerProvider theme={theme}>{children}</ComposerProvider>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        {metaTags.map((metaTag) => {
          const props = {
            [metaTag.propertyName]: metaTag.propertyValue,
            content: metaTag.content,
          };
          return <meta key={metaTag.propertyValue} {...props} />;
        })}
      </Head>
      {content.map((block, index) => (
        <MdxRenderer key={index} content={block} componentMap={components} />
      ))}
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context: GetServerSidePropsContext
) => {
  const page = (await getPageContent(context)) || pageNotFound;
  const theme =
    page.theme ??
    (await getDefaultTheme(context.query.preview !== undefined)) ??
    null;

  const content: Model[] = await generateMdx(
    page.content,
    page.globalVariables
  );
  return {
    props: {
      title: page.title,
      content,
      metaConfiguration: page.metaConfiguration,
      theme,
    },
  };
};

export default Page;
```
