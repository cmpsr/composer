import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Snackbar,
  SnackbarTextPosition,
  SNACKBAR_DEFAULT_TEST_ID,
  SnackbarType,
  showSnackbar,
  SHOW_SNACKBAR_DEFAULT_TEST_ID,
} from './Snackbar';

describe('Snackbar', () => {
  it('should render data test id', () => {
    const testId = 'testId';
    render(<Snackbar testId={testId} />);
    screen.getByTestId(testId);
  });
  it('should render className', async () => {
    render(<Snackbar className="snackbarClassName" />);
    showSnackbar({ message: 'message' });
    await screen.findByText('message');
    const snackbar = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID).firstChild
      .firstChild;
    expect(snackbar).toHaveClass('snackbarClassName');
  });
});

describe('showSnackbar', () => {
  it('should render data test id', async () => {
    const testId = 'testId';
    render(<Snackbar />);
    showSnackbar({ message: 'message', testId });
    await screen.findByTestId(testId);
  });
  it('should render description and message', async () => {
    render(<Snackbar />);
    showSnackbar({ message: 'message', description: 'description' });
    await screen.findByText('message');
    await screen.findByText('description');
  });
  it('should render action child', async () => {
    const mockOnClickAction = jest.fn();
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      action: {
        childAction: <div>action child</div>,
        onClickAction: mockOnClickAction,
      },
    });
    await screen.findByText('action child');
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(mockOnClickAction).toBeCalledTimes(1);
  });
  it('should render text positioned right side', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      textPosition: SnackbarTextPosition.Right,
    });
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('order-2');
  });
  it('should render snackbar with success type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: SnackbarType.Success,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SHOW_SNACKBAR_DEFAULT_TEST_ID)
      .parentElement.parentElement;
    expect(snackbarBackground).toHaveClass('!bg-fill-system-success');
  });
  it('should render snackbar with warning type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: SnackbarType.Warning,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SHOW_SNACKBAR_DEFAULT_TEST_ID)
      .parentElement.parentElement;
    expect(snackbarBackground).toHaveClass('!bg-fill-system-warning');
  });
  it('should render snackbar with error type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: SnackbarType.Error,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SHOW_SNACKBAR_DEFAULT_TEST_ID)
      .parentElement.parentElement;
    expect(snackbarBackground).toHaveClass('!bg-fill-system-error');
  });
  it('should render snackbar with default type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SHOW_SNACKBAR_DEFAULT_TEST_ID)
      .parentElement.parentElement;
    expect(snackbarBackground).toHaveClass('!bg-fill-black-400');
  });
});
