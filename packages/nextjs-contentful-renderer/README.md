# What it is

This is a library to render content from [contentful](https://www.contentful.com) into a [nextjs](https://nextjs.org/) application.

## Using the library

The library exposes the following methods:

- `getPageContent(context: GetServerSidePropsContext, domain?: string)`. This method takes the nextjs' `context` object and get the page slug to use it to retrieve the content from contentful. To avoid collisions between similar routes in different projects stored in the same contentful space you can pass domain parameter to this function, or you can set the `SITE_DOMAIN` env variable to avoid having to pass it in every single call.

## Requirements

You will need to define this environment variables to make the library work:

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN_DELIVERY=
CONTENTFUL_ACCESS_TOKEN_PREVIEW=
SITE_DOMAIN=
```

The `CONTENTFUL_ACCESS_TOKEN_PREVIEW` is only needed if you will be rendering non published content.

## Example of usage

```typescript
import {
  MdxRenderer,
  generateMdx,
  getPageContent,
} from "@cmpsr/nextjs-contentful-renderer";

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
