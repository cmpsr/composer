import React, { useState, useEffect, useRef, ReactNode } from 'react';
import cn from 'classnames';
import { Icon, Typography, TypographyTypes } from 'components/primitives';
import { List } from 'components/primitives/List';
import {
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon/icons/navigation';

type Props = {
  title: string;
  className?: string;
  listWrapperClassName?: string;
  children?: ReactNode;
};

export const Dropdown = ({
  title,
  className,
  children,
  listWrapperClassName,
}: Props) => {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClose = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [node]);

  return (
    <div ref={node} className="relative">
      <a
        className={cn('flex align-middle flex-1', className)}
        role="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Typography tag="span" type={TypographyTypes.Body}>
          {title}
        </Typography>
        <Icon
          className="fill-current ml-2 pointer-events-none"
          testId={isOpen ? 'ExpandLess' : 'ExpandMore'}
        >
          {isOpen ? <ExpandLess type="filled" /> : <ExpandMore type="filled" />}
        </Icon>
      </a>
      {isOpen && <List className="min-w-10">{children}</List>}
    </div>
  );
};
