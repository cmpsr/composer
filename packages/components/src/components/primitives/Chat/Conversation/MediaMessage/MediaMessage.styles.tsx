import { MediaMessageBorderColor, MessagePlacement } from './MediaMessage';

export const getStyles = (
  placement: MessagePlacement,
  borderColor: MediaMessageBorderColor
) => {
  const { wrapperClasses, messageClasses } = getMessagePlacementClasses(
    placement,
    borderColor
  );
  const timeClasses = 'mt-1';
  const imageClasses = 'h-full w-full object-cover';

  return {
    wrapperClasses,
    messageClasses,
    timeClasses,
    imageClasses,
  };
};

const getMessagePlacementClasses = (
  placement: MessagePlacement,
  borderColor: MediaMessageBorderColor
) => {
  const baseWrapper = 'flex flex-col mb-2';
  const baseMessage = `${borderColor} cursor-pointer rounded-1-375 overflow-hidden h-13-438 w-13-438 border-4 md:h-19-625 md:w-19-625`;

  return {
    wrapperClasses: `${baseWrapper} ${
      placement === MessagePlacement.Left
        ? 'items-start justify-start'
        : 'items-end justify-end'
      }`,
    messageClasses: baseMessage,
  };
};
