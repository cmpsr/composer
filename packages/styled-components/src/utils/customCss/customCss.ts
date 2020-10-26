export const customCss = (props: { css?: string }): string =>
  props.css ? `&.custom {${props.css}}` : '';
