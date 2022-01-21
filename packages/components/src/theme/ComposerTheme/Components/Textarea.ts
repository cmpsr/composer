import { ComponentStyleConfig } from "@chakra-ui/react";
import { inputStyles } from "../styles";

const baseStyle = {
  backgroundColor: 'background-action-default',
  textStyle: "text-body-meta-regular",
  color: 'text-primary',
  _placeholder: {
    color: 'text-secondary',
  },
  _hover: {
    backgroundColor: 'background-action-hover',
    borderWidth: '0.063rem',
    borderColor: 'ui-element-outline-active',
  },
  _disabled: {
    backgroundColor: 'background-action-disabled',
    borderColor: 'ui-element-outline-disabled',
    _placeholder: {
      color: 'text-disabled'
    }
  },
  _focus: {
    backgroundColor: 'background-action-default',
    borderColor: 'ui-element-outline-default',
    boxShadow: '0 0 0 0.188rem var(--chakra-colors-primary-focus)',
  },
}
const textStyles = {
  medium: 'text-body-regular',
  small: 'text-body-meta-regular',
};
export const Textarea: ComponentStyleConfig = {
  baseStyle,
  variants: {
    outline: baseStyle
  },
  sizes: {
    s: ({ theme }) => ({
      ...inputStyles.small,
      ...theme.textStyles[textStyles.small],
    }),
    m: ({ theme }) => ({
      ...inputStyles.medium,
      ...theme.textStyles[textStyles.medium],
    }),
  },
  defaultProps: {
    size: 's'
  }
}