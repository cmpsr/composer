import React, { FunctionComponent } from 'react';
import { isMobile } from 'react-device-detect';
import { DropdownNativeSelect } from '../DropdownNativeSelect';
import { DropdownDownshiftSelect } from '../DropdownDownshiftSelect';

export const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';

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

export const DropdownSingleSelect: FunctionComponent<SelectProps> = (props) => {
  return isMobile ? (
    <DropdownNativeSelect {...props} />
  ) : (
    <DropdownDownshiftSelect {...props} />
  );
};
