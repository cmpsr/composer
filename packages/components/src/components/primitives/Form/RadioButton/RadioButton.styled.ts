import styled from 'styled-components';
import { Typography } from 'components/primitives/Typography';
import { getTheme } from 'utils/getTheme';
import { StyledCssProps } from 'components/Components.styled.types';
import { customCss } from 'utils/customCss';

export const StyledTypography = styled(Typography)`
  display: inline-flex;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-left: 0.625rem;
`;

export const StyledInput = styled.input<StyledCssProps>`
  margin: 0 0 0 0.625rem;
  border-radius: 9999px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  width: 1.25rem;
  height: 1.25rem;
  appearance: none;

  ${(props) => customCss(props)}

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
