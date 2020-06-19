import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  ExpandableTextFieldIcon,
  EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID,
} from '.';
import { EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID } from '../ExpandableTextField';
import { InputShapes } from '../TextField';
import { send as Send } from '../../Icon/icons/content';
import { ICON_DEFAULT_TEST_ID } from '../../Icon';
import { ExpandableTextFieldIconPosition } from './ExpandableTextFieldIcon';

describe('ExpandableTextFieldIcon', () => {
  it('should render classname', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        className="className"
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const expandableTextFieldIcon = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID
    );
    expect(expandableTextFieldIcon).toHaveClass('className');
  });
  it('should render expandableTextFieldClassName', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        expandableTextFieldClassName="expandableTextFieldClassName"
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    ).parentElement;
    expect(expandableTextField).toHaveClass('expandableTextFieldClassName');
  });
  it('should render placeholder', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const placeholder = screen.getByText('placeholder');
    expect(placeholder).toBeInTheDocument();
  });
  it('should render icon', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const icon = screen.getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
  });
  it('should call onClickIcon', () => {
    const mockOnClickIcon = jest.fn();
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
        onClickIcon={mockOnClickIcon}
      />
    );
    const iconWrapper = screen.getByTestId(ICON_DEFAULT_TEST_ID).parentElement;
    fireEvent.click(iconWrapper);
    expect(mockOnClickIcon).toBeCalledTimes(1);
  });
  it('should render icon with right position', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        placeholder="placeholder"
        iconPosition={ExpandableTextFieldIconPosition.Right}
        icon={<Send type="rounded" />}
      />
    );
    const iconWrapper = screen.getByTestId(ICON_DEFAULT_TEST_ID).parentElement;
    expect(iconWrapper).toHaveClass('order-2');
  });
  it('should render icon with left position', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        placeholder="placeholder"
        iconPosition={ExpandableTextFieldIconPosition.Left}
        icon={<Send type="rounded" />}
      />
    );
    const iconWrapper = screen.getByTestId(ICON_DEFAULT_TEST_ID).parentElement;
    expect(iconWrapper).toHaveClass('order-1');
  });
  it('should render rounded shape', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        shape={InputShapes.Rounded}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.Rounded);
  });
  it('should render semi rounded shape', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        shape={InputShapes.SemiRounded}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.SemiRounded);
  });
  it('should render rectangle shape', () => {
    render(
      <ExpandableTextFieldIcon
        onChange={() => {}}
        shape={InputShapes.Rectangle}
        placeholder="placeholder"
        icon={<Send type="rounded" />}
      />
    );
    const expandableTextField = screen.getByTestId(
      EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID
    );
    expect(expandableTextField).toHaveClass(InputShapes.Rectangle);
  });
});
