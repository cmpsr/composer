import React, { cloneElement, FC } from 'react';
import { Box, Flex, FlexProps, Text, TextVariant } from '@components';
import { getValidChildren } from '@chakra-ui/react-utils';

interface NumberedListProps extends FlexProps {
  number?: number;
}

interface NumberedListItemProps extends NumberedListProps {
  indexTextVariants?: TextVariant;
}

interface NumberedListStaticMembers {
  Item: FC<NumberedListItemProps>;
}

export const NumberedList: FC<NumberedListProps> & NumberedListStaticMembers = ({ children, number, ...props }) => {
  const validChildren = getValidChildren(children);
  return (
    <Flex as="ol" {...props} direction="column" gap={number ? '0.75rem' : '1rem'}>
      {validChildren.map((listItem, index) => {
        index++;
        return cloneElement(listItem, {
          pl: number ? '0' : '0.5rem',
          key: index,
          number: number ? `${number}.${index}` : `${index}`,
        });
      })}
    </Flex>
  );
};

const NumberedListItem: FC<NumberedListItemProps> = ({
  indexTextVariants = 'text-body-regular',
  number,
  children,
  ...props
}) => {
  return (
    <Flex as="li" direction="row" alignItems="start" {...props} gap="0.25rem">
      <Box>
        <Text variant={indexTextVariants}>{number}.</Text>
      </Box>
      <Box>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === NumberedList) {
            return cloneElement(child, { number, paddingTop: '0.75rem' });
          } else return child;
        })}
      </Box>
    </Flex>
  );
};

NumberedList.Item = NumberedListItem;
