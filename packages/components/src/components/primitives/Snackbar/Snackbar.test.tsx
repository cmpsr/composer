import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Snackbar,
  SnackbarPosition,
  SnackbarTextPosition,
  SNACKBAR_DEFAULT_TEST_ID,
  SnackbarType,
} from './Snackbar';

describe('Snackbar', () => {
  it('should render data test id', () => {
    const testId = 'testId';
    render(<Snackbar testId={testId} message="message" />);
    screen.getByTestId(testId);
  });
  it('should render snackbar when is open', async () => {
    render(<Snackbar message="message" open />);
    await screen.findByText('message');
  });
  it('should render description and message', async () => {
    render(<Snackbar message="message" description="description" open />);
    await screen.findByText('message');
    await screen.findByText('description');
  });
  it('should render icon', async () => {
    render(<Snackbar message="message" showIcon icon={<i>icon</i>} open />);
    await screen.findByText('icon');
  });
  it('should render button', async () => {
    render(
      <Snackbar message="message" showButton buttonText="buttonText" open />
    );
    await screen.findByText('buttonText');
  });
  it('should render text positioned right side', async () => {
    render(
      <Snackbar
        message="message"
        textPosition={SnackbarTextPosition.Right}
        open
      />
    );
    const text = await screen.findByText('message');
    expect(text.parentElement).toHaveClass('order-2');
  });
  it('should render snackbar with success type background', async () => {
    render(<Snackbar message="message" type={SnackbarType.Success} open />);
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-success');
  });
  it('should render snackbar with warning type background', async () => {
    render(<Snackbar message="message" type={SnackbarType.Warning} open />);
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-warning');
  });
  it('should render snackbar with error type background', async () => {
    render(<Snackbar message="message" type={SnackbarType.Error} open />);
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-system-error');
  });
  it('should render snackbar with default type background', async () => {
    render(<Snackbar message="message" type={SnackbarType.Default} open />);
    await screen.findByText('message');
    const snackbarBackground = screen.getByTestId(SNACKBAR_DEFAULT_TEST_ID)
      .children[0].children[0].children[0];
    expect(snackbarBackground).toHaveClass('!bg-fill-black-75');
  });
});
