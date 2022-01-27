import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { Switch } from '.';
import { useMultiStyleConfig } from '@chakra-ui/react';

jest.mock('@chakra-ui/react', () => ({
  ...(jest.requireActual('@chakra-ui/react') as any),
  useMultiStyleConfig: jest.fn().mockReturnValue({
    leftLabel: {},
    rightLabel: {},
  }),
}));

describe('Switch', () => {
  test('it should render', () => {
    renderWithProviders(<Switch />);
    expect(screen.queryByTestId('cmpsr.switch')).not.toBeFalsy();
  });

  test('it should render left label', () => {
    renderWithProviders(<Switch label="Test1" labelPosition="left" />);
    const label = screen.queryByTestId('cmpsr.switch-left-label');
    const labelText = screen.queryByText('Test1');
    expect(label).not.toBeFalsy();
    expect(labelText).not.toBeFalsy();
  });

  test('it should render right label', () => {
    renderWithProviders(<Switch label="Test1" labelPosition="right" />);
    const label = screen.queryByTestId('cmpsr.switch-right-label');
    const labelText = screen.queryByText('Test1');
    expect(label).not.toBeFalsy();
    expect(labelText).not.toBeFalsy();
  });

  test('it should return proper styling when checked', () => {
    const { container } = renderWithProviders(
      <Switch labelPosition="left" label="test" />
    );
    const input = container.querySelector('input');
    fireEvent.click(input);
    expect(useMultiStyleConfig).toHaveBeenCalledWith('Switch', {
      isChecked: true,
    });
  });

  test('it should handle the onChange event', () => {
    const onChange = jest.fn();
    const { container } = renderWithProviders(
      <Switch labelPosition="left" label="test" onChange={onChange} />
    );
    const input = container.querySelector('input');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });
});
