import React, { ReactElement, useContext } from 'react';
import { DEFAULT } from 'constants/index';
import renderFromComponentMap from 'utils/renderFromComponentMap';

import { ExperimentProps } from './types';
import { getChildren } from './getChildren';
import { PageContext } from 'context/PageContext';
import { getVariantByQueryParams } from 'utils/getVariantByQueryParams';
import { randomTrafficSelector } from 'utils/randomTrafficSelector';

const Experiment: React.FC<ExperimentProps> = React.memo((props) => {
  const {
    className,
    variants,
    sys: { id },
  } = props;

  // Check we have variants available
  if (!variants.variants) return null;

  // Use session context
  const { addVariant, getVariantByRef, query } = useContext(PageContext);

  // Get variant by session
  let selectedVariant = getVariantByRef(id);

  // If no variant selected in session
  if (!selectedVariant) {
    // Choose variant by query params or finally by traffic
    selectedVariant =
      getVariantByQueryParams(id, variants.variants, query) ||
      randomTrafficSelector(variants.variants, (item) => item);

    // Add selected variant to our session
    addVariant({ ...selectedVariant, ref: id });
  }

  const items = getChildren({
    id: selectedVariant.id,
    type: selectedVariant.type,
  });

  if (!items) return null;

  const ExperimentProps = {
    className,
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => <div {...ExperimentProps}>{items}</div>,
  };

  return renderFromComponentMap(componentMap, DEFAULT);
});
export default Experiment;
