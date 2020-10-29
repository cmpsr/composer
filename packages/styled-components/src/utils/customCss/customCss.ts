import { StyledCssProps } from 'components/Components.styled.types';
import styled, { AnyStyledComponent } from 'styled-components';

export const customCss = (props: { css?: string }): string =>
  props.css ? `&.custom {${props.css}}` : '';

export const withCustomCss = (Component: AnyStyledComponent) => styled(
  Component
)<StyledCssProps>`
  ${(props) => customCss(props)}
`;
