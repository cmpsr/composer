import React, { ReactElement } from "react";
import cn from "classnames";

import { Box, Grid } from "components/containers";
import { getClassesFromStyle } from "utils";

import { FooterStyle } from "types";

export const FOOTER3_DEFAULT_TEST_ID = "footer3";

type Props = {
  copy?: string;
  className?: string;
  children?: {
    logo?: ReactElement;
    content?: ReactElement | ReactElement[];
    secondaryContent?: ReactElement | ReactElement[];
  };
  style: FooterStyle;
  testId?: string;
};

export const Footer3 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER3_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);
  return (
    <Box
      size="full"
      className={cn("py-8", className, colorClasses)}
      testId={testId}
    >
      <Box size="content" className="items-center flex flex-col md:flex-row">
        <div className="flex-none">{children && children.logo}</div>
        <div className="flex flex-col md:flex-row flex-1 w-full justify-end">
          <div className="flex flex-grow-0 text-center my-4 md:my-0">
            {children && children.content && (
              <Grid
                className={cn(
                  "grid-cols-1 w-full gap-8 md:mx-0",
                  `md:grid-cols-${React.Children.count(children.content)}`
                )}
              >
                {children.content}
              </Grid>
            )}
          </div>
        </div>
      </Box>
      <Box
        size="content"
        className="items-center flex flex-col md:flex-row justify-between md:py-32"
      >
        <Grid
          className={cn(
            "w-full md:w-auto gap-8 md:gap-24 mx-4 md:mx-0 my-8 md:my-0",
            `grid-cols-${React.Children.count(children?.secondaryContent)}`
          )}
        >
          {children?.secondaryContent}
        </Grid>

        {copy && <p className="">{copy}</p>}
      </Box>
    </Box>
  );
};
