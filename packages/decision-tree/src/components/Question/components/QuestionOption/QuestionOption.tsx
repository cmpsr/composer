import React, { FC } from 'react';
import { type QuestionOptionProps } from './types';
import { Checkbox, Radio, Box } from '@cmpsr/components';

const componentsMap = {
  checkbox: Checkbox,
  radio: Radio,
};

export const QuestionOption: FC<QuestionOptionProps> = ({
  componentType,
  componentProps,
  label,
  subLabel,
  ...props
}) => {
  return (
    <Box
      {...props}
      border="1px solid #666"
      borderColor="ui-element-outline-default"
      background="background-action-default"
      borderRadius="radii-4"
      width="350px"
      mb="spacer-4"
      mx="auto"
    >
      {React.createElement(componentsMap[componentType], {
        ...componentProps,
        display: 'flex',
        flexDirection: 'row-reverse',
        variant: 'outline',
        size: 'l',
        m: 'auto',
        justifyContent: 'space-between',
        py: 'spacer-3',
        px: 'spacer-4',
        alignItems: 'center',
        children: (
          <Box>
            <Box>{label}</Box>
            {subLabel ? <Box>{subLabel}</Box> : null}
          </Box>
        ),
      })}
    </Box>
  );
};
