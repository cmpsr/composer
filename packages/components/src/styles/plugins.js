const plugin = require('tailwindcss/plugin');
const flatMap = require('lodash/flatMap');
const omit = require('lodash/omit');
const pseudoElements = require('./pseudoElements');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

module.exports = [
  plugin(function ({ addVariant, e, addUtilities, theme, variants }) {
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
    const utilities = flatMap(omit(colors, 'default'), (value, modifier) => ({
      [`.${e(`border-t-${modifier}`)}`]: {
        borderTopColor: `${value}`,
      },
      [`.${e(`border-r-${modifier}`)}`]: {
        borderRightColor: `${value}`,
      },
      [`.${e(`border-b-${modifier}`)}`]: {
        borderBottomColor: `${value}`,
      },
      [`.${e(`border-l-${modifier}`)}`]: {
        borderLeftColor: `${value}`,
      },
    }));

    addUtilities(utilities, variants('borderColor'));
    addUtilities(
      {
        '.empty-content': {
          content: "''",
        },
      },
      ['before', 'after']
    );
  }),
];
