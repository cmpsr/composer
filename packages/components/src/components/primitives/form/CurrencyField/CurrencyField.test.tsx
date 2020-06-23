import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CurrencyField } from './CurrencyField';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';
import { InputMode } from '../TextField';

describe('CurrencyField', () => {
  it('should render element with name', () => {
    render(<CurrencyField name="text-field" placeholder="placeholder" />);
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render number as type by default', () => {
    render(<CurrencyField name="text-field" placeholder="placeholder" />);
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.type).toBe('number');
  });
  it('should render type', () => {
    render(
      <CurrencyField name="text-field" placeholder="placeholder" type="text" />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render class', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        className="foo"
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toHaveClass('foo');
  });
  it('should render aria label', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        ariaLabel="foo"
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect(input.getAttribute('aria-label')).toBe('foo');
  });
  it('should add required true', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toBeRequired();
  });
  it('should add required false', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        required={false}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).not.toBeRequired();
  });
  it('should call onChange', () => {
    const onChange = jest.fn();
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 3 } });
    expect(onChange).toBeCalled();
  });
  it('should render icon', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );

    screen.getByTestId(ICON_DEFAULT_TEST_ID);
  });
  it('should add disabled true', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        disabled={true}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toBeDisabled();
  });
  it('should add disabled false', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        disabled={false}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).not.toBeDisabled();
  });
  it('should apply classnames when is invalid', () => {
    render(
      <CurrencyField name="text-field" placeholder="placeholder" invalid />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toHaveClass('border-fill-system-error');
  });
  it('should render inputMode', () => {
    render(
      <CurrencyField
        name="text-field"
        placeholder="placeholder"
        inputMode={InputMode.Numeric}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect(input.getAttribute('inputmode')).toBe('numeric');
  });
});
