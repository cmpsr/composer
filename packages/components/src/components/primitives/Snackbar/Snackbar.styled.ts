import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Button } from 'components/primitives/Button';
import { Typography } from 'components/primitives/Typography';
import { ToastContainer } from 'react-toastify';
import { StyledBaseProps } from 'components/Components.styled.types';

type Props = StyledBaseProps;

export const StyledToastContainer = styled(ToastContainer)`
  z-index: 9999;
  -webkit-transform: translate3d(0, 0, 9999px);
  position: fixed;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff;

  &.Toastify__toast-container--top-left {
    top: 1em;
    left: 1em;
  }
  &.Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  &.Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }
  &.Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em;
  }
  &.Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  &.Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em;
  }

  @media only screen and (max-width: 480px) {
    &&& {
      width: 100vw;
      padding: 0;
      left: 0;
      margin: 0;
    }

    &.Toastify__toast-container--top-left,
    &.Toastify__toast-container--top-center,
    &.Toastify__toast-container--top-right {
      top: 0;
      transform: translateX(0);
    }
    &.Toastify__toast-container--bottom-left,
    &.Toastify__toast-container--bottom-center,
    &.Toastify__toast-container--bottom-right {
      bottom: 0;
      transform: translateX(0);
    }
    &.Toastify__toast-container--rtl {
      right: 0;
      left: initial;
    }
  }
  .Toastify__toast {
    box-shadow: 0px 12px 17px 2px rgba(0, 0, 0, 0.14),
      0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px -4px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    padding: 1.125rem 1rem;
    position: relative;
    min-height: 64px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    font-family: sans-serif;
    cursor: pointer;
    direction: ltr;
  }
  .Toastify__toast--rtl {
    direction: rtl;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
    }
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  @keyframes Toastify__bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  @keyframes Toastify__bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .Toastify__bounce-enter--top-left,
  .Toastify__bounce-enter--bottom-left {
    animation-name: Toastify__bounceInLeft;
  }
  .Toastify__bounce-enter--top-right,
  .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceInRight;
  }
  .Toastify__bounce-enter--top-center {
    animation-name: Toastify__bounceInDown;
  }
  .Toastify__bounce-enter--bottom-center {
    animation-name: Toastify__bounceInUp;
  }

  .Toastify__bounce-exit--top-left,
  .Toastify__bounce-exit--bottom-left {
    animation-name: Toastify__bounceOutLeft;
  }
  .Toastify__bounce-exit--top-right,
  .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOutRight;
  }
  .Toastify__bounce-exit--top-center {
    animation-name: Toastify__bounceOutUp;
  }
  .Toastify__bounce-exit--bottom-center {
    animation-name: Toastify__bounceOutDown;
  }

  @keyframes Toastify__zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes Toastify__zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .Toastify__zoom-enter {
    animation-name: Toastify__zoomIn;
  }

  .Toastify__zoom-exit {
    animation-name: Toastify__zoomOut;
  }

  @keyframes Toastify__flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  @keyframes Toastify__flipOut {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  .Toastify__flip-enter {
    animation-name: Toastify__flipIn;
  }

  .Toastify__flip-exit {
    animation-name: Toastify__flipOut;
  }

  @keyframes Toastify__slideInRight {
    from {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInLeft {
    from {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInUp {
    from {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInDown {
    from {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }
  @keyframes Toastify__slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }
  .Toastify__slide-enter--top-left,
  .Toastify__slide-enter--bottom-left {
    animation-name: Toastify__slideInLeft;
  }
  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: Toastify__slideInRight;
  }
  .Toastify__slide-enter--top-center {
    animation-name: Toastify__slideInDown;
  }
  .Toastify__slide-enter--bottom-center {
    animation-name: Toastify__slideInUp;
  }

  .Toastify__slide-exit--top-left,
  .Toastify__slide-exit--bottom-left {
    animation-name: Toastify__slideOutLeft;
  }
  .Toastify__slide-exit--top-right,
  .Toastify__slide-exit--bottom-right {
    animation-name: Toastify__slideOutRight;
  }
  .Toastify__slide-exit--top-center {
    animation-name: Toastify__slideOutUp;
  }
  .Toastify__slide-exit--bottom-center {
    animation-name: Toastify__slideOutDown;
  }

  .success {
    background: ${(props) => getTheme(props).colors.fillSystemSuccess};
  }
  .error {
    background: ${(props) => getTheme(props).colors.fillSystemError};
  }
  .warning {
    background: ${(props) => getTheme(props).colors.fillSystemWarning};
  }
  .default {
    background: ${(props) => getTheme(props).colors.fillBlack400};
  }
`;

export const StyledTypography = styled(Typography)<Props>`
  margin: 0;
`;

export const StyledWrapper = styled.div<Props>`
  display: flex;
  align-items: center;

  &.right {
    justify-content: flex-start;
  }
  &.left {
    justify-content: space-between;
  }
`;

export const StyledInformation = styled.div<Props>`
  &.right {
    order: 2;
  }
  &.left {
    order: 1;
  }
`;

export const StyledButton = styled(Button)<Props>`
  padding: 0;
  color: inherit;
  &&& {
    background-color: transparent;
  }
  &.right {
    order: 1;
    padding-right: 1rem;
  }
  &.left {
    order: 2;
  }
`;
