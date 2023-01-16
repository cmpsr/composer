import React from 'react';
import { Meta } from '@storybook/react';
import { Popover } from '.';
import { Box, Button, ButtonGroup, HStack, Input, Radio, RadioGroup } from '@chakra-ui/react';

export default {
  component: Popover,
  title: 'Components/Overlay/Popover',
  decorators: [(storyFn) => <div style={{ width: '500px', height: '150px' }}>{storyFn()}</div>],
} as Meta;

const Template = (args) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover isOpen={isPopoverOpen} {...args}>
      <Popover.Trigger>
        <button onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.CloseButton onClick={() => setIsPopoverOpen(false)} />
        <Popover.Body>
          Hello from inside the popover!
        </Popover.Body>
        <Popover.Footer
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>Step 2 of 4</Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Setup Email</Button>
            <Button colorScheme='blue'>
              Next
            </Button>
          </ButtonGroup>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  )
}

export const Default = Template.bind({});

export const WithArrow = (args) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover isOpen={isPopoverOpen} {...args}>
      <Popover.Trigger>
        <button onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseButton onClick={() => setIsPopoverOpen(false)} />
        <Popover.Body>
          Hello from inside the popover!
        </Popover.Body>
      </Popover.Content>
    </Popover>
  )
}

export const WithHeader = (args) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover isOpen={isPopoverOpen} {...args}>
      <Popover.Trigger>
        <button onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Header>Popover Header</Popover.Header>
        <Popover.CloseButton onClick={() => setIsPopoverOpen(false)} />
        <Popover.Body>
          Hello from inside the popover!
        </Popover.Body>
      </Popover.Content>
    </Popover>
  )
}

export const WithFooter = (args) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover isOpen={isPopoverOpen} {...args}>
      <Popover.Trigger>
        <button onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Header>Popover Header</Popover.Header>
        <Popover.CloseButton onClick={() => setIsPopoverOpen(false)} />
        <Popover.Body>
          Hello from inside the popover!
        </Popover.Body>
        <Popover.Footer>
          Hello from inside the popovers footer!
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  )
}

export const WithAnchor = (args) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [color, setColor] = React.useState('gray.500');
  return (
    <Popover isOpen={isEditing} onClose={() => setIsEditing(false)} onOpen={() => setIsEditing(true)} {...args}>
      <HStack>
        <Popover.Anchor>
          <Input
            color={color}
            w='auto'
            display='inline-flex'
            isDisabled={!isEditing}
            defaultValue='Popover Anchor'
          />
        </Popover.Anchor>
        <Popover.Trigger>
          <Button h='40px' colorScheme='pink'>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        </Popover.Trigger>
      </HStack>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseButton onClick={() => setIsEditing(false)} />
        <Popover.Body>
          Colors:
          <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
            <Radio value='red'>red</Radio>
            <Radio value='blue'>blue</Radio>
            <Radio value='green'>green</Radio>
            <Radio value='purple'>purple</Radio>
          </RadioGroup>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  )
}

const PlaygroundTemplate = (args) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover isOpen={isPopoverOpen} {...args}>
      <Popover.Trigger>
        <button onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.CloseButton onClick={() => setIsPopoverOpen(false)} />
        <Popover.Body>
          Hello from inside the popover!
        </Popover.Body>
      </Popover.Content>
    </Popover>
  )
};

export const Playground = PlaygroundTemplate.bind({});
