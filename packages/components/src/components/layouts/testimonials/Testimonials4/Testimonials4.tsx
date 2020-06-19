import React from "react";
import cn from "classnames";
import {
  Asset,
  Typography,
  TypographyTypes,
  Icon,
} from "components/primitives";
import { Asset as AssetType } from "types";
import { format_quote as FormatQuote } from "components/primitives/Icon/icons/editor";

export const TESTIMONIAL4_PLAN_DEFAULT_TEST_ID = "testimonial4";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials4 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL4_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <div
    data-testid={testId}
    className={cn("flex flex-col p-10 rounded shadow-lg", className)}
  >
    <div className="flex items-center mb-8">
      <Asset
        asset={asset}
        imageClassName="w-20 h-20 rounded-full object-cover"
        className="mr-6"
      />
      <div className="align-middle">
        <Typography tag="h6" type={TypographyTypes.Headline6} className="">
          {author}
        </Typography>
        <Typography
          tag="p"
          type={TypographyTypes.Body}
          className="text-gray-500"
        >
          {profession}
        </Typography>
      </div>
    </div>
    <Typography tag="p" type={TypographyTypes.Body} className="text-left mb-12">
      {testimonial}
    </Typography>
    <div className="flex justify-end">
      <Icon width={50} height={50}>
        <FormatQuote type="filled" />
      </Icon>
    </div>
  </div>
);
