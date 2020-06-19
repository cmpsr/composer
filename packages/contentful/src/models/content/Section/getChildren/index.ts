import { ReactElement, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { ContentfulContext } from "context";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { SectionByIdQuery as SectionByIdQueryType } from "types/SectionByIdQuery";
import SectionByIdQuery from "../queries/SectionByIdQuery.graphql";

type Props = {
  id: string;
};

export const getChildren = ({ id }: Props): ReactElement[] => {
  const contentfulContext = useContext(ContentfulContext);
  const { data }: { data: SectionByIdQueryType } = useQuery(SectionByIdQuery, {
    variables: { id },
  });
  if (!data) return null;

  const contentItems = data.section.contentCollection.items.map((item, index) =>
    renderFromContentfulModel(contentfulContext, item, index, id)
  );
  return contentItems;
};
