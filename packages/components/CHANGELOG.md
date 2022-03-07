# @cmpsr/components

## 1.17.0

### Minor Changes

- 299d639: fix: storybook documentation code
- de1e5d6: feat: refactor Breadcrumb component
- 8d1b131: feat: refactor Slider to use composition with dot notation

## 1.16.0

### Minor Changes

- c44cefd: implement textarea component
- cabd521: feat: adds PinInput component

## 1.15.0

### Minor Changes

- 75d4ae6: Implement Toast component, tests and stories
- 9f4d6f8: Implementation of the tooltip component with tests and stories

### Patch Changes

- f96b916: fix select component styles

## 1.14.0

### Minor Changes

- aa13995: implement Modal component
- 7a93d81: implement close button component
- 3f0cbba: TextPairing: allow theme color for label and subLabel
- babbbb4: Input: use proper spacing on flushed version and refactor logic of the component
- db0c3cc: Implementation of Symbol components with a base story and a test
- 3906956: Implementation of IconButton component, including tests and stories

### Patch Changes

- 2dcd716: fix alert component styles

## 1.13.0

### Minor Changes

- cc5ae3d: Update Tag L size to have same padding as design
- f700cee: Update textStyles to have correct rem values
- 045f197: Fix Switch styles and refactor the component

### Patch Changes

- c9d69bd: "replace babel with swc"

## 1.12.0

### Minor Changes

- 7a95d00: Add proper color when Link is pressed
  Rename Progress components to be consistent with design
  Remove Tabs underline and use proper background color

## 1.11.3

### Patch Changes

- 34b5a1c: generate ts types

## 1.11.2

### Patch Changes

- 9810e1d: fix: typescript and swc paths aliases
- 9810e1d: fix: swcrc aliases

## 1.11.1

### Patch Changes

- f817f32: fix: swcrc aliases

## 1.11.0

### Minor Changes

- ae89f55: Select: fix icon, colors and text of select component

### Patch Changes

- 1293112: fix: define aliases in swcrc file

## 1.10.0

### Minor Changes

- 38bee36: Card: update default padding of card to be 20px
- 157522c: Breadcrumb: align container vertically
- f58249c: Button: update button styles and add icons

## 1.9.0

### Minor Changes

- f049ae2: Button: fix button sizes
- f21ccb2: Link: add button appearance to link based on variants

### Patch Changes

- a923564: fix line height of text-body-\* text styles

## 1.8.0

### Minor Changes

- 7613951: Slider: change thumb size and add orientation to playground story
- 14f5c73: re-implement Breadcrumb to accept items instead of composing it
- 80c9301: Accordion: use custom padding for accordion and improve playground examples
- 4f3ebfa: fix icon sizes for every component
- 71cc77f: Implementation of the Button loading state with a storybook and test

### Patch Changes

- ce78d3d: add support for leading and trailing icon to Link component
- 3bf768f: Alert: align title icon and add capability to show or hide close button

## 1.7.0

### Minor Changes

- 3cb65d0: implement Tag component
- 27e7753: Implement Accordion component
- 828cedf: Breadcrumb component
- d43134d: Implementation of the Switch/Toggle component with tests and stories
- 8fe0f03: create progress component
- 7c8ecdb: Adding of Link component, tests and storybook.

### Patch Changes

- 0fb66d4: COM-135 feat: Adding Radio button component

## 1.6.0

### Minor Changes

- 9f208ca: Implementation of Input component, with their tests and stories
- 96a0c87: Implementation of a new iconSize prop inside the Select component to be able to change the icon size of the Select component

## 1.5.1

### Patch Changes

- cab25ab: Add default breakpoint to useBreakpointValue

## 1.5.0

### Minor Changes

- e6f8710: add support for responsive variant to Text and TextPairing

## 1.4.0

### Minor Changes

- 17ac393: update storybook version and deprecate postCSS
- dc52c64: add resetCSS prop to provider
- 9c8902b: Implementation of CircularProgess component, with tests and stories included

## 1.3.2

### Patch Changes

- 69b3b22: transpile tabler icons

## 1.3.1

### Patch Changes

- a1f41c7: remove postinstall script

## 1.3.0

### Minor Changes

- d336c6c: create script to detect when chakra-ui/cli package is installed to generate theme typings conditionally
- dbd68bf: implement card component and add new radii tokens
- 7478470: Implementation of the select component, with its stories and tests
- 3cfd8d7: add useBreakpointValue hook

## 1.2.0

### Minor Changes

- 02a8c45: Implementation, tests and stories for the Composer's Alert component
- cd1dc60: remove test and stories from distribution files
- ad82482: Replace textStyle property for theme textStyles variants. The property textStyle doesn't work as expected (according to Chakra documentation) in Components theming.

## 1.1.0

### Minor Changes

- 2482e2c: Move fontFamily out of fontStyles

## 1.0.0

### Major Changes

- 75195ae: Move components package to chakra-ui
