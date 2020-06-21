import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextFieldIcon } from './TextFieldIcon';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('TextFieldIcon', () => {
  const onChange = jest.fn();
  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render text as type by default', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render type', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        type="text"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render class', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        className="foo"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.classList).toContain('foo');
  });
  it('should render aria label', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        ariaLabel="foo"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.getAttribute('aria-label')).toBe('foo');
  });
  it('should add required true', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(true);
  });
  it('should add required false', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={false}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
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
  it('should render icon position left by default', () => {
    const { getByTestId } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('left-0');
  });
  it('should render icon position right', () => {
    const { getByTestId } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition="right"
        onChange={onChange}
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('right-0');
  });
  it('should change icon color on focus', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition="right"
        onChange={onChange}
      />
    );

    const input = getByPlaceholderText('placeholder');
    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon.classList.value).toEqual('fill-current text-gray-500');

    fireEvent.focus(input);
    expect(icon.classList.value).toEqual('fill-current');
  });
  it('should change icon color on blur', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition="right"
        onChange={onChange}
      />
    );

    const input = getByPlaceholderText('placeholder');
    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon.classList.value).toEqual('fill-current text-gray-500');

    fireEvent.focus(input);
    expect(icon.classList.value).toEqual('fill-current');

    fireEvent.blur(input);
    expect(icon.classList.value).toEqual('fill-current text-gray-500');
  });
  it('should not change input color when value is present on blur', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition="right"
        value="test"
        onChange={onChange}
      />
    );

    const input = getByPlaceholderText('placeholder');
    const icon = getByTestId(ICON_DEFAULT_TEST_ID);

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(icon.classList.value).toEqual('fill-current');
  });
  it('should add disabled true', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        disabled={true}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
  it('should add disabled false', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIcon
        name="text-field"
        placeholder="placeholder"
        disabled={false}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(false);
  });
});
