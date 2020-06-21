import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CurrencyFieldIcon } from './CurrencyFieldIcon';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';
import { Icon } from 'components/primitives';
import { person as Person } from 'components/primitives/Icon/icons/social';

describe('CurrencyFieldIcon', () => {
  const icon = (
    <Icon className="fill-current">
      <Person type="filled" />
    </Icon>
  );
  it('should render element with name', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
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
  it('should render number as type by default', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
        name="text-field"
        placeholder="placeholder"
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input.type).toBe('number');
  });
  it('should render type', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
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
  it('should render class', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
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
      <CurrencyFieldIcon
        icon={icon}
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
      <CurrencyFieldIcon
        icon={icon}
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
      <CurrencyFieldIcon
        icon={icon}
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
      <CurrencyFieldIcon
        icon={icon}
        name="text-field"
        placeholder="placeholder"
        required
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 3 } });
    expect(onChange).toBeCalled();
  });
  it('should render two icons', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
        name="text-field"
        placeholder="placeholder"
        required={true}
      />
    );
    const iconElement = screen.getAllByTestId(ICON_DEFAULT_TEST_ID);
    expect(iconElement).toHaveLength(2);
  });
  it('should add disabled true', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
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
      <CurrencyFieldIcon
        icon={icon}
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
  it('should have proper classes based on right iconPosition', () => {
    render(
      <CurrencyFieldIcon
        iconPosition="right"
        icon={icon}
        name="text-field"
        placeholder="placeholder"
        onChange={jest.fn()}
      />
    );
    const iconElement = screen.getAllByTestId(ICON_DEFAULT_TEST_ID)[1];
    expect(iconElement.parentNode).toHaveClass('right-0 pr-3');
  });
  it('should apply classnames when is invalid', () => {
    render(
      <CurrencyFieldIcon
        icon={icon}
        name="text-field"
        placeholder="placeholder"
        invalid
      />
    );
    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;
    expect(input).toHaveClass('border-fill-system-error');
  });
});
