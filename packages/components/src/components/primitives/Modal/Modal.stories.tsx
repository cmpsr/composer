import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '..';
import { Text } from '..';
import { ModalSizes, FooterAlignments } from './types';
import { VStack, HStack, StackDivider } from '@chakra-ui/react';
import * as Icons from '../Icons';

export default {
  component: Modal,
  title: 'Components/Primitives/Modal',
  argTypes: {
    size: {
      option: ModalSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/67131017?s=200';
const LABEL = 'Header-M';
const SUBLABEL = 'Sublabel';

const AllTemplate = () => {
  const [size, setSize] = useState(ModalSizes[0]);
  const [footerAlignment, setFooterAlignment] = useState(FooterAlignments[0]);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const handleSizeClick = (newSize, footerAlignment) => {
    setSize(newSize);
    setFooterAlignment(footerAlignment);
    setIsOpen(true);
  };

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {ModalSizes.map((size, key) => (
        <HStack key={key}>
          {FooterAlignments.map((alignment) => (
            <Button
              variant="primary"
              onClick={() => handleSizeClick(size, alignment)}
              key={alignment}
            >
              Open Size {size} Footer {alignment}
            </Button>
          ))}
        </HStack>
      ))}
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header
            label={LABEL}
            subLabel={SUBLABEL}
            avatarUrl={AVATAR_URL}
          />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
          </Modal.Body>
          <Modal.Footer
            alignment={footerAlignment}
            primaryAction={{ title: 'Primary CTA' }}
            secondaryAction={{ title: 'Secondary Cta', action: onClose }}
          ></Modal.Footer>
        </Modal.Content>
      </Modal>
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const FooterWidthLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={ModalSizes[3]}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header
            label={LABEL}
            subLabel={SUBLABEL}
            avatarUrl={AVATAR_URL}
          />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
          </Modal.Body>
          <Modal.Footer
            alignment="right-aligned"
            primaryAction={{ title: 'Primary CTA' }}
            secondaryAction={{ title: 'Secondary CTA', action: onClose }}
            linkAction={{
              label: 'Tertiary CTA Link',
              icon: Icons.IconExternalLink,
            }}
          ></Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const FooterWithLink = FooterWidthLink.bind({});

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} {...args}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header
            label={LABEL}
            subLabel={SUBLABEL}
            avatarUrl={AVATAR_URL}
          />
          <Modal.CloseButton />
          <Modal.Body>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
            <Text variant="text-body-large-medium">Swap item</Text>
          </Modal.Body>
          <Modal.Footer
            alignment={FooterAlignments[0]}
            primaryAction={{ title: 'Primary CTA' }}
            secondaryAction={{ title: 'Secondary Cta', action: onClose }}
          ></Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  size: ModalSizes[0],
};
