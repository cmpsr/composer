import React, { ReactElement } from "react";
import cn from "classnames";
import { BodyCopyStyle } from "types";
import { getClassesFromStyle } from "utils";
import { Typography, TypographyTypes } from "components/primitives";

type hTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: (
  style: BodyCopyStyle
) => React.FC<{ children: ReactElement[]; level: number }> = (style) => (
  props
): ReactElement => {
  const { children, level } = props;
  const colorClasses = getClassesFromStyle(style[`h${level}`] || {});

  return (
    <Typography
      tag={`h${level}` as hTagType}
      type={`typo-headline-${level}` as TypographyTypes}
      className={cn("mb-8", colorClasses)}
    >
      {children}
    </Typography>
  );
};
