import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextField } from '.';

describe('TextField', () => {
  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render text as type by default', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render type', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" type="text" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render class', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" className="foo" />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.classList).toContain('foo');
  });
  it('should render aria label', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" ariaLabel="foo" />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.getAttribute('aria-label')).toBe('foo');
  });
  it('should add required true', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" required={true} />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(true);
  });
  it('should add required false', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" required={false} />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField
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
  it('should add disabled true', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" disabled={true} />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
  it('should add disabled false', () => {
    const { getByPlaceholderText } = render(
      <TextField name="text-field" placeholder="placeholder" disabled={false} />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(false);
  });
  it('should restrict input to maximum length specified', () => {
    render(
      <TextField name="text-field" placeholder="placeholder" maxLength={3} />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.maxLength).toBe(3);
  });
});
