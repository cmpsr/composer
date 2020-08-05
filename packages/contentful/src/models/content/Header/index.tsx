import React, { ReactElement, useContext } from "react";

import { DEFAULT } from "constants/index";
import {
  Navigation1,
  Navigation2,
  Navigation3,
  Navigation4,
  Navigation5,
  Navigation6,
  Navigation7,
  Navigation8,
} from "@cmpsr/components/components/layouts";

import { ContentfulContext } from "context";
import renderFromComponentMap from "utils/renderFromComponentMap";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = React.memo((props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    sys: { id },
    className,
    logo,
    type,
    style,
    contentCollection,
    secondaryContentCollection,
  } = props;

  const headerProps = {
    className,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <Navigation1 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation1>
    ),
    header2: (): ReactElement => (
      <Navigation2 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation2>
    ),
    header3: (): ReactElement => (
      <Navigation3 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation3>
    ),
    header4: (): ReactElement => (
      <Navigation4 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation4>
    ),
    header5: (): ReactElement => (
      <Navigation5 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation5>
    ),
    header6: (): ReactElement => (
      <Navigation6 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation6>
    ),
    header7: (): ReactElement => (
      <Navigation7 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation7>
    ),
    header8z: (): ReactElement => (
      <Navigation8 {...headerProps}>
        {{
          logo: renderFromContentfulModel(contentfulContext, logo),
          content: contentCollection.items.map((item, index) =>
            renderFromContentfulModel(contentfulContext, item, index, id)
          ),
          secondaryContent: secondaryContentCollection.items.map(
            (item, index) => renderFromContentfulModel(contentfulContext, item, index, id)
          ),
        }}
      </Navigation8>
    ),
  };

  return renderFromComponentMap(componentMap, type);
});
export default Header;
