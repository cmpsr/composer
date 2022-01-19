import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Link } from './Link';

describe('Link component', () => {
  const icon = <i data-testid="testId" />;
  const textElement = <span data-testid="testId">span component</span>;

  it.skip('Should render', () => {
    const { getByTestId } = renderWithProviders(<Link data-testid="testId" />);
    getByTestId('testid');
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
      <Link iconPosition="right" role="link" data-testid="testId" icon={icon}>
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
      <Link iconPosition="left" role="link" data-testid="testId" icon={icon}>
        {textElement}
      </Link>
    );

    const linkComponent = screen.queryAllByTestId('testId');
    const [parentNode, firstChild, secondChild] = linkComponent;
    expect(parentNode.nodeName).toBe('A');
    expect(firstChild.nodeName).toBe('I');
    expect(secondChild.nodeName).toBe('SPAN');
  });
});
