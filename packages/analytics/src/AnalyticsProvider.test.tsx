import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useAnalytics } from './useAnalytics';
import { _AnalyticsProvider } from './AnalyticsProvider';

const amplitudeTrack = jest.fn();
const amplitudeRevenue = jest.fn();

jest.mock('./integrations', () => {
  return {
    Meta: jest.fn().mockImplementation(() => ({
      identify: jest.fn(),
      group: jest.fn(),
      page: jest.fn(),
      track: jest.fn(),
      reset: jest.fn(),
      revenue: jest.fn(),
    })),
    Amplitude: jest.fn().mockImplementation(() => ({
      identify: jest.fn(),
      group: jest.fn(),
      page: jest.fn(),
      track: amplitudeTrack,
      reset: jest.fn(),
      revenue: amplitudeRevenue,
    })),
  };
});

jest.mock('uuid', () => {
  return {
    v1: jest.fn().mockReturnValue('asdf'),
  };
});

const AnalyticsComponent = () => {
  const analytics = useAnalytics();

  return (
    <>
      <button
        data-testid="track"
        onClick={() => {
          analytics.track('testedBefore', { tested: 'before' });
        }}
      />
      <button
        data-testid="revenue"
        onClick={() => {
          analytics.revenue(45, 55, 'asdf');
        }}
      />
    </>
  );
};

describe('useAnalyticsProvider', () => {
  const givenComponentRendered = (children: React.ReactNode, disabledFunctions = null) =>
    render(
      <_AnalyticsProvider
        amplitude={{ apiKey: 'amplitude-key' }}
        meta={{ pixelAccountId: 'pixel-acc' }}
        disabledFunctions={disabledFunctions}
      >
        {children}
      </_AnalyticsProvider>,
    );

  test('should render component and children', () => {
    givenComponentRendered(<>Children</>);
    screen.getByText('Children');
  });

  test('should call the track event', () => {
    givenComponentRendered(
      <>
        <AnalyticsComponent />
      </>,
    );

    const button = screen.getByTestId('track');
    fireEvent.click(button);

    expect(amplitudeTrack).toHaveBeenCalledTimes(1);
    expect(amplitudeTrack).toHaveBeenCalledWith('testedBefore', { tested: 'before' });
  });

  test('should not call the track event as it is disabled', () => {
    givenComponentRendered(
      <>
        <AnalyticsComponent />
      </>,
      { amplitude: ['track'] },
    );

    const button = screen.getByTestId('track');
    fireEvent.click(button);

    expect(amplitudeTrack).toHaveBeenCalledTimes(0);
  });

  test('should call the revenue event', () => {
    givenComponentRendered(
      <>
        <AnalyticsComponent />
      </>,
    );

    const button = screen.getByTestId('revenue');
    fireEvent.click(button);

    expect(amplitudeRevenue).toHaveBeenCalledTimes(1);
  });

  test('should not call the revenue event as it is disabled', () => {
    givenComponentRendered(
      <>
        <AnalyticsComponent />
      </>,
      { amplitude: ['revenue'] },
    );

    const button = screen.getByTestId('revenue');
    fireEvent.click(button);

    expect(amplitudeRevenue).toHaveBeenCalledTimes(0);
  });
});
