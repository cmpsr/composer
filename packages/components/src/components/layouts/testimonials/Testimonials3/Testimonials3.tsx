import React from "react";
import cn from "classnames";
import { Asset, Typography, TypographyTypes } from "components/primitives";

import { Asset as AssetType } from "types";

export const TESTIMONIAL3_PLAN_DEFAULT_TEST_ID = "testimonial3";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials3 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL3_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <div
    data-testid={testId}
    className={cn("flex flex-col items-center", className)}
  >
    <Asset
      asset={asset}
      imageClassName="w-32 h-32 rounded-full object-cover"
      className="mb-4"
    />
    <Typography tag="h6" type={TypographyTypes.Headline6}>
      {author}
    </Typography>
    <Typography
      tag="p"
      type={TypographyTypes.Body}
      className="text-gray-500 mb-6"
    >
      {profession}
    </Typography>
    <Typography
      tag="p"
      type={TypographyTypes.Body}
      className="text-center md:px-5"
    >
      {testimonial}
    </Typography>
  </div>
);
