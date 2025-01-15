# ![Composer logo](https://avatars0.githubusercontent.com/u/67131017?s=24) Composer Markdown Editor

[![GitHub Actions status](https://github.com/cmpsr/composer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/test.yml) [![Chromatic Actions status](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://storybook.cmpsr.io/) ![node version](https://img.shields.io/node/v/@cmpsr/components.svg)

The composer markdown editor is an _opinionated_ [React](https://react.dev) component implemented on top of [lexical](https://lexical.dev) following and using a bunch of the [playground code](https://github.com/facebook/lexical/tree/main/packages/lexical-playground) of the library, adapted to follow our code conventions and simplified to match our specific use case.

## Using the library

```bash
npm install @cmpsr/components @cmpsr/markdown-editor
```

The `@cmpsr/markdown-editor` library requires `react`, `react-dom` and `@cmpsr/components` libraries to be installed in your project.

In order to get the component properly styled it has to be rendered inside a `ComposerProvider` component. Example of usage:

```typescript
import React, { FC } from "react";
import { ComposerProvider } from "@cmpsr/components";
import { MarkdownEditor } from "@cmpsr/markdown-editor";

type Props = {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
};

export const MyEditor: FC<Props> = ({ value, onChange, placeholder }) => (
  <ComposerProvider>
    <MarkdownEditor
      initialValue={value}
      onChange={onChange}
      placeholder={placeholder}
      height="350px"
      width="100%"
    />
  </ComposerProvider>
);
```

### Initial value

This component **is not a controlled component**, the `initialValue` will only be set once to the first _non falsy_ value provided, once a value is set subsequent values sent to the component will be ignored. For example in the following code the `value` set inside the `setTimeout` will be discarded by the `MarkdownEditor` and `# First value` will be used.

```typescript
export const WithInitialValue = () => {
  const [value, setValue] = useState("# First value");

  useEffect(() => {
    setTimeout(() => {
      setValue("# Second value");
    }, 1000);
  }, []);

  return <MarkdownEditor initialValue={value} />;
};
```

### Releasing your changes

Before creating the pull request you have to generate a changeset for your components, follow the instructions in [here](https://github.com/cmpsr/composer#changesets).
