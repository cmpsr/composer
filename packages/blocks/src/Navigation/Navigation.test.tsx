import React from 'react';
import '@testing-library/jest-dom';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Navigation } from './Navigation';

const mockUseScrollPosition = jest.fn();
const mockUseBreakpointValue = jest.fn();
jest.mock('@cmpsr/components', () => {
  const actualLib = jest.requireActual('@cmpsr/components');
  return {
    ...actualLib,
    useScrollPosition: () => mockUseScrollPosition(),
    useBreakpointValue: (p) => mockUseBreakpointValue(p),
  };
});

describe('Navigation', () => {
  const defaultProps = {
    sticky: false,
    anchors: [{ label: 'label', href: '#' }],
    actions: <button>action</button>,
    logoUrl: 'logoUrl',
  };
  const givenComponentRendered = (props?: any) => renderWithProviders(<Navigation {...defaultProps} {...props} />);

  test('should show BaseNavigation for base breakpoint', () => {
    mockUseBreakpointValue.mockReturnValueOnce(true);
    givenComponentRendered();
    screen.getByLabelText('Hamburger menu button');
  });
  test('should show DesktopNavigation for lg breakpoint', () => {
    mockUseBreakpointValue.mockReturnValueOnce(false);
    givenComponentRendered();
    screen.getByTestId('desktop-navigation');
  });
  test('should make navigation sticky when sticky property is provided', () => {
    givenComponentRendered({ sticky: true });
    const navigation = screen.getByTestId('navigation');
    expect(navigation).toHaveStyle(`position: sticky`);
  });
  test('should add elevation when page is scrolled', () => {
    mockUseScrollPosition.mockReturnValueOnce(10);
    givenComponentRendered();
    const navigation = screen.getByTestId('navigation');
    expect(navigation).toHaveStyle('box-shadow: var(--chakra-shadows-elevation-interactive)');
  });
});
