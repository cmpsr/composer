import {
  StyledCssProps,
  StyledBaseProps,
} from 'components/Components.styled.types';
import { Icon } from 'components/primitives/Icon';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';

export const StyledButton = styled.button<StyledCssProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 3rem;
  width: 100%;
  background-color: ${(props) => getTheme(props).colors.fillFormEnabled};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getTheme(props).colors.outlineFormFilled};
  border-radius: 0.25rem;
  text-align: left;
  color: ${(props) => getTheme(props).colors.outlineFormFilled};

  &.invalid {
    border-color: ${(props) => getTheme(props).colors.fillSystemError};
  }
  &.itemSelected {
    color: ${(props) => getTheme(props).Typography.colors.dark100};
  }

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${(props) => getTheme(props).colors.fillStatePrimaryEnabled};
  }
  &:disabled {
    background-color: ${(props) => getTheme(props).colors.fillFormDisabled};
    border-color: ${(props) => getTheme(props).colors.outlineFormDisabled};
    color: ${(props) => getTheme(props).colors.outlineFormFilled};
  }

  ${(props) => customCss(props)}
`;

export const StyledFlex = styled.div`
  display: flex;
`;

export const StyledIcon = styled(Icon)`
  fill: currentColor;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const StyledItemIcon = styled(Icon)`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillWhite};
  margin-left: 0.75rem;
`;

export const StyledUnorderedList = styled.ul<StyledBaseProps>`
  padding-left: 0;
  margin: 0;
  list-style: none;
  border-width: 1px;
  border-style: solid;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-color: ${(props) => getTheme(props).colors.outlinePrimary900};

  &.hidden {
    display: none;
  }
`;

export const StyledListItem = styled.li<StyledBaseProps>`
  padding: 0.75rem;

  &:hover {
    background-color: ${(props) => getTheme(props).colors.fillStateUiHover};
  }
`;

export const StyledSpan = styled.span<StyledBaseProps>`
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
  justify-content: space-between;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: ${(props) =>
    getTheme(props).colors.fillStatePrimaryEnabled};
`;
