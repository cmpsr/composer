import React, { PropsWithChildren, createContext, useContext } from 'react';
import { MarkdownContextProps } from './types';

export const MarkdownContext = createContext<MarkdownContextProps>({});

export const MarkdownProvider = ({ children, ...value }: PropsWithChildren<MarkdownContextProps>) => (
  <MarkdownContext.Provider value={value}>{children}</MarkdownContext.Provider>
);

// To support legacy references
export const MarkdownProps = MarkdownProvider;

export const useMarkdown = () => {
  // We don't want to fail/crash if the context is not defined
  try {
    const context = useContext(MarkdownContext);
    return context;
  } catch {
    return {};
  }
};
