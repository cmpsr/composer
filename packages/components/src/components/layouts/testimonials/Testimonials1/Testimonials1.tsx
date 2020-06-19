import React from "react";
import cn from "classnames";
import { Box } from "components/containers";
import {
  Asset,
  Typography,
  TypographyTypes,
  Icon,
} from "components/primitives";
import { format_quote as FormatQuote } from "components/primitives/Icon/icons/editor";

import { Asset as AssetType } from "types";

export const TESTIMONIAL1_PLAN_DEFAULT_TEST_ID = "testimonial1";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials1 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL1_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <Box size="content" className={cn("flex items-stretch", className)}>
    <div
      data-testid={testId}
      className="flex flex-col md:flex-row ml-8 mr-4 my-8 md:my-20 md:mx-24"
    >
      <div className="w-40 h-40 md:w-64 md:h-64 md:mr-12">
        <Asset asset={asset} imageClassName="h-full object-cover" />
      </div>
      <div className="flex flex-col self-center text-left md:flex-row md:flex-1">
        <div className="mt-3 mr-4 md:mt-0">
          <Icon width={50} height={50}>
            <FormatQuote type="filled" />
          </Icon>
        </div>
        <div className="pt-3">
          <Typography
            tag="p"
            type={TypographyTypes.Headline5}
            className="font-bold"
          >
            {testimonial}
          </Typography>
          <div className="mt-4">
            <Typography tag="span" type={TypographyTypes.Body} className="mr-2">
              {author}
            </Typography>
            <Typography
              tag="span"
              type={TypographyTypes.Body}
              className="text-gray-500"
            >
              {profession}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </Box>
);
