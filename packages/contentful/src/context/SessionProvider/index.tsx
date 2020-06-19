import React from 'react';

import { PageContext } from '../PageContext';
import { Variant } from '../../types/Variant';

export const SessionProvider = (props) => {
  const { session, query } = props;

  const addVariant = (variant: Variant) => {
    session.variants.push(variant);
  };
  const getVariantByRef = (ref: string): Variant => {
    return session.variants.find((variant) => variant.ref === ref);
  };

  return (
    <PageContext.Provider
      value={{ session, addVariant, getVariantByRef, query }}
      {...props}
    />
  );
};
