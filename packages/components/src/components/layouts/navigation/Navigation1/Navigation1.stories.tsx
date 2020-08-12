import React from 'react';
import { Navigation1 } from '.';
import {
  Link,
  Asset,
  Typography,
  TypographyTypes,
} from 'components/primitives';
import { Dropdown } from 'components/primitives/Dropdown';
import { LinkItem } from 'components/primitives/List/'
import { favorite as Favorite } from 'components/primitives/Icon/icons/action';
import { text } from '@storybook/addon-knobs';

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
          <LinkItem title={text('Title 1', 'Result')} />
          <LinkItem title={text('Title 1', 'Result')} />
          <LinkItem title={text('Title 1', 'Result')} />
          <LinkItem title={text('Title 1', 'Result')} />
        </Dropdown>,
        <Dropdown title="Link" key="1">
          <LinkItem
            icon={<Favorite type="filled" />}
            title={text('Title 1', 'Result')}
          />
          <LinkItem
            icon={<Favorite type="filled" />}
            title={text('Title 1', 'Result')}
          />
          <LinkItem
            icon={<Favorite type="filled" />}
            title={text('Title 1', 'Result')}
          />
          <LinkItem
            icon={<Favorite type="filled" />}
            title={text('Title 1', 'Result')}
          />
        </Dropdown>,
        <Dropdown title="Link" columns={2} key="2">
          <div className="flex">
            <div>
              <Typography
                tag="h6"
                type={TypographyTypes.Headline6}
                className="py-4 px-6 whitespace-no-wrap"
              >
                Item Sub - Title 1
              </Typography>
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
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
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
              <LinkItem
                icon={<Favorite type="filled" />}
                title={text('Title 1', 'Result')}
              />
            </div>
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
