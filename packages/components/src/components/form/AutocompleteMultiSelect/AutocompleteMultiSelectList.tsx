import React, { FC } from 'react';
import { Box } from '../../layouts/Box';
import { Text } from '../../typography';
import { RecursiveCSSObject, StyleProps, useStyleConfig } from '@chakra-ui/react';
import { useAutocompleteMultiSelectContext } from './AutocompleteMultiSelect';
import { AutocompleteMultiSelectListProps } from './types';

const AutocompleteMultiSelectList: FC<AutocompleteMultiSelectListProps> = ({
  noResultsContent,
  renderItem,
  ...rest
}) => {
  const { isOpen, items, selectedItem, highlightedIndex, getItemProps, getMenuProps } =
    useAutocompleteMultiSelectContext();
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;

  const noResults = noResultsContent ?? <Text {...styles.noResults}>No results</Text>;

  return (
    <Box as="ul" visibility={isOpen ? 'visible' : 'hidden'} {...styles.list} {...getMenuProps()} {...rest}>
      {isOpen && items.length
        ? items.map((item, index) => (
            <Box
              as="li"
              key={index}
              {...styles.item}
              {...(item === selectedItem && styles.item.active)}
              {...(highlightedIndex === index && styles.item.highlighted)}
              {...getItemProps({ index, item })}
            >
              {renderItem(item)}
            </Box>
          ))
        : noResults}
    </Box>
  );
};

export default AutocompleteMultiSelectList;
