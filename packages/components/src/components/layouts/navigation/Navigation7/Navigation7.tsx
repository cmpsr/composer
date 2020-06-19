import React, { ReactElement } from "react";
import cn from "classnames";

import { Box, Grid } from "components/containers";
import { getClassesFromStyle } from "utils";
import { Icon } from "components/primitives";
import { search as Search } from "components/primitives/Icon/icons/action";

import { NavigationStyle } from "types";

export const NAVIGATION7_DEFAULT_TEST_ID = "navigation7";

type Props = {
  className?: string;
  style: NavigationStyle;
  children?: {
    logo?: ReactElement;
    content?: ReactElement | ReactElement[];
  };
  testId?: string;
};

export const Navigation7 = ({
  className,
  children,
  style,
  testId = NAVIGATION7_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style.background);

  return (
    <Box size="full" className={cn("py-8", className, colorClasses)}>
      <nav
        data-testid={testId}
        className="w-full h-full max-w-content mx-auto items-center flex flex-col md:flex-row"
      >
        <div className="flex flex-col md:flex-row flex-1 w-full justify-start">
          <div className="flex flex-grow-0 text-center my-4 md:my-0">
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
        <div className="flex-1 flex justify-center">
          {children && children.logo}
        </div>
        <div className="flex-1 flex justify-end">
          <Icon>
            <Search type="filled" />
          </Icon>
        </div>
      </nav>
    </Box>
  );
};
