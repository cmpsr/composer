import React from 'react';
import { LinkItem } from '.';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';
import { Link } from 'components/primitives/Link';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/List/Items/LinkItem',
  component: LinkItem,
};

export const Icons = () => (
  <LinkItem icon={<Favorite type={Icon.Types.Filled} />} title="Title" />
);

export const Playground = () => (
  <LinkItem
    icon={<Favorite type={Icon.Types.Filled} />}
    url={text('Url', 'https://impulsum.vc')}
    route={{ slug: text('Route slug', 'route') }}
    title={text('Title', 'Title')}
    subTitle={text('SubTitle', 'SubTitle')}
    target={select('Target', Link.Target, Link.Target.Blank)}
  />
);
