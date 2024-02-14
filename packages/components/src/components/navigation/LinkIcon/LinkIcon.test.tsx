import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { LinkIcon } from './LinkIcon';
import { IconSend } from '../../media/Icons';

describe('LinkIcon', () => {
  it('should render an anchor', () => {
    renderWithProviders(<LinkIcon data-testid="test.id" icon={<IconSend />} />);
    const linkComponent = screen.getByTestId('test.id');
    expect(linkComponent.nodeName).toBe('A');
  });

  it('should render a link with an icon', () => {
    renderWithProviders(<LinkIcon data-testid="test.id" icon={<IconSend data-testid="cmpsr.link.icon" />} />);
    screen.getByTestId('test.id');
    screen.getByTestId('cmpsr.link.icon');
  });

  it('renders with inline style when isInline is true', () => {
    renderWithProviders(<LinkIcon role="link" isInline icon={<IconSend data-testid="cmpsr.link.icon" />} />);
    const linkComponent = screen.getByRole('link');
    expect(linkComponent).toHaveStyle('display: inline');
  });
});
