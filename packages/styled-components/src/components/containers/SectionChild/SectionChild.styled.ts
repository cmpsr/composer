import styled from 'styled-components';
import { withCustomCss } from 'utils/withCustomCss';
import { StyledCssProps } from 'components/Components.styled.types';

type Props = StyledCssProps;

export const StyledSectionChild = withCustomCss(styled.div<Props>`
  padding-top: 2rem;
  padding-bottom: 2rem;
`);
