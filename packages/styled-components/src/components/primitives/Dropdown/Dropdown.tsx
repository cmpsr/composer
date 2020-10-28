import React, { useState, useEffect, useRef } from 'react';
import { Icon, Typography } from 'components/primitives';
import {
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon';
import { Props } from './Dropdown.types';
import {
  StyledWrapper,
  StyledAnchor,
  StyledIcon,
  StyledList,
} from './Dropdown.styled';

export const Dropdown = ({
  title,
  className,
  children,
  testId = 'dropdown',
}: Props) => {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <StyledWrapper ref={node} data-testid={testId}>
      <StyledAnchor
        className={className}
        role="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Typography tag={Typography.Tags.Span} type={Typography.Types.Body}>
          {title}
        </Typography>
        <StyledIcon testId={isOpen ? 'expandLess' : 'expandMore'}>
          {isOpen ? (
            <ExpandLess type={Icon.Types.Filled} />
          ) : (
            <ExpandMore type={Icon.Types.Filled} />
          )}
        </StyledIcon>
      </StyledAnchor>
      {isOpen && <StyledList>{children}</StyledList>}
    </StyledWrapper>
  );
};
