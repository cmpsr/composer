import { ReactElement, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { ContentfulContext } from "context";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { HeroByIdQuery as HeroByIdQueryType } from "types/HeroByIdQuery";
import HeroByIdQuery from "../queries/HeroByIdQuery.graphql";

type Props = {
  id: string;
};

export const getContent = ({ id }: Props): ReactElement => {
  const contentfulContext = useContext(ContentfulContext);
  const { data }: { data: HeroByIdQueryType } = useQuery(HeroByIdQuery, {
    variables: { id },
  });
  if (!data) return null;

  return renderFromContentfulModel(contentfulContext, data.hero, 0);
};
