import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';

import { Link } from './Link';
import { linkSizes } from './types';

const icon = <i data-testid="test.id" />;
const textElement = <span data-testid="test.id">span component</span>;

describe('Sizes', () => {
  linkSizes.forEach((size) => {
    it(`Should render the right containers for the size ${size}`, () => {
      const component = TestRenderer.create(
        <Link size={size} href="#" icon={icon} role="link">
          {textElement}
        </Link>
      ).root;

      const linkContainer = component.findByProps({
        'data-testid': 'cmpsr.link.container',
      });

      expect(linkContainer.props.size).toEqual(size);
    });
  });
});

describe('Link and icon components', () => {
  it('Should render', () => {
    renderWithProviders(<Link data-testid="test.id" />);
    screen.getByTestId('test.id');
  });

  it('Should render a link with an icon on left side as default', () => {
    const linkComponent = TestRenderer.create(
      <Link role="link" data-testid="test.id" icon={icon}>
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'cmpsr.flex.container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row');
  });

  it('Should render a link with an icon on the right side', () => {
    const linkComponent = TestRenderer.create(
      <Link
        role="link"
        iconPosition="trailing"
        data-testid="test.id"
        icon={icon}
      >
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'cmpsr.flex.container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row');
  });

  it('Should render a link with an icon on the left side', () => {
    const linkComponent = TestRenderer.create(
      <Link
        role="link"
        iconPosition="leading"
        data-testid="test.id"
        icon={icon}
      >
        {textElement}
      </Link>
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'cmpsr.flex.container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row-reverse');
  });

  it('Should render a simple link without icon', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id">
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('test.id');
    const [parentNode, firstChild] = linkComponent;

    expect(linkComponent.length).toBe(2);
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('SPAN');
    expect(firstChild.nodeName).not.toBe('I');
    expect(parentNode.nodeName).not.toBe('I');
  });
});
