import React from 'react';
import { render } from '@testing-library/react';
import { Group } from './Group';

describe('Group', () => {
  it('should render component', () => {
    const { getByText } = render(
      <Group>
        <p>Item 1</p>
        <p>Item 2</p>
      </Group>,
    );
    const group = getByText('Item 1');
    expect(group).toBeInTheDocument();
  });
  it('should render style', () => {
    const style = {
      background: {
        sm: {
          bg: 'bg-white',
        },
      },
    };
    const { getByText } = render(
      <Group style={style}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Group>,
    );
    const group = getByText('Item 1');
    expect(group.parentElement.classList).toContain('sm:bg-bg-white');
  });
});
