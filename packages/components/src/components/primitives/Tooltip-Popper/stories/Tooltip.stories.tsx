import React from 'react';
import { Tooltip, TooltipPlace } from '../Tooltip';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Popper',
  component: Tooltip,
};

export const base = () => (
  <div className="p-48">
    <Tooltip
      place={select('Place', TooltipPlace, TooltipPlace.Top)}
      element={<span>Trigger</span>}
      tooltip={<span>Tooltip</span>}
    />
  </div>
);

base.story = {
  name: 'Base',
};
