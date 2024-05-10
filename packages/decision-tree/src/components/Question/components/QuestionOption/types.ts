import { CheckboxProps, RadioProps, BoxProps } from '@cmpsr/components';

export interface QuestionOptionProps extends BoxProps {
  componentType: 'checkbox' | 'radio';
  componentProps?: CheckboxProps | RadioProps;
  label: string;
  subLabel?: string;
}
