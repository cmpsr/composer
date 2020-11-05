import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Typography } from 'components/primitives/Typography';
import { customCss } from 'utils/customCss';
import {
  StyledBaseProps,
  StyledCssProps,
} from 'components/Components.styled.types';

type Props = StyledBaseProps & StyledCssProps;

export const StyledAvatarText = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &.primary900 {
    background-color: ${(props) => getTheme(props).colors.fillPrimary900};
  }
  &.primary600 {
    background-color: ${(props) => getTheme(props).colors.fillPrimary600};
  }
  &.extraSmall {
    width: 1.75rem;
    height: 1.75rem;
  }
  &.small {
    width: 2.5rem;
    height: 2.5rem;
  }
  &.medium {
    width: 3rem;
    height: 3rem;
  }
  &.large {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const StyledTypography = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.15rem;
`;

export const StyledHighlighter = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 2px solid ${(props) => getTheme(props).colors.fillSecondary800};
  box-sizing: border-box;

  &.extraSmall {
    width: 2.15rem;
    height: 2.15rem;
  }
  &.small {
    width: 3rem;
    height: 3rem;
  }
  &.medium {
    width: 3.5rem;
    height: 3.5rem;
  }
  &.large {
    width: 4rem;
    height: 4rem;
  }
  ${(props) => customCss(props)}
`;
