import { CssCustomizableProps } from 'components/Components.types';

export type Option = {
  label: string;
  value: any;
};

export type Props = CssCustomizableProps & {
  options?: Option[];
  placeholder?: string;
  initialSelectedOption?: Option;
  onItemChange?: (item: Option) => void;
  disabled?: boolean;
  name?: string;
  invalid?: boolean;
};
