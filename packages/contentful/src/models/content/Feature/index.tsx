import React, { ReactElement, useContext } from "react";

import { DEFAULT } from "constants/index";
import {
  Feature1,
  Feature2,
  Feature3,
  EmbeddedFeature1,
} from "@cmpsr/components/lib/components/layouts";

import { ContentfulContext } from "context";
import renderFromComponentMap from "utils/renderFromComponentMap";
import renderFromContentfulModel from "utils/renderFromContentfulModel";

import { FeatureProps } from "./types";

const Feature: React.FC<FeatureProps> = React.memo((props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    sys: { id },
    className,
    title,
    subtitle,
    eyebrow,
    type,
    embeddedType,
    mobileAsset,
    desktopAsset,
    embeddedAsset,
    style,
    contentCollection,
    isEmbedded = false,
  } = props;

  const featureProps = {
    className,
    title,
    subtitle,
    eyebrow,
    mobileAsset,
    desktopAsset,
    embeddedAsset,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <Feature1 {...featureProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, { ...item, isEmbedded }, index, id)
        )}
      </Feature1>
    ),
    feature2: (): ReactElement => (
      <Feature2 {...featureProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, { ...item, isEmbedded }, index, id)
        )}
      </Feature2>
    ),
    feature3: (): ReactElement => (
      <Feature3 {...featureProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, { ...item, isEmbedded }, index, id)
        )}
      </Feature3>
    ),
    "embedded-feature1": (): ReactElement => (
      <EmbeddedFeature1 {...featureProps}>
        {contentCollection.items.map((item, index) =>
          renderFromContentfulModel(contentfulContext, { ...item, isEmbedded }, index, id)
        )}
      </EmbeddedFeature1>
    ),
  };

  return renderFromComponentMap(componentMap, isEmbedded ? embeddedType : type);
});
export default Feature;
