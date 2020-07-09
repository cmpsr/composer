import React from 'react';
import { render } from '@testing-library/react';
import { ContentfulProvider } from './ContentfulProvider';

const Hero = props => <div {...props} />;

describe('ContentfulProvider', () => {
  it('renders with no warnings/errors', () => {
    const consoleError = jest.spyOn(global.console, 'error');
    const consoleWarn = jest.spyOn(global.console, 'warn');

    render(<ContentfulProvider componentMap={{ Hero: items => <Hero {...items} /> }} />);

    expect(consoleError).not.toHaveBeenCalled();
    expect(consoleWarn).not.toHaveBeenCalled();
  });

  it('throws warning log when no componentMap is passed', () => {
    const consoleWarn = jest.spyOn(global.console, 'warn');

    render(<ContentfulProvider />);

    expect(consoleWarn).toHaveBeenCalled();
  });
})
