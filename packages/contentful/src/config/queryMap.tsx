import { ReactElement } from 'react';

import { getContent as utilGetContent } from 'utils/getContent';

import { BodyCopyByIdQuery as BodyCopyByIdQueryType } from 'types/BodyCopyByIdQuery';
import BodyCopyByIdQuery from 'models/content/BodyCopy/queries/BodyCopyByIdQuery.graphql';
import { FeatureByIdQuery as FeatureByIdQueryType } from 'types/FeatureByIdQuery';
import FeatureByIdQuery from 'models/content/Feature/queries/FeatureByIdQuery.graphql';
import { FooterByIdQuery as FooterByIdQueryType } from 'types/FooterByIdQuery';
import FooterByIdQuery from 'models/content/Footer/queries/FooterByIdQuery.graphql';
import { GridByIdQuery as GridByIdQueryType } from 'types/GridByIdQuery';
import GridByIdQuery from 'models/content/Grid/queries/GridByIdQuery.graphql';
import { GroupByIdQuery as GroupByIdQueryType } from 'types/GroupByIdQuery';
import GroupByIdQuery from 'models/content/Group/queries/GroupByIdQuery.graphql';
import { HeaderByIdQuery as HeaderByIdQueryType } from 'types/HeaderByIdQuery';
import HeaderByIdQuery from 'models/content/Header/queries/HeaderByIdQuery.graphql';
import { HeroByIdQuery as HeroByIdQueryType } from 'types/HeroByIdQuery';
import HeroByIdQuery from 'models/content/Hero/queries/HeroByIdQuery.graphql';
import { LinkByIdQuery as LinkByIdQueryType } from 'types/LinkByIdQuery';
import LinkByIdQuery from 'models/content/Link/queries/LinkByIdQuery.graphql';
import { SectionByIdQuery as SectionByIdQueryType } from 'types/SectionByIdQuery';
import SectionByIdQuery from 'models/content/Section/queries/SectionByIdQuery.graphql';

import { ChildProps } from 'types/ChildProps';

export const queryMap = {
  BodyCopy: ({ id }: ChildProps): ReactElement =>
    utilGetContent<BodyCopyByIdQueryType>({
      id,
      query: BodyCopyByIdQuery,
      name: 'bodyCopy',
    }),
  Feature: ({ id }: ChildProps): ReactElement =>
    utilGetContent<FeatureByIdQueryType>({
      id,
      query: FeatureByIdQuery,
      name: 'feature',
    }),
  Footer: ({ id }: ChildProps): ReactElement =>
    utilGetContent<FooterByIdQueryType>({
      id,
      query: FooterByIdQuery,
      name: 'footer',
    }),
  Grid: ({ id }: ChildProps): ReactElement =>
    utilGetContent<GridByIdQueryType>({
      id,
      query: GridByIdQuery,
      name: 'grid',
    }),
  Group: ({ id }: ChildProps): ReactElement =>
    utilGetContent<GroupByIdQueryType>({
      id,
      query: GroupByIdQuery,
      name: 'group',
    }),
  Header: ({ id }: ChildProps): ReactElement =>
    utilGetContent<HeaderByIdQueryType>({
      id,
      query: HeaderByIdQuery,
      name: 'header',
    }),
  Hero: ({ id }: ChildProps): ReactElement =>
    utilGetContent<HeroByIdQueryType>({
      id,
      query: HeroByIdQuery,
      name: 'hero',
    }),
  Link: ({ id }: ChildProps): ReactElement =>
    utilGetContent<LinkByIdQueryType>({
      id,
      query: LinkByIdQuery,
      name: 'link',
    }),
  Section: ({ id }: ChildProps): ReactElement =>
    utilGetContent<SectionByIdQueryType>({
      id,
      query: SectionByIdQuery,
      name: 'section',
    }),
};
