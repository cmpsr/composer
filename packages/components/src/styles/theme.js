const colors = require('./colors');
const fonts = require('./fonts');

module.exports = {
  fontFamily: {
    sans: ['Roboto-Regular'],
    'intensity-light': 'Roboto-Light',
    'intensity-regular': 'Roboto-Regular',
    'intensity-medium': 'Roboto-Medium',
    'intensity-bold': 'Roboto-Bold',
    ...fonts.fontFamily,
  },
  extend: {
    padding: {
      '0.15': '0.15rem',
      '0.375': '0.375rem',
      '0-625': '0.625rem',
      '1.125': '1.125rem',
      '3.5': '3.5rem',
    },
    boxShadow: {
      '4%':
        '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0, 0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
      '12%':
        '0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px -4px rgba(0, 0, 0, 0.2)',
    },
    borderColor: {
      'fill-secondary': {
        '800': '#44d081',
      },
    },
    borderRadius: {
      'btn-rounded': '1.75rem',
      'btn-semi-rounded': '0.5rem',
      'btn-rectangle': '0',
      'input-rounded': '1.5rem',
      'input-semi-rounded': '0.25rem',
      'input-rectangle': '0',
      'message-rounded': '22px',
      'message-semirounded': '6px',
      'modal-rounded': '1.375rem',
      'modal-semi-rounded': '0.25rem',
      'modal-rectangle': '0',
    },
    stroke: {
      'fill-primary': {
        '900': '#414141',
      },
    },
    colors: {
      ...colors,
      // Typographies
      dark: {
        '100': '#000000',
        '50': '#828282',
        '25': '#C8C8C8',
      },
      light: {
        '100': '#FFFFFF',
        '50': '#FFFFFF',
        '25': '#FFFFFF',
      },
      accent: {
        '100': '#2A5AA7',
        '50': '#2A5AA7',
        '25': '#2A5AA7',
      },
    },
    fontSize: fonts.fontSize,
    lineHeight: fonts.lineHeight,
    letterSpacing: fonts.letterSpacing,
    fontWeight: fonts.fontWeight,
    width: {
      '1.75': '1.75rem',
      '2.15': '2.15rem',
      '2.6': '2.6rem',
      '3.5': '3.5rem',
      '480': '30rem',
    },
    height: {
      '1.75': '1.75rem',
      '2.15': '2.15rem',
      '2-625': '2.625rem',
      '2.6': '2.6rem',
      '3.5': '3.5rem',
    },
    minHeight: {
      '2-5': '2.5rem',
      '2-625': '2.625rem',
      '3': '3rem',
    },
    minWidth: {
      '3': '3rem',
      '8-125': '8.125rem',
      '10': '10rem',
      '20-625': '20.625rem',
    },
    margin: {
      '-0-22': '-0.22rem',
      '0-625': '0.625rem',
      '3-5': '3.5rem',
    },
    maxWidth: {
      '8-75': '8.75rem',
      '13': '13rem',
      '13-75': '13.75rem',
      '19': '19rem',
      '37': '37rem',
      '1/2': '50%',
      '1/3': '33.3%',
      '2/3': '66.6%',
      '3/4': '75%',
      '85': '85%',
      '90': '90%',
      content: '1280px',
      'hero-copy': '800px',
      'hero-copy-medium': '600px',
      'hero-copy-small': '500px',
    },
    inset: {
      '1/2': '50%',
      '1': '1rem',
      '-0-25': '-0.25rem',
    },
    backgroundOpacity: {
      '40': '.4',
    },
  },
};
