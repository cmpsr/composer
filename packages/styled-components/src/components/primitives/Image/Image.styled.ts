import styled from 'styled-components';

import { StyledCssProps } from 'components/Components.styled.types';
import { withCustomCss } from 'utils/withCustomCss';

type Props = StyledCssProps & {
  as?: string;
  type?: string;
};

export const StyledImage = withCustomCss<
  Props & React.ImgHTMLAttributes<Props>
>(styled.img`
  user-select: none;
`);
