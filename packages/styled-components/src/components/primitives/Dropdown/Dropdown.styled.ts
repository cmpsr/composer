import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Icon } from 'components/primitives/Icon';

interface Props {
  theme: any;
}

export const StyledWrapper = styled.div<Props>`
  position: relative;
`;

export const StyledAnchor = styled.a<Props>`
  display: flex;
  align-items: middle;
  flex: 1 1 0%;
`;

export const StyledIcon = styled(Icon)<Props>`
  fill: currentColor;
  margin-left: 0.5rem;
  pointer-events: none;
`;
