import {
  StyledCssProps,
  StyledBaseProps,
} from 'components/Components.styled.types';
import { Icon } from 'components/primitives/Icon';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';

export const StyledOptionMobile = styled.option`
  background: red;
`;
export const StyledWrapperMobile = styled.div`
  position: relative;
`;

export const StyledIconWrapperMobile = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 10;
  right: 0;
  padding-right: 0.75rem;
`;

export const StyledIconMobile = styled(Icon)<StyledBaseProps>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillBlack300};
`;

export const StyledSelectMobile = styled.select<StyledCssProps>`
  appearance: none;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 3rem;
  width: 100%;
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.outlineFormFilled};
  border-radius: 0.25rem;
  text-align: left;
  color: ${(props) => getTheme(props).colors.outlineFormFilled};

  letter-spacing: ${(props) =>
    getTheme(props).Typography.sm.letterSpacing.form};
  line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.form};
  font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.form};
  font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
  font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};
  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.md.letterSpacing.form};
    line-height: ${(props) => getTheme(props).Typography.md.lineHeight.form};
    font-weight: ${(props) => getTheme(props).Typography.md.fontWeight.form};
    font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
  }

  &.invalid {
    border-color: ${(props) => getTheme(props).colors.fillSystemError};
  }
  &.itemSelected {
    color: ${(props) => getTheme(props).Typography.colors.dark100};
  }

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  }
  &:disabled {
    background-color: ${(props) => getTheme(props).colors.fillFormDisabled};
    border-color: ${(props) => getTheme(props).colors.outlineFormDisabled};
    color: ${(props) => getTheme(props).colors.outlineFormFilled};
  }

  ${(props) => customCss(props)}
`;

export const StyledUnorderedListDesktop = styled.ul<StyledBaseProps>`
  padding-left: 0;
  margin: 0;
  list-style: none;
  border-width: 1px;
  border-style: solid;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-color: ${(props) => getTheme(props).colors.outlinePrimary900};
`;

export const StyledListItemDesktop = styled.li<StyledBaseProps>`
  padding: 0.75rem;

  &:hover {
    background-color: ${(props) => getTheme(props).colors.fillStateUiHover};
  }
`;

export const StyledIconDesktop = styled(Icon)<StyledBaseProps>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillBlack300};
`;

export const StyledButtonDesktop = styled.button<StyledCssProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 3rem;
  width: 100%;
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.outlineFormFilled};
  border-radius: 0.25rem;
  text-align: left;
  color: ${(props) => getTheme(props).colors.outlineFormFilled};

  &.invalid {
    border-color: ${(props) => getTheme(props).colors.fillSystemError};
  }
  &.itemSelected {
    color: ${(props) => getTheme(props).Typography.colors.dark100};
  }

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  }
  &:disabled {
    background-color: ${(props) => getTheme(props).colors.fillFormDisabled};
    border-color: ${(props) => getTheme(props).colors.outlineFormDisabled};
    color: ${(props) => getTheme(props).colors.outlineFormFilled};
  }

  ${(props) => customCss(props)}
`;
