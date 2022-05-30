import React from 'react';
import { Text } from '@cmpsr/components';
import { fireEvent, renderWithProviders, screen } from '@tests/renderWithProviders';
import { CookieBanner } from './CookieBanner';

describe('CookieBanner', () => {
  afterEach(() => {
    localStorage.clear();
  });
  test('should render children', () => {
    renderWithProviders(<CookieBanner>Hello</CookieBanner>);
    screen.getByText('Hello');
  });
  test('should render custom children', () => {
    renderWithProviders(
      <CookieBanner>
        <Text data-testid="children-container">Hello</Text>
      </CookieBanner>
    );
    screen.getByText('Hello');
    screen.getByTestId('children-container');
  });
  test('should not render component after accepting all cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptAllCta="All">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBe(null);
    fireEvent.click(screen.getByText('All'));
    expect(screen.queryByTestId('cookie-banner')).toBe(null);
  });
  test('should not render component after accepting required cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptRequiredOnlyCta="RequiredOnly">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBe(null);
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).toBe(null);
  });
  test('should not render component if cookies already accepted', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).toBe(null);
  });
  test('should render component if cookies already accepted but different version', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" cookieVersion="1.0.1">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBe(null);
  });
  test('should work as expected with custom cookieKey', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptRequiredOnlyCta="RequiredOnly" cookieKey="custom-key">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBe(null);
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).toBe(null);
    expect(localStorage.getItem('custom-key')).toContain('1.0.0');
  });
});
