import React, { FC, useCallback, useRef } from 'react';
import { Input } from '../Input';
import { IconChevronDown, IconChevronUp, IconX } from '../../media';
import { useAutocompleteMultiSelectContext } from './AutocompleteMultiSelect';
import { AutocompleteMultiSelectInputProps } from './types';

const AutocompleteMultiSelectInput: FC<AutocompleteMultiSelectInputProps> = ({
  clearButtonMode = 'has-value',
  size,
  isDisabled,
  ...rest
}) => {
  const {
    reset,
    getInputProps,
    getToggleButtonProps,
    getDropdownProps,
    isOpen,
    size: autocompleteMultiselectSize,
    isDisabled: autocompleteMultiSelectDisabled,
  } = useAutocompleteMultiSelectContext();
  const ref = useRef<HTMLInputElement>(null);
  const inputProps = getInputProps({ ...getDropdownProps({ preventKeyAction: isOpen, ref }) });

  const clearButtonConditions = {
    'has-value': inputProps.value,
    never: false,
    always: true,
  };
  const shouldShowClearButton = clearButtonConditions[clearButtonMode];
  const inputSize = size ?? autocompleteMultiselectSize;
  const isInputDisabled = isDisabled || autocompleteMultiSelectDisabled;

  const onReset = useCallback(() => {
    reset?.();
    ref?.current?.focus?.();
  }, [reset]);

  const pointerEventsStyle: React.CSSProperties = isInputDisabled ? { pointerEvents: 'none' } : {};

  const getIcon = () => {
    if (shouldShowClearButton) {
      return (
        <IconX
          data-testid="cmpsr.autocompleteMultiSelect.clear-button"
          cursor="pointer"
          onClick={onReset}
          style={pointerEventsStyle}
        />
      );
    }

    const IconComponent = isOpen ? IconChevronUp : IconChevronDown;
    const testId = isOpen ? 'cmpsr.autocompleteMultiSelect.chevron-up' : 'cmpsr.autocompleteMultiSelect.chevron-down';

    return (
      <IconComponent data-testid={testId} cursor="pointer" {...getToggleButtonProps({ style: pointerEventsStyle })} />
    );
  };

  const trailingIcon = getIcon();

  return <Input trailingIcon={trailingIcon} size={inputSize} isDisabled={isInputDisabled} {...inputProps} {...rest} />;
};

export default AutocompleteMultiSelectInput;
