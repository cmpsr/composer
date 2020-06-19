import { getConversationSummaryClasses } from '.';

describe('getConversationSummaryClasses', () => {
  it('should return an object with classnames', () => {
    const summaryClasses = getConversationSummaryClasses(false, false);
    expect(summaryClasses).toStrictEqual({
      wrapper:
        'bg-transparent select-none cursor-pointer flex justify-between p-4 md:rounded md:hover:bg-fill-background-75',
      avatarWrapper: 'min-w-3',
      avatar: '-ml-0-22',
      profile: 'flex pr-3 sm:pr-5',
      profileWrapper: 'pl-1 max-w-13',
      profileTitle: 'truncate',
      profileDescription: 'mb-1 truncate',
      profileMessage: 'text-dark-50 truncate',
      notification: 'flex flex-col items-end',
      notificationTime: 'mb-1',
      notificationError: 'fill-current text-fill-system-error',
    });
  });
  it('should return profileMessage with classnames when is error', () => {
    const { profileMessage } = getConversationSummaryClasses(true, false);
    expect(profileMessage).toStrictEqual('text-fill-system-error truncate');
  });
  it('should return wrapper with classnames when is active', () => {
    const { wrapper } = getConversationSummaryClasses(false, true);
    expect(wrapper).toStrictEqual(
      'bg-fill-background-100 select-none cursor-pointer flex justify-between p-4 md:rounded md:hover:bg-fill-background-75'
    );
  });
});
