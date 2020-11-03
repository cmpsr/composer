import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { withCustomCss } from 'utils/withCustomCss';
import { Props } from 'components/primitives/Form/TextField/TextField.types';
import { TextField } from 'components/primitives/Form/TextField';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledTextField = withCustomCss<
  StyledCssProps &
    Props &
    React.ClassAttributes<StyledCssProps> &
    React.InputHTMLAttributes<StyledCssProps>
>(styled(TextField)`
  &&& {
    border-radius: 0.375rem 0 0 0.375rem;
  }
`);
