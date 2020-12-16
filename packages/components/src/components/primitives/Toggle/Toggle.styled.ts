import styled from 'styled-components';
import {
  StyledBaseProps,
  StyledCssProps,
} from 'components/Components.styled.types';
import { getTheme } from 'utils/getTheme';

type Props = StyledBaseProps & StyledCssProps;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
`;

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledSpan = styled.span<Props>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => getTheme(props).colors.fillBlack200};
  transition: 0.4s;
  border-radius: 9999px;

  &.enabled {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryEnabled};
    :before {
      transform: translateX(16px);
    }
  }

  &.disabled {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryDisabled};
    :before {
      background-color: ${(props) =>
        getTheme(props).colors.fillStateUiDisabled};
    }
  }

  :before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 2px;
    bottom: 1px;
    background-color: ${(props) => getTheme(props).colors.fillStateUiEnabled};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.17);
  }

  :not(.disabled) {
    :hover:before {
      background-color: ${(props) => getTheme(props).colors.fillStateUiHover};
    }
    :active:before {
      background-color: ${(props) => getTheme(props).colors.fillStateUiPressed};
    }
  }
`;
