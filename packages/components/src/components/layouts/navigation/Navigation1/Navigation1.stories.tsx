import React from 'react';
import { Navigation1 } from '.';
import {
  Link,
  Asset,
  Typography,
  TypographyTypes,
} from 'components/primitives';
import { Dropdown, Item } from 'components/primitives/Dropdown';
import { favorite as Favorite } from 'components/primitives/Icon/icons/action';

export default {
  title: 'Composer/Layout/Navigation/Navigation1',
  component: Navigation1,
};

export const withSearchAndContent = () => (
  <Navigation1 style={{}}>
    {{
      logo: (
        <Link url="https://www.google.com">
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
              contentType: 'image',
            }}
          />
        </Link>
      ),
      content: [
        <Dropdown title="Link" key="0">
          <Item>{{ title: 'Item' }}</Item>
          <Item>{{ title: 'Item' }}</Item>
          <Item>{{ title: 'Item' }}</Item>
          <Item>{{ title: 'Item' }}</Item>
        </Dropdown>,
        <Dropdown title="Link" key="1">
          <Item>{{ title: 'Item', icon: <Favorite type="filled" /> }}</Item>
          <Item>{{ title: 'Item', icon: <Favorite type="filled" /> }}</Item>
          <Item>{{ title: 'Item', icon: <Favorite type="filled" /> }}</Item>
          <Item>{{ title: 'Item', icon: <Favorite type="filled" /> }}</Item>
        </Dropdown>,
        <Dropdown title="Link" columns={2} key="2">
          <div>
            <Typography
              tag="h6"
              type={TypographyTypes.Headline6}
              className="py-4 px-6 whitespace-no-wrap"
            >
              Item Sub - Title 1
            </Typography>
            <Item>{{ title: 'Item 1', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 2', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 3', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 4', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 5', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 6', icon: <Favorite type="filled" /> }}</Item>
          </div>
          <hr className="border h-auto my-3" />
          <div>
            <Typography
              tag="h6"
              type={TypographyTypes.Headline6}
              className="py-4 px-6 whitespace-no-wrap"
            >
              Item Sub - Title 2
            </Typography>
            <Item>{{ title: 'Item 7', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 8', icon: <Favorite type="filled" /> }}</Item>
            <Item>{{ title: 'Item 9', icon: <Favorite type="filled" /> }}</Item>
            <Item>
              {{ title: 'Item 10', icon: <Favorite type="filled" /> }}
            </Item>
            <Item>
              {{ title: 'Item 11', icon: <Favorite type="filled" /> }}
            </Item>
            <Item>
              {{ title: 'Item 12', icon: <Favorite type="filled" /> }}
            </Item>
          </div>
        </Dropdown>,
        <Link url="#" key="3">
          <Typography tag="span" type={TypographyTypes.Body}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="4">
          <Typography tag="span" type={TypographyTypes.Body}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="5">
          <Typography tag="span" type={TypographyTypes.Body}>
            Link
          </Typography>
        </Link>,
      ],
    }}
  </Navigation1>
);

withSearchAndContent.story = {
  name: 'With search and content',
};
