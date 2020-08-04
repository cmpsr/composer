import React, { ReactElement } from "react";

import { DEFAULT } from "constants/index";

import renderFromComponentMap from "utils/renderFromComponentMap";

import { Section as DSMSection } from "@cmpsr/components/components/layouts";
import {
  Typography,
  TypographyTypes,
} from "@cmpsr/components/components/primitives";

import { SectionProps } from "./types";
import { getChildren } from "./getChildren";

const Section: React.FC<SectionProps> = React.memo((props) => {
  const {
    className,
    title,
    subtitle,
    style,
    type,
    sys: { id },
  } = props;

  const items = getChildren({ id });
  if (!items) return null;

  const sectionProps = {
    className,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <DSMSection {...sectionProps}>
        {{
          title: (
            <Typography
              tag="h2"
              type={TypographyTypes.Headline2}
              style={sectionProps.style.title}
            >
              {title}
            </Typography>
          ),
          subtitle: (
            <Typography
              tag="h6"
              type={TypographyTypes.Headline6}
              style={sectionProps.style.subtitle}
            >
              {subtitle}
            </Typography>
          ),
          content: items,
        }}
      </DSMSection>
    ),
  };

  return renderFromComponentMap(componentMap, type);
});
export default Section;
