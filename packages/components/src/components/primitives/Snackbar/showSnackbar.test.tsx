import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Snackbar,
  SnackbarTextPosition,
  SNACKBAR_DEFAULT_TEST_ID,
  showSnackbar,
  SnackbarPosition,
  SnackbarType,
} from './Snackbar';

describe('showSnackbar', () => {
  beforeEach(() => {
    render(<Snackbar />);
  });
  it('should render message', async () => {
    showSnackbar({ message: 'message' });
    await screen.findByText('message');
  });
  it('should render description', async () => {
    showSnackbar({ message: 'message', description: 'description' });
    await screen.findByText('description');
  });
  it('should render icon', async () => {
    showSnackbar({ message: 'message', showIcon: true, icon: <div>icon</div> });
    await screen.findByText('icon');
  });
  it('should render button', async () => {
    showSnackbar({
      message: 'message',
      showButton: true,
      buttonText: 'buttonText',
    });
    await screen.findByText('buttonText');
  });
  it('should render text positioned right side', async () => {
    showSnackbar({
      message: 'message',
      textPosition: SnackbarTextPosition.Right,
    });
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('order-1');
  });
  it('should render snackbar top center position', async () => {
    showSnackbar({
      message: 'message',
      position: SnackbarPosition.TopCenter,
    });
    await screen.findByText('message');
    const snackbarPosition = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0];
    expect(snackbarPosition).toHaveClass(
      'Toastify__toast-container--top-center'
    );
  });
  it('should render snackbar with success type background', async () => {
    showSnackbar({
      message: 'message',
      type: SnackbarType.Success,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-success');
  });
  it('should render snackbar with warning type background', async () => {
    showSnackbar({
      message: 'message',
      type: SnackbarType.Warning,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-warning');
  });
  it('should render snackbar with error type background', async () => {
    showSnackbar({
      message: 'message',
      type: SnackbarType.Error,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-error');
  });
  it('should render snackbar with default type background', async () => {
    showSnackbar({
      message: 'message',
      type: SnackbarType.Default,
    });
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-black-75');
  });
});
