import React, { ReactElement, useContext } from "react";

import { DEFAULT } from "constants/index";
import {
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Hero6,
  Hero7,
  Hero8,
} from "@cmpsr/components/lib/components/layouts";

import { ContentfulContext } from "context";
import renderFromComponentMap from "utils/renderFromComponentMap";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = React.memo((props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    sys: { id },
    className,
    title,
    subtitle,
    eyebrow,
    type,
    mobileAsset,
    desktopAsset,
    style,
    contentCollection,
  } = props;

  const heroProps = {
    className,
    title,
    subtitle,
    eyebrow,
    mobileAsset,
    desktopAsset,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <Hero1 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero1>
    ),
    hero2: (): ReactElement => (
      <Hero2 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero2>
    ),
    hero3: (): ReactElement => (
      <Hero3 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero3>
    ),
    hero4: (): ReactElement => (
      <Hero4 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero4>
    ),
    hero5: (): ReactElement => (
      <Hero5 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero5>
    ),
    hero6: (): ReactElement => (
      <Hero6 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero6>
    ),
    hero7: (): ReactElement => (
      <Hero7 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero7>
    ),
    hero8: (): ReactElement => (
      <Hero8 {...heroProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, item, index, id)
        )}
      </Hero8>
    ),
  };

  return renderFromComponentMap(componentMap, type);
});
export default Hero;
