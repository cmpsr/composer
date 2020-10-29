import styled, { keyframes } from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Icon } from 'components/primitives/Icon';
import { withCustomCss } from 'utils/customCss';
import {
  StyledBaseProps,
  StyledCssProps,
} from 'components/Components.styled.types';

type Props = StyledBaseProps & StyledCssProps;

export const StyledOverlay = withCustomCss(styled.div<Props>`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => getTheme(props).colors.fillOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
`);

const openAnimation = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const StyledWrapper = withCustomCss(styled.div<Props>`
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  background-color: white;
  position: absolute;
  animation: ${openAnimation} 0.5s ease-in-out;

  &:focus {
    outline: none;
  }

  &.rounded {
    border-radius: ${(props) => getTheme(props).Modal.borderRadius.rounded};
  }

  &.semiRounded {
    border-radius: ${(props) => getTheme(props).Modal.borderRadius.semiRounded};
  }

  &.rectangle {
    border-radius: ${(props) => getTheme(props).Modal.borderRadius.rectangle};
  }
`);

export const StyledCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled(Icon)`
  fill: currentColor;
  cursor: pointer;
`;
