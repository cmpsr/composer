import React from 'react';
import { CurrencyFieldIcon } from '..';
import { Icon } from 'components/primitives';
import { person as Person } from 'components/primitives/Icon/icons/social';
import { Tooltip } from 'components/primitives/Tooltip';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Form/CurrencyFieldIcon',
  component: CurrencyFieldIcon,
};

export const withIcon = () => (
  <CurrencyFieldIcon
    icon={
      <Icon className="fill-current">
        <Person type="filled" />
      </Icon>
    }
    name="default"
    placeholder={text('Placeholder', 'placeholder')}
    invalid={boolean('Invalid', false)}
    disabled={boolean('Disabled', false)}
  />
);

withIcon.story = {
  name: 'With icon',
};

export const withIconTooltip = () => (
  <CurrencyFieldIcon
    icon={
      <Tooltip
        id="currencyFieldIcon"
        tooltip="This is the tooltip message"
        element={
          <Icon className="fill-current">
            <Person type="filled" />
          </Icon>
        }
      />
    }
    name="default"
    placeholder={text('Placeholder', 'placeholder')}
    invalid={boolean('Invalid', false)}
    disabled={boolean('Disabled', false)}
  />
);

withIconTooltip.story = {
  name: 'With icon tooltip',
};
