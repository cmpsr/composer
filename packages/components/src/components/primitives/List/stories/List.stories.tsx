import React from 'react';
import { text } from '@storybook/addon-knobs';
import { favorite as Favorite } from '../../Icon/icons/action';
import { List, LinkItem, ButtonItem } from '../';
import { Button, ButtonTypes } from '../../Button';
import { Typography, TypographyTypes } from '../../Typography';
import { Link } from '../../Link';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/List',
  component: List,
};

export const basicLinkItem = () => (
  <List className={text('List width', 'min-w-8-125')}>
    <LinkItem title={text('Title 1', 'Result')} />
    <LinkItem title={text('Title 2', 'Result')} />
    <LinkItem title={text('Title 3', 'Result')} />
    <LinkItem title={text('Title 4', 'Result')} />
  </List>
);

basicLinkItem.story = {
  name: 'basic link item',
};

export const basicButtonItem = () => (
  <List className={text('List width', 'min-w-8-125')}>
    <ButtonItem onClick={action('Item click')}>
      {text('Item 1', 'Result')}
    </ButtonItem>
    <ButtonItem onClick={action('Item click')}>
      {text('Item 2', 'Result')}
    </ButtonItem>
    <ButtonItem onClick={action('Item click')}>
      {text('Item 3', 'Result')}
    </ButtonItem>
    <ButtonItem onClick={action('Item click')}>
      {text('Item 4', 'Result')}
    </ButtonItem>
  </List>
);

basicButtonItem.story = {
  name: 'basic button item',
};

export const withCustomElements = () => (
  <List className="min-w-20-625">
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 1 ', 'Result')}
      subTitle={text('Subtitle 1', 'Details')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 2', 'Result')}
      subTitle={text('Subtitle 2', 'Details')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 3', 'Result')}
      subTitle={text('Subtitle 3', 'Details')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 4', 'Result')}
      subTitle={text('Subtitle 4', 'Details')}
    />
  </List>
);

withCustomElements.story = {
  name: 'With icon, title, subtitle',
};

export const withFooter = () => (
  <List className="min-w-20-625">
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 1', 'title')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 2', 'title')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 3', 'title')}
    />
    <LinkItem
      icon={<Favorite type="filled" />}
      title={text('Title 4', 'title')}
    />
    <hr className="border border-fill-black-25 my-2" />
    <div className="flex justify-between items-center px-6 py-2">
      <Link url="#">
        <Typography tag="span" type={TypographyTypes.Link}>
          {text('Button 1', 'Clear')}
        </Typography>
      </Link>
      <Button
        type={ButtonTypes.Primary}
        onClick={action('button action click')}
      >
        <Typography tag="span" type={TypographyTypes.Button}>
          {text('Button 2', 'Button')}
        </Typography>
      </Button>
    </div>
  </List>
);

withFooter.story = {
  name: 'link with footer',
};
