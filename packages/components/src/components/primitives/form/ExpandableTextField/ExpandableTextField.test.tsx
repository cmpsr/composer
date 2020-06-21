import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpandableTextField, EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID } from '.';
import { InputShapes } from '../TextField';

describe('ExpandableTextField', () => {
  it('should render classname', () => {
    render(
      <ExpandableTextField
        onChange={() => {}}
        className="className"
        placeholder="placeholder"
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    ).parentElement;
    expect(expandableTextField).toHaveClass('className');
  });
  it('should render rounded shape', () => {
    render(
      <ExpandableTextField
        onChange={() => {}}
        shape={InputShapes.Rounded}
        placeholder="placeholder"
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.Rounded);
  });
  it('should render semi rounded shape', () => {
    render(
      <ExpandableTextField
        onChange={() => {}}
        shape={InputShapes.SemiRounded}
        placeholder="placeholder"
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.SemiRounded);
  });
  it('should render rectangle shape', () => {
    render(
      <ExpandableTextField
        onChange={() => {}}
        shape={InputShapes.Rectangle}
        placeholder="placeholder"
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.Rectangle);
  });
  it('should input textContent and call onChange', () => {
    const mockOnChange = jest.fn();
    render(
      <ExpandableTextField placeholder="placeholder" onChange={mockOnChange} />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    fireEvent.input(expandableTextField, {
      target: { textContent: 'newValue' },
    });
    expect(expandableTextField).toHaveTextContent('newValue');
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render placeholder', () => {
    render(
      <ExpandableTextField onChange={() => {}} placeholder="placeholder" />
    );
    const placeholder = screen.getByText('placeholder');
    expect(placeholder).toBeInTheDocument();
  });
  it('should toggle visibility of placeholder based on contentEditable length', () => {
    render(
      <ExpandableTextField onChange={() => {}} placeholder="placeholder" />
    );
    const placeholder = screen.getByText('placeholder');
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    fireEvent.input(expandableTextField, {
      target: { textContent: 'newValue' },
    });
    expect(placeholder).toHaveClass('invisible');
    fireEvent.input(expandableTextField, {
      target: { textContent: '' },
    });
    expect(placeholder).toHaveClass('visible');
  });
  it('should modify styles on input', () => {
    render(
      <ExpandableTextField onChange={() => {}} placeholder="placeholder" />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField.style.height).toBe('');
    expect(expandableTextField.style.overflowY).toBe('');
    fireEvent.input(expandableTextField, {
      target: { textContent: 'newValue' },
    });
    expect(expandableTextField).toHaveStyle({
      height: '0px',
      overflowY: 'hidden',
    });
  });
});
