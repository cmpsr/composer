import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton, RADIO_BUTTON_DEFAULT_TEST_ID } from '.';

describe('RadioButton', () => {
  it('should render aria label', () => {
    render(<RadioButton ariaLabel={'foo'} value="default" />);
    const radio = screen.getByTestId(RADIO_BUTTON_DEFAULT_TEST_ID);
    expect(radio.getAttribute('aria-label')).toBe('foo');
  });
  it('should render name', () => {
    render(<RadioButton name="test1" />);
    const radio = screen.getByTestId(RADIO_BUTTON_DEFAULT_TEST_ID);
    expect(radio.getAttribute('name')).toBe('test1');
  });
  it('should render disabled', () => {
    render(<RadioButton name="test1" disabled={true} />);
    const radio = screen.getByTestId(
      RADIO_BUTTON_DEFAULT_TEST_ID
    ) as HTMLInputElement;
    expect(radio).toBeDisabled();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton name="test1" disabled={true} onChange={mockOnChange} />
    );
    const radio = screen.getByTestId(RADIO_BUTTON_DEFAULT_TEST_ID);
    fireEvent.click(radio);
    expect(mockOnChange).toBeCalled();
  });
  it('should render label', () => {
    render(<RadioButton name="test1" label="option" />);
    screen.getByText('option');
  });
});
