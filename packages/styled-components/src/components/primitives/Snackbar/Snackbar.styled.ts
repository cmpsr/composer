import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Button } from 'components/primitives/Button';
import { Typography } from 'components/primitives/Typography';
import { ToastContainer } from 'react-toastify';

interface Props {
  theme: any;
}

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    box-shadow: 0px 12px 17px 2px rgba(0, 0, 0, 0.14),
      0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px -4px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    padding: 1.125rem 1rem;
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
