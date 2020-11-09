import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { getTheme } from 'utils/getTheme';

export const StyledButton = styled.button<StyledCssProps>`
  text-align: center;
  user-select: none;
  font-weight: 500;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;

  ${(props) => customCss(props)}

  &.primary {
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
    color: ${(props) => getTheme(props).colors.fillWhite};

    &:active {
      background-color: ${(props) =>
        getTheme(props).colors.fillStatePrimaryPressed};
    }

    &:hover {
      background-color: ${(props) =>
        getTheme(props).colors.fillStatePrimaryHover};
    }

    &:disabled {
      background-color: ${(props) =>
        getTheme(props).colors.fillStatePrimaryDisabled};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${(props) => getTheme(props).colors.fillPrimary900};
    border-color: ${(props) => getTheme(props).colors.fillPrimary900};

    &:active {
      background-color: ${(props) =>
        getTheme(props).colors.fillStateSecondaryPressed};
    }

    &:hover {
      background-color: ${(props) =>
        getTheme(props).colors.fillStateSecondaryHover};
    }

    &:disabled {
      background-color: ${(props) =>
        getTheme(props).colors.fillStateSecondaryDisabled};
    }
  }

  &.rounded {
    border-radius: ${(props) => getTheme(props).Button.borderRadius.rounded};
  }

  &.semiRounded {
    border-radius: ${(props) =>
      getTheme(props).Button.borderRadius.semiRounded};
  }

  &.rectangle {
    border-radius: ${(props) => getTheme(props).Button.borderRadius.rectangle};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;
