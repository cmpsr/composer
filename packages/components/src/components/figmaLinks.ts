const FIGMA_SPACE = 'https://www.figma.com/file/ewqGU2UQxmYiO8JWaRawP0/Composer---Design-System-(Community)?node-id';

const getLink = (nodeId: string) => `${FIGMA_SPACE}=${nodeId}`;

// Notifications
export const alert = getLink('810%3A9203');
export const inlineAlert = getLink('1402%3A38432');
export const toast = getLink('810%3A9204');
// Primitives
export const accordion = getLink('2361%3A46653');
export const avatar = getLink('816%3A10405');
export const badge = getLink('816%3A9842');
export const breadCrumb = getLink('2700%3A56846');
export const button = getLink('810%3A9965');
export const checkbox = getLink('810%3A10738');
export const closeButton = getLink('3158%3A63091');
export const divider = getLink('2363%3A49038');
export const dropdown = getLink('2914%3A60711');
export const iconButton = getLink('810%3A10779');
export const image = getLink('822%3A11076');
export const input = getLink('810%3A11072');
export const link = getLink('2306%3A46085');
export const pinInput = getLink('2700%3A56882');
export const progressBar = getLink('816%3A9853');
export const progressCircular = getLink('816%3A9918');
export const radio = getLink('810%3A11692');
export const select = getLink('810%3A11718');
export const slider = getLink('810%3A12104');
export const spinner = getLink('1852%3A39288');
export const switchComponentLink = getLink('810%3A11783');
export const symbolComponentLink = getLink('816%3A10522');
export const tabs = getLink('816%3A9837');
export const tag = getLink('810%3A12105');
export const text = getLink('1209%3A16239');
export const textPairing = getLink('1209%3A14583');
export const textarea = getLink('810%3A11812');
export const tooltip = getLink('810%3A11917');
// Theme
export const colors = getLink('1110%3A11092');
export const radius = getLink('809%3A9938');
export const shadows = getLink('806%3A9207');
export const spacing = getLink('806%3A9208');
export const other = getLink('');

const components = {
  // Notifications
  alert,
  inlineAlert,
  toast,
  // Primitives
  accordion,
  avatar,
  badge,
  breadCrumb,
  button,
  checkbox,
  closeButton,
  divider,
  dropdown,
  iconButton,
  image,
  input,
  link,
  pinInput,
  progressBar,
  progressCircular,
  radio,
  select,
  slider,
  spinner,
  switchComponentLink,
  symbolComponentLink,
  tabs,
  tag,
  text,
  textPairing,
  textarea,
  tooltip,
  // Theme
  colors,
  radius,
  shadows,
  spacing,
};

export const getFigmaDesignLink = (component: keyof typeof components) => ({
  design: {
    type: 'figma',
    url: components[component],
  },
});
