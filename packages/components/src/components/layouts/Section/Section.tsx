import React, { ReactElement } from "react";
import cn from "classnames";

import {
  Section as SectionContainer,
  Box,
  SectionChild,
} from "components/containers";
import { SectionStyle } from "types";

type Props = {
  children?: {
    title?: ReactElement;
    subtitle?: ReactElement;
    content?: ReactElement | ReactElement[];
  };
  className?: string;
  style?: SectionStyle;
};

export const Section = ({ children, className }: Props) => {
  return (
    <SectionContainer className={cn(className, "px-4 md:px-8")}>
      {children.title && <Box size="content">{children.title}</Box>}
      {children.subtitle && <Box size="content">{children.subtitle}</Box>}
      {children.content &&
        React.Children.map(children.content, (child) => (
          <SectionChild>{child}</SectionChild>
        ))}
    </SectionContainer>
  );
};
