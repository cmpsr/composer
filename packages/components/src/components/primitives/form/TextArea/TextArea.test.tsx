import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextArea } from '.';

describe('TextArea', () => {
  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <TextArea name="text-area" placeholder="placeholder" />,
    );
    const textArea = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(textArea).toBeInTheDocument();
    expect(textArea.name).toBe('text-area');
  });
  it('should render class', () => {
    const { getByPlaceholderText } = render(
      <TextArea name="text-area" placeholder="placeholder" className="foo" />,
    );
    const textArea = getByPlaceholderText('placeholder');
    expect(textArea.classList).toContain('foo');
  });
  it('should add required true', () => {
    const { getByPlaceholderText } = render(
      <TextArea
        name="text-area"
        placeholder="placeholder"
        className="foo"
        required={true}
      />,
    );
    const textArea = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(textArea.required).toBe(true);
  });
  it('should add required false', () => {
    const { getByPlaceholderText } = render(
      <TextArea
        name="text-area"
        placeholder="placeholder"
        className="foo"
        required={false}
      />,
    );
    const textArea = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(textArea.required).toBe(false);
  });
  it('should call onChange', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea
        name="text-area"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />,
    );
    const textArea = getByPlaceholderText('placeholder');
    fireEvent.change(textArea, { target: { value: 'new value' } });
    expect(onChange).toBeCalled();
  });
});
