import { MessagePlacement } from 'components/primitives/Chat/Conversation/Message';

export const getMessageErrorClasses = (placement: MessagePlacement) => {
  const errorClasses = getErrorClasses(placement);
  return errorClasses;
};

const getErrorClasses = (placement: MessagePlacement) => {
  const isLeftPlacement = placement === MessagePlacement.Left;
  return {
    messageWrapper: 'flex items-center w-full',
    message: `${isLeftPlacement ? 'order-2' : 'order-1'} w-full`,
    wrapper: `flex flex-col ${isLeftPlacement ? 'items-start' : 'items-end'}`,
    icon: 'text-fill-system-error fill-current cursor-pointer',
    iconWrapper: `mb-2 ${isLeftPlacement ? 'order-1 mr-1' : 'order-2 ml-1'}`,
    description: 'mb-2 select-none cursor-pointer',
  };
};
