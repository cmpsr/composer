import styled from 'styled-components';

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
    background-color: ${props => props.theme.colors.fillPrimary900};
    color: ${props => props.theme.colors.fillWhite};

    &:active {
      background-color: ${props => props.theme.colors.fillStatePrimaryPressed};
    }

    &:hover {
      background-color: ${props => props.theme.colors.fillStatePrimaryHover};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.fillStatePrimaryDisabled};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${props => props.theme.colors.fillPrimary900};
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.fillPrimary900};

    &:active {
      background-color: ${props =>
        props.theme.colors.fillStateSecondaryPressed};
    }

    &:hover {
      background-color: ${props => props.theme.colors.fillStateSecondaryHover};
    }

    &:disabled {
      background-color: ${props =>
        props.theme.colors.fillStateSecondaryDisabled};
    }
  }

  &.rounded {
    border-radius: ${props => props.theme.Button.borderRadius.rounded};
  }

  &.semiRounded {
    border-radius: ${props => props.theme.Button.borderRadius.semiRounded};
  }

  &.rectangle {
    border-radius: ${props => props.theme.Button.borderRadius.rectangle};
  }

  &:disabled {
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }
`;
