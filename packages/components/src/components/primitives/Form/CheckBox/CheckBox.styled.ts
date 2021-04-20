import { StyledCssProps } from 'components/Components.styled.types';
import { Icon } from 'components/primitives/Icon';
import { Typography } from 'components/primitives/Typography';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { getTheme } from 'utils/getTheme';

export const StyledTypography = styled(Typography)`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
`;

export const StyledLabel = styled.label`
  margin-left: 0.75rem;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  left: -2px;
  top: -2px;
  cursor: pointer;
  ${(props) => `
    fill: currentColor;
    color: ${getTheme(props).colors.fillStatePrimaryEnabled}
  `}
`;

export const StyledInput = styled.input<StyledCssProps>`
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  width: 1.25rem;
  height: 1.25rem;
  appearance: none;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  &:checked:before {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryEnabled};
  }
  &:disabled:checked:before {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryDisabled};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryPressed};
    & + svg {
      color: ${(props) => getTheme(props).colors.fillStatePrimaryPressed};
    }
  }
  &:hover {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryHover};
    & + svg {
      color: ${(props) => getTheme(props).colors.fillStatePrimaryHover};
    }
  }
  &:disabled {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryDisabled};
    cursor: not-allowed;
    & + svg {
      color: ${(props) => getTheme(props).colors.fillStatePrimaryDisabled};
    }
  }

  ${(props) => customCss(props)}
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  align-self: baseline;
`;
