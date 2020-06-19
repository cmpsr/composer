import React from "react";
import ReactMarkdown from "react-markdown";

import { BodyCopyStyle } from "types";
import { Heading, Link, List, Paragraph, Code } from "./renderers";

export const BODYCOPY_DEFAULT_TEST_ID = "bodycopy";

type Props = {
  className?: string;
  copy: string;
  style: BodyCopyStyle;
  testId?: string;
};

export const BodyCopy = ({
  className,
  copy,
  style,
  testId = BODYCOPY_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <ReactMarkdown
      renderers={{
        code: Code(style),
        paragraph: Paragraph(style),
        link: Link(style),
        list: List(style),
        heading: Heading(style),
      }}
      className={className}
      source={copy}
      data-testid={testId}
    />
  );
};
