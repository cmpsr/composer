import React from 'react';
import { ExpandableTextFieldIcon } from './ExpandableTextFieldIcon';
import { send as Send, Icon } from 'components/primitives/Icon';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/ExpandableTextFieldIcon',
  component: ExpandableTextFieldIcon,
};

export const Shapes = () => (
  <>
    <h1>ExpandableTextFieldIcon shapes</h1>
    {Object.keys(ExpandableTextFieldIcon.Shapes).map((shape: any, i) => (
      <div key={i}>
        <ExpandableTextFieldIcon
          shape={ExpandableTextFieldIcon.Shapes[shape]}
          placeholder={shape}
          onChange={action('On change')}
          icon={<Send type={Icon.Types.Rounded} />}
        />
        <br />
      </div>
    ))}
  </>
);

export const IconPositions = () => (
  <>
    <h1>ExpandableTextFieldIcon icon positions</h1>
    {Object.keys(ExpandableTextFieldIcon.IconPositions).map(
      (iconPosition: any, i) => (
        <div key={i}>
          <ExpandableTextFieldIcon
            iconPosition={ExpandableTextFieldIcon.IconPositions[iconPosition]}
            placeholder={iconPosition}
            icon={<Send type={Icon.Types.Rounded} />}
            onChange={action('On change')}
            shape={ExpandableTextFieldIcon.Shapes.SemiRounded}
          />
          <br />
        </div>
      )
    )}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <ExpandableTextFieldIcon
      placeholder={text('Placeholder', 'placeholder')}
      shape={select(
        'Shape',
        ExpandableTextFieldIcon.Shapes,
        ExpandableTextFieldIcon.Shapes.Rounded
      )}
      customCss={text('Custom css', 'background: #c5c5ff;')}
      onChange={action('On change')}
      iconPosition={select(
        'iconPosition',
        ExpandableTextFieldIcon.IconPositions,
        ExpandableTextFieldIcon.IconPositions.Right
      )}
      icon={<Send type={Icon.Types.Rounded} />}
      onClickIcon={action('On click icon')}
    />
  </>
);
