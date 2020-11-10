import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import 'jest-styled-components';

describe('Button', () => {
  const testId = 'button';
  it('should render with children', () => {
    render(
      <Button>
        <div>foo</div>
      </Button>
    );
    const button = screen.getByTestId(testId);
    expect(button.children).toHaveLength(1);
  });
  it('should render without children', () => {
    render(<Button />);
    const button = screen.getByTestId(testId);
    expect(button.children).toHaveLength(0);
  });
  it('should render primary', () => {
    render(<Button type={Button.Types.Primary} />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass(Button.Types.Primary);
  });
  it('should render secondary', () => {
    render(<Button type={Button.Types.Secondary} />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass(Button.Types.Secondary);
  });
  it('should render class', () => {
    render(<Button className="foo" />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass('foo');
  });
  it('should render custom css', () => {
    render(<Button customCss="color: violet" />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render html type', () => {
    render(<Button htmlType={Button.HtmlTypes.Submit} />);
    const button = screen.getByTestId(testId) as HTMLButtonElement;
    expect(button.type).toBe('submit');
  });
  it('should render disabled button', () => {
    render(<Button disabled />);
    const button = screen.getByTestId(testId);
    expect(button).toBeDisabled();
  });
  it('should render button with rectangle shape', () => {
    render(<Button shape={Button.Shapes.Rectangle} />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass('rectangle');
  });
  it('should render button with semi-rounded shape', () => {
    render(<Button shape={Button.Shapes.SemiRounded} />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass('semiRounded');
  });
  it('should render button with rounded shape', () => {
    render(<Button shape={Button.Shapes.Rounded} />);
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass('rounded');
  });
  it('should call onClick on click', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} />);
    const button = screen.getByTestId(testId);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
