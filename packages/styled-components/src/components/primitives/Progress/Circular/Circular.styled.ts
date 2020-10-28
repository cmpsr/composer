import styled, { keyframes } from 'styled-components';
import { getTheme } from 'utils/getTheme';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
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
`;

export const StyledSvg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  position: relative;

  &.small {
    height: 20px;
    position: relative;
    width: 20px;
  }

  &.large {
    height: 100px;
    width: 100px;
  }
`;

export const StyledCircle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;

  &.primary {
    stroke: ${(props) => getTheme(props).colors.fillPrimary900};
  }
`;
