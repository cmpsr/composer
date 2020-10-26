import React, { useEffect } from 'react';
import { Snackbar, showSnackbar, hideSnackbar } from '.';
import { Icon, favorite as Favorite } from 'components/primitives/Icon';
import { select, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Snackbar',
  component: Snackbar,
};

export const withBase = () => {
  const props = {
    message: text('Message', 'Prompt Option'),
    description: text('Description', 'Detail Info'),
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
    showSnackbar(props);
  }, [props]);

  return (
    <div>
      <Snackbar />
      <button onClick={hideSnackbar}>Hide snackbar</button>
    </div>
  );
};

withBase.story = {
  name: 'Base',
};

// export const withIcon = () => {
//   const props = {
//     className: 'text-fill-primary-900',
//     message: 'Prompt Option',
//     description: 'Detail Info',
//     textPosition: SnackbarTextPosition.Right,
//     type: SnackbarType.Default,
//     position: SnackbarPosition.TopCenter,
//     autoClose: 5000,
//     onClose: action('On close'),
//     action: {
//       childAction: (
//         <Icon className="text-fill-white fill-current">
//           <Close type="filled" />
//         </Icon>
//       ),
//       onClickAction: action('On click action'),
//     },
//   };

//   useEffect(() => {
//     showSnackbar(props);
//   }, []);

//   return (
//     <div className="p-48">
//       <Snackbar />
//     </div>
//   );
// };

// withIcon.story = {
//   name: 'Icon',
// };

// export const withButton = () => {
//   const props = {
//     className: 'text-fill-primary-900',
//     message: 'Prompt Option',
//     description: 'Detail Info',
//     textPosition: SnackbarTextPosition.Left,
//     type: SnackbarType.Default,
//     position: SnackbarPosition.TopCenter,
//     autoClose: 5000,
//     onClose: action('On close'),
//     action: {
//       childAction: <div className="text-fill-white">buttonContent</div>,
//       onClickAction: action('On click action'),
//     },
//   };

//   useEffect(() => {
//     showSnackbar(props);
//   }, []);

//   return (
//     <div className="p-48">
//       <Snackbar />
//     </div>
//   );
// };

// withButton.story = {
//   name: 'Button',
// };
