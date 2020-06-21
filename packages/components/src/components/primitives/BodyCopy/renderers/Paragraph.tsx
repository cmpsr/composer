import React, { ReactElement } from "react";
import cn from "classnames";

import { getClassesFromStyle } from "utils";
import { BodyCopyStyle } from "types";
import { Typography, TypographyTypes } from "components/primitives/Typography";

export const Paragraph: (
  style: BodyCopyStyle
) => React.FC<{ children: ReactElement[] }> = (style) => (
  props
): ReactElement => {
  const { children } = props;
  const colorClasses = getClassesFromStyle(style.p);
  return (
    <Typography
      tag="p"
      type={TypographyTypes.Body}
      className={cn("mb-8", colorClasses)}
    >
      {children}
    </Typography>
  );
};
