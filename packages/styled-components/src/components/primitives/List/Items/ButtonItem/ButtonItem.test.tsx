import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonItem } from '.';

describe('ButtonItem', () => {
  const testId = 'buttonItem';
  it('should render correctly with children', () => {
    render(
      <ButtonItem>
        <div>foo</div>
      </ButtonItem>
    );
    const buttonItem = screen.getByTestId(testId);
    expect(buttonItem.children).toHaveLength(1);
  });
  it('should render class', () => {
    render(<ButtonItem className="foo" />);
    const buttonItem = screen.getByTestId(testId);
    expect(buttonItem).toHaveClass('foo');
  });
  it('should call onClick on click', () => {
    const mockOnClick = jest.fn();
    render(<ButtonItem onClick={mockOnClick} />);
    const button = screen.getByTestId(testId);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
