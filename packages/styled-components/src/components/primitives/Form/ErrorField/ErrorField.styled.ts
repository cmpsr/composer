import styled from 'styled-components';
import { Icon } from 'components/primitives/Icon';
import { getTheme } from 'utils/getTheme';
import { StyledBaseProps } from 'components/Components.styled.types';

export const StyledWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.75rem;
`;

export const StyledIcon = styled(Icon)<StyledBaseProps>`
  color: ${(props) => getTheme(props).colors.fillSystemError};
  margin-right: 0.25rem;
  fill: currentColor;
`;
