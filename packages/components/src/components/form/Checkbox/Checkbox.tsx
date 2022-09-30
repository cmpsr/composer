import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import { CheckboxProps } from './types';
import * as Icons from '../../primitives/Icons';

const CheckboxTransition = ({ open, children }) => (
  <AnimatePresence initial={false}>
    {open && (
      <motion.div
        variants={{
          unchecked: { scale: 0.5 },
          checked: { scale: 1 },
        }}
        initial="unchecked"
        animate="checked"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const CheckboxIcon = ({ __css, isChecked }: any) => (
  <CheckboxTransition open={isChecked}>
    <Icons.IconCheck {...__css} />
  </CheckboxTransition>
);

export const Checkbox: FC<CheckboxProps> = (props) => <ChakraCheckbox icon={<CheckboxIcon />} {...props} />;
