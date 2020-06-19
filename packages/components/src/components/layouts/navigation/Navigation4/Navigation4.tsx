import React, { ReactElement } from "react";
import cn from "classnames";

import { Box, Grid } from "components/containers";
import { getClassesFromStyle } from "utils";

import { NavigationStyle } from "types";

export const NAVIGATION4_DEFAULT_TEST_ID = "navigation4";

type Props = {
  className?: string;
  style: NavigationStyle;
  children?: {
    logo?: ReactElement;
    content?: ReactElement | ReactElement[];
    secondaryContent?: ReactElement | ReactElement[];
  };
  testId?: string;
};

export const Navigation4 = ({
  className,
  children,
  style,
  testId = NAVIGATION4_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);

  return (
    <Box size="full" className={cn("py-8", className, colorClasses)}>
      <nav
        data-testid={testId}
        className="w-full h-full max-w-content mx-auto items-center flex flex-col md:flex-row"
      >
        <div className="flex-1 flex justify-start">
          {children && children.logo}
        </div>
        <div className="flex-1 flex flex-col md:flex-row w-full justify-center items-center">
          <div className="flex flex-grow-0 text-center my-4 mx-8 md:my-0">
            {children && children.content && (
              <Grid
                className={cn(
                  "grid-cols-2 w-full gap-8 md:mx-0",
                  `md:grid-cols-${React.Children.count(children.content)}`
                )}
              >
                {children.content}
              </Grid>
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          {children && children.secondaryContent && (
            <Grid className={cn("grid-cols-2 gap-8")}>
              {children.secondaryContent}
            </Grid>
          )}
        </div>
      </nav>
    </Box>
  );
};
