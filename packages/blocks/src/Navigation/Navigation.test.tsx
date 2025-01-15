import React from 'react';
import '@testing-library/jest-dom';
import { screen, renderWithProviders, fireEvent } from '../tests/renderWithProviders';

import { Navigation } from './Navigation';

const mockUseScrollPosition = jest.fn();
const mockUseBreakpointValue = jest.fn();
jest.mock('@cmpsr/components', () => {
  const actualLib = jest.requireActual('@cmpsr/components');
  return {
    ...actualLib,
    useScrollPosition: () => mockUseScrollPosition(),
    useBreakpointValue: () => mockUseBreakpointValue(),
  };
});

describe('Navigation', () => {
  const givenComponentRendered = ({ sticky = false, logoHref = undefined } = {}) =>
    renderWithProviders(
      <Navigation sticky={sticky}>
        <Navigation.Image href={logoHref} alt="Logo" />
        <Navigation.Links>
          <Navigation.Link href="#">Link 1</Navigation.Link>
          <Navigation.Link href="#">Link 2</Navigation.Link>
        </Navigation.Links>
        <Navigation.Actions>
          <Navigation.Action href="#">Action 1</Navigation.Action>
          <Navigation.Action href="#">Action 2</Navigation.Action>
        </Navigation.Actions>
      </Navigation>,
    );

  test('should render all content in desktop', () => {
    mockUseBreakpointValue.mockReturnValueOnce(false);
    givenComponentRendered();
    screen.getByRole('navigation');
    screen.getByRole('img', { name: 'Logo' });
    screen.getByRole('link', { name: 'Link 1' });
    screen.getByRole('link', { name: 'Link 2' });
    screen.getByRole('link', { name: 'Action 1' });
    screen.getByRole('link', { name: 'Action 2' });
  });
  test('should render hamburger menu for base breakpoints', () => {
    mockUseBreakpointValue.mockReturnValueOnce(true);
    givenComponentRendered();
    screen.getByLabelText('Hamburger menu button');
  });
  test('should render all content in mobile when opened', () => {
    mockUseBreakpointValue.mockReturnValueOnce(true);
    givenComponentRendered();
    fireEvent.click(screen.getByLabelText('Hamburger menu button'));
    screen.getByRole('navigation');
    screen.getByRole('img', { name: 'Logo' });
    screen.getByRole('link', { name: 'Link 1' });
    screen.getByRole('link', { name: 'Link 2' });
    screen.getByRole('link', { name: 'Action 1' });
    screen.getByRole('link', { name: 'Action 2' });
  });
  test('should not render hamburger menu for desktop breakpoint', () => {
    mockUseBreakpointValue.mockReturnValueOnce(false);
    givenComponentRendered();
    expect(screen.queryByTestId('desktop-navigation')).toBeNull();
  });
  test('should make navigation sticky', () => {
    givenComponentRendered({ sticky: true });
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveStyle(`position: sticky`);
  });
  test('should add elevation when page is scrolled', () => {
    mockUseScrollPosition.mockReturnValueOnce(10);
    givenComponentRendered();
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveStyle('box-shadow: var(--chakra-shadows-elevation-interactive)');
  });
  test('should render logo wrapped within a link when href is provided', () => {
    givenComponentRendered({ sticky: true, logoHref: 'foo' });
    const link = screen.getByRole('img', { name: 'Logo' }).parentNode;
    expect(link).toHaveAttribute('href', 'foo');
  });
});
