import React from 'react';
import styled from 'styled-components';
import { Icon, favorite as Favorite } from 'components/primitives/Icon';
import { Link } from '.';
import { Typography } from 'components/primitives/Typography';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Link',
  component: Link,
};

export const Text = () => (
  <Link url="#">
    <Typography tag={Typography.Tags.Span} type={Typography.Types.Link}>
      Text Link
    </Typography>
  </Link>
);

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = () => (
  <Link url="#">
    <FlexContainer>
      <Typography tag={Typography.Tags.Span} type={Typography.Types.Link}>
        Text & Icon
      </Typography>
      <Icon className="fill-current" width={20} height={20}>
        <Favorite type="filled" />
      </Icon>
    </FlexContainer>
  </Link>
);

export const Primary = () => (
  <Link url="#" type={Link.Types.Primary}>
    Primary Link
  </Link>
);

export const Secondary = () => (
  <Link url="#" type={Link.Types.Secondary}>
    Secondary Link
  </Link>
);

export const Playground = () => (
  <Link
    url={text('Url', 'https://impulsum.vc')}
    type={select('Type', Link.Types, Link.Types.Text)}
    target={select('Target', Link.Target, Link.Target.Blank)}
  >
    {text('Title', 'Link title')}
  </Link>
);
