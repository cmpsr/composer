import React from 'react';
import { Button } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Button',
  component: Button,
};

export const Types = () => (
  <>
    <h1>Button types</h1>
    {Object.keys(Button.Types).map((type: any) => (
      <>
        <Button type={Button.Types[type]}>{type} Button</Button>
        <br />
      </>
    ))}
  </>
);

export const Shapes = () => (
  <>
    <h1>Button shapes</h1>
    {Object.keys(Button.Shapes).map((shape: any) => (
      <>
        <Button shape={Button.Shapes[shape]}>{shape} Button</Button>
        <br />
      </>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>Button types</h1>
    {Object.keys(Button.Types).map((type: any) => (
      <>
        <Button type={Button.Types[type]} disabled>
          {type} Disabled Button
        </Button>
        <br />
      </>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Button
      onClick={action('Button clicked')}
      disabled={boolean('Disabled', false)}
      type={select('Button type', Button.Types, Button.Types.Primary)}
      shape={select('Button shape', Button.Shapes, Button.Shapes.Rectangle)}
    >
      {text('Title', 'Button')}
    </Button>
  </>
);
