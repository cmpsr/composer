import React from 'react';
import { Tooltip, TooltipPlace } from '..';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Tooltip',
  component: Tooltip,
};

enum idOptions {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

enum colorOptions {
  Primary900 = 'bg-fill-primary-900',
  Primary100 = 'bg-fill-primary-100',
}

export const base = () => (
  <div className="p-48">
    <Tooltip
      id={select('id', idOptions, idOptions.top)}
      place={select('place', TooltipPlace, TooltipPlace.Top)}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
      backgroundColor={select(
        'backgroundColor',
        colorOptions,
        colorOptions.Primary900
      )}
    />
  </div>
);

base.story = {
  name: 'Base',
};
