import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Snackbar, showSnackbar } from './Snackbar';

describe('Snackbar', () => {
  const testId = 'snackbar';
  it('should render className', async () => {
    render(<Snackbar className="foo" />);
    showSnackbar({ message: 'message' });
    await screen.findByText('message');
    const snackbar = screen.getByTestId(testId).firstChild.firstChild;
    expect(snackbar).toHaveClass('foo');
  });
});

describe('showSnackbar', () => {
  const testId = 'showSnackbar';
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
        childAction: <div>foo</div>,
        onClickAction: mockOnClickAction,
      },
    });
    await screen.findByText('foo');
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(mockOnClickAction).toBeCalledTimes(1);
  });
  it('should render text positioned right side', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      textPosition: Snackbar.TextPositions.Right,
    });
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('right');
  });
  it('should render text positioned left side', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      textPosition: Snackbar.TextPositions.Left,
    });
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('left');
  });
  it('should render snackbar with success type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: Snackbar.Types.Success,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(testId).parentElement
      .parentElement;
    expect(snackbarBackground).toHaveClass('success');
  });
  it('should render snackbar with warning type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: Snackbar.Types.Warning,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(testId).parentElement
      .parentElement;
    expect(snackbarBackground).toHaveClass('warning');
  });
  it('should render snackbar with error type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: Snackbar.Types.Error,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(testId).parentElement
      .parentElement;
    expect(snackbarBackground).toHaveClass('error');
  });
  it('should render snackbar with default type background', async () => {
    render(<Snackbar />);
    showSnackbar({
      message: 'message',
      type: Snackbar.Types.Default,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(testId).parentElement
      .parentElement;
    expect(snackbarBackground).toHaveClass('default');
  });
});
