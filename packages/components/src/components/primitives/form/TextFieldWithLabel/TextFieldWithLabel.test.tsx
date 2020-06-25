import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextFieldWithLabel } from '.';
import { InputMode } from '../TextField';

describe('TextFieldWithLabel', () => {
  it('should render element with name', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render text as type by default', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render type', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        type="text"
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render classnames', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        labelClassName="foo"
        textFieldClassName="bar"
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    const label = screen.getByText(/label/i);
    expect(input).toHaveClass('bar');
    expect(label).toHaveClass('foo');
  });
  it('should render aria label', () => {
    render(
      <TextFieldWithLabel
        label="label"
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
      <TextFieldWithLabel
        label="label"
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
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        required={false}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const onChange = jest.fn();
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toBeCalled();
  });
  it('should add disabled true', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        disabled={true}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
  it('should add disabled false', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        disabled={false}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.disabled).toBe(false);
  });
  it('should restrict input to maximum length specified', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        maxLength={3}
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.maxLength).toBe(3);
  });
  it('should render label', () => {
    render(
      <TextFieldWithLabel label="label" name="name" placeholder="placeholder" />
    );
    screen.getByText(/label/i);
  });
  it('should render inputMode', () => {
    render(
      <TextFieldWithLabel
        label="label"
        name="text-field"
        placeholder="placeholder"
        inputMode={InputMode.Numeric}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect(input.getAttribute('inputmode')).toBe('numeric');
  });
});
