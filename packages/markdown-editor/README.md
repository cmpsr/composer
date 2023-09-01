# ![Composer logo](https://avatars0.githubusercontent.com/u/67131017?s=24) Composer Markdown Editor

[![GitHub Actions status](https://github.com/cmpsr/composer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/test.yml) [![Chromatic Actions status](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml/badge.svg?branch=master)](https://github.com/cmpsr/composer/actions/workflows/chromatic.yml) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://storybook.cmpsr.io/) ![node version](https://img.shields.io/node/v/@cmpsr/components.svg)

The composer carousel library is an _opinionated_ wrapper on top of [pure-react-carousel](https://github.com/express-labs/pure-react-carousel) that allows defining a branded theme instead of a generic one designed to work with the composer ecosystem.

## Importing Pure React Carousel CSS

When using the `@cmpsr/carousel` library in your React project, it is important to import the corresponding CSS file in order for the carousel to display correctly. The `@cmpsr/carousel` library relies on the Pure React Carousel CSS file to provide the necessary styles for the carousel components.

To import the Pure React Carousel CSS file, you can simply add the following line to your project's entry point file (usually index.js or App.js):

```
import 'pure-react-carousel/dist/react-carousel.es.css';
```

This will ensure that the necessary styles are loaded and applied to the carousel components when they are rendered. Without this CSS file, the carousel may not display correctly or may not function as expected.

Please note that the library requires both the React and ReactDOM libraries to be installed and imported in your project, as well as the Pure React Carousel CSS file. Additionally, make sure to follow the documentation provided by the library for proper implementation and usage of the carousel components.

### Releasing your changes

Before creating the pull request you have to generate a changeset for your components, follow the instructions in [here](https://github.com/cmpsr/composer#changesets).
