import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  const BUTTON_DEFAULT_TEST_ID = 'button';
  it('should render with children', () => {
    render(
      <Button>
        <div>foo</div>
      </Button>
    );
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.children).toHaveLength(1);
  });
  it('should render without children', () => {
    render(<Button />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.children).toHaveLength(0);
  });
  it('should render primary', () => {
    render(<Button type={Button.Types.Primary} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass(Button.Types.Primary);
  });
  it('should render secondary', () => {
    render(<Button type={Button.Types.Secondary} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass(Button.Types.Secondary);
  });
  it('should render class', () => {
    render(<Button className="foo" />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass('foo');
  });
  it('should render html type', () => {
    render(<Button htmlType={Button.HtmlTypes.Submit} />);
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button.type).toBe('submit');
  });
  it('should render disabled button', () => {
    render(<Button disabled />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toBeDisabled();
  });
  it('should render button with rectangle shape', () => {
    render(<Button shape={Button.Shapes.Rectangle} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass('rectangle');
  });
  it('should render button with semi-rounded shape', () => {
    render(<Button shape={Button.Shapes.SemiRounded} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass('semiRounded');
  });
  it('should render button with rounded shape', () => {
    render(<Button shape={Button.Shapes.Rounded} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button).toHaveClass('rounded');
  });
  it('should call onClick on click', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} />);
    const button = screen.getByTestId(BUTTON_DEFAULT_TEST_ID);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
