import React from 'react';

import { PageContext } from '../PageContext';
import { Variant } from '../../types/Variant';

export const FastlyProvider = (props) => {
  const { abAllocations, query } = props;

  const addVariant = (variant: Variant) => {};

  const getVariantByRef = (ref: string): { id: string; type: string } => {
    const exp = abAllocations.experiments.find(
      (experiment) => experiment.eId === ref
    );
    return { id: exp.vId, type: exp.vType };
  };

  return (
    <PageContext.Provider
      value={{ abAllocations, addVariant, getVariantByRef, query }}
      {...props}
    />
  );
};
