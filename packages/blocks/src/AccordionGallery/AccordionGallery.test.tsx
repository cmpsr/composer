import React from 'react';
import { fireEvent, renderWithProviders, screen } from '../tests/renderWithProviders';
import { AccordionGallery } from './AccordionGallery';
import '@testing-library/jest-dom';

const mockUseBreakpointValue = jest.fn();
jest.mock('@cmpsr/components', () => {
  const actualLib = jest.requireActual('@cmpsr/components');
  return {
    ...actualLib,
    useBreakpointValue: () => mockUseBreakpointValue(),
  };
});

describe('AccordionGallery', () => {
  test('should render overline', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Overline>overline</AccordionGallery.Overline>
      </AccordionGallery>,
    );
    screen.getByText('overline');
  });
  test('should render title', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Title>
          <AccordionGallery.Title.Label>label</AccordionGallery.Title.Label>
          <AccordionGallery.Title.Label>sublabel</AccordionGallery.Title.Label>
        </AccordionGallery.Title>
      </AccordionGallery>,
    );
    screen.getByText('label');
    screen.getByText('sublabel');
  });
  test('should render accordion', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Button>button</AccordionGallery.Accordion.Button>
            <AccordionGallery.Accordion.Panel>panel</AccordionGallery.Accordion.Panel>
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    screen.getByText('button');
    screen.getByText('panel');
  });
  test('should render image', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="foo" />
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    screen.getByRole('img');
  });
  test('should render proper image when accordion button is clicked', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Button>button 1</AccordionGallery.Accordion.Button>
            <AccordionGallery.Accordion.Image src="image 1" alt="image 1" />
          </AccordionGallery.Accordion.Item>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Button>button 2</AccordionGallery.Accordion.Button>
            <AccordionGallery.Accordion.Image src="image 2" alt="image 2" />
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    screen.getByRole('img', { name: 'image 1' });
    fireEvent.click(screen.getByText('button 2'));
    screen.getByRole('img', { name: 'image 2' });
  });
  test('should render default image', () => {
    renderWithProviders(
      <AccordionGallery defaultImage={1}>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 1" alt="image 1" />
          </AccordionGallery.Accordion.Item>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 2" alt="image 2" />
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    screen.getByRole('img', { name: 'image 2' });
  });
  test('should render custom default image', () => {
    renderWithProviders(
      <AccordionGallery defaultImage={<AccordionGallery.Accordion.Image src="default image" alt="default image" />}>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 1" alt="image 1" />
          </AccordionGallery.Accordion.Item>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 2" alt="image 2" />
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    screen.getByRole('img', { name: 'default image' });
  });
  test('should preserve onChange provided to Accordion', () => {
    const mockOnChange = jest.fn();
    renderWithProviders(
      <AccordionGallery defaultImage={0}>
        <AccordionGallery.Accordion onChange={mockOnChange}>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Button>button</AccordionGallery.Accordion.Button>
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>,
    );
    fireEvent.click(screen.getByText('button'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('should render action', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Action href="action-url">action</AccordionGallery.Action>
      </AccordionGallery>,
    );

    expect(screen.getByText('action').getAttribute('href')).toEqual('action-url');
  });
});
