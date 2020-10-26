import styled from 'styled-components';
import { Icon } from 'components/primitives/Icon';
import { List } from 'components/primitives/List';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledAnchor = styled.a`
  display: flex;
  align-items: middle;
  flex: 1 1 0%;
`;

export const StyledIcon = styled(Icon)`
  fill: currentColor;
  margin-left: 0.5rem;
  pointer-events: none;
`;

export const StyledList = styled(List)`
  min-width: 10rem;
`;
