import React from 'react';
import { Tooltip, TooltipPlace, BackgroundColor } from '../Tooltip';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Popper',
  component: Tooltip,
};

export const base = () => (
  <div className="p-48">
    <Tooltip
      place={select('Place', TooltipPlace, TooltipPlace.Top)}
      element={<span>{text('Trigger', 'Trigger')}</span>}
      tooltip={<span>{text('Tooltip', 'Tooltip')}</span>}
      backgroundColor={select(
        'backgroundColor',
        BackgroundColor,
        BackgroundColor.primary900
      )}
    />
  </div>
);

base.story = {
  name: 'Base',
};
