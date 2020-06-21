import { getMessageErrorClasses } from '.';
import { MessagePlacement } from '../../components/primitives/Chat/Conversation/Message';

describe('getMessageErrorClasses', () => {
  it('should return a string of classnames for left placement', () => {
    const classes = getMessageErrorClasses(MessagePlacement.Left);
    expect(classes).toStrictEqual({
      messageWrapper: 'flex items-center w-full',
      message: 'order-2 w-full',
      wrapper: 'flex flex-col items-start',
      icon: 'text-fill-system-error fill-current cursor-pointer',
      iconWrapper: 'mb-2 order-1 mr-1',
      description: 'mb-2 select-none cursor-pointer',
    });
  });
  it('should return a string of classnames for right placement', () => {
    const classes = getMessageErrorClasses(MessagePlacement.Right);
    expect(classes).toStrictEqual({
      messageWrapper: 'flex items-center w-full',
      message: 'order-1 w-full',
      wrapper: 'flex flex-col items-end',
      icon: 'text-fill-system-error fill-current cursor-pointer',
      iconWrapper: 'mb-2 order-2 ml-1',
      description: 'mb-2 select-none cursor-pointer',
    });
  });
});
