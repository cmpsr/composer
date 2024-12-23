# ![Composer logo](https://avatars0.githubusercontent.com/u/67131017?s=24) Composer components library

[![GitHub Actions status](https://github.com/cmpsr/composer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/test.yml) [![Chromatic Actions status](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://storybook.cmpsr.io/) ![node version](https://img.shields.io/node/v/@cmpsr/components.svg)

The composer component library is an _opinionated_ wrapper on top of [chakra-ui](https://chakra-ui.com/) that allows defining a branded theme instead of a generic one designed to work with the composer ecosystem.

## Design resources

- Figma files:
  - [Components](https://www.figma.com/file/ewqGU2UQxmYiO8JWaRawP0/Composer---Design-System?node-id=1370%3A25384)
  - [Tokens](https://www.figma.com/file/3biY2irNNtLNnt719pvIun/Composer---Tokens?node-id=218%3A14821)
  - [Icons](https://www.figma.com/file/EVqzz5IwHOADFvr5yYhgvO/Composer---Icons-%26-Illustrations?node-id=8%3A2)
- [Storybook](https://storybook.cmpsr.io/)

## Implementing new components

For the time being only components defined in [figma](#design-resources) will be accepted as contributions to the library and the implementation must match the design specifications for the pull request to be approved and merged.

When adding new components to the library ideally you will reuse the chakra's equivalent as much as possible (see an [example](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/dataDisplay/Divider/index.ts)), unless you find that the _counterpart_ does fit the specs (see an [example](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/navigation/Breadcrumb/Breadcrumb.tsx)).

It is required to add stories for all components, the storybook can be started by executing `npm run storybook`.

```bash
npm run storybook
```

The implementation of a component will be divided in two parts, theming and implementation. Ideally when a new component is added to the library the main focus of the pull request will be on the theme and not in the implementation of the component.

### Theming components

All the UI customisation applied to a component must be defined inside the theme.

The theme of a component will be defined in a file with the name of the component inside the `packages/components/src/theme/ComposerTheme/Components` folder. This is true for components that already exists in chakra and for new components added by us, like [TextPairing](https://github.com/cmpsr/composer/blob/master/packages/components/src/theme/ComposerTheme/Components/TextPairing.ts). Once defined the component has to be re-exported from the [index file](https://github.com/cmpsr/composer/blob/master/packages/components/src/theme/ComposerTheme/Components/index.ts).

- The text style applied to a component should be one of the text styles [already defined](https://storybook.cmpsr.io/?path=/story/components-typography-text--all). In some cases applying it using the `textStyle` prop is not possible (chakra will not apply it to the component) and we have to apply the properties of the style _one by one_, in those cases use the functional option `theme` param to apply the styles:

```typescript
export const Component: ComponentStyleConfig = {
  sizes: {
    xs: ({ theme }) => ({
      ...theme.textStyles["text-body-floating-label-medium"],
    }),
  },
};
```

- always use `rem`/`em` instead of `px`, do not use either for `0` (see for more details [[1]](https://uxdesign.cc/why-designers-should-move-from-px-to-rem-and-how-to-do-that-in-figma-c0ea23e07a15)[[2]](https://medium.com/weekly-webtips/to-increase-a11y-use-rem-instead-of-px-96ee9d9dc9ad)[[3]](https://www.csun.edu/universal-design-center/web-accessibility-criteria-resizable-text))

```typescript
export const Component: ComponentStyleConfig = {
  sizes: {
    xs: {
      p: "1rem", // 👍
      p: "16px", // 👎
      p: 0, // 👍
      p: "0", // 👍
      p: "0rem", // 👎
      p: "0px", // 👎
    },
  },
};
```

- We have also defined [spacings](https://storybook.cmpsr.io/?path=/story/theme-spacing--spacing) and [border radius](https://storybook.cmpsr.io/?path=/story/theme-radius--radius) **but** unless specified in [figma](#design-resources) do not use those values while theming:

```typescript
export const Component: ComponentStyleConfig = {
  sizes: {
    xs: {
      borderRadius: "0.125rem", // 👍
      px: "0.5rem", //  👍
      py: "spacer-2", // 👎 (unless specified in figma)
    },
  },
};

export const Card: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "radii-card", // 👍 specified in figma
    padding: "1.25rem", //  👍
  },
};
```

- If a component only have a single variant do not add a variant, use the `baseStyle` instead:

```typescript
export const Component: ComponentStyleConfig = {
  // 👎
  variant: {
    onlyVariant: {
      borderRadius: "0.125rem",
    },
  },
};

export const Component: ComponentStyleConfig = {
  //  👍
  baseStyle: {
    borderRadius: "0.125rem",
  },
};
```

- All components with multiple variants or sizes must have a `defaultProps` section in their props with the default `variant` and or `size`. If the default values are not defined in figma ping the design team in [slack](https://impulsumstudio.slack.com/archives/GRS2V5NUB) or add a comment in the pull request and will get those values for you.

```typescript
export const Component: ComponentStyleConfig = {
  variants: {
    primary: {},
    secondary: {},
  },
  sizes: {
    s: {},
    m: {},
    l: {},
  }
  defaultProps: {
    variant: 'primary'
    size: 'm',
  },
};
```

### Implementing the component

The non-theme related code of the component will live in the `packages/components/src/components` folder, inside a folder that defines the category of the component like form, layouts, navigation, etc. For each component we will create a new folder inside the corresponding category folder, if the category folder does not exists it should be created too, so a new form `Component` will have to be defined in the `packages/components/src/components/form/Component` folder for instance.

- Every category folder will have an index file that will re-export all the components inside the category (see [form folder example](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/form/index.ts)), the re-exports have to be done in alphabetical order. If a new category is added a re-export in the parent folder [index](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/index.ts) has to be added too, also in alphabetical order:

```typescript
// packages/components/src/components/index.ts
export * from "./form";
export * from "./layouts";

// packages/components/src/components/layout/index.ts
export * from "./Box";
export * from "./Flex";
export * from "./Grid";
export * from "./Section";
```

- For each component we will create 5 files. For more details on what to do and not to do in each continue reading.

  - `types.ts`: types associated to the component (Props, Size, Variant, ...)
  - `Component.tsx`: component implementation
  - `Component.test.tsx`: unit tests
  - `Component.stories.tsx`: component storybook
  - `index.ts`: re-export the component and the types

- In the `types.ts` we will define all types associated for a component. As a bare minimum this file will contain the props that the component accepts. If a component is based on a chakra component its properties should extends its counterpart props. If a component has variants and or sizes we will create a custom type for those.

```typescript
import { ComponentsProps as ChakraComponentProps } from "@chakra-ui/react";

// 👍
export const componentVariants = ["primary", "secondary"] as const;
export type ComponentVariant = (typeof componentVariants)[number];
export const componentSizes = ["xs", "s", "m", "l"] as const;
export type ComponentSize = (typeof componentSizes)[number];

export interface ComponentProps extends ChakraComponentProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
}

// 👎 prefix with the component name
export const variants = ["primary", "secondary"] as const;
export const Variant = typeof variants[number];

// 👎 do not use first upper cased later for variables, only for types
export const ComponentVariants = ["primary", "secondary"] as const;

// 👎 do not use plural for size or variant types
export const ComponentVariants = typeof componentVariants[number];
export const ComponentSizes = typeof componentSizes[number];
```

- If the props are exactly the same as the chakra component do not define a new type, just re-export the props from `types.ts`

```typescript
export { FlexProps } from "@chakra-ui/react"; // 👍

// 👎 Do not define a new _empty_ type
import { FlexProps as ChakraFlexProps } from "@chakra-ui/react";
export interface FlexProps extends ChakraFlexProps {}
```

- In the `Component.tsx` is where the actual implementation of the component will be. The goal is to have the minimum amount of code possible, _i.e._ only add logic to a chakra component if there are no other options.

- All components has to be exported as [forward references](https://reactjs.org/docs/forwarding-refs.html) using the `forwardRef` function [exposed by chakra](https://chakra-ui.com/docs/components/recipes/as-prop#option-1-using-forwardref-from-chakra-uireact) and not `React.forwardRef`. This rule might not be followed in the examples shown in the documentation for simplicity.

```typescript
export { forwardRef } from "@chakra-ui/react"; // 👍
export { forwardRef } from "react"; // 👎
```

- From the implementation file you should never access a theme file, if you need to assign some theme props by code use the `useStyleConfig` ([docs](https://chakra-ui.com/docs/theming/component-style#usestyleconfig-api)) or `useMultiStyleConfig` ([docs](https://chakra-ui.com/docs/theming/component-style#usemultistyleconfig-api)) and then apply the props:

```typescript
// 👍
const Component: FC<ComponentProps> = ({ size, ...rest }) => {
  const styles = useStyleConfig("Component", { size }) as ComponentStyle;
  return (
    <ChakraComponent data-testid="cmpsr.component.id" {...styles} {...rest} />
  );
};

// 👎
// The main issue with this approach is that if a user overrides our theme
// we will not apply the appropriate values.
//
// Our build script should detect this and fail
import { Component as Styles } from "@theme/ComposerTheme/Components/Component";
const Component: FC<ComponentProps> = ({ size, ...rest }) => {
  const styles = Styles[size] as ComponentStyle;
  return (
    <ChakraComponent data-testid="cmpsr.component.id" {...styles} {...rest} />
  );
};
```

- any `id` added to a component should be prefixed with `cmpsr.component-name.prop-name`, including `data-testid`, as show in the previous snipped. And should be overridable.

```typescript
// 👍
const Component: FC<ComponentProps> = (props) => (
  <ChakraComponent data-testid="cmpsr.component.data-testid" {...props} />
);

// 👎
const Component: FC<ComponentProps> = (props) => (
  <ChakraComponent {...props} data-testid="cmpsr.component.data-testid" />
);
```

- you should avoid adding layout/theme values to the component implementation, they should be defined in the theme file instead:

```typescript
// 👍
export const Component: FC<ComponentProps> = (props) => {
  const { childrenBg, p } = useStyleConfig("Component", props);
  return (
    <ChakraComponent p={p}>
      <Children bg={childrenBg} />
    </ChakraComponent>
  );
};

// 🤔
// Doing this is not a red flag, but should be avoided
export const Component: FC<ComponentProps> = (props) => (
  <ChakraComponent p="0.5rem" {...props}>
    <Children bg="background-action-active" />
  </ChakraComponent>
);
```

- The `Component.test.tsx` file is for unit testing the component. As we are relying on chakra-ui and we know their components are properly tested we will reduce the amount of unit tests added to a component, for example there is no reason to add a unit test to verify that the `onClick` prop is called when a `Button` is clicked. It is required to unit test any logic added to the component, but no UI changes as those will be verified by storybook+chromatic. If you find yourself mocking chakra-ui inside the unit test of a component you should consider this as a red flag. Testing `variant`, `size` and other theme props can be considered as a red flag too.

- The storybook file `Component.stories.tsx` must render all the variants and sizes of the component. The storybook should be clear and self-explanatory, ideally in a table format. All stories file must have a `Playground` component where the user can interact with the component and test the _main_ properties:

```typescript
const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Button
    {...(showLeadingIcon && { leadingIcon: Icons.IconExternalLink })}
    {...(showTrailingIcon && { trailingIcon: Icons.IconExternalLink })}
    {...args}
  >
    Playground
  </Button>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: "primary",
  size: "m",
  children: "Composer button!",
  isLoading: false,
  showLeadingIcon: true,
  showTrailingIcon: true,
  isDisabled: false,
};
```

- if a component has variant and/or size we should tell storybook how to handle those properly:

```typescript
export default {
  component: Component,
  title: "Components/Form/Component",
  argTypes: {
    variant: {
      options: componentVariants,
      control: { type: "select" },
    },
  },
} as Meta;
```

- the `index.ts` is responsible of re-exporting the component and the associated types:

```typescript
export * from "./Component";
export * from "./types"; // It is ok to only re-export ComponentProps
```

- if you have to import a component or hook in the component you are currently working on it should be imported from `@/components` or `@hooks` unless the imported file is in the same folder as your component. You can use the relative path import if you are going only going one level out:

```typescript
import { OtherComponent } from "@components"; // 👍
import { useResponsiveValue } from "@hooks"; // 👍
import { OtherComponent } from "."; // 👍
import { ComponentProps } from "./types"; // 👍
import { OtherComponent } from ".."; // 👍
import { OtherComponent } from "../OtherComponent"; // 👍
import { OtherComponent } from "../../OtherComponent"; // 👎
```

- you can only import other components directly from chakra if the component does not exists in our library:

```typescript
import { VStack } from "@chakra-ui/react"; // 👍
import { Button } from "@chakra-ui/react"; // 👎
```

### Using dot notation

We will favour using dot notation over _composed component names_.

```typescript
// 👍
const Component = forwardRef<ComponentProps, 'div'>((props, ref) => (
    <div ref={ref} {...props}/>
  )
);
const Child = forwardRef<ComponentChildProps, 'div'>((props, ref) => (
    <div ref={ref} {...props}/>
  )
);
const ComponentNamespace = Object.assign(Component, { Child });
export { ComponentNamespace as Component };

// 👎
export Component = forwardRef<ComponentProps, 'div'>((props, ref) => (
    <div ref={ref} {...props}/>
  )
);
export const ComponentChild = forwardRef<ComponentChildProps, 'div'>((props, ref) => (
    <div ref={ref} {...props}/>
  )
);
```

You can take a look to the implementation of the [Slider](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/form/Slider/Slider.tsx) or [Breadcrumb](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/navigation/Breadcrumb/Breadcrumb.tsx) components for more details about how we do it.

### Special cases

There are a few cases of components that we will use literally as it from chakra (like [Box](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/layouts/Box) or [Flex](https://github.com/cmpsr/composer/blob/master/packages/components/src/components/layouts/Flex)). In those cases we will only add an `index.ts` and a `Component.stories.tsx`. The index file will just re-export the component and its props from chakra:

```typescript
export { Box, BoxProps } from "@chakra-ui/react";
```

### Common pitfalls

- Chakra components are designed as [multipart/composite components](https://chakra-ui.com/docs/theming/advanced#multipart-or-composite-component). A common mistake we have experienced is assigning the `textStyle` to a multipart component, this will not always produce the _desired effect_. In general the `textStyle` should be applied to the `label` part.

```typescript
export const Component: ComponentStyleConfig = {
  sizes: {
    xs: ({ theme }) => ({
      label: {
        ...theme.textStyles["text-body-floating-label-medium"],
      }),
    },
  },
};
```

### Composer Icons

Composer icons are a subset of `@tabler/icons-react`.

#### Icons Update

If a new version of tabler icons has been release and you just want to update the existing icons, then you only need to update the `@tabler/icons-react` version in the [package.json](./package.json) and you should be done.

But to be safe, run `npm run gen:icons` to ensure that `@tabler/icons-react` hasn't released a breaking change. No icons will be generated, but the script will throw if there is a breaking change.

#### Icons Addition or Removal

If you wanna add or remove an icon, ensure to add or remove it from the icons list on the [generate_icons.js](./scripts/generate_icons.js) file.

Once `@tabler/icons-react` has been updated and all icons you want to keep are on the list, you can then run this command to generate the icons and their stories.

`npm run gen:icons`

All icon files will be generated and ready to commit.
Just remember that if an icon has been removed or renamed that is a breaking change in Composer and you should update the Composer version accordingly.

#### tabler/icons breaking change

If `@tabler/icons-react` releases a breaking change, the [generate_icons.js](./scripts/generate_icons.js) script may throw and it should be adjusted as needed.

### Releasing your changes

Before creating the pull request you have to generate a changeset for your components, follow the instructions in [here](https://github.com/cmpsr/composer#changesets).
