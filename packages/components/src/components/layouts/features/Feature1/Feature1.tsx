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

export const Feature1 = ({
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
      <div
        className={cn("text-left flex flex-col justify-center", {
          "md:w-1/2 md:pr-4": desktopAsset && !isMobile,
        })}
      >
        {eyebrow && (
          <Typography
            tag="h4"
            type={TypographyTypes.Headline6}
            style={style.eyebrow}
          >
            {eyebrow}
          </Typography>
        )}
        {mobileAsset && (
          <Asset
            controls
            asset={mobileAsset}
            imageClassName="object-cover"
            className="md:hidden z-0 mt-2"
          />
        )}
        {title && (
          <Typography
            tag="h2"
            type={TypographyTypes.Headline1}
            style={style.title}
            className="mt-4"
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
      {desktopAsset && !isMobile && (
        <div className="hidden md:flex flex-1 items-center md:w-1/2 md:pl-4">
          <Asset
            controls
            asset={desktopAsset}
            className="flex-1 w-full h-full"
            imageClassName="object-cover w-full h-full"
          />
        </div>
      )}
    </Box>
  );
};
