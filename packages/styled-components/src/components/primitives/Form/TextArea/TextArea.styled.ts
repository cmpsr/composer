import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { withCustomCss } from 'utils/withCustomCss';
import {
  StyledBaseProps,
  StyledCssProps,
} from 'components/Components.styled.types';

type Props = StyledBaseProps & StyledCssProps;

export const StyledTextArea = withCustomCss<
  Props & React.TextareaHTMLAttributes<Props>
>(styled.textarea`
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  position: relative;
  display: block;
  width: 100%;
  padding: 0.75rem;
  color: ${(props) => getTheme(props).Typography.colors.dark100};
  z-index: 10;
  font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
  font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};
  appearance: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.outlineFormFilled};
  resize: none;

  &.rounded {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.rounded};
  }

  &.semiRounded {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.semiRounded};
  }

  &.rectangle {
    border-radius: ${(props) => getTheme(props).Input.borderRadius.rectangle};
  }

  &.invalid {
    border-color: ${(props) => getTheme(props).colors.fillSystemError};
  }

  &:placeholder {
    color: ${(props) => getTheme(props).colors.outlineFormFilled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => getTheme(props).colors.outlineFormFocus};
  }

  &:disabled {
    background-color: ${(props) => getTheme(props).colors.fillFormDisabled};
    border-color: ${(props) => getTheme(props).colors.outlineFormDisabled};
    color: ${(props) => getTheme(props).Typography.colors.dark50};
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
  }
`);
