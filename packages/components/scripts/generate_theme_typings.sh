# Filter list of packages by desired package
packageName="@chakra-ui/cli@"

# Detect package installation
isPackageInstalledGlobal=$(npm list -g --depth=0 | grep $packageName)
isPackageInstalledLocal=$(npm list --depth=0 | grep $packageName)

# Generate theme typings when package is installed
if [ -n "$isPackageInstalledGlobal" ] || [ -n "$isPackageInstalledLocal" ]
then
  npm run libbuild || true
  chakra-cli tokens lib/theme/ComposerTheme/theme.js
else
  echo "\033[33m[WARNING: Composer]\033[0m"
  echo "\033[33mTheme typings have not been generated since @chakra-ui/cli is not installed. If you want to generate the types, install the library and run the npm install command again.\033[0m"
fi
