import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CurrencyFieldIcon } from '.';
import 'jest-styled-components';

describe('CurrencyFieldIcon', () => {
  const testId = 'currencyFieldIcon';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'number' });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toHaveAttribute('type', 'number');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toHaveClass('foo');
  });
  it('should render wrapper class', () => {
    givenComponentRendered({ wrapperClassName: 'foo' });
    const currencyFieldIcon = screen.getByTestId("currencyFieldIconWrapper");
    expect(currencyFieldIcon).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const currencyFieldIcon = screen.getByTestId(testId);
    fireEvent.change(currencyFieldIcon, { target: { value: 3 } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render icon on left', () => {
    givenComponentRendered({ iconPosition: CurrencyFieldIcon.IconPositions.Left });
    const icon = screen.getByTestId('iconWrapper');
    expect(icon).toHaveClass(CurrencyFieldIcon.IconPositions.Left);
  });
  it('should render icon on right', () => {
    givenComponentRendered({ iconPosition: CurrencyFieldIcon.IconPositions.Right });
    const icon = screen.getByTestId('iconWrapper');
    expect(icon).toHaveClass(CurrencyFieldIcon.IconPositions.Right);
  });
  it('should render notFocused class by default', () => {
    givenComponentRendered();
    const icon = screen.getByTestId('iconWrapper').firstChild;
    expect(icon).toHaveClass('notFocused');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const currencyFieldIcon = screen.getByTestId(testId);
    expect(currencyFieldIcon).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  it('should render wrapper custom css', () => {
    givenComponentRendered({ wrapperCustomCss: 'color: violet' });
    const wrapper = screen.getByTestId('currencyFieldIconWrapper');
    expect(wrapper).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <CurrencyFieldIcon
        name="foo"
        placeholder="foo"
        onChange={() => {}}
        {...props}
      />
    );
});
