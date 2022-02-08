import { useStyleConfig } from '@chakra-ui/react';
import { Flex } from '@components';
import React, { FC, Fragment } from 'react';
import { IconChevronRight, Link, Text } from '..';
import { BreadcrumbProps, BreadcrumbStyle } from './types';

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, separator, ...props }) => {
  const copy = [...items];
  const last = copy.pop();

  const { container, separatorIcon, separator: separatorStyle, lastItem } = useStyleConfig(
    'Breadcrumb'
  ) as BreadcrumbStyle;

  return (
    <Flex {...container} {...props} direction="row">
      {copy.map(({ text, ...others }, index) => (
        <Fragment key={index}>
          <Link size="m" {...others}>
            {text}
          </Link>
          {separator ? (
            typeof separator === 'string' ? (
              <Text {...separatorStyle}>{separator}</Text>
            ) : (
              separator
            )
          ) : (
            <IconChevronRight {...separatorIcon} size="m" color="text-secondary" />
          )}
        </Fragment>
      ))}
      <Text {...lastItem}>{last.text}</Text>
    </Flex>
  );
};
