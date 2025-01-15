import React from 'react';
import { Text } from '@cmpsr/components';
import { fireEvent, renderWithProviders, screen } from '../tests/renderWithProviders';
import { CookieBanner } from './CookieBanner';
import '@testing-library/jest-dom';

describe('CookieBanner', () => {
  afterEach(() => {
    localStorage.clear();
  });
  test('should render content', () => {
    renderWithProviders(
      <CookieBanner>
        <CookieBanner.Content>Hello</CookieBanner.Content>
      </CookieBanner>,
    );
    screen.getByText('Hello');
  });
  test('should render custom children', () => {
    renderWithProviders(
      <CookieBanner>
        <CookieBanner.Content>
          <Text data-testid="children-container">Hello</Text>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    screen.getByTestId('children-container');
  });
  test('should not render component after accepting all cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner">
        <CookieBanner.Content>
          <Text>Hello</Text>
          <CookieBanner.Actions>
            <CookieBanner.Actions.AcceptRequired />
            <CookieBanner.Actions.AcceptAll>All</CookieBanner.Actions.AcceptAll>
          </CookieBanner.Actions>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('All'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should not render component after accepting required cookies', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner">
        <CookieBanner.Content>
          <Text>Hello</Text>
          <CookieBanner.Actions>
            <CookieBanner.Actions.AcceptRequired>RequiredOnly</CookieBanner.Actions.AcceptRequired>
            <CookieBanner.Actions.AcceptAll />
          </CookieBanner.Actions>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should not render component if cookies already accepted', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner">
        <CookieBanner.Content>
          <Text>Hello</Text>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
  });
  test('should render component if cookies already accepted but different version', () => {
    localStorage.setItem('cmpsr-cookies-policy', JSON.stringify({ cookieVersion: '1.0.0', allow: 'all' }));
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" cookieVersion="1.0.1">
        <CookieBanner.Content>
          <Text>Hello</Text>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
  });
  test('should work as expected with custom cookieKey', () => {
    renderWithProviders(
      <CookieBanner data-testid="cookie-banner" cookieKey="custom-key">
        <CookieBanner.Content>
          <Text>Hello</Text>
          <CookieBanner.Actions>
            <CookieBanner.Actions.AcceptRequired>RequiredOnly</CookieBanner.Actions.AcceptRequired>
            <CookieBanner.Actions.AcceptAll />
          </CookieBanner.Actions>
        </CookieBanner.Content>
      </CookieBanner>,
    );
    expect(screen.queryByTestId('cookie-banner')).toBeInTheDocument();
    fireEvent.click(screen.getByText('RequiredOnly'));
    expect(screen.queryByTestId('cookie-banner')).not.toBeInTheDocument();
    expect(localStorage.getItem('custom-key')).toContain('1.0.0');
  });
});
