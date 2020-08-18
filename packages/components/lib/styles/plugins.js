const plugin = require('tailwindcss/plugin');
const pseudoElements = require('./pseudoElements');

module.exports = [
  plugin(function ({ addVariant, e, addUtilities }) {
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
