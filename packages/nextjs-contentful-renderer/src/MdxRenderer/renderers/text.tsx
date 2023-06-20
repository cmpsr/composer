import React from 'react';
import { Text, TextProps, useMarkdown } from '@cmpsr/components';

export const renderText = ({ children, ...props }: TextProps, as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p') => {
  const variants = {
    h1: 'text-header-4XL' as const,
    h2: 'text-header-3XL' as const,
    h3: 'text-header-2XL' as const,
    h4: 'text-header-XL' as const,
    h5: 'text-header-L' as const,
    h6: 'text-header-M' as const,
  };
  const { paragraph = {}, [as]: current } = useMarkdown();
  return (
    <Text as={as} variant={variants[as]} {...paragraph} {...current} {...props}>
      {children}
    </Text>
  );
};
