import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorSnackbar } from './ErrorSnackbar';
import { SnackbarTextPosition } from '../DefaultSnackbar';

describe('ErrorSnackbar', () => {
  it('should render data test id', () => {
    const testId = 'testId';
    render(<ErrorSnackbar testId={testId} message="message" open />);
    screen.getByTestId(testId);
  });
  it('should render snackbar when is open', async () => {
    render(<ErrorSnackbar message="message" open />);
    await screen.findByText('message');
  });
  it('should render description and message', async () => {
    render(<ErrorSnackbar message="message" description="description" open />);
    await screen.findByText('message');
    await screen.findByText('description');
  });
  it('should render action child', async () => {
    const mockOnClickAction = jest.fn();
    render(
      <ErrorSnackbar
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
      <ErrorSnackbar
        message="message"
        textPosition={SnackbarTextPosition.Right}
        open
      />
    );
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('order-2');
  });
});
