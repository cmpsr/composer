import React, { ReactElement } from "react";
import cn from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getClassesFromStyle } from "utils";
import { BodyCopyStyle } from "types";

export const CODE_RENDERER_DEFAULT_TEST_ID = "code";

export const Code: (
  style: BodyCopyStyle,
  testId?: string
) => React.FC<{ language?: string; value: string }> = (
  style,
  testId = CODE_RENDERER_DEFAULT_TEST_ID
) => (props): ReactElement => {
  const { language, value } = props;
  const colorClasses = getClassesFromStyle(style.code);

  return (
    <div className={cn("mb-8", colorClasses)} data-testid={testId}>
      <SyntaxHighlighter language={language || "javascript"} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};
