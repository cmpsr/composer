![](https://github.com/cmpsr/composer/workflows/Tests/badge.svg) [![codecov](https://codecov.io/gh/cmpsr/composer/branch/master/graph/badge.svg)](https://codecov.io/gh/cmpsr/composer) [![Known Vulnerabilities](https://snyk.io/test/github/cmpsr/composer/badge.svg)](https://snyk.io/test/github/cmpsr/composer})

# Composer

## Changesets

We use [changesets](https://github.com/atlassian/changesets) to version bump and record changeset information. Prior to making a pull request, a developer should run the following command to run through the changesets process:

`yarn changesets`

The tool will ask you which packages have changed, the semver version of the change and give you the option to make a changelog entry.

Once this PR has been merged into `master`, the workflows action defined in `./.github/workflows/publish.yml` will create a new PR called `Package Versions` with the changeset information if the PR doesn't already exist. If it does exist it will append the new information to the existing PR.

## Publishing a release

Merging the `Package Versions` PR will automate the publishing of the changed packages to npm.
