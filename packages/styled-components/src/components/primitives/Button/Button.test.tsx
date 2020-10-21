import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Button,
  BUTTON_DEFAULT_TEST_ID,
  ButtonTypes,
  ButtonShapes,
} from './Button';
import { Typography, TypographyTypes } from '../Typography';

describe('Button', () => {
  it('should render with text', () => {
    const { getByText } = render(
      <Button>
        <Typography tag="span" type={TypographyTypes.Button}>
          foo
        </Typography>
      </Button>
    );
    const button = getByText('foo');
    expect(button).toBeInTheDocument();
  });
  it('should render children', () => {
    const { getByText } = render(<Button>foo</Button>);
    const button = getByText('foo');
    expect(button).toBeInTheDocument();
  });
  it('should render without text', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.children.length).toBe(0);
  });
  it('should render primary', () => {
    const { getByTestId } = render(<Button type={ButtonTypes.Primary} />);
    const button = getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.classList).toContain(ButtonTypes.Primary);
  });
  it('should render secondary', () => {
    const { getByTestId } = render(<Button type={ButtonTypes.Secondary} />);
    const button = getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.classList).toContain(ButtonTypes.Secondary);
  });
  it('should render class', () => {
    const { getByTestId } = render(<Button className="foo" />);
    const button = getByTestId(BUTTON_DEFAULT_TEST_ID);
    expect(button.classList).toContain('foo');
  });
  it('should render html type', () => {
    const { getByTestId } = render(<Button htmlType="submit" />);
    const button = getByTestId(BUTTON_DEFAULT_TEST_ID) as HTMLButtonElement;
    expect(button.type).toBe('submit');
  });

  it('should render primary button with state contained disabled', () => {
    render(<Button disabled type={ButtonTypes.Primary} />);
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-fill-state-primary-disabled');
  });
  it('should render secondary button with state outlined disabled', () => {
    render(<Button disabled type={ButtonTypes.Secondary} />);
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-fill-state-secondary-disabled');
  });
  it('should render button with rectangle shape', () => {
    render(
      <Button shape={ButtonShapes.Rectangle} type={ButtonTypes.Secondary} />
    );
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button).toHaveClass('rounded-btn-rectangle');
  });
  it('should render button with semi rounded shape', () => {
    render(
      <Button shape={ButtonShapes.SemiRounded} type={ButtonTypes.Secondary} />
    );
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button).toHaveClass('rounded-btn-semi-rounded');
  });
  it('should render button with rounded shape', () => {
    render(
      <Button shape={ButtonShapes.Rounded} type={ButtonTypes.Secondary} />
    );
    const button = screen.getByTestId(
      BUTTON_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(button).toHaveClass('rounded-btn-rounded');
  });
});
