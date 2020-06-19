export const getConversationSummaryClasses = (
  isError: boolean,
  isActive: boolean
) => ({
  wrapper: `${
    isActive ? 'bg-fill-background-100' : 'bg-transparent'
  } select-none cursor-pointer flex justify-between p-4 md:rounded md:hover:bg-fill-background-75`,
  avatarWrapper: 'min-w-3',
  avatar: '-ml-0-22',
  profile: 'flex pr-3 sm:pr-5',
  profileWrapper: 'pl-1 max-w-13',
  profileTitle: 'truncate',
  profileDescription: 'mb-1 truncate',
  profileMessage: `${
    isError ? 'text-fill-system-error' : 'text-dark-50'
  } truncate`,
  notification: 'flex flex-col items-end',
  notificationTime: 'mb-1',
  notificationError: 'fill-current text-fill-system-error',
});
