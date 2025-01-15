import React from 'react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { NumberedList, Text } from '@components';

describe('NumberedList', () => {
  test('should display index number', () => {
    const { container } = renderWithProviders(
      <NumberedList>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
      </NumberedList>,
    );
    expect(container).toHaveTextContent(/1./);
    expect(container).toHaveTextContent(/2./);
    expect(container).toHaveTextContent(/3./);
  });
  test('should display nested index number', () => {
    const { container } = renderWithProviders(
      <NumberedList>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
        <NumberedList.Item>
          <Text>Item</Text>
          <NumberedList>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
      </NumberedList>,
    );
    expect(container).toHaveTextContent(/2.1./);
    expect(container).toHaveTextContent(/2.2./);
    expect(container).toHaveTextContent(/2.3./);
  });
});
