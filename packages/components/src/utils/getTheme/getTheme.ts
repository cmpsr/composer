import theme from 'styles/theme';

export const getTheme = (props: any) =>
  isValidTheme(props) ? props.theme : theme;

const isValidTheme = (props: any) => Object.keys(props.theme || {}).length > 0;
