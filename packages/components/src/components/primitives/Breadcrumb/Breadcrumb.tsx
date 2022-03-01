import { StylesProvider, useMultiStyleConfig, useStyles } from '@chakra-ui/react';
import { Flex } from '@components';
import React, { FC } from 'react';
import { IconChevronRight, Link, Text } from '@components';
import { getValidChildren } from '@chakra-ui/react-utils';

import { BreadcrumbProps, BreadcrumbStaticMembers, BreadcrumbStyle } from './types';

export const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbStaticMembers = ({ children, separator, ...rest }) => {
  const styles = useMultiStyleConfig('Breadcrumb', {});
  const validChildren = getValidChildren(children);
  const count = validChildren.length;

  const clones = validChildren.map((child, index) =>
    React.cloneElement(child, {
      separator,
      isLastChild: count === index + 1,
    })
  );

  return (
    <Flex __css={styles.container} {...rest}>
      <StylesProvider value={styles}>{clones}</StylesProvider>
    </Flex>
  );
};

Breadcrumb.Item = ({ isLastChild, separator, ...rest }) => {
  const styles = useStyles();
  if (isLastChild) {
    return <Text {...styles.lastItem} {...rest} />;
  }
  return (
    <>
      <Link size="m" {...rest} />
      <Separator icon={separator} />
    </>
  );
};

const Separator = ({ icon, ...rest }) => {
  const styles = useStyles();
  let separator = <IconChevronRight {...rest} />;

  if (icon) {
    if (typeof icon === 'string') {
      separator = <Text {...styles.separator}>{icon}</Text>;
    } else {
      separator = icon;
    }
  }

  return React.cloneElement(separator, {
    ...styles.separator,
  });
};
