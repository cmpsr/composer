import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Message } from 'components/primitives';
import { Icon } from 'components/primitives/Icon';
import { Typography } from 'components/primitives/Typography';

interface Props {
  theme: any;
}

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.left {
    align-items: flex-start;
  }

  &.right {
    align-items: flex-end;
  }
`;

export const StyledMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledMessage = styled(Message)`
  width: 100%;

  &.left {
    order: 2;
  }

  &.right {
    order: 1;
  }
`;

export const StyledIconWrapper = styled.div`
  margin-bottom: 0.5rem;

  &.left {
    margin-right: 0.25rem;
    order: 1;
  }

  &.right {
    margin-left: 0.25rem;
    order: 2;
  }
`;

export const StyledIcon = styled(Icon)<Props>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillSystemError};
`;

export const StyledErrorWrapper = styled.div`
  margin-bottom: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

export const StyledErrorText = styled(Typography)`
  color: ${(props) => getTheme(props).colors.fillSystemError};
  margin: 0;
`;
