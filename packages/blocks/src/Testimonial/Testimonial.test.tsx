import React from 'react';
import { Link, Text } from '@cmpsr/components';
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
  test('should render legend', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Testimonial.Legend>legend</Testimonial.Legend>
          <Text variant="text-body-display-M">testimony</Text>
          <Testimonial.Author>name</Testimonial.Author>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByRole('heading', { name: 'legend', level: 3 });
  });
  test('should render name and association', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Text variant="text-body-display-M">testimony</Text>
          <Testimonial.Author>
            name
            <Testimonial.Author.Association>association</Testimonial.Author.Association>
          </Testimonial.Author>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByText('name');
    screen.getByText('association');
  });
  test('should render link', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <Testimonial.Content>
          <Text variant="text-body-display-M">testimony</Text>
          <Testimonial.Author>name</Testimonial.Author>
          <Link target="_blank" size="s" href="#">
            linking
          </Link>
        </Testimonial.Content>
      </Testimonial>
    );
    screen.getByRole('link', { name: 'linking' });
  });
});
