# @cmpsr/components

## 5.7.0

### Minor Changes

- 5e5768c: Adds radii-button

## 5.6.2

### Patch Changes

- d2ba880: feat: remove nodejs version upper limit

## 5.6.1

### Patch Changes

- d1afb4a: Removes SourceMaps from blocks/components/signalwire packages
- 4d21743: COM-723 Fixes Tooltip stories + Updates chromatic from v5 to latest v6.17.0

## 5.6.0

### Minor Changes

- 2b69e2b: Added unordered list for composer components

## 5.5.0

### Minor Changes

- f7f244f: Make the title of the following Avatar, Icons, Image match /Components/Media/[Component name] in storybook

## 5.4.1

### Patch Changes

- c28ddf8: fix: use button border-radius

## 5.4.0

### Minor Changes

- 9b5fc7c: feat: replace outline for before pseudo selector with border in order to support Safari

## 5.3.0

### Minor Changes

- 51d629f: feat: define default theme

## 5.2.0

### Minor Changes

- 01e672b: feat: add width inherit to Link component in order to adapt parent size when provided

## 5.1.0

### Minor Changes

- bc0b80b: feat: export useTheme

## 5.0.1

### Patch Changes

- 73db0ad: fix: override instead of merging the breakpoints

## 5.0.0

### Major Changes

- a92ad07: feat: update theme to use object notation syntax and correct info color tokens
- 41e22cb: feat(Select): add new variant and remove iconSize prop

### Minor Changes

- 2fc42a9: feat: restructure form components
- 5154cde: feat: create new block ColumnLayout and add support for bounded mode, tag and link in MediaBlock
- 1dc8655: feat: restructure feedback components
- 6e4f0f9: feat: export Card types
- f6b9e43: feat: add NumberInput component
- 02bec73: feat: restructure overlay components
- 0b62aa1: feat: restructure data display components
- 327159b: feat: adds RangeSlider component
- 213233a: feat: create new block HighlightedText
- 4fc181c: feat: restructure disclosure components
- c3582e3: feat: restructure navigation components
- cdd33b1: feat: create AccordionGallery block
- 1673d3c: feat: restructure typography components

### Patch Changes

- e81182b: fix border height for alt variants in buttons with size s, m and l
- 4a816fe: feat: update chakra-ui to latest version
- 1feb881: fix(Button): disabled border color for alt variants
- 80cfa89: feat: set alert icon optional using dot notation
- ac20d33: feat(Accordion): use composer chevron icon instead of chakra's one

## 4.3.0

### Minor Changes

- a3aec10: feat: apply column gap in TextPairing from base breakpoint

## 4.2.0

### Minor Changes

- bf0bfa0: feat: create new primitive component NumberedList

## 4.1.0

### Minor Changes

- c0086a6: feat: add column gap to parts of textpairing

## 4.0.0

### Major Changes

- 5f3d719: feat: update TextPairing to use dot notation - composition

## 3.4.2

### Patch Changes

- 105ef56: update font size for body-meta-medium font styles

## 3.4.1

### Patch Changes

- 0abd4e6: fix(Input): focus and invalid states

## 3.4.0

### Minor Changes

- 63d863c: feat: add new brand icons

## 3.3.1

### Patch Changes

- ae74dcc: fix(InlineAlert): use appropriate textStyle token

## 3.3.0

### Minor Changes

- e2b62ae: feat: export accordion types

## 3.2.0

### Minor Changes

- 7d3f0cc: feat: reexport keyframes from chakra-ui

## 3.1.0

### Minor Changes

- c06accb: feat: add breakpoints and styles props to Theme

## 3.0.0

### Major Changes

- f292607: feat: feat: allow TextPairing to receive all Text props"

## 2.4.0

### Minor Changes

- adba0b1: feat: add subLabel whiteSapce prop to TextPairing"

## 2.3.0

### Minor Changes

- ae4b778: feat: add text align property to TextPairing

## 2.2.0

### Minor Changes

- 465da90: feat: add new hook useScrollPosition

## 2.1.0

### Minor Changes

- 0443122: feat: add link variant to Button

## 2.0.0

### Major Changes

- e951e88: Link component refactor to accept a react element instead of component in its leading and trailing icon props
- e46976b: refactor button component to accept a react element instead a component in its leading and trailing icon props

## 1.20.3

### Patch Changes

- fb122d4: update chakra packages to latest version to support React 18

## 1.20.2

### Patch Changes

- 41d0505: fix: include package.json in release

## 1.20.1

### Patch Changes

- 8289ef7: fix: use project config to emit types

## 1.20.0

### Minor Changes

- 0562913: Inline Alert component implemented, it includes stories and unit tests
- 30db055: feat: expose createBreakpoints function

## 1.19.3

### Patch Changes

- b00111c: fix Input and PinInput styles
- 4ffbe85: fix radio component styles and update its stories

## 1.19.2

### Patch Changes

- 2f969d1: fix: make Theme props partials

## 1.19.1

### Patch Changes

- 88c6921: fix: update engines.node to support v14

## 1.19.0

### Minor Changes

- 51b0eb0: feat: remove flex wrapper inside Link
- 6cea888: feat: refactor Tag to use dot notation

## 1.18.0

### Minor Changes

- 7b49ff6: feat: remove Link Text wrapper
- 7b101ec: Implementation of the Dropdown component, including stories and tests.

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
