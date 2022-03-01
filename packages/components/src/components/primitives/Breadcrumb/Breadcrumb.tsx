import React, { FC } from 'react';
import { chakra, forwardRef, StyleProps, StylesProvider, useMultiStyleConfig, useStyles } from '@chakra-ui/react';
import { getValidChildren } from '@chakra-ui/react-utils';
import { Flex, IconChevronRight, Link, Text } from '@components';
import { BreadcrumbProps, BreadcrumbStaticMembers } from './types';

const LastItem = forwardRef((props, ref) => {
  const styles = useStyles() as {
    lastItem: StyleProps;
  };
  return <chakra.span aria-current="page" ref={ref} {...props} __css={styles.lastItem} />;
});

const Separator = ({ icon, ...rest }) => {
  const styles = useStyles() as {
    separator: StyleProps;
  };

  let separator = <IconChevronRight {...rest} />;

  if (icon) {
    if (typeof icon === 'string') {
      separator = <Text>{icon}</Text>;
    } else {
      separator = icon;
    }
  }

  return React.cloneElement(separator, {
    ...styles.separator,
  });
};

const BreadcrumbItem = ({ isLastChild, separator, ...rest }) => {
  if (isLastChild) {
    return <LastItem {...rest} />;
  }

  return (
    <>
      <Link size="m" {...rest} />
      <Separator icon={separator} />
    </>
  );
};

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

Breadcrumb.Item = BreadcrumbItem;
