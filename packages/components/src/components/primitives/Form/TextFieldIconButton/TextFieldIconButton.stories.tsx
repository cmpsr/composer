import React from 'react';
import { TextFieldIconButton } from '.';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { ErrorField } from 'components/primitives';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';

export default {
  title: 'Primitives/Form/TextFieldIconButton',
  component: TextFieldIconButton,
};

export const IconPositions = () => (
  <>
    <h1>TextFieldIconButton IconPositions</h1>
    {Object.keys(TextFieldIconButton.IconPositions).map(
      (iconPosition: any, i) => (
        <div key={i}>
          <TextFieldIconButton
            iconPosition={TextFieldIconButton.IconPositions[iconPosition]}
            placeholder={iconPosition}
            name={iconPosition}
            icon={<Favorite type={Icon.Types.Filled} />}
          />
          <br />
        </div>
      )
    )}
  </>
);

export const Disabled = () => (
  <>
    <h1>TextFieldIconButton disabled</h1>
    <TextFieldIconButton
      disabled
      placeholder="disabled"
      name="disabled"
      icon={<Favorite type={Icon.Types.Filled} />}
    />
  </>
);

export const Invalid = () => (
  <>
    <h1>TextFieldIconButton invalid</h1>
    <TextFieldIconButton
      invalid
      placeholder="invalid"
      name="invalid"
      icon={<Favorite type={Icon.Types.Filled} />}
    />
  </>
);

export const Error = () => (
  <>
    <h1>TextFieldIconButton error</h1>
    <TextFieldIconButton
      placeholder="error"
      name="error"
      icon={<Favorite type={Icon.Types.Filled} />}
    />
    <ErrorField error="Error" />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <TextFieldIconButton
      name="name"
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
      onChange={action('On change')}
      customCss={text('Custom css', 'border: 1px dashed blue;')}
      icon={<Favorite type={Icon.Types.Filled} />}
    />
  </>
);
