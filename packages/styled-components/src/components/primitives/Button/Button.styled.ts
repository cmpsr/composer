import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

interface Props {
  theme: any;
}

export const StyledButton = styled.button<Props>`
  text-align: center;
  user-select: none;
  font-weight: 500;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
    border-style: solid;
    border-width: 1px;
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
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }
`;
