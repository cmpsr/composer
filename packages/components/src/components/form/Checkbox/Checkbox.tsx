import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Checkbox as ChakraCheckbox, forwardRef } from '@chakra-ui/react';
import { CheckboxProps } from './types';
import * as Icons from '../../media/Icons';

interface CheckboxTransitionProps {
  open: boolean;
  children: React.ReactNode;
}

const CheckboxTransition: React.FC<CheckboxTransitionProps> = ({ open, children }) => (
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

const CheckboxIcon = ({ isChecked }: any) => (
  <CheckboxTransition open={isChecked}>
    <Icons.IconCheck />
  </CheckboxTransition>
);

export const Checkbox = forwardRef<CheckboxProps, typeof ChakraCheckbox>((props, ref) => (
  <ChakraCheckbox ref={ref} icon={<CheckboxIcon />} {...props} />
));
