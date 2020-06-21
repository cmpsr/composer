import { ReactElement, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { ContentfulContext } from "context";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { GridByIdQuery as GridByIdQueryType } from "types/GridByIdQuery";
import GridByIdQuery from "../queries/GridByIdQuery.graphql";

type Props = {
  id: string;
};

export const getChildren = ({ id }: Props): ReactElement[] => {
  const contentfulContext = useContext(ContentfulContext);
  const { data }: { data: GridByIdQueryType } = useQuery(GridByIdQuery, {
    variables: { id },
  });
  if (!data) return null;

  const contentItems = data.grid.contentCollection.items.map((item, index) =>
    renderFromContentfulModel(contentfulContext, { ...item, isEmbedded: true }, index, id)
  );
  return contentItems;
};
