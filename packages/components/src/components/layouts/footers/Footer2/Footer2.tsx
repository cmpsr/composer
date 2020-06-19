import React, { ReactElement } from "react";
import cn from "classnames";

import { Box, Grid } from "components/containers";
import { getClassesFromStyle } from "utils";

import { FooterStyle } from "types";

export const FOOTER2_DEFAULT_TEST_ID = "footer2";

type Props = {
  copy?: string;
  className?: string;
  children?: {
    logo?: ReactElement;
    secondaryContent?: ReactElement | ReactElement[];
  };
  style: FooterStyle;
  testId?: string;
};

export const Footer2 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER2_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);
  return (
    <Box
      size="full"
      className={cn("py-8", className, colorClasses)}
      testId={testId}
    >
      <Box size="content" className="items-center flex flex-col md:flex-row">
        <div className="flex-1 flex justify-start">
          {children && children.logo}
        </div>
        <div className="flex-1 flex w-full text-center my-8 md:my-0 justify-center">
          {children && children.secondaryContent && (
            <Grid
              className={cn(
                "w-full md:w-auto gap-8 md:gap-24 mx-4 md:mx-0",
                `grid-cols-${React.Children.count(children.secondaryContent)}`
              )}
            >
              {children.secondaryContent}
            </Grid>
          )}
        </div>
        <p className="flex-1 text-center md:text-right my-4 md:my-0">{copy}</p>
      </Box>
    </Box>
  );
};
