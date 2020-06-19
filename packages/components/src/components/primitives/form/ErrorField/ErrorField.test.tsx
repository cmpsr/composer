import React from 'react';
import { render } from '@testing-library/react';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';
import { ErrorField } from '.';

describe('ErrorField', () => {
  it('should render element', () => {
    const { getByText } = render(<ErrorField error="error" />);

    const error = getByText('error') as HTMLInputElement;
    expect(error).toBeInTheDocument();
  });
  it('should render class', () => {
    const { getByText } = render(<ErrorField error="error" className="foo" />);

    const error = getByText('error') as HTMLInputElement;
    expect(error.parentElement.classList).toContain('foo');
  });
  it('should render icon', () => {
    const { getByTestId } = render(
      <ErrorField error="error" className="foo" />,
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
  });
});
