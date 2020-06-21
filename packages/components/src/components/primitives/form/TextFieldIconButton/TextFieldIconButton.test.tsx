import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextFieldIconButton } from './TextFieldIconButton';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('TextFieldIconButton', () => {
  const onChange = jest.fn();

  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIconButton name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render text as type by default', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIconButton name="text-field" placeholder="placeholder" />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render type', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIconButton
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
      <TextFieldIconButton
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
      <TextFieldIconButton
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
      <TextFieldIconButton
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
      <TextFieldIconButton
        name="text-field"
        placeholder="placeholder"
        required={false}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const { getByPlaceholderText } = render(
      <TextFieldIconButton
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
      <TextFieldIconButton
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );
    const button = getByText('Button');
    expect(button).toBeInTheDocument();
  });
  it('should render icon position left by default', () => {
    const { getByTestId } = render(
      <TextFieldIconButton
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('left-0');
  });
  it('should render icon position right', () => {
    const { getByTestId } = render(
      <TextFieldIconButton
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition="right"
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('right-0');
  });
  it('should change icon color on focus', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextFieldIconButton
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
      <TextFieldIconButton
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
      <TextFieldIconButton
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
});
