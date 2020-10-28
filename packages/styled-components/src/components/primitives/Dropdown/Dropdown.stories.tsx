import React from 'react';
import { Dropdown } from '.';
import { text } from '@storybook/addon-knobs';
import { LinkItem } from 'components/primitives/List/Items';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';
import styled from 'styled-components';

export default {
  title: 'Primitives/Dropdown',
  component: Dropdown,
};

export const Titles = () => (
  <>
    <h1>Titles</h1>
    <Dropdown title="Title">
      <LinkItem title="title" />
      <LinkItem title="title" />
      <LinkItem title="title" />
      <LinkItem title="title" />
    </Dropdown>
  </>
);

export const Icons = () => (
  <>
    <h1>Icons</h1>
    <Dropdown title="Title">
      <LinkItem title="title" icon={<Favorite type={Icon.Types.Filled} />} />
      <LinkItem title="title" icon={<Favorite type={Icon.Types.Filled} />} />
      <LinkItem title="title" icon={<Favorite type={Icon.Types.Filled} />} />
      <LinkItem title="title" icon={<Favorite type={Icon.Types.Filled} />} />
    </Dropdown>
  </>
);

const StyledFlex = styled.div`
  display: flex;
`;
export const Columns = () => (
  <>
    <h1>Columns</h1>
    <Dropdown title="Title">
      <StyledFlex>
        <div>
          {' '}
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
        </div>
        <div>
          {' '}
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <LinkItem
            title="title"
            icon={<Favorite type={Icon.Types.Filled} />}
          />
        </div>
      </StyledFlex>
    </Dropdown>
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Dropdown title={text('Title', 'Title')}>
      {text('Content', 'Content')}
    </Dropdown>
  </>
);
