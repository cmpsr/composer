import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { getTheme } from 'utils/getTheme';

export const StyledWrapper = styled.div<StyledCssProps>`
  position: relative;
  width: 100%;
  ${(props) => customCss(props)}
`;

export const StyledPlaceholder = styled.div<StyledCssProps>`
  line-height: 1.5rem;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 20;
  color: ${(props) => getTheme(props).colors.outlineFormFilled};
  font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
  font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
  }
`;

export const StyledExpandable = styled.div<StyledCssProps>`
  line-height: 1.5rem;
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  display: block;
  width: 100%;
  color: ${(props) => getTheme(props).Typography.colors.dark100};
  z-index: 10;
  font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
  font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};
  appearance: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.outlineFormFilled};
  min-height: 2.625rem;
  height: 2.625rem;
  position: relative;
  left: 0;
  top: 0;
  padding: 0.625rem 1rem;
  resize: none;
  box-sizing: border-box;

  &.rounded {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.rounded};
  }
  &.semiRounded {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.semiRounded};
  }
  &.rectangle {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.rectangle};
  }

  &:focus {
    border-color: ${(props) => getTheme(props).colors.outlineFormFocus};
    outline: none;
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    min-height: 3rem;
    height: 3rem;
    font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
  }
`;
