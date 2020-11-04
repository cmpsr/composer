import {
  StyledCssProps,
  StyledBaseProps,
} from 'components/Components.styled.types';
import { Icon } from 'components/primitives/Icon';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledIconWrapper = styled.div`
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

export const StyledIcon = styled(Icon)<StyledBaseProps>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillBlack300};
`;

export const StyledSelect = styled.select<StyledCssProps>`
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
