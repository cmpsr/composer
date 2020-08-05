const plugin = require('tailwindcss/plugin');
const flatMap = require('lodash/flatMap');
const omit = require('lodash/omit');
const pseudoElements = require('./pseudoElements');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

module.exports = [
  plugin(function({ addVariant, e, addUtilities, theme, variants }) {
    addVariant('important', ({ container }) => {
      container.walkRules(rule => {
        rule.selector = `.\\!${rule.selector.slice(1)}`;
        rule.walkDecls(decl => {
          decl.important = true;
        });
      });
    });

    const escape = e || (x => x);
    pseudoElements.forEach(pseudo => {
      addVariant(pseudo, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`;
        });
      });
    });

    const colors = flattenColorPalette(theme('borderColor'));
    const utilities = flatMap(omit(colors, 'default'), (value, modifier) => ({
      [`.${e(`border-t-${modifier}`)}`]: {
        borderTopColor: `${value} !important`
      },
      [`.${e(`border-r-${modifier}`)}`]: {
        borderRightColor: `${value} !important`
      },
      [`.${e(`border-b-${modifier}`)}`]: {
        borderBottomColor: `${value} !important`
      },
      [`.${e(`border-l-${modifier}`)}`]: {
        borderLeftColor: `${value} !important`
      }
    }));

    addUtilities(utilities, variants('borderColor'));
  })
];
