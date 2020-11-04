import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { StyledBaseProps } from 'components/Components.styled.types';
import { Icon } from 'components/primitives/Icon';
import { TextField } from 'components/primitives/Form/TextField';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledIcon = styled(Icon)<StyledBaseProps>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillPrimary900};

  &.notFocused {
    color: ${(props) => getTheme(props).colors.fillBlack200};
  }
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
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

export const StyledTextField = styled(TextField)`
  box-sizing: border-box;

  &.left {
    padding-left: 2.5rem;
  }
`;
