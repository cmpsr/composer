import React, { forwardRef } from 'react';
import { isMobile } from 'react-device-detect';
import { DropdownNativeSelect } from '../DropdownNativeSelect';
import { DropdownDownshiftSelect } from '../DropdownDownshiftSelect';

export interface Option {
  label: string;
  value: any;
}

export type SelectProps = {
  className?: string;
  options?: Option[];
  placeHolder?: string;
  initialSelectedOption?: Option;
  onItemChange?: (item: Option) => void;
  testId?: string;
  disabled?: boolean;
  name?: string;
  invalid?: boolean;
};

export const DropdownSingleSelect = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref) => {
    return isMobile ? (
      <DropdownNativeSelect {...props} ref={ref} />
    ) : (
      <DropdownDownshiftSelect {...props} ref={ref} />
    );
  }
);
