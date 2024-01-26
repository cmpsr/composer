import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { IconLink } from './IconLink';
import { IconSend } from '../../media/Icons';

describe('IconLink', () => {
  it('should render an anchor', () => {
    renderWithProviders(<IconLink data-testid="test.id" icon={<IconSend />} />);
    const linkComponent = screen.getByTestId('test.id');
    expect(linkComponent.nodeName).toBe('A');
  });

  it('should render a link with an icon', () => {
    renderWithProviders(<IconLink data-testid="test.id" icon={<IconSend data-testid="cmpsr.link.icon" />} />);
    screen.getByTestId('test.id');
    screen.getByTestId('cmpsr.link.icon');
  });

  it('renders with inline style when isInline is true', () => {
    renderWithProviders(<IconLink role="link" isInline icon={<IconSend data-testid="cmpsr.link.icon" />} />);
    const linkComponent = screen.getByRole('link');
    expect(linkComponent).toHaveStyle('display: inline');
  });
});
