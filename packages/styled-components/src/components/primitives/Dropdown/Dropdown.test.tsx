import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('should render children when dropdown is open', () => {
    render(
      <Dropdown title="title">
        <div>foo</div>
      </Dropdown>
    );
    const expandMore = screen.getByTestId('expandMore');
    fireEvent.click(expandMore);
    screen.getByText('foo');
  });
  it('should render title', () => {
    render(<Dropdown title="foo" />);
    screen.getByText('foo');
  });
  it('should render ExpandMore icon', () => {
    render(<Dropdown title="title" />);
    screen.getByTestId('expandMore');
  });
  it('should render ExpandLess icon on click', () => {
    render(<Dropdown title="title" />);
    const expandMore = screen.getByTestId('expandMore');
    fireEvent.click(expandMore);
    screen.getByTestId('expandLess');
  });
  it('should close menu when click outside', () => {
    render(<Dropdown title="title" />);
    const expandMore = screen.getByTestId('expandMore');
    fireEvent.click(expandMore);
    screen.getByTestId('expandLess');
    fireEvent.click(document);
    screen.getByTestId('expandMore');
  });
});
