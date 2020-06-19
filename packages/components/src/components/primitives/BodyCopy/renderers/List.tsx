import React, { ReactElement } from "react";
import cn from "classnames";
import { getClassesFromStyle } from "utils";
import { BodyCopyStyle } from "types";

export const List: (
  style: BodyCopyStyle
) => React.FC<{ ordered: boolean; children?: ReactElement }> = (style) => (
  props
): ReactElement => {
  const { children, ordered } = props;
  const ulColorClasses = getClassesFromStyle(style.ul);
  const olColorClasses = getClassesFromStyle(style.ol);

  return ordered ? (
    <ol className={cn("ml-4 mb-8", olColorClasses)}>{children}</ol>
  ) : (
    <ul className={cn("list-disc ml-4 mb-8", ulColorClasses)}>{children}</ul>
  );
};
