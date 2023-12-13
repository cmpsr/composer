import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator, maskitoWithPlaceholder } from '@maskito/kit';
import { DateMaskOptions } from './types';

export const getDateMaskOptions = ({
  mode = 'mm/dd/yyyy',
  separator = '/',
  showPlaceholderOnFocusOnly = true,
}: DateMaskOptions): MaskitoOptions => {
  const dateOptions = maskitoDateOptionsGenerator({
    mode,
    separator,
  });

  const {
    plugins, // These plugins ensure that the caret position is managed correctly and the placeholder is removed on blur.
    ...placeholderOptions
  } = maskitoWithPlaceholder(mode, showPlaceholderOnFocusOnly);

  return {
    ...dateOptions,
    plugins: plugins.concat(dateOptions.plugins || []),
    preprocessors: [
      // Placeholder preprocessors are added before date mask preprocessors to handle placeholder logic first.
      ...placeholderOptions.preprocessors,
      ...dateOptions.preprocessors,
    ],
    postprocessors: [
      ...dateOptions.postprocessors,
      // Placeholder postprocessors are added after date mask postprocessors to finalize placeholder behavior.
      ...placeholderOptions.postprocessors,
    ],
  };
};
