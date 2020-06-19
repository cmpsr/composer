import React from "react";
import cn from "classnames";
import { Asset, Typography, TypographyTypes } from "components/primitives";
import { Asset as AssetType } from "types";

export const TESTIMONIAL5_PLAN_DEFAULT_TEST_ID = "testimonial5";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials5 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL5_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <div
    data-testid={testId}
    className={cn(
      "relative flex flex-col p-5 md:p-10 rounded shadow items-center",
      className
    )}
  >
    <Asset
      asset={asset}
      imageClassName="w-24 h-24 rounded-full object-cover"
      className="absolute transform -translate-y-20"
    />
    <Typography
      tag="p"
      type={TypographyTypes.Body}
      className="text-center mt-12 mb-12"
    >
      {testimonial}
    </Typography>
    <Typography tag="h6" type={TypographyTypes.Headline6} className="">
      {author}
    </Typography>
    <Typography tag="p" type={TypographyTypes.Body} className="text-gray-500">
      {profession}
    </Typography>
  </div>
);
