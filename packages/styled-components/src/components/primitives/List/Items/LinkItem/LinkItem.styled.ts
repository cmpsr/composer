import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Icon } from 'components/primitives';
import { StyledBaseProps } from 'components/Components.styled.types';

type Props = StyledBaseProps;

export const StyledAnchor = styled.a<Props>`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 1.5rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => getTheme(props).colors.fillStateUiHover};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled(Icon)<Props>`
  fill: currentColor;
  margin-right: 0.75rem;
`;

export const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
`;
