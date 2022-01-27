import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';

import { Link } from './Link';
<<<<<<< HEAD

const icon = <i data-testid="testId" />;
const textElement = <span data-testid="testId">span component</span>;
const suiteSizes = ['s', 'm', 'l'];

describe('Sizes', () => {
  suiteSizes.forEach((size) => {
=======
import { linkSizes } from './types';

const icon = <i data-testid="test.id" />;
const textElement = <span data-testid="test.id">span component</span>;

describe('Sizes', () => {
  linkSizes.forEach((size) => {
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
    it(`Should render the right containers for the size ${size}`, () => {
      const component = TestRenderer.create(
        <Link size={size} href="#" icon={icon} role="link">
          {textElement}
        </Link>
      ).root;

      const linkContainer = component.findByProps({
<<<<<<< HEAD
        'data-testid': 'composer-link-container',
=======
        'data-testid': 'cmpsr.link.container',
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
      });

      expect(linkContainer.props.size).toEqual(size);
    });
  });
});

describe('Link and icon components', () => {
  it('Should render', () => {
<<<<<<< HEAD
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
=======
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

    expect(flexWrapper.props.flexDirection).toBe('row-reverse');
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

    expect(flexWrapper.props.flexDirection).toBe('row-reverse');
  });

  it('Should render a link with an icon on the left side', () => {
    const linkComponent = TestRenderer.create(
      <Link
        role="link"
        iconPosition="leading"
        data-testid="test.id"
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
        icon={icon}
      >
        {textElement}
      </Link>
<<<<<<< HEAD
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild, secondChild] = linkComponent;
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('I');
    expect(secondChild.nodeName).toBe('SPAN');
=======
    ).root;

    const flexWrapper = linkComponent.findByProps({
      'data-testid': 'cmpsr.flex.container',
    });

    expect(flexWrapper.props.flexDirection).toBe('row');
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
  });

  it('Should render a simple link without icon', () => {
    renderWithProviders(
<<<<<<< HEAD
      <Link role="link" data-testid="testId">
=======
      <Link role="link" data-testid="test.id">
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
        {textElement}
      </Link>
    );

<<<<<<< HEAD
    const linkComponent = screen.queryAllByTestId('testId');
=======
    const linkComponent = screen.queryAllByTestId('test.id');
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
    const [parentNode, firstChild] = linkComponent;

    expect(linkComponent.length).toBe(2);
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('SPAN');
    expect(firstChild.nodeName).not.toBe('I');
    expect(parentNode.nodeName).not.toBe('I');
  });
});
