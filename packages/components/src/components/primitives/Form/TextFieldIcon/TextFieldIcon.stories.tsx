import React from 'react';
import { TextFieldIcon } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { ErrorField } from 'components/primitives';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';

export default {
  title: 'Primitives/Form/TextFieldIcon',
  component: TextFieldIcon,
};

export const IconPositions = () => (
  <>
    <h1>TextFieldIcon IconPositions</h1>
    {Object.keys(TextFieldIcon.IconPositions).map((iconPosition: any, i) => (
      <div key={i}>
        <TextFieldIcon
          iconPosition={TextFieldIcon.IconPositions[iconPosition]}
          placeholder={iconPosition}
          name={iconPosition}
          icon={<Favorite type={Icon.Types.Filled} />}
        />
        <br />
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextFieldIcon disabled</h1>
    <TextFieldIcon
      disabled
      placeholder="disabled"
      name="disabled"
      icon={<Favorite type={Icon.Types.Filled} />}
      iconPosition={TextFieldIcon.IconPositions.Left}
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextFieldIcon invalid</h1>
    <TextFieldIcon
      invalid
      placeholder="invalid"
      name="invalid"
      icon={<Favorite type={Icon.Types.Filled} />}
      iconPosition={TextFieldIcon.IconPositions.Left}
    />
  </>
);

export const Error = () => (
  <>
    <h1>TextFieldIcon error</h1>
    <TextFieldIcon
      placeholder="error"
      name="error"
      icon={<Favorite type={Icon.Types.Filled} />}
      iconPosition={TextFieldIcon.IconPositions.Left}
    />
    <ErrorField error="Error" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextFieldIcon
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      onChange={action('On change')}
      customCss={text('Custom css', 'padding: 10px; border: 1px dashed blue;')}
      wrapperCustomCss={text('Wrapper custom css', 'border: 1px dashed red;')}
      icon={<Favorite type={Icon.Types.Filled} />}
    />
  </>
);
