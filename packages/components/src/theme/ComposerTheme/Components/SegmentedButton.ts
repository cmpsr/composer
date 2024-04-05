import { ComponentStyleConfig } from '@chakra-ui/react';

// export const statusStyles = {
//   custom: {
//     backgroundColor: 'primary-default',
//     borderColor: 'primary-default',
//     colorOutlineSubtle: 'text-badge-outline',
//     colorSolid: 'text-badge-solid',
//   },
//   accent: {
//     backgroundColor: 'accent-default',
//     borderColor: 'accent-default',
//     colorOutlineSubtle: 'accent-default',
//     colorSolid: 'text-badge-solid',
//   },
//   primary: {
//     backgroundColor: 'primary-default',
//     borderColor: 'primary-default',
//     colorOutlineSubtle: 'primary-default',
//     colorSolid: 'text-badge-solid',
//   },
//   secondary: {
//     backgroundColor: 'secondary-default',
//     borderColor: 'secondary-default',
//     colorOutlineSubtle: 'secondary-default',
//     colorSolid: 'text-badge-solid',
//   },
//   info: {
//     backgroundColor: 'alert-inform-default',
//     borderColor: 'alert-inform-default',
//     colorOutlineSubtle: 'alert-inform-default',
//     colorSolid: 'text-primary',
//   },
//   success: {
//     backgroundColor: 'alert-success-default',
//     borderColor: 'alert-success-default',
//     colorOutlineSubtle: 'text-success',
//     colorSolid: 'text-success',
//   },
//   warning: {
//     backgroundColor: 'alert-warning-default',
//     borderColor: 'alert-warning-default',
//     colorOutlineSubtle: 'text-warning',
//     colorSolid: 'text-warning',
//   },
//   error: {
//     backgroundColor: 'alert-error-default',
//     borderColor: 'alert-error-default',
//     colorOutlineSubtle: 'text-error',
//     colorSolid: 'text-error',
//   },
// };

export const SegmentedButton: ComponentStyleConfig = {
  parts: ['button'],
  baseStyle: ({ isActive }) => ({
    button: {
      backgroundColor: isActive ? 'green' : 'red',
      borderRadius: 'unset',
      gap: 'spacer-2',
      _first: {
        borderTopLeftRadius: 'radii-button',
        borderBottomLeftRadius: 'radii-button',
      },
      _last: {
        borderTopRightRadius: 'radii-button',
        borderBottomRightRadius: 'radii-button',
      },
    },
  }),
  // variants: {
  //   solid: ({ status }) => ({
  //     backgroundColor: statusStyles[status].backgroundColor,
  //     color: statusStyles[status].colorSolid,
  //   }),
  //   outline: ({ status }) => ({
  //     borderColor: statusStyles[status].borderColor,
  //     borderWidth: '1px',
  //     boxShadow: 'none',
  //     color: statusStyles[status].colorOutlineSubtle,
  //   }),
  //   subtle: ({ status }) => ({
  //     backgroundColor: 'background-action-default',
  //     color: statusStyles[status].colorOutlineSubtle,
  //   }),
  // },
  defaultProps: {
    variant: 'primary',
  },
};
