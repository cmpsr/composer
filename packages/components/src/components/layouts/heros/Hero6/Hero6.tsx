import React, { ReactNode } from "react";
import cn from "classnames";
import { isMobile } from "react-device-detect";

import { Box } from "components/containers";
import { Asset, Typography, TypographyTypes } from "components/primitives";
import { getClassesFromStyle } from "utils";

import { HeroStyle, Asset as AssetType } from "types";

type Props = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  desktopAsset?: AssetType;
  mobileAsset?: AssetType;
  className?: string;
  children?: ReactNode;
  style: HeroStyle;
};

export const Hero6 = ({
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
      size="screen"
      className={cn("flex justify-end", className, colorClasses)}
    >
      {mobileAsset && (
        <div className="md:hidden w-3/12 h-screen z-0 absolute right-0">
          <Asset
            autoPlay
            asset={mobileAsset}
            className="h-full z-0 absolute"
            imageClassName="object-cover h-full w-full"
          />
        </div>
      )}
      {desktopAsset && !isMobile && (
        <Asset
          autoPlay
          asset={desktopAsset}
          className="hidden md:block object-cover w-7/12 h-full z-0 absolute right-0"
          imageClassName="object-cover w-full h-full"
        />
      )}
      <Box size="full" className="flex justify-center items-center p-8">
        <Box size="content" className="flex justify-start items-center">
          <div className="relative z-10 max-w-hero-copy-medium text-left">
            {eyebrow && (
              <Typography
                tag="h4"
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
            <div className="flex justify-start mt-8">{children}</div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
