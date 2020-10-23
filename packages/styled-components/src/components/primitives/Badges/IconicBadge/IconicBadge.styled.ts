import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Icon } from 'components/primitives/Icon';

interface Props {
  theme: any;
}

export const StyledContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  height: ${(props) => getTheme(props).IconicBadge.height};
  width: ${(props) => getTheme(props).IconicBadge.width};

  &.primary {
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }

  &.secondary {
    background-color: ${(props) => getTheme(props).colors.fillSecondary900};
  }

  &.error {
    background-color: ${(props) => getTheme(props).colors.fillSystemError};
  }
`;

export const StyledIcon = styled(Icon)<Props>`
  color: ${(props) => getTheme(props).colors.fillWhite};
  fill: currentColor;
  padding: ${(props) => getTheme(props).IconicBadge.padding};
`;
