import React, { ReactElement, useContext } from "react";

import { DEFAULT } from "constants/index";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
} from "@cmpsr/components/components/layouts";

import { ContentfulContext } from "context";
import renderFromComponentMap from "utils/renderFromComponentMap";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = React.memo((props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    sys: { id },
    className,
    copy,
    logo,
    type,
    style,
    contentCollection,
    secondaryContentCollection,
  } = props;

  const footerProps = {
    className,
    style: style || {},
    copy,
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <Footer1 {...footerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Footer1>
    ),
    footer2: (): ReactElement => (
      <Footer2 {...footerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Footer2>
    ),
    footer3: (): ReactElement => (
      <Footer3 {...footerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Footer3>
    ),
    footer4: (): ReactElement => (
      <Footer4 {...footerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(
              contentfulContext,
              { ...item, gridClassName: "flex-1" },
              index,
              id
            )
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Footer4>
    ),
  };

  return renderFromComponentMap(componentMap, type);
});
export default Footer;
