import React from 'react';
import { Tooltip, TooltipPlace } from '..';

export default {
  title: 'Composer/Primitive/Tooltip',
  component: Tooltip,
};

export const withTopPlace = () => (
  <div className="p-48">
    <Tooltip
      id="top"
      place={TooltipPlace.Top}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
    />
  </div>
);

withTopPlace.story = {
  name: 'With top place',
};

export const withBottomPlace = () => (
  <div className="p-48">
    <Tooltip
      id="bottom"
      place={TooltipPlace.Bottom}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
    />
  </div>
);

withBottomPlace.story = {
  name: 'With bot place',
};

export const withLeftPlace = () => (
  <div className="p-48">
    <Tooltip
      id="left"
      place={TooltipPlace.Left}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
    />
  </div>
);

withLeftPlace.story = {
  name: 'With left place',
};

export const withRightPlace = () => (
  <div className="p-48">
    <Tooltip
      id="right"
      place={TooltipPlace.Right}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
    />
  </div>
);

withRightPlace.story = {
  name: 'With right place',
};

export const withBackgroundColor = () => (
  <div className="p-48">
    <Tooltip
      id="background"
      backgroundColor={'red'}
      tooltip={<span>Tooltip</span>}
      element={<span>Trigger</span>}
    />
  </div>
);

withBackgroundColor.story = {
  name: 'With background color',
};
