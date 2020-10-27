import { getStyles } from '.';
import {
  MessageBackgroundColor,
  MessagePlacement,
} from '../../components/primitives/Chat/Conversation/Message';

describe('getStyles', () => {
  const baseMessage =
    'p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left';
  const baseWrapper = 'flex';
  it('should return a string of classnames for left placement', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      false,
      true,
      false,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-2 items-start justify-start`
    );
    expect(classes.messageClasses).toContain(
      `${MessageBackgroundColor.Primary600} ${baseMessage} rounded-message-rounded rounded-bl-message-semirounded`
    );
  });
  it('should return a string of classnames for right placement', () => {
    const classes = getStyles(
      MessagePlacement.Right,
      MessageBackgroundColor.Primary600,
      false,
      true,
      false,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-2 items-end justify-end`
    );
    expect(classes.messageClasses).toContain(
      `${MessageBackgroundColor.Primary600} ${baseMessage} rounded-message-rounded rounded-br-message-semirounded`
    );
  });
  it('should return a string of classnames for left placement with time', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      true,
      false,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-0 items-start justify-start`
    );
  });
  it('should return a string of classnames for right placement with time', () => {
    const classes = getStyles(
      MessagePlacement.Right,
      MessageBackgroundColor.Primary600,
      true,
      true,
      false,
      true
    );
    expect(classes.wrapperClasses).toContain(
      `${baseWrapper} flex-col mb-0 items-end justify-end`
    );
  });
  it('should return a string of classnames for time', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      true,
      false,
      true
    );
    expect(classes.timeClasses).toContain('mt-1 mb-2');
  });
  it('should return a string of classnames for textWrapper when message has media', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      true,
      true,
      true
    );
    expect(classes.textWrapper).toContain('pt-1 pb-2 px-3');
  });
  it('should return a string of classnames for textWrapper when message has no media', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      true,
      false,
      true
    );
    expect(classes.textWrapper).toContain('pt-2 pb-2 px-3');
  });
  it('should return a string of classnames for mediaPreview when message has text', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      true,
      true,
      true
    );
    expect(classes.mediaPreview).toContain('rounded-bl-none rounded-br-none');
  });
  it('should return a string of classnames for mediaPreview when message has no text', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      false,
      true,
      true
    );
    expect(classes.mediaPreview).toContain('rounded-bl-message-semirounded');
  });
  it('should render mediaLoader when media is loaded', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      false,
      true,
      true
    );
    expect(classes.mediaPreview).toContain('block');
  });
  it('should hide mediaLoader when media is not loaded', () => {
    const classes = getStyles(
      MessagePlacement.Left,
      MessageBackgroundColor.Primary600,
      true,
      false,
      true,
      false
    );
    expect(classes.mediaPreview).toContain('hidden');
  });
});
