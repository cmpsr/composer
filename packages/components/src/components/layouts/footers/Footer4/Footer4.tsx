import React, { ReactElement } from "react";
import cn from "classnames";

import { Box, Grid } from "components/containers";
import { getClassesFromStyle } from "utils";

import { FooterStyle } from "types";

export const FOOTER4_DEFAULT_TEST_ID = "footer4";

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

export const Footer4 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER4_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);
  return (
    <Box
      size="full"
      className={cn("py-8", className, colorClasses)}
      testId={testId}
    >
      <Box
        size="content"
        className="items-center md:items-start md:justify-between flex flex-col md:flex-row"
      >
        <div className="flex flex-1 w-full md:max-w-2/3 text-center md:text-left">
          {children && children.content}
        </div>
        {children && children.secondaryContent && (
          <Grid
            className={cn(
              "md:w-auto gap-8 md:gap-24 mx-4 md:mx-0 my-8 md:my-0",
              `grid-cols-${React.Children.count(children.secondaryContent)}`
            )}
          >
            {children.secondaryContent}
          </Grid>
        )}
      </Box>
      <Box
        size="content"
        className="items-center flex flex-col md:flex-row justify-between md:py-32"
      >
        <div className="flex-none">{children && children.logo}</div>
        {copy && <p className="">{copy}</p>}
      </Box>
    </Box>
  );
};
