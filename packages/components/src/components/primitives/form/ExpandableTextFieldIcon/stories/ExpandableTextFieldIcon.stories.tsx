import React from 'react';
import { ExpandableTextFieldIcon, ExpandableTextFieldIconPosition } from '..';
import { InputShapes } from '../../TextField';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { send as Send } from '../../../Icon/icons/content';

export default {
  title: 'Composer/Primitive/Form/ExpandableTextFieldIcon',
  component: ExpandableTextFieldIcon,
};

export const basic = () => (
  <ExpandableTextFieldIcon
    onChange={action('On change')}
    placeholder={text('placeholder', 'Placeholder')}
    shape={select('shape', InputShapes, InputShapes.Rounded)}
    iconPosition={select(
      'iconPosition',
      ExpandableTextFieldIconPosition,
      ExpandableTextFieldIconPosition.Right
    )}
    icon={<Send type="rounded" />}
    onClickIcon={action('On click icon')}
  />
);

basic.story = {
  name: 'Default',
};
