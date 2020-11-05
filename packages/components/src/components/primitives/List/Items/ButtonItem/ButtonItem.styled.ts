import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Button } from 'components/primitives/Button';
import { StyledBaseProps } from 'components/Components.styled.types';

type Props = StyledBaseProps;

export const StyledButton = styled(Button)<Props>`
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
