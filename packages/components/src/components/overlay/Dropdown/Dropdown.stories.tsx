import React from 'react';
import { Meta } from '@storybook/react';
import { Dropdown } from '.';
import { IconCreditCard, IconPlus, IconShare } from '@components/media';
import { IconButton } from '@components/form';

export default {
  component: Dropdown,
  title: 'Components/Overlay/Dropdown',
} as Meta;

const PlaygroundItems = ({ showDivider }) => (
  <>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
    {showDivider && <Dropdown.Divider />}
    <Dropdown.Item>Option 3</Dropdown.Item>
    <Dropdown.Item>Option 4</Dropdown.Item>
  </>
);

const PlaygroundGroupedItems = ({ showDivider }) => (
  <>
    <Dropdown.Group title="Group 1">
      <Dropdown.Item>Option 1</Dropdown.Item>
      <Dropdown.Item>Option 2</Dropdown.Item>
    </Dropdown.Group>
    {showDivider && <Dropdown.Divider />}
    <Dropdown.Group title="Group 2">
      <Dropdown.Item>Option 3</Dropdown.Item>
      <Dropdown.Item>Option 4</Dropdown.Item>
    </Dropdown.Group>
  </>
);

const PlaygroundOptionGroups = ({ showDivider }) => (
  <>
    <Dropdown.OptionGroup defaultValue="1" title="Order" type="radio">
      <Dropdown.ItemOption value="1">Option 1</Dropdown.ItemOption>
      <Dropdown.ItemOption value="2">Option 2</Dropdown.ItemOption>
    </Dropdown.OptionGroup>
    {showDivider && <Dropdown.Divider />}
    <Dropdown.OptionGroup title="Country" type="checkbox">
      <Dropdown.ItemOption value="3">Option 3</Dropdown.ItemOption>
      <Dropdown.ItemOption value="4">Option 4</Dropdown.ItemOption>
      <Dropdown.ItemOption value="5">Option 5</Dropdown.ItemOption>
    </Dropdown.OptionGroup>
  </>
);

const Template = (args) => (
  <Dropdown {...args}>
    <Dropdown.Button>Open</Dropdown.Button>

    <Dropdown.List>
      <Dropdown.Item>Option 1</Dropdown.Item>
      <Dropdown.Item>Option 2</Dropdown.Item>
      <Dropdown.Item>Option 3</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);

export const Default = Template.bind({});

export const Opened = Template.bind({});

Opened.args = {
  isOpen: true,
};

const WithIconsTemplate = () => (
  <Dropdown>
    <Dropdown.Button>Open</Dropdown.Button>
    <Dropdown.List>
      <Dropdown.Item icon={<IconPlus />}>Add</Dropdown.Item>
      <Dropdown.Item icon={<IconCreditCard />}>Pay</Dropdown.Item>
      <Dropdown.Item icon={<IconShare />}>Share</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);

export const WithIcons = WithIconsTemplate.bind({});

const WithCustomButtonTemplate = () => (
  <Dropdown>
    <Dropdown.Button as={IconButton} icon={<IconShare />} aria-label="Custom button" />
    <Dropdown.List>
      <Dropdown.Item icon={<IconPlus />} as="a" href="https://www.google.com" target="_blank">
        Add Link
      </Dropdown.Item>
      <Dropdown.Item icon={<IconCreditCard />} as="a" href="https://www.google.com" target="_blank">
        Pay Link
      </Dropdown.Item>
      <Dropdown.Item icon={<IconShare />} as="a" href="https://www.google.com" target="_blank">
        Share Link
      </Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);

export const WithCustomButton = WithCustomButtonTemplate.bind({});

const renderDropdownItems = (args) => {
  if (args.showGroupedItems) {
    return <PlaygroundGroupedItems showDivider={args.showDivider} />;
  }

  if (args.showOptionGroups) {
    return <PlaygroundOptionGroups showDivider={args.showDivider} />;
  }

  return <PlaygroundItems showDivider={args.showDivider} />;
};

const PlaygroundTemplate = (args) => (
  <Dropdown isOpen={args.isOpen}>
    <Dropdown.Button>Open</Dropdown.Button>
    <Dropdown.List>{renderDropdownItems(args)}</Dropdown.List>
  </Dropdown>
);

export const Playground = PlaygroundTemplate.bind({});

Playground.args = {
  isOpen: true,
  showDivider: false,
  showGroupedItems: false,
  showOptionGroups: false,
};
