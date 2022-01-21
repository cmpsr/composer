import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';

import { Link } from './Link';

const icon = <i data-testid="testId" />;
const textElement = <span data-testid="testId">span component</span>;
const suiteSizes = ['s', 'm', 'l'];

describe('Sizes', () => {
  suiteSizes.forEach((size) => {
    it(`Should render the right containers for the size ${size}`, () => {
      const component = TestRenderer.create(
        <Link size={size} href="#" icon={icon} role="link">
          {textElement}
        </Link>
      ).root;

      const linkContainer = component.findByProps({
        'data-testid': 'composer-link-container',
      });

      expect(linkContainer.props.size).toEqual(size);
    });
  });
});

describe('Link and icon components', () => {
  it('Should render', () => {
    renderWithProviders(<Link data-testid="testId" />);
    screen.getByTestId('testId');
  });

  it('Should render a link with an icon on left side as default', () => {
    renderWithProviders(
      <Link role="link" data-testid="testId" icon={icon}>
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild, secondChild] = linkComponent;
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('I');
    expect(secondChild.nodeName).toBe('SPAN');
  });

  it('Should render a link with an icon on the right side', () => {
    renderWithProviders(
      <Link iconPosition="leading" role="link" data-testid="testId" icon={icon}>
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild, secondChild] = linkComponent;
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('SPAN');
    expect(secondChild.nodeName).toBe('I');
  });

  it('Should render a link with an icon on the left side', () => {
    renderWithProviders(
      <Link
        iconPosition="trailing"
        role="link"
        data-testid="testId"
        icon={icon}
      >
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild, secondChild] = linkComponent;
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('I');
    expect(secondChild.nodeName).toBe('SPAN');
  });

  it('Should render a simple link without icon', () => {
    renderWithProviders(
      <Link role="link" data-testid="testId">
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild] = linkComponent;

    expect(linkComponent.length).toBe(2);
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('SPAN');
    expect(firstChild.nodeName).not.toBe('I');
    expect(parentNode.nodeName).not.toBe('I');
  });
});
