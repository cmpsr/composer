import React, { ReactElement } from "react";
import { DEFAULT } from "constants/index";
import { BodyCopy as DSMBodyCopy } from "@cmpsr/components/components/primitives";

import renderFromComponentMap from "utils/renderFromComponentMap";

import { BodyCopyProps } from "./types";

const BodyCopy: React.FC<BodyCopyProps> = React.memo((props) => {
  const { className, type, copy, style } = props;

  const bodyCopyProps = {
    className,
    copy,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => <DSMBodyCopy {...bodyCopyProps} />,
  };

  return renderFromComponentMap(componentMap, type);
});
export default BodyCopy;
