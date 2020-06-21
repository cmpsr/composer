import React, { ReactElement } from "react";
import cn from "classnames";
import { isMobile } from "react-device-detect";

import { Box } from "components/containers";
import { Asset, Typography, TypographyTypes } from "components/primitives";
import { getChildrenWithGrid, getClassesFromStyle } from "utils";

import { FeatureStyle, Asset as AssetType } from "types";

type Props = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  desktopAsset?: AssetType;
  mobileAsset?: AssetType;
  className?: string;
  children?: ReactElement | ReactElement[];
  style: FeatureStyle;
};

export const Feature3 = ({
  desktopAsset,
  mobileAsset,
  className,
  title,
  subtitle,
  eyebrow,
  children,
  style,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);

  return (
    <Box
      size="content"
      className={cn("flex items-stretch", className, colorClasses)}
    >
      {desktopAsset && !isMobile && (
        <div className="hidden md:flex items-center md:w-1/2 md:pr-4">
          <Asset
            controls
            asset={desktopAsset}
            className="flex-1 w-full h-full"
            imageClassName="flex-1 w-full h-full object-cover"
          />
        </div>
      )}
      <div
        className={cn("text-left flex flex-col justify-center", {
          "md:w-1/2 md:pr-4": desktopAsset && !isMobile,
        })}
      >
        {mobileAsset && (
          <Asset
            controls
            asset={mobileAsset}
            className="md:hidden z-0 mb-2"
            imageClassName="object-cover"
          />
        )}
        {eyebrow && (
          <Typography
            tag="h4"
            className="mb-2"
            type={TypographyTypes.Headline6}
            style={style.eyebrow}
          >
            {eyebrow}
          </Typography>
        )}
        {title && (
          <Typography
            tag="h2"
            type={TypographyTypes.Headline1}
            style={style.title}
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            tag="h6"
            type={TypographyTypes.Headline6}
            className="mt-3"
            style={style.subtitle}
          >
            {subtitle}
          </Typography>
        )}
        <div className="flex justify-start mt-8">
          {getChildrenWithGrid(children)}
        </div>
      </div>
    </Box>
  );
};
