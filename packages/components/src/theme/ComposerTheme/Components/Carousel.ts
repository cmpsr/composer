import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Carousel: ComponentStyleConfig = {
  baseStyle: {
    buttonStyles: {
      width: '24px',
      height: '24px',
      backgroundColor: 'transparent',
      _disabled: { backgroundColor: 'transparent' },
      _hover: { svg: { color: 'text-link-primary-hover' } },
      _active: { svg: { color: 'text-link-primary-pressed' } },
      _focus: { backgroundColor: 'transparent', boxShadow: 'none' },
    },
    chevronStyles: {
      width: '100%',
      height: '100%',
      color: 'text-link-primary-default',
    },
    dotStyles: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'primary-disabled',
      _disabled: { background: 'primary-default' },
    },
  },
};

// Styles for pure-react-carousel library
export const pureReactCarouselStyles = {
  '.container___2O72F': {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  '.overlay___IV4qY': {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0,
    cursor: 'zoom-in',
    transition: 'opacity .3s,transform .3s',
  },
  '.slide___3-Nqo': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    height: 0,
    margin: 0,
    listStyleType: 'none',
  },
  '.slide___3-Nqo:focus': {
    outline: 'none !important',
  },
  '.slideHorizontal___1NzNV': {
    float: 'left',
  },
  '[dir=rtl] .slideHorizontal___1NzNV': {
    direction: 'rtl',
    transform: 'scaleX(-1)',
  },
  '.slideInner___2mfX9': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  '.focusRing___1airF': {
    position: 'absolute',
    top: '5px',
    right: '5px',
    bottom: '5px',
    left: '5px',
    pointerEvents: 'none',
    outlineWidth: '5px',
    outlineStyle: 'solid',
    outlineColor: 'Highlight',
  },
  '@media (-webkit-min-device-pixel-ratio:0)': {
    '.focusRing___1airF': {
      outlineStyle: 'auto',
      outlineColor: '-webkit-focus-ring-color',
    },
  },
  '.horizontalSlider___281Ls': {
    position: 'relative',
    overflow: 'hidden',
    touchAction: 'pan-y pinch-zoom',
  },
  '[dir=rtl] .horizontalSlider___281Ls': {
    direction: 'ltr',
    transform: 'scaleX(-1)',
  },
  '.horizontalSliderTray___1L-0W': {
    overflow: 'hidden',
    width: '100%',
  },
  '.verticalSlider___34ZFD': {
    position: 'relative',
    overflow: 'hidden',
  },
  '.verticalSliderTray___267D8': {
    overflow: 'hidden',
  },
  '.verticalTray___12Key': {
    float: 'left',
  },
  '.verticalSlideTrayWrap___2nO7o': {
    overflow: 'hidden',
  },
  '.sliderTray___-vHFQ': {
    display: 'block',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  '.sliderAnimation___300FY': {
    transition: 'transform .5s',
    transitionTimingFunction: 'cubic-bezier(.645,.045,.355,1)',
    willChange: 'transform',
  },
};
