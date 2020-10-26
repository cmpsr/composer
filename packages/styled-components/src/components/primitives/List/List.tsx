import React from 'react';
import { Props, Tags } from './List.types';
import { StyledList } from './List.styled';

export const List = ({
  className,
  children,
  tag = Tags.Div,
  testId = 'list',
}: Props) => (
  <StyledList as={tag} className={className} data-testid={testId}>
    {children}
  </StyledList>
);

List.Tags = Tags;
