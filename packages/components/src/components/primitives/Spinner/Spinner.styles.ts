import { StyledBaseProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

type Props = StyledBaseProps;

export const StyledSvg = styled.svg<Props>`
  animation: rotate 2s linear infinite;
  position: relative;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;

  &.small {
    height: 20px;
    width: 20px;
  }
  &.large {
    height: 100px;
    width: 100px;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`;

export const StyledCircle = styled.circle<Props>`
  &.primary {
    stroke: ${(props) => getTheme(props).colors.fillPrimary900};
  }
  &.white {
    stroke: ${(props) => getTheme(props).colors.fillWhite};
  }
`;
