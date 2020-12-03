import React from 'react';
import { render } from '@testing-library/react';
import { ContentfulProvider } from './ContentfulProvider';

const Hero = props => <div {...props} />;

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.spyOn(global.console, 'error').mockImplementation(() => {});
// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.spyOn(global.console, 'warn').mockImplementation(() => {});

describe('ContentfulProvider', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders with no warnings/errors', () => {
    render(<ContentfulProvider componentMap={{ Hero: items => <Hero {...items} /> }} />);

    expect(global.console.error).not.toHaveBeenCalled();
    expect(global.console.warn).not.toHaveBeenCalled();
  });

  it('throws warning log when no componentMap is passed', () => {
    render(<ContentfulProvider />);

    expect(global.console.warn).toHaveBeenCalled();
  });
});
