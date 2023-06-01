import { LinkProps, TextProps } from '@cmpsr/components';
import React, { PropsWithChildren, createContext, useContext } from 'react';

interface MarkdownContextProps {
  paragraph?: TextProps;
  link?: LinkProps;
  h1?: TextProps;
  h2?: TextProps;
  h3?: TextProps;
  h4?: TextProps;
  h5?: TextProps;
  h6?: TextProps;
  p?: TextProps;
}

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
