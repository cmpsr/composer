import React from 'react';
import { Divider, Flex, Link, Text } from '@cmpsr/components';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  test('should render image', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
      </Testimonial>
    );
    screen.getByRole('img');
  });
  test('should render legend when provided', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
            <Text as="h3" variant={{ base: 'text-header-S', lg: 'text-header-XS' }}>
              legend
            </Text>
            <Divider />
          </Flex>
          <Text variant="text-body-display-M">testimony</Text>
          <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
            <Text variant="text-body-medium">Name</Text>
          </Flex>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByText('legend');
  });
  test('should render association when provided', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Text variant="text-body-display-M">testimony</Text>
          <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
            <Text variant="text-body-medium">John Doe</Text>
            <Flex gap={{ base: '0.5rem' }}>
              <Divider orientation="vertical" />
              <Text color="text-secondary">association</Text>
            </Flex>
          </Flex>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByText('association');
  });
  test('should render link when provided', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Text variant="text-body-display-M">testimony</Text>
          <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
            <Text variant="text-body-medium">John Doe</Text>
          </Flex>
          <Link target="_blank" size="s" href="#">
            linking
          </Link>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByRole('link', { name: 'linking' });
  });
});
