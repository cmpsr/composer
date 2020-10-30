import {
  StyledCssProps,
  StyledBaseProps,
} from 'components/Components.styled.types';
import { ExpandableTextField } from 'components/primitives/Form/ExpandableTextField';
import { Icon } from 'components/primitives/Icon';
import styled from 'styled-components';
import { customCss } from 'utils/customCss';
import { getTheme } from 'utils/getTheme';

export const StyledWrapper = styled.div<StyledBaseProps>`
  display: flex;
  align-items: flex-end;
`;

export const StyledIconWrapper = styled.div<StyledBaseProps>`
  min-height: 2.625rem;

  &.left {
    order: 1;
    padding-right: 1rem;
  }
  &.right {
    order: 2;
    padding-left: 1rem;
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    min-height: 3rem;
  }
`;

export const StyledIcon = styled(Icon)<StyledBaseProps>`
  color: ${(props) => getTheme(props).colors.fillPrimary600};
  fill: currentColor;
  cursor: pointer;
  margin-top: 0.5rem;

  &.enabled {
    color: ${(props) => getTheme(props).colors.fillPrimary900};
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    margin-top: 0.625rem;
  }
`;

export const StyledExpandableTextField = styled(ExpandableTextField)<
  StyledCssProps
>`
  &.left {
    order: 2;
  }
  &.right {
    order: 1;
  }

  ${(props) => customCss(props)}
`;
