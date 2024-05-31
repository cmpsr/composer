import React, { FC } from 'react';
import { Box } from '../../layouts/Box';
import { Tag, TagSize } from '../../dataDisplay';
import { IconX } from '../../media';
import { useStyleConfig, ResponsiveValue, RecursiveCSSObject, StyleProps } from '@chakra-ui/react';
import { useAutocompleteMultiSelectContext } from './AutocompleteMultiSelect';
import { AutocompleteMultiSelectSelectedItemsProps, AutocompleteMultiSelectElementSize } from './types';

const getTagSize = (size: ResponsiveValue<AutocompleteMultiSelectElementSize>): ResponsiveValue<TagSize> =>
  size === 'l' ? 'm' : 's';

const defaultRenderSelectedItem = ({ selectedItem, removeSelectedItem, itemToString, size, isDisabled }) => {
  const tagSize = getTagSize(size);
  const itemString = (itemToString ? itemToString(selectedItem) : selectedItem) as string;
  return (
    <Tag size={tagSize} isDisabled={isDisabled}>
      <Tag.Label>{itemString}</Tag.Label>
      <Tag.RightIcon
        data-testid="cmpsr.autocompleteMultiSelect.clear-tag-button"
        as={IconX}
        onClick={removeSelectedItem}
      />
    </Tag>
  );
};

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem = defaultRenderSelectedItem,
  isDisabled,
  ...rest
}) => {
  const {
    selectedItems,
    getSelectedItemProps,
    removeSelectedItem,
    itemToString,
    size,
    isDisabled: autocompleteMultiSelectDisabled,
  } = useAutocompleteMultiSelectContext();

  const isTagDisabled = isDisabled || autocompleteMultiSelectDisabled;
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;

  return selectedItems.length ? (
    <Box as="ul" {...rest} {...styles.selectedItems}>
      {selectedItems.map((selectedItem, index) => (
        <Box
          as="li"
          key={`selected-item-${index}`}
          {...styles.selectedItem}
          {...getSelectedItemProps({ selectedItem, index })}
        >
          {renderSelectedItem({
            selectedItem,
            removeSelectedItem: () => removeSelectedItem(selectedItem),
            itemToString,
            size,
            isDisabled: isTagDisabled,
          })}
        </Box>
      ))}
    </Box>
  ) : null;
};

export default AutocompleteMultiSelectSelectedItems;
