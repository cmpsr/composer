import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';

interface Props {
  theme: any;
}

export const StyledLink = styled.a<Props>`
  color: ${(props) => getTheme(props).colors.fillBlack500};
  flex-grow: 0;

  &.image {
    display: flex;
    justify-content: center;
  }

  &.primary {
    color: ${(props) => getTheme(props).colors.fillWhite};
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
    text-align: center;
    user-select: none;
    font-weight: 500;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.secondary {
    color: ${(props) => getTheme(props).colors.fillPrimary900};
    background-color: ${(props) => getTheme(props).colors.fillWhite};
    text-align: center;
    user-select: none;
    font-weight: 500;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }
`;
