import '@testing-library/jest-dom';
import { fireEvent, renderWithProviders, screen } from '@tests/renderWithProviders';
import React from 'react';
import { SegmentedButton } from './SegmentedButton';
import { SegmentedButtonProps } from './types';

describe('SegmentedButton', () => {
  const onChangeMock = jest.fn();
  const givenComponentRendered = (props?: Partial<SegmentedButtonProps>) =>
    renderWithProviders(
      <SegmentedButton onChange={onChangeMock} {...props}>
        <SegmentedButton.Button value="dummy_value_1">dummy text 1</SegmentedButton.Button>
        <SegmentedButton.Button value="dummy_value_2">dummy text 2</SegmentedButton.Button>
        <SegmentedButton.Button value="dummy_value_3">dummy text 3</SegmentedButton.Button>
      </SegmentedButton>
    );

  it('should render', () => {
    givenComponentRendered();
    expect(screen.getByText('dummy text 1')).toBeInTheDocument();
  });
  it('should call onChange when a segment is clicked', () => {
    givenComponentRendered();
    const dummy2Button = screen.getByRole('button', { name: 'dummy text 2' });
    fireEvent.click(dummy2Button);
    expect(onChangeMock).toHaveBeenCalledWith('dummy_value_2');
  });
  it('should disable the segments when is disabled', () => {
    givenComponentRendered({ isDisabled: true });
    expect(screen.getByText('dummy text 1')).toBeDisabled();
  });
  it('should select an option by default when defaultValue is provided', () => {
    givenComponentRendered({ defaultValue: 'dummy_value_2' });

    expect(screen.getByRole('button', { current: true })).toHaveValue('dummy_value_2');
  });

  it('should set the selected option based on the controlled selectedValue prop', () => {
    givenComponentRendered({ selectedValue: 'dummy_value_3' });
    expect(screen.getByRole('button', { current: true })).toHaveValue('dummy_value_3');
  });

  it('should update the selected option when selectedValue changes from outside', () => {
    const { rerender } = givenComponentRendered({ selectedValue: 'dummy_value_1' });

    expect(screen.getByRole('button', { current: true })).toHaveValue('dummy_value_1');

    rerender(
      <SegmentedButton selectedValue="dummy_value_2" onChange={onChangeMock}>
        <SegmentedButton.Button value="dummy_value_1">dummy text 1</SegmentedButton.Button>
        <SegmentedButton.Button value="dummy_value_2">dummy text 2</SegmentedButton.Button>
        <SegmentedButton.Button value="dummy_value_3">dummy text 3</SegmentedButton.Button>
      </SegmentedButton>
    );

    expect(screen.getByRole('button', { current: true })).toHaveValue('dummy_value_2');
  });

  it('should call onChange but not update internal state when controlled by selectedValue', () => {
    givenComponentRendered({ selectedValue: 'dummy_value_1' });
    const dummy2Button = screen.getByRole('button', { name: 'dummy text 2' });
    fireEvent.click(dummy2Button);

    expect(onChangeMock).toHaveBeenCalledWith('dummy_value_2');

    expect(screen.getByRole('button', { current: true })).toHaveValue('dummy_value_1');
  });
});
