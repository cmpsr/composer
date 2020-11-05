import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpandableTextField } from '.';
import 'jest-styled-components';

describe('ExpandableTextField', () => {
  const testId = 'expandableTextField';
  it('should render classname', () => {
    givenComponentRendered({ className: 'foo' });
    const expandableTextField = screen.getByTestId(testId).parentElement;
    expect(expandableTextField).toHaveClass('foo');
  });
  it('should render rounded shape', () => {
    givenComponentRendered({ shape: ExpandableTextField.Shapes.Rounded });
    const expandableTextField = screen.getByTestId(testId);
    expect(expandableTextField).toHaveClass(ExpandableTextField.Shapes.Rounded);
  });
  it('should render semi rounded shape', () => {
    givenComponentRendered({ shape: ExpandableTextField.Shapes.SemiRounded });
    const expandableTextField = screen.getByTestId(testId);
    expect(expandableTextField).toHaveClass(
      ExpandableTextField.Shapes.SemiRounded
    );
  });
  it('should render rectangle shape', () => {
    givenComponentRendered({ shape: ExpandableTextField.Shapes.Rectangle });
    const expandableTextField = screen.getByTestId(testId);
    expect(expandableTextField).toHaveClass(
      ExpandableTextField.Shapes.Rectangle
    );
  });
  it('should input textContent and call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({
      onChange: mockOnChange,
    });
    const expandableTextField = screen.getByTestId(testId);
    fireEvent.input(expandableTextField, {
      target: { textContent: 'foo' },
    });
    expect(expandableTextField).toHaveTextContent('foo');
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render placeholder', () => {
    givenComponentRendered({ placeholder: 'foo' });
    screen.getByText('foo');
  });
  it('should toggle visibility of placeholder based on contentEditable length', () => {
    givenComponentRendered();
    const placeholder = screen.getByText('placeholder');
    const expandableTextField = screen.getByTestId(testId);
    fireEvent.input(expandableTextField, {
      target: { textContent: 'foo' },
    });
    expect(placeholder).toHaveStyle('visibility: hidden');
    fireEvent.input(expandableTextField, {
      target: { textContent: '' },
    });
    expect(placeholder).toHaveStyle('visibility: visible');
  });
  it('should modify styles on input', () => {
    givenComponentRendered();
    const expandableTextField = screen.getByTestId(testId);
    expect(expandableTextField).toHaveStyleRule('height', expect.any(String));
    expect(expandableTextField).toHaveStyleRule('overflow-y', undefined);
    fireEvent.input(expandableTextField, {
      target: { textContent: 'foo' },
    });
    expect(expandableTextField).toHaveStyle('height: 0px; overflow-y: hidden');
  });

  const givenComponentRendered = (props?: any) =>
    render(
      <ExpandableTextField
        onChange={() => {}}
        placeholder="placeholder"
        {...props}
      />
    );
});
