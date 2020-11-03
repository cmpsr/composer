import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { StyledCssProps } from 'components/Components.styled.types';
import { withCustomCss } from 'utils/withCustomCss';
import { Icon } from 'components/primitives/Icon';
import { TextField } from 'components/primitives/Form/TextField';
import { Props } from 'components/primitives/Form/TextField/TextField.types';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 10;

  &.left {
    left: 0;
    padding-left: 0.75rem;
  }
  &.right {
    right: 0;
    padding-right: 0.75rem;
  }
`;

export const StyledIcon = styled(Icon)`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillBlack200};
`;

export const StyledTextField = withCustomCss<
  StyledCssProps &
    Props &
    React.ClassAttributes<StyledCssProps> &
    React.InputHTMLAttributes<StyledCssProps>
>(styled(TextField)`
  &.left {
    padding-left: 2.5rem;
  }
`);
