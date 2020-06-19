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

export const Hero2 = ({
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
    <Box size="screen" className={cn("", className, colorClasses)}>
      {mobileAsset && (
        <Box size="screen" className="md:hidden w-full h-full z-0 absolute">
          <Asset
            autoPlay
            asset={mobileAsset}
            className="object-cover w-full h-full"
            imageClassName="object-cover w-full h-full"
          />
        </Box>
      )}
      {desktopAsset && !isMobile && (
        <Asset
          autoPlay
          asset={desktopAsset}
          className="hidden md:block object-cover w-full h-full z-0 absolute"
          imageClassName="object-cover w-full h-full"
        />
      )}
      <Box size="full" className="flex justify-center items-center p-8">
        <Box size="content" className="flex justify-start items-center">
          <div className="relative z-10 max-w-hero-copy text-left">
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
                type={TypographyTypes.Headline2}
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
