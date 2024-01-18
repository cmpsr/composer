import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Avatar, Button, Flex, Drawer, Text, TextPairing } from '@components';

export default {
  component: Drawer,
  title: 'Components/Overlay/Drawer',
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';
const TITLE = 'Drawer Title';
const SUBTITLE = 'Drawer Subtitle';

export const BasicDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.CloseButton />
          <Drawer.Header>
            <Flex alignItems="center">
              <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr="1.25rem" />
              <TextPairing variant="textpairing-header-M">
                <TextPairing.Label children={TITLE} />
                <TextPairing.SubLabel children={SUBTITLE} />
              </TextPairing>
            </Flex>
          </Drawer.Header>
          <Drawer.Body>
            <Text variant="text-body-large-medium">Drawer Content</Text>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="primary-alt" mr="1rem" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Accept
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  );
};

