import React, { ReactElement } from "react";
import cn from "classnames";

import { Box } from "components/containers";
import { Asset, Typography, TypographyTypes } from "components/primitives";
import { getClassesFromStyle, getChildrenWithGrid } from "utils";

import { FeatureStyle, Asset as AssetType } from "types";

type Props = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  embeddedAsset?: AssetType;
  className?: string;
  children?: ReactElement | ReactElement[];
  style: FeatureStyle;
};

export const EmbeddedFeature1 = ({
  embeddedAsset,
  className,
  title,
  subtitle,
  eyebrow,
  children,
  style,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);
  return (
    <Box size="content" className={cn("items-center", colorClasses, className)}>
      <div className="text-left">
        {embeddedAsset && (
          <Asset
            asset={embeddedAsset}
            className="mt-2"
            imageClassName="object-cover"
          />
        )}
        {title && (
          <Typography
            tag="h2"
            type={TypographyTypes.Headline4}
            style={style.title}
            className="mt-4"
          >
            {title}
          </Typography>
        )}
        {eyebrow && (
          <Typography
            tag="h4"
            type={TypographyTypes.Headline6}
            style={style.eyebrow}
          >
            {eyebrow}
          </Typography>
        )}
        {subtitle && (
          <Typography
            tag="h6"
            type={TypographyTypes.Body}
            className="mt-3"
            style={style.subtitle}
          >
            {subtitle}
          </Typography>
        )}
        <div className="flex justify-start mt-4">
          {getChildrenWithGrid(children)}
        </div>
      </div>
    </Box>
  );
};
