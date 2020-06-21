import { render } from '@testing-library/react';

import { componentMap } from "../../config";
import renderFromContentfulModel from '.';
import { FAKE_LINK } from '../../models/content/constants';

// Mock the graphql file calls
jest.mock(
  '../../models/content/BodyCopy/queries/BodyCopyByIdQuery.graphql',
  () => 'BodyCopyByIdQuery',
);
jest.mock(
  '../../models/content/Feature/queries/FeatureByIdQuery.graphql',
  () => 'FeatureByIdQuery',
);
jest.mock(
  '../../models/content/Footer/queries/FooterByIdQuery.graphql',
  () => 'FooterByIdQuery',
);
jest.mock(
  '../../models/content/Grid/queries/GridByIdQuery.graphql',
  () => 'GridByIdQuery',
);
jest.mock(
  '../../models/content/Group/queries/GroupByIdQuery.graphql',
  () => 'GroupByIdQuery',
);
jest.mock(
  '../../models/content/Header/queries/HeaderByIdQuery.graphql',
  () => 'HeaderByIdQuery',
);
jest.mock(
  '../../models/content/Hero/queries/HeroByIdQuery.graphql',
  () => 'HeroByIdQuery',
);
jest.mock(
  '../../models/content/Link/queries/LinkByIdQuery.graphql',
  () => 'LinkByIdQuery',
);
jest.mock(
  '../../models/content/Section/queries/SectionByIdQuery.graphql',
  () => 'SectionByIdQuery',
);

// Mock useQuery
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({ error: null, loading: null })),
}));

describe('renderContentItemFromType', () => {
  it('renders a Link', () => {
    const { getByText } = render(renderFromContentfulModel({ componentMap }, FAKE_LINK));
    getByText(FAKE_LINK.title);
  });
});
