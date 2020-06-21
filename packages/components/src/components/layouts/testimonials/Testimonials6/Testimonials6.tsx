import React from "react";
import cn from "classnames";
import { Asset as AssetType } from "types";
import { Box } from "components/containers";
import { Typography, TypographyTypes, Icon } from "components/primitives";
import { format_quote as FormatQuote } from "components/primitives/Icon/icons/editor";

export const TESTIMONIAL6_PLAN_DEFAULT_TEST_ID = "testimonial6";

type Props = {
  author?: string;
  profession?: string;
  testimonial?: string;
  asset?: AssetType;
  className?: string;
  testId?: string;
};

export const Testimonials6 = ({
  author,
  profession,
  testimonial,
  className,
  testId = TESTIMONIAL6_PLAN_DEFAULT_TEST_ID,
}: Props) => (
  <Box size="content" className={cn("flex justify-center", className)}>
    <div
      data-testid={testId}
      className="flex flex-col md:flex-row md:w-3/4 p-3"
    >
      <Icon width={50} height={50} className="md:w-20 h-12">
        <FormatQuote type="filled" />
      </Icon>
      <div>
        <Typography
          tag="h1"
          type={TypographyTypes.Headline2}
          className="p-1 text-center mb-10"
        >
          {testimonial}
        </Typography>
        <div className="flex items-end justify-center">
          <Typography
            tag="h6"
            type={TypographyTypes.Headline6}
            className="mr-2"
          >
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
    </div>
  </Box>
);
