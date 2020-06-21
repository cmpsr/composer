import {
  MessageBackgroundColor,
  MessagePlacement,
} from 'components/primitives/Chat/Conversation/Message';

export const getMessageClasses = (
  placement: MessagePlacement,
  backgroundColor: MessageBackgroundColor,
  hasTime: boolean
) => {
  const { wrapperClasses, messageClasses } = getMessagePlacementClasses(
    placement,
    backgroundColor,
    hasTime
  );
  const timeClasses = hasTime && getMessageTimeClasses();

  return {
    wrapperClasses,
    messageClasses,
    timeClasses,
  };
};

const getMessagePlacementClasses = (
  placement: MessagePlacement,
  backgroundColor: MessageBackgroundColor,
  hasTime: boolean
) => {
  const baseWrapper = `flex flex-col ${hasTime ? 'mb-0' : 'mb-2'}`;
  const baseMessage = `${backgroundColor} px-4 py-3 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left`;

  if (placement === MessagePlacement.Left) {
    return {
      wrapperClasses: `${baseWrapper} items-start justify-start`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-bl-message-semirounded`,
    };
  } else {
    return {
      wrapperClasses: `${baseWrapper} items-end justify-end`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-br-message-semirounded`,
    };
  }
};

const getMessageTimeClasses = () => {
  return 'mt-1 mb-2';
};
