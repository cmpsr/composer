import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Dropdown } from '.';
import { LinkItem } from '../List';
import { favorite as Favorite } from 'components/primitives/Icon/icons/action';
import { Typography, TypographyTypes } from 'components/primitives';

export default {
  title: 'Composer/Primitive/Dropdown',
  component: Dropdown,
};

export const basic = () => (
  <Dropdown title={text('Dropdown title', 'Link')}>
    <LinkItem title={text('Title 1', 'title')} />
    <LinkItem title={text('Title 2', 'title')} />
    <LinkItem title={text('Title 3', 'title')} />
    <LinkItem title={text('Title 4', 'title')} />
  </Dropdown>
);

basic.story = {
  name: 'basic',
};

export const withIcon = () => (
  <Dropdown title={text('Dropdown title', 'Link')}>
    <LinkItem
      title={text('Title 1', 'title')}
      icon={<Favorite type="filled" />}
    />
    <LinkItem
      title={text('Title 2', 'title')}
      icon={<Favorite type="filled" />}
    />
    <LinkItem
      title={text('Title 3', 'title')}
      icon={<Favorite type="filled" />}
    />
    <LinkItem
      title={text('Title 4', 'title')}
      icon={<Favorite type="filled" />}
    />
  </Dropdown>
);

withIcon.story = {
  name: 'with Icon',
};

export const twoColumns = () => (
  <Dropdown title="Link">
    <div className="flex">
      <div>
        <Typography
          tag="h6"
          type={TypographyTypes.Headline6}
          className="py-4 px-6 whitespace-no-wrap"
        >
          {text('Subtitle 1', 'Item Sub - Title 1')}
        </Typography>
        <LinkItem
          title={text('Title 1', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 2', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 3', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 4', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 5', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 6', 'title')}
          icon={<Favorite type="filled" />}
        />
      </div>
      <hr className="border h-auto my-3" />
      <div>
        <Typography
          tag="h6"
          type={TypographyTypes.Headline6}
          className="py-4 px-6 whitespace-no-wrap"
        >
          {text('Subtitle 2', 'Item Sub - Title 2')}
        </Typography>
        <LinkItem
          title={text('Title 7', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 8', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 9', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 10', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 11', 'title')}
          icon={<Favorite type="filled" />}
        />
        <LinkItem
          title={text('Title 12', 'title')}
          icon={<Favorite type="filled" />}
        />
      </div>
    </div>
  </Dropdown>
);

twoColumns.story = {
  name: 'Two columns',
};
