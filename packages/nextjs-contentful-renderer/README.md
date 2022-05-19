# What it is

This is a library to render content from [contentful](https://www.contentful.com) into a [nextjs](https://nextjs.org/) application.

## Using the library

The library exposes the following:

- `getPageContent(context: GetServerSidePropsContext, domain?: string)`. This method takes the nextjs' `context` object and get the page slug to use it to retrieve the content from contentful. To avoid collisions between similar routes in different projects stored in the same contentful space you can pass domain parameter to this function, or you can set the `SITE_DOMAIN` env variable to avoid having to pass it in every single call.
- `generateMdx(blocks: Block[]): Promise<Model[]>`. This function takes the output of the `getPageContent` and compiles the code to MDX using [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
- `MdxRenderer` component. Takes the compiled MDX code from `generateMdx` and renders the content using react. The component accepts the `content` to render and a custom `componentMap` that can be used to render custom components.

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
- @cmpsr/components `>= 1.20.0`
- next `>= 12.1.6`
- react `>= 18.1.0`
- react-dom `>= 18.1.0`

## Example of usage

```typescript
import { generateMdx, getPageContent } from "@cmpsr/nextjs-contentful-renderer";
import { MdxRenderer } from "@cmpsr/nextjs-contentful-renderer/client";

const Page: NextPage<PageProps> = ({ content, title, metaConfiguration }) => {
  const metaTags = Object.values(metaConfiguration) || [];

  return (
    <>
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
      {content.map((block, index) => {
        return <MdxRenderer key={index} content={block} />;
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context: GetServerSidePropsContext
) => {
  const page = (await getPageContent(context)) || pageNotFound;

  const content: Model[] = await generateMdx(page.content);
  return {
    props: {
      title: page.title,
      content,
      metaConfiguration: page.metaConfiguration,
    },
  };
};

export default Page;
```
