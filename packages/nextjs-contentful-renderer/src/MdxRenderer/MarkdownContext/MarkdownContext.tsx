import React, { PropsWithChildren, createContext, useContext } from 'react';
import { MarkdownContextProps } from './types';

const MarkdownContext = createContext<MarkdownContextProps>({});

export const MarkdownProps = ({ children, ...value }: PropsWithChildren<MarkdownContextProps>) => (
  <MarkdownContext.Provider value={value}>{children}</MarkdownContext.Provider>
);

export const useMarkdown = () => {
  // We don't want to fail/crash if the context is not defined
  try {
    const context = useContext(MarkdownContext);
    return context;
  } catch {
    return {};
  }
};
