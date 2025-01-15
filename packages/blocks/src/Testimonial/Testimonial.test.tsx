import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

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
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=1" />
      </Testimonial>,
    );
    screen.getByRole('img');
  });
  test('should render legend', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=1" />
        <Testimonial.Content>
          <Testimonial.Overline>legend</Testimonial.Overline>
          <Testimonial.Testimony>testimony</Testimonial.Testimony>
          <Testimonial.Author>name</Testimonial.Author>
        </Testimonial.Content>
      </Testimonial>,
    );
    screen.getByRole('heading', { name: 'legend', level: 3 });
  });
  test('should render testimony', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=1" />
        <Testimonial.Content>
          <Testimonial.Overline>legend</Testimonial.Overline>
          <Testimonial.Testimony>testimony</Testimonial.Testimony>
          <Testimonial.Author>name</Testimonial.Author>
        </Testimonial.Content>
      </Testimonial>,
    );
    screen.getByText('testimony');
  });
  test('should render link', () => {
    renderWithProviders(
      <Testimonial>
        <Testimonial.Image src="https://avatars0.githubusercontent.com/u/67131017?s=1" />
        <Testimonial.Content>
          <Testimonial.Testimony>testimony</Testimonial.Testimony>
          <Testimonial.Author>name</Testimonial.Author>
          <Testimonial.Action href="#">linking</Testimonial.Action>
        </Testimonial.Content>
      </Testimonial>,
    );
    screen.getByRole('link', { name: 'linking' });
  });
});
