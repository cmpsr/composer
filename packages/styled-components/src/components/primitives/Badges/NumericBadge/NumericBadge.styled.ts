import styled from 'styled-components';
import { Typography } from 'components/primitives/Typography';
import { getTheme } from 'utils/getTheme';
import { StyledBaseProps } from 'components/Components.styled.types';

type Props = StyledBaseProps;

export const StyledContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  height: ${(props) => getTheme(props).NumericBadge.height};
  width: ${(props) => getTheme(props).NumericBadge.width};

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

export const StyledTypography = styled(Typography)<Props>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${(props) => getTheme(props).NumericBadge.padding};
`;
