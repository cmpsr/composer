import React, { FC, createContext, useContext } from 'react';
import { ComposerContextProps, ComposerProviderProps } from '.';

const ComposerContext = createContext<ComposerContextProps>(undefined);

export const ComposerProvider: FC<ComposerProviderProps> = ({
  children,
  theme,
}) => (
  <ComposerContext.Provider value={{ theme }}>
    {children}
  </ComposerContext.Provider>
);

export const useComposerProvider = () => {
  const context = useContext(ComposerContext);
  if (context === undefined) {
    throw new Error(
      'useComposerProvider must be used within a ComposerProvider'
    );
  }

  return context;
};
