import styled from 'styled-components';
import { Typography } from 'components/primitives/Typography';
import { getTheme } from 'utils/getTheme';
import { StyledBaseProps } from 'components/Components.styled.types';

export const StyledTypography = styled(Typography)`
  display: inline-flex;
  align-items: center;
`;

export const StyledLabel = styled.span`
  margin-left: 0.625rem;
`;

export const StyledInput = styled.input<StyledBaseProps>`
  margin-left: 0.625rem;
  border-radius: 9999px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  width: 1.25rem;
  height: 1.25rem;
  appearance: none;

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    margin: 20% auto;
    border-radius: 50%;
  }
  &:checked:before {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryEnabled};
  }
  &:disabled:checked:before {
    background-color: ${(props) =>
      getTheme(props).colors.fillStatePrimaryDisabled};
  }
  &:focus  {
    outline: none;
  }
  &:disabled {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryDisabled};
  }
`;
