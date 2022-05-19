import React from 'react';
import { Text as CmpsrText } from '@cmpsr/components';

/**
 * We need this wrapper to avoid issues with mdx-bundler generating nested paragraph tags.
 */
export const Text = ({ children, ...rest }) => {
  const cleanedChildren = React.Children.map(children, (child) => (child.type === 'p' ? child.props.children : child));

  return <CmpsrText {...rest}>{cleanedChildren}</CmpsrText>;
};
