# What it is

This is a library to render content from [contentful](https://www.contentful.com) into a [nextjs](https://nextjs.org/) application.

## Using the library

The library exposes the following:

- `getPageContent(context: GetServerSidePropsContext, domain?: string)`. This method takes the nextjs' `context` object and get the page slug to use it to retrieve the content from contentful. To avoid collisions between similar routes in different projects stored in the same contentful space you can pass domain parameter to this function, or you can set the `SITE_DOMAIN` env variable to avoid having to pass it in every single call.
- `getStaticPageContent(slug: string, preview = false, domain: string | undefined = undefined)`. The main difference between this method and the previous one is that it will not look for previously visited pageId or randomize the variant returned (will always return the first one). It is intended to be used from nextjs `getStaticProps` ([see the docs](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)).
- `generateMdx(blocks: Block[]): Promise<Model[]>`. This function takes the output of the `getPageContent` and compiles the code to MDX using [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
- `MdxRenderer` component. Takes the compiled MDX code from `generateMdx` and renders the content using react. The component accepts the `content` to render and a custom `componentMap` that can be used to render custom components.
- `getDefaultTheme(preview: boolean, domain: string)` retrieve the default theme for a given domain or undefined if no default theme is defined. By default `preview` is set to `false` and `domain` to `process.env.SITE_DOMAIN`. This call use a cache first approach for data fetching. Taking into account that the default theme can not be loaded at the app level because [nextjs Custom app does not support data fetching](https://nextjs.org/docs/advanced-features/custom-app#caveats) we strongly recommend that each page has a theme associated to avoid a second request to contentful.

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

```typescript
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
  let theme = page.theme;
  if (!theme) {
    theme = await getDefaultTheme(context.query.preview !== undefined);
  }

  const content: Model[] = await generateMdx(page.content);
  return {
    props: {
      title: page.title,
      content,
      metaConfiguration: page.metaConfiguration,
      theme: theme || null,
    },
  };
};

export default Page;
```
