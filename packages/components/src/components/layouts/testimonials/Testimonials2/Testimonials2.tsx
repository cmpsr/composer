import React from "react";
import cn from "classnames";
import { Box } from "components/containers";
import { Asset, Typography, TypographyTypes } from "components/primitives";

import { Asset as AssetType } from "types";

export const TESTIMONIAL2_PLAN_DEFAULT_TEST_ID = "testimonial2";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials2 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL2_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <Box size="content" className={cn("flex justify-center mt-5", className)}>
    <div
      data-testid={testId}
      className="flex flex-col items-center md:h-56 md:w-7/12"
    >
      <Asset
        asset={asset}
        imageClassName="w-16 h-16 rounded-full object-cover"
        className="mb-4"
      />
      <Typography tag="h6" type={TypographyTypes.Headline6}>
        {author}
      </Typography>
      <Typography
        tag="p"
        type={TypographyTypes.Body}
        className="text-gray-500 mb-8"
      >
        {profession}
      </Typography>
      <Typography
        tag="p"
        type={TypographyTypes.Body}
        className="text-center px-4"
      >
        {testimonial}
      </Typography>
    </div>
  </Box>
);
