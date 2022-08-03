import React from 'react';
import { fireEvent, renderWithProviders, screen } from '@tests/renderWithProviders';
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
  test('should render legend', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.Legend>legend</AccordionGallery.Legend>
      </AccordionGallery>
    );
    screen.getByText('legend');
  });
  test('should render text pairing', () => {
    renderWithProviders(
      <AccordionGallery>
        <AccordionGallery.TextPairing>
          <AccordionGallery.TextPairing.Label>label</AccordionGallery.TextPairing.Label>
          <AccordionGallery.TextPairing.Label>sublabel</AccordionGallery.TextPairing.Label>
        </AccordionGallery.TextPairing>
      </AccordionGallery>
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
      </AccordionGallery>
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
      </AccordionGallery>
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
      </AccordionGallery>
    );
    screen.getByRole('img', { name: 'image 1' });
    fireEvent.click(screen.getByText('button 2'));
    screen.getByRole('img', { name: 'image 2' });
  });
  test('should render default image', () => {
    renderWithProviders(
      <AccordionGallery defaultImage={0}>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 1" alt="image 1" />
          </AccordionGallery.Accordion.Item>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Image src="image 2" alt="image 2" />
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>
    );
    screen.getByRole('img', { name: 'image 1' });
  });
  test('should preseve onClick provided to Accordion Button', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <AccordionGallery defaultImage={0}>
        <AccordionGallery.Accordion>
          <AccordionGallery.Accordion.Item>
            <AccordionGallery.Accordion.Button onClick={mockOnClick}>button</AccordionGallery.Accordion.Button>
          </AccordionGallery.Accordion.Item>
        </AccordionGallery.Accordion>
      </AccordionGallery>
    );
    fireEvent.click(screen.getByText('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
