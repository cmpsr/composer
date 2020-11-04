import { StyledBaseProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

type Props = StyledBaseProps;

export const StyledOrderedList = styled.ol<Props>`
  flex-grow: 0;
  display: inline-flex;
  justify-content: center;
  list-style: none;
`;

export const StyledListItem = styled.li<Props>`
  margin-right: 0.25rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledHr = styled.hr<Props>`
  border-bottom-width: 4px;
  border-top-width: 2px;
  border-style: solid;
  border-radius: 0.25rem;
  width: 2.5rem;
  border-color: ${(props) => getTheme(props).colors.fillBlack200};

  &.active {
    border-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }
`;
