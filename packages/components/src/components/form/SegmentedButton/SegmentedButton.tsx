import { Box, Flex } from '@components';
import React, { FC, cloneElement, useState } from 'react';
import { ButtonProps, OptionValue, SegmentedButtonProps, SegmentedButtonStaticMembers } from './types';

// Habrá varios tipos de botones, unos que aceptan iconos, que acepten texto + icono (opcional), pero no podrán ser combinados entre ellos.
// El primer elemento y el último tendrán un radius diferente a los que estén entre medias.
// Habrá que contemplar los distintos estados: default, selected, focus, selected/focus, hover, disabled

export const SegmentedButton: FC<SegmentedButtonProps> & SegmentedButtonStaticMembers = ({
  options,
  onChange,
  variant = 'primary',
  size = 'l',
  defaultOption = '',
}) => {
  const [selectedValue, setSelectedValue] = useState<OptionValue>(defaultOption);

  const handleChange = (value: OptionValue) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Flex>
      {options.map((option) =>
        cloneElement(option.segment, {
          key: option.value,
          onClick: () => handleChange(option.value),
          isActive: selectedValue === option.value,
          variant,
          size,
        })
      )}
    </Flex>
  );
};

export const Button: FC<ButtonProps> = ({ isActive, ...rest }) => <Box bg={isActive ? 'green' : 'red'} {...rest} />;

SegmentedButton.Button = Button;
