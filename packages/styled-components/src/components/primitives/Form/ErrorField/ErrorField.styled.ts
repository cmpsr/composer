import styled from 'styled-components';
import { Icon } from 'components/primitives/Icon';
import { getTheme } from 'utils/getTheme';
import {
  StyledCssProps,
  StyledBaseProps,
} from 'components/Components.styled.types';
import { customCss } from 'utils/customCss';

export const StyledWrapper = styled.span<StyledCssProps>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.75rem;

  ${(props) => customCss(props)}
`;

export const StyledIcon = styled(Icon)<StyledBaseProps>`
  color: ${(props) => getTheme(props).colors.fillSystemError};
  margin-right: 0.25rem;
  fill: currentColor;
`;
