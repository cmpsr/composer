import React from 'react';
import { CurrencyFieldIcon } from '.';
import { Icon, person as Person } from 'components/primitives';
import { ErrorField } from 'components/primitives';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/CurrencyFieldIcon',
  component: CurrencyFieldIcon,
};

export const IconPositions = () => (
  <>
    <h1>CurrencyFieldIcon IconPositions</h1>
    {Object.keys(CurrencyFieldIcon.IconPositions).map((iconPosition: any, i) => (
      <div key={i}>
        <CurrencyFieldIcon
          iconPosition={CurrencyFieldIcon.IconPositions[iconPosition]}
          placeholder={iconPosition}
          name={iconPosition}
          icon={<Person type={Icon.Types.Filled} />}
        />
        <br />
      </div>
    ))}
  </>
);

export const Shapes = () => (
  <>
    <h1>CurrencyField shapes</h1>
    {Object.keys(CurrencyFieldIcon.Shapes).map((shape: any, i) => (
      <div key={i}>
        <CurrencyFieldIcon
          name="default"
          shape={CurrencyFieldIcon.Shapes[shape]}
          placeholder={shape}
          icon={<Person type={Icon.Types.Filled} />}
        />
        <br />
      </div>
    ))}
  </>
);


export const Disabled = () => (
  <>
    <h1>CurrencyFieldIcon disabled</h1>
    <CurrencyFieldIcon
      name="disabled"
      placeholder="disabled"
      disabled
      icon={<Person type={Icon.Types.Filled} />}
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>CurrencyFieldIcon invalid</h1>
    <CurrencyFieldIcon
      name="invalid"
      placeholder="invalid"
      invalid
      icon={<Person type={Icon.Types.Filled} />}
    />
  </>
);

export const Error = () => (
  <>
    <h1>CurrencyFieldIcon invalid</h1>
    <CurrencyFieldIcon
      name="invalid"
      placeholder="invalid"
      invalid
      icon={<Person type={Icon.Types.Filled} />}
    />
    <ErrorField error="Error" />
  </>
)

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <CurrencyFieldIcon
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      onChange={action('On change')}
      icon={<Person type={Icon.Types.Filled} />}
      customCss={text('Custom css', 'padding: 10px 40px; border: 1px dashed blue;')}
      wrapperCustomCss={text('Wrapper custom css', 'border: 1px dashed red; padding: 10px;')}
    />
  </>
);
