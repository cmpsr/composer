import { getMessageClasses } from '.';
import {
  MessageBackgroundColor,
  MessagePlacement,
} from '../../components/primitives/Chat/Conversation/Message';

describe('getMessageClasses', () => {
  const baseMessage =
    'px-4 py-3 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left';
  const baseWrapper = 'flex';
  it('should return a string of classnames for left placement', () => {
    const classes = getMessageClasses(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      false
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-2 items-start justify-start`
    );
    expect(classes.messageClasses).toContain(
      `${MessageBackgroundColor.Primary600} ${baseMessage} rounded-message-rounded rounded-bl-message-semirounded`
    );
  });
  it('should return a string of classnames for right placement', () => {
    const classes = getMessageClasses(
      MessagePlacement.Right,
      MessageBackgroundColor.Primary600,
      false
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-2 items-end justify-end`
    );
    expect(classes.messageClasses).toContain(
      `${MessageBackgroundColor.Primary600} ${baseMessage} rounded-message-rounded rounded-br-message-semirounded`
    );
  });
  it('should return a string of classnames for left placement with time', () => {
    const classes = getMessageClasses(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-0 items-start justify-start`
    );
  });
  it('should return a string of classnames for right placement with time', () => {
    const classes = getMessageClasses(
      MessagePlacement.Right,
      MessageBackgroundColor.Primary600,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-0 items-end justify-end`
    );
  });
  it('should return a string of classnames for time', () => {
    const classes = getMessageClasses(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true
    );
    expect(classes.timeClasses).toContain('mt-1 mb-2');
  });
});
