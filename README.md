![](https://github.com/cmpsr/composer/workflows/Tests/badge.svg) [![codecov](https://codecov.io/gh/cmpsr/composer/branch/master/graph/badge.svg)](https://codecov.io/gh/cmpsr/composer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://storybook.cmpsr.io/)

# Composer

This is a monorepo that supports components, analytics, 3rd party integrations (such as contentful), payment methods, messaging and much more.

## Getting Started

You can find all the implementations `packages` folder. Every package has his own readme.

One best way to start working on this project is to run [components package](https://github.com/cmpsr/composer/blob/master/packages/components/README.md).
You can do it from the root of this folder by running `yarn run components:storybook`, please be asure to run `yarn install` first on packages.

## How to contribute

### Adding new UI components to the library

For adding new components follow the [implementation guidelines](https://github.com/cmpsr/composer/blob/master/packages/components/README.md).

### Adding new package to this repo

Add the following package under `packages` folder and be sure you add the README file, scripts on root package.json, so everyone can understand how to use it correctly. Don't forget to push vscode and idea run configurations too!

### Tagging versions

We use [changesets](https://github.com/atlassian/changesets) to version bump and record changeset information. Prior to making a pull request, a developer should run the following command to run through the changesets process:

`yarn changeset`

The tool will ask you which packages have changed, the semver version of the change and give you the option to make a changelog entry.

Once this PR has been merged into `master`, the workflows action defined in `./.github/workflows/publish.yml` will create a new PR called `Package Versions` with the changeset information if the PR doesn't already exist. If it does exist it will append the new information to the existing PR.

### Publishing a release

Merging the `Package Versions` PR will automate the publishing of the changed packages to npm.
