import React from 'react';
import { Text } from '.';

/**
 * We need this wrapper to avoid issues with mdx-bundler generating nested paragraph tags.
 */
export const Paragraph = (props) => (props.children === 'string' ? <Text {...props} /> : <>{props.children}</>);
