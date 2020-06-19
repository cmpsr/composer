import React, { ReactElement, cloneElement } from "react";
import cn from "classnames";

import { Grid } from "components/containers";

export const getChildrenWithGrid = (
  children: ReactElement | ReactElement[]
): ReactElement => {
  const items = children
    ? React.Children.map(children, (child) => {
        return cloneElement(child, {
          ...child.props,
          className: cn("w-full md:w-auto", child.props.className),
        });
      })
    : [];
  return items.length > 1 ? (
    <Grid className="grid-cols-2 gap-4 w-full md:w-auto">{items}</Grid>
  ) : (
    items[0] || null
  );
};
