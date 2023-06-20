import { ListItemProps, OrderedListProps, OrderedList, UnorderedList, UnorderedListProps, useMarkdown } from '@cmpsr/components';
import React from 'react';

export const renderOrderedList = (props: OrderedListProps) => {
  const { paragraph = {} } = useMarkdown();

  return <OrderedList {...paragraph} {...props} />;
};

export const renderUnorderedList = (props: UnorderedListProps) => {
  const { paragraph = {} } = useMarkdown();

  return <UnorderedList {...paragraph} {...props} />;
};

export const renderListItem = ({ ...props }: ListItemProps) => {
  const { li = {} } = useMarkdown();

  return <UnorderedList.Item {...li} {...props} />;
};
