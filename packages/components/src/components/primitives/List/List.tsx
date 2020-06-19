import { ReactNode, createElement } from 'react';
import cn from 'classnames';
import { getListClasses } from 'utils/getDropdownClasses';
type Props = {
  className?: string;
  children?: ReactNode;
  columns?: number;
  tag?: 'div' | 'ul';
};

export const List = ({ className, children, tag = 'div' }: Props) => {
  const { wrapper } = getListClasses();
  return createElement(
    tag,
    {
      className: cn(wrapper, className),
    },
    children
  );
};
