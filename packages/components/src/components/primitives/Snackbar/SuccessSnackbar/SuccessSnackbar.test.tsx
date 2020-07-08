import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SuccessSnackbar } from './SuccessSnackbar';
import { SnackbarTextPosition } from '../DefaultSnackbar';

describe('SuccessSnackbar', () => {
  it('should render data test id', () => {
    const testId = 'testId';
    render(<SuccessSnackbar testId={testId} message="message" open />);
    screen.getByTestId(testId);
  });
  it('should render snackbar when is open', async () => {
    render(<SuccessSnackbar message="message" open />);
    await screen.findByText('message');
  });
  it('should render description and message', async () => {
    render(
      <SuccessSnackbar message="message" description="description" open />
    );
    await screen.findByText('message');
    await screen.findByText('description');
  });
  it('should render action child', async () => {
    const mockOnClickAction = jest.fn();
    render(
      <SuccessSnackbar
        message="message"
        action={{
          childAction: <div>action child</div>,
          onClickAction: mockOnClickAction,
        }}
        open
      />
    );
    await screen.findByText('action child');
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(mockOnClickAction).toBeCalledTimes(1);
  });
  it('should render text positioned right side', async () => {
    render(
      <SuccessSnackbar
        message="message"
        textPosition={SnackbarTextPosition.Right}
        open
      />
    );
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('order-2');
  });
});
