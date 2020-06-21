import React, { ReactElement } from "react";

import { getClassesFromStyle } from "utils";
import { BodyCopyStyle } from "types";
import { Link as LinkDSM } from "components/primitives";
import { Typography, TypographyTypes } from "components/primitives/Typography";

export const Link: (
  style: BodyCopyStyle
) => React.FC<{ href: string; children?: ReactElement }> = (style) => (
  props
): ReactElement => {
  const { children, href } = props;
  const colorClasses = getClassesFromStyle(style.a);
  return (
    <LinkDSM url={href} className={colorClasses}>
      <Typography tag="span" type={TypographyTypes.Link}>
        {children}
      </Typography>
    </LinkDSM>
  );
};
