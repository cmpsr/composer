import { MaskitoOptions, MaskitoPlugin, MaskitoPostprocessor } from '@maskito/core';
import { MaskOptions } from './types';
import {
  maskitoCaretGuard,
  maskitoPostfixPostprocessorGenerator,
  maskitoPrefixPostprocessorGenerator,
} from '@maskito/kit';
import { ElementState } from '@maskito/core/lib/types';

export const getMaskOptions = ({
  mask,
  prefix = '',
  postfix = '',
  caretPositioning = true,
}: MaskOptions): MaskitoOptions => {
  const plugins: MaskitoPlugin[] = [];
  const postprocessors: MaskitoPostprocessor[] = [];

  const handleEmptyInputAffixes = ({ value, selection }: ElementState) => {
    let trimmedInput = value;
    if (prefix && trimmedInput.startsWith(prefix)) {
      trimmedInput = trimmedInput.substring(prefix.length);
    }
    if (postfix && trimmedInput.endsWith(postfix)) {
      trimmedInput = trimmedInput.substring(0, trimmedInput.length - postfix.length);
    }

    const newValue = trimmedInput.trim() ? value : '';
    return { value: newValue, selection };
  };

  if (caretPositioning) {
    const calculateCaretEnd = (value: string) => Math.max(prefix.length, value.length - postfix.length);
    plugins.push(maskitoCaretGuard((value) => [prefix.length, calculateCaretEnd(value)]));
  }

  if (prefix) postprocessors.push(maskitoPrefixPostprocessorGenerator(prefix));
  if (postfix) postprocessors.push(maskitoPostfixPostprocessorGenerator(postfix));
  postprocessors.push(handleEmptyInputAffixes);

  return { mask, postprocessors, plugins };
};
