const plugin = require('tailwindcss/plugin');
const pseudoElements = require('./pseudoElements');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

module.exports = [
  plugin(function ({ addVariant, e, theme, addUtilities, variants }) {
    addVariant('important', ({ container }) => {
      container.walkRules((rule) => {
        rule.selector = `.\\!${rule.selector.slice(1)}`;
        rule.walkDecls((decl) => {
          decl.important = true;
        });
      });
    });

    const escape = e || ((x) => x);
    pseudoElements.forEach((pseudo) => {
      addVariant(pseudo, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`;
        });
      });
    });

    const colors = flattenColorPalette(theme('borderColor'));
    const utilities = Object.keys(colors).map((colorName) => {
      const value = colors[colorName];
      return {
        [`.${e(`border-t-${colorName}`)}`]: {
          borderTopColor: `${value} !important`,
        },
        [`.${e(`border-r-${colorName}`)}`]: {
          borderRightColor: `${value} !important`,
        },
        [`.${e(`border-b-${colorName}`)}`]: {
          borderBottomColor: `${value} !important`,
        },
        [`.${e(`border-l-${colorName}`)}`]: {
          borderLeftColor: `${value} !important`,
        },
      };
    });
    addUtilities(utilities, variants('borderColor'));
  }),
];
