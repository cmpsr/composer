import React from 'react';
import { Tooltip, TooltipPlace, BackgroundColor } from '..';
import { select } from '@storybook/addon-knobs';
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
export const base = () => (
  <div className="p-48">
    <Tooltip
      id={select('id', idOptions, idOptions.top)}
      place={select('place', TooltipPlace, TooltipPlace.Top)}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
      tooltipBackground={select(
        'tooltipBackground',
        BackgroundColor,
        BackgroundColor.Primary75
      )}
    />
  </div>
);
base.story = {
  name: 'Base',
};
