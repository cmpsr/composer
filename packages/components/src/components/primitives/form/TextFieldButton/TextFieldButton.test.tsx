import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextFieldButton } from './TextFieldButton';

describe('TextFieldButtonButton', () => {
  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render text as type by default', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render type', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        type="text"
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render class', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        className="foo"
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.classList).toContain('foo');
  });
  it('should render aria label', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        ariaLabel="foo"
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.getAttribute('aria-label')).toBe('foo');
  });
  it('should add required true', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(true);
  });
  it('should add required false', () => {
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        required={false}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toBeCalled();
  });
  it('should render button', () => {
    const { getByText } = render(
      <TextFieldButton
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );
    const button = getByText('Button');
    expect(button).toBeInTheDocument();
  });
});
