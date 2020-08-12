import React from 'react';
import { Tooltip, TooltipPlace, BackgroundColor } from '../Tooltip';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Tooltip',
  component: Tooltip,
};

export const base = () => (
  <div className="p-48">
    <Tooltip
      place={select('Place', TooltipPlace, TooltipPlace.Left)}
      element={<span>{text('Trigger', 'Trigger')}</span>}
      tooltip={<span>{text('Tooltip', 'Tooltip')}</span>}
      backgroundColor={select(
        'backgroundColor',
        BackgroundColor,
        BackgroundColor.Primary900
      )}
    />
  </div>
);

base.story = {
  name: 'Base',
};
