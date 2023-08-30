import { BoxProps } from '@chakra-ui/react';

export type MarkdownEditorProps = Omit<BoxProps, 'onChange'> & {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
};
