import { Variant } from 'types/Variant';

export const getVariantByQueryParams = (ref, variants, params): Variant => {
  if (!variants) return;

  const paramKeys = Object.keys(params);

  const foundVariants = variants.filter((variant) => {
    if (!variant.match) return false;

    return variant.match.reduce((prevMatch, match) => {
      if (prevMatch) return prevMatch;

      return paramKeys.reduce((prevParm, param) => {
        if (prevParm) return prevParm;

        return match[param] === params[param];
      }, false);
    }, false);
  });
  if (foundVariants.length > 0) {
    console.log('Matched variant by query', foundVariants[0]);
    return { ...foundVariants[0], ref };
  }
};
