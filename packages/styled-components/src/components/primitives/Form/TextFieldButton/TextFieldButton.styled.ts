import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { TextField } from 'components/primitives/Form/TextField';
import { customCss } from 'utils/customCss';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledTextField = styled(TextField)<StyledCssProps>`
  &&& {
    border-radius: 0.375rem 0 0 0.375rem;
  }

  ${(props) => customCss(props)}
`;
