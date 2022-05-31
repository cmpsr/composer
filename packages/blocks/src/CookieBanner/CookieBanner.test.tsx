import React from 'react';
import { Text } from '@cmpsr/components';
import { fireEvent, renderWithProviders, screen } from '@tests/renderWithProviders';
import { CookieBanner } from './CookieBanner';
import '@testing-library/jest-dom';

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
    screen.getByTestId('children-container');
  });
  test('should not render component after accepting all cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptAllCta="All">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('All'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should not render component after accepting required cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptRequiredOnlyCta="RequiredOnly">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should not render component if cookies already accepted', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should render component if cookies already accepted but different version', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" cookieVersion="1.0.1">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
  });
  test('should work as expected with custom cookieKey', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" acceptRequiredOnlyCta="RequiredOnly" cookieKey="custom-key">
        <Text>Hello</Text>
      </CookieBanner>
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
    expect(localStorage.getItem('custom-key')).toContain('1.0.0');
  });
});
