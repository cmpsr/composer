import { StyledBaseProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

type Props = StyledBaseProps;

export const StyledPopper = styled.div<Props>`
  color: white;
  border-radius: 0.125rem;
  padding: 0.25rem 1.25rem;

  &.primary900 {
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }
  &.primary100 {
    background-color: ${(props) => getTheme(props).colors.fillPrimary100};
  }
`;

export const StyledArrow = styled.div<Props>`
  position: absolute;
  z-index: 10;
  width: 0.5rem;
  height: 0.5rem;

  &:before {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    z-index: 10;
    content: '';
    transform: rotate(45deg);
  }

  &.primary900::before {
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }
  &.primary100::before {
    background-color: ${(props) => getTheme(props).colors.fillPrimary100};
  }

  &.top {
    bottom: -0.25rem;
  }
  &.bottom {
    top: -0.25rem;
  }
  &.right {
    left: -0.25rem;
  }
  &.left {
    right: -0.25rem;
  }
`;
