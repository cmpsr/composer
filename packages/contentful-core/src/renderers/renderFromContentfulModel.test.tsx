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
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({ error: null, loading: null })),
}));

describe('renderContentItemFromType', () => {
  it('renders a Link', () => {
    const { getByText } = render(
      renderFromContentfulModel({ componentMap }, FAKE_LINK)
    );
    getByText(FAKE_LINK.title);
  });
});
