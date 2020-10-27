import React, { useEffect } from 'react';
import { Snackbar, showSnackbar } from '.';
import { Icon, favorite as Favorite } from 'components/primitives/Icon';
import { select, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Snackbar',
  component: Snackbar,
};

export const Message = () => {
  const config = {
    message: 'Message',
  };

  useEffect(() => {
    showSnackbar(config);
  }, []);

  return <Snackbar />;
};

export const Description = () => {
  const config = {
    message: 'Message',
    description: 'Description',
  };

  useEffect(() => {
    showSnackbar(config);
  }, []);

  return <Snackbar />;
};

export const TextPositions = () => {
  useEffect(() => {
    Object.keys(Snackbar.TextPositions).map((textPosition) => {
      showSnackbar({
        message: textPosition,
        textPosition: Snackbar.TextPositions[textPosition],
        action: {
          childAction: (
            <Icon>
              <Favorite type={Icon.Types.Filled} />
            </Icon>
          ),
        },
      });
    });
  }, []);

  return (
    <>
      <h1>Text positions</h1>
      <Snackbar />
    </>
  );
};

export const Positions = () => {
  useEffect(() => {
    Object.keys(Snackbar.Positions).map((position) => {
      showSnackbar({
        message: position,
        position: Snackbar.Positions[position],
      });
    });
  }, []);

  return (
    <>
      <h1>Positions</h1>
      <Snackbar />
    </>
  );
};

export const Types = () => {
  useEffect(() => {
    Object.keys(Snackbar.Types).map((type) => {
      showSnackbar({
        message: type,
        type: Snackbar.Types[type],
      });
    });
  }, []);

  return (
    <>
      <h1>Types</h1>
      <Snackbar />
    </>
  );
};

export const Playground = () => {
  const config = {
    message: text('Message', 'Message'),
    description: text('Description', 'Description'),
    textPosition: select(
      'Text Position',
      Snackbar.TextPositions,
      Snackbar.TextPositions.Right
    ),
    type: select('Type', Snackbar.Types, Snackbar.Types.Default),
    position: select(
      'Position',
      Snackbar.Positions,
      Snackbar.Positions.TopCenter
    ),
    autoClose: number('Auto close', 5000),
    onClose: action('On close'),
    action: {
      childAction: (
        <Icon>
          <Favorite type={Icon.Types.Filled} />
        </Icon>
      ),
      onClickAction: action('On click action'),
    },
  };

  useEffect(() => {
    showSnackbar(config);
  }, [config]);

  return <Snackbar />;
};
