import React, { useState, useEffect, useRef } from 'react';
import { Icon, Typography } from 'components/primitives';
import { List } from 'components/primitives/List';
import {
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon/icons/navigation';
import { Props } from './Dropdown.types';
import { StyledWrapper, StyledAnchor, StyledIcon } from './Dropdown.styled';

export const Dropdown = ({ title, className, children }: Props) => {
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
    <StyledWrapper ref={node}>
      <StyledAnchor
        className={className}
        role="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Typography tag={Typography.Tags.Span} type={Typography.Types.Body}>
          {title}
        </Typography>
        <StyledIcon testId={isOpen ? 'ExpandLess' : 'ExpandMore'}>
          {isOpen ? (
            <ExpandLess type={Icon.Types.Filled} />
          ) : (
            <ExpandMore type={Icon.Types.Filled} />
          )}
        </StyledIcon>
      </StyledAnchor>
      {isOpen && <List className="min-w-10">{children}</List>}
    </StyledWrapper>
  );
};
