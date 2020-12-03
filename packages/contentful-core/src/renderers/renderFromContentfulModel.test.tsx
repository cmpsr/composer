import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { renderFromContentfulModel } from '.';

const Link = ({ title, url }) => (
  <a href={url} data-testid="link">
    {title || 'title not specified'}
  </a>
);

const componentMap = {
  Link: (item): ReactElement => <Link {...item} />,
};

const FAKE_ASSET = {
  contentType: 'image',
  title: 'fake asset title',
  url: 'impulsum.vc',
};

const FAKE_SYS = {
  id: 'fake sys id',
};

const FAKE_ROUTE = {
  slug: '/',
};

const FAKE_LINK_STYLE = {
  background: {
    default: {
      bg: 'fill-primary-900',
    },
  },
};

const FAKE_LINK = {
  __typename: 'Link',
  sys: FAKE_SYS,
  asset: FAKE_ASSET,
  title: 'fake link title',
  type: 'text',
  embeddedType: null,
  route: FAKE_ROUTE,
  style: FAKE_LINK_STYLE,
  url: 'impulsum.vc',
};

// Mock the graphql file calls
jest.mock(
  '../../__tests__/models/content/Link/queries/LinkByIdQuery.graphql',
  () => 'LinkByIdQuery'
);

// Mock useQuery
jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(() => ({ error: null, loading: null })),
}));

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.spyOn(global.console, 'warn').mockImplementation(() => {});

describe('renderContentItemFromType', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders a Link', () => {
    const { getByText } = render(
      renderFromContentfulModel({ componentMap }, FAKE_LINK)
    );
    getByText(FAKE_LINK.title);
  });

  it('warns if __typename is not specified in the incoming data', () => {
    render(renderFromContentfulModel({ componentMap }, {}));
    expect(global.console.warn).toHaveBeenCalledTimes(1);
  });

  it('renders nothing if __typename is not specified', () => {
    const { container } = render(renderFromContentfulModel({ componentMap }, {}));
    expect(container.innerHTML).toBe('');
  });

  it('warns if specified type does not exist in componentMap', () => {
    render(renderFromContentfulModel({ componentMap }, { __typename: 'Test' }));
    expect(global.console.warn).toHaveBeenCalledTimes(1);
  });

  it('renders nothing if specified type not found in componentMap', () => {
    const { container } = render(renderFromContentfulModel({ componentMap }, { __typename: 'Test' }));
    expect(container.innerHTML).toBe('');
  });

  it('warns if a sys.id has not been set on the incoming item', () => {
    render(renderFromContentfulModel({ componentMap }, { __typename: 'Link' }));
    expect(global.console.warn).toHaveBeenCalledTimes(1);
  });

  it('renders nothing if sys.id is not set in item data', () => {
    const { container } = render(renderFromContentfulModel({ componentMap }, { __typename: 'Link' }));
    expect(container.innerHTML).toBe('');
  });
});
