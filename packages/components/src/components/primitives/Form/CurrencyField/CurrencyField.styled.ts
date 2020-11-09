import { Icon } from 'components/primitives/Icon';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';
import { StyledCssProps } from 'components/Components.styled.types';

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledIconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  background-color: ${(props) => getTheme(props).colors.fillBlack200};
  color: ${(props) => getTheme(props).colors.fillWhite};

  &.rounded {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  &.semiRounded {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  &.rectangle {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const StyledIcon = styled(Icon)`
  fill: currentColor;
`;

export const StyledInput = styled.input<StyledCssProps>`
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  position: relative;
  display: block;
  width: 100%;
  padding: 0.75rem;
  color: ${(props) => getTheme(props).Typography.colors.dark100};
  z-index: 10;
  font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
  font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};
  border: 1px solid ${(props) => getTheme(props).colors.outlineFormFilled};
  appearance: none;

  ${(props) => customCss(props)}

  &.rounded {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  &.semiRounded {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &.rectangle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.invalid {
    border-color: ${(props) => getTheme(props).colors.fillSystemError};
  }

  &:focus {
    outline: 0;
    border-color: ${(props) => getTheme(props).colors.outlineFormFocus};
  }

  &::placeholder {
    color: ${(props) => getTheme(props).colors.outlineFormFilled};
  }

  &:disabled {
    background-color: ${(props) => getTheme(props).colors.fillFormDisabled};
    border-color: ${(props) => getTheme(props).colors.outlineFormDisabled};
    color: ${(props) => getTheme(props).Typography.colors.dark50};
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
  }
`;

export const StyledRightChildContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: 0;
  padding-right: 0.75rem;
  z-index: 20;
`;
