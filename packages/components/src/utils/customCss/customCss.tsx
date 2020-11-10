export const customCss = (props: { css?: string }): string =>
  props.css ? `& {${props.css}}` : '';
