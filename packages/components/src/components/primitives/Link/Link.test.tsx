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
    const linkComponent = TestRenderer.create(
      <Link role="link" data-testid="testId" icon={icon}>
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'flex-icon-container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row');
  });

  it('Should render a link with an icon on the right side', () => {
    const linkComponent = TestRenderer.create(
      <Link role="link" iconPosition="leading" data-testid="testId" icon={icon}>
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'flex-icon-container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row-reverse');
  });

  it('Should render a link with an icon on the left side', () => {
    const linkComponent = TestRenderer.create(
      <Link
        role="link"
        iconPosition="trailing"
        data-testid="testId"
        icon={icon}
      >
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'flex-icon-container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row');
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
