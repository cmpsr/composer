import React, { ReactNode } from "react";
import cn from "classnames";

import { Box, Grid as GridContainer } from "components/containers";
import { getClassesFromStyle } from "utils";

import { GridStyle } from "types";

type Props = {
  children?: ReactNode;
  className?: string;
  gridClassName?: string;
  style?: GridStyle;
};

export const Grid = ({
  children,
  className,
  gridClassName,
  style = {},
}: Props) => {
  const gridStyle = getClassesFromStyle(style.grid);
  return (
    <Box size="content" className={cn("flex items-stretch", className)}>
      <GridContainer className={cn("max-w-content", gridStyle, gridClassName)}>
        {children}
      </GridContainer>
    </Box>
  );
};
