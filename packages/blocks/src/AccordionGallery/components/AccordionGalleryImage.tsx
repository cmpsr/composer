import React, { FC } from 'react';
import { Box, Image, keyframes, useResponsiveValue } from '@cmpsr/components';
import { AccordionGalleryImageProps } from '../types';

export const AccordionGalleryImage: FC<AccordionGalleryImageProps> = (props) => {
  const key = useResponsiveValue(props.src);
  if (!props) return;
  const opacity = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
  `;
  const opacityAnimation = `${opacity} 0.5s linear`;

  return (
    <Box animation={opacityAnimation} key={key}>
      <Image alt="Accordion Illustration" margin={{ base: '0 auto', md: 'unset' }} {...props} />
    </Box>
  );
};
