import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Avatar, Button, Flex, Modal, Text, TextPairing, modalSizes } from '@components';

export default {
  component: Modal,
  title: 'Components/Primitives/Modal',
  argTypes: {
    size: {
      options: modalSizes,
      control: { type: 'select' },
      defaultValue: modalSizes[0],
    },
  },
  parameters: {
    chromatic: { delay: 300 },
  },
  decorators: [(storyFn) => <div style={{ width: '1200px', height: '800px' }}>Container {storyFn()}</div>],
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';
const TITLE = 'Header - M';
const SUBTITLE = 'Body - Regular';

const Header = () => (
  <Modal.Header>
    <Flex alignItems="center">
      <Avatar name="Composer Logo" src={AVATAR_URL} size="s" mr="1.25rem" />
      <TextPairing
        labelProps={{ children: TITLE }}
        subLabelProps={{ children: SUBTITLE }}
        variant="textpairing-header-M"
      />
    </Flex>
  </Modal.Header>
);

const Footer = ({ onClose }) => (
  <Modal.Footer>
    <Button variant="primary-alt" mr="1rem" onClick={onClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={onClose}>
      Accept
    </Button>
  </Modal.Footer>
);

export const TitleOnlyHeader = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Text mt="0.25rem" variant="text-header-M">
              {TITLE}
            </Text>
          </Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
          </Modal.Body>
          <Footer onClose={handleClose} />
        </Modal.Content>
      </Modal>
    </>
  );
};

export const FullHeader = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          <Header />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
          </Modal.Body>
          <Footer onClose={handleClose} />
        </Modal.Content>
      </Modal>
    </>
  );
};

export const StackedActions = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          <Header />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </Modal.Body>
          <Modal.Footer flexDirection="column">
            <Button variant="primary-alt" onClick={handleClose} width="100%" mb="0.5rem">
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose} width="100%">
              Accept
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const FullWidthActions = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          <Header />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </Modal.Body>
          <Modal.Footer columnGap="1rem">
            <Button variant="primary-alt" onClick={handleClose} width="100%">
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose} width="100%">
              Accept
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const FixedWidth = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content width="40rem">
          <Header />
          <Modal.CloseButton />
          <Modal.Body>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Modal.Body>
          <Footer onClose={handleClose} />
        </Modal.Content>
      </Modal>
    </>
  );
};

const PlaygroundTemplate = ({ showHeader, showFooter, showCloseButton, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          {showHeader && <Header />}
          {showCloseButton && <Modal.CloseButton />}
          <Modal.Body>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
            <Text variant="text-body-large-medium">Lorem ipsum dolor sit amet</Text>
          </Modal.Body>
          {showFooter && <Footer onClose={handleClose} />}
        </Modal.Content>
      </Modal>
    </>
  );
};
export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  showHeader: true,
  showFooter: true,
  showCloseButton: true,
  size: 'auto',
};
