import React from 'react';
import { LinkItem } from '.';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';
import { Link } from 'components/primitives/Link';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/List/Items/LinkItem',
  component: LinkItem,
};

export const Title = () => (
  <>
    <h1>LinkItem title</h1>
    <LinkItem title="Title" />
  </>
);

export const SubTitle = () => (
  <>
    <h1>LinkItem subtitle</h1>
    <LinkItem title="Title" subTitle="SubTitle" />
  </>
);

export const Icons = () => (
  <>
    <h1>LinkItems icons</h1>
    {Object.keys(Icon.Types).map((type: any) => (
      <>
        <LinkItem icon={<Favorite type={Icon.Types[type]} />} title="Title" />
        <br />
      </>
    ))}
  </>
);

export const Targets = () => (
  <>
    <h1>LinkItems targets</h1>
    {Object.keys(Link.Target).map((target: any) => (
      <>
        <LinkItem target={Link.Target[target]} title="Title" />
        <br />
      </>
    ))}
  </>
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
