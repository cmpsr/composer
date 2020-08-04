import React, { ReactElement } from "react";

import { DEFAULT } from "constants/index";
import { Grid as GridDSM } from "@cmpsr/components/components/layouts";

import renderFromComponentMap from "utils/renderFromComponentMap";

import { GridProps } from "./types";
import { getChildren } from "./getChildren";

const Grid: React.FC<GridProps> = React.memo((props) => {
  const {
    className,
    gridClassName,
    type,
    style,
    sys: { id },
  } = props;

  const gridProps = {
    className,
    gridClassName,
    style: style || {},
  };

  const items = getChildren({ id });
  if (!items) return null;

  const componentMap = {
    [DEFAULT]: (): ReactElement => <GridDSM {...gridProps}>{items}</GridDSM>,
  };

  return renderFromComponentMap(componentMap, type);
});
export default Grid;
