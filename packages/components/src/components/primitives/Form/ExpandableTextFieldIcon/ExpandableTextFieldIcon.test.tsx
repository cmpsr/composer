import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpandableTextFieldIcon } from '.';
import { Icon } from 'components/primitives';
import { send as Send } from '../../Icon/icons/content';

describe('ExpandableTextFieldIcon', () => {
  it('should render classname', () => {
    givenComponentRendered();
    const expandableTextFieldIcon = screen.getByTestId(
      'expandableTextFieldIcon'
    );
    expect(expandableTextFieldIcon).toHaveClass('foo');
  });
  it('should render expandableTextFieldClassName', () => {
    givenComponentRendered({ expandableTextFieldClassName: 'foo' });
    const expandableTextField = screen.getByTestId('expandableTextField')
      .parentElement;
    expect(expandableTextField).toHaveClass('foo');
  });
  it('should render placeholder', () => {
    givenComponentRendered();
    screen.getByText('foo');
  });
  it('should render icon', () => {
    givenComponentRendered();
    screen.getByTestId('icon');
  });
  it('should call onClickIcon', () => {
    const mockOnClickIcon = jest.fn();
    givenComponentRendered({ onClickIcon: mockOnClickIcon });
    const iconWrapper = screen.getByTestId('icon').parentElement;
    fireEvent.click(iconWrapper);
    expect(mockOnClickIcon).toBeCalledTimes(1);
  });
  it('should render icon with right position', () => {
    givenComponentRendered({
      iconPosition: ExpandableTextFieldIcon.IconPositions.Right,
    });
    const iconWrapper = screen.getByTestId('icon').parentElement;
    expect(iconWrapper).toHaveClass(
      ExpandableTextFieldIcon.IconPositions.Right
    );
  });
  it('should render icon with left position', () => {
    givenComponentRendered({
      iconPosition: ExpandableTextFieldIcon.IconPositions.Left,
    });
    const iconWrapper = screen.getByTestId('icon').parentElement;
    expect(iconWrapper).toHaveClass(ExpandableTextFieldIcon.IconPositions.Left);
  });
  it('should render rounded shape', () => {
    givenComponentRendered({
      shape: ExpandableTextFieldIcon.Shapes.Rounded,
    });
    const expandableTextField = screen.getByTestId('expandableTextField');
    expect(expandableTextField).toHaveClass(
      ExpandableTextFieldIcon.Shapes.Rounded
    );
  });
  it('should render semi rounded shape', () => {
    givenComponentRendered({
      shape: ExpandableTextFieldIcon.Shapes.SemiRounded,
    });
    const expandableTextField = screen.getByTestId('expandableTextField');
    expect(expandableTextField).toHaveClass(
      ExpandableTextFieldIcon.Shapes.SemiRounded
    );
  });
  it('should render rectangle shape', () => {
    givenComponentRendered({
      shape: ExpandableTextFieldIcon.Shapes.Rectangle,
    });
    const expandableTextField = screen.getByTestId('expandableTextField');
    expect(expandableTextField).toHaveClass(
      ExpandableTextFieldIcon.Shapes.Rectangle
    );
  });

  const givenComponentRendered = (props?: any) =>
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        className="foo"
        placeholder="foo"
        icon={<Send type={Icon.Types.Rounded} />}
        {...props}
      />
    );
});
