import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { LinkItem } from '../List';
import { favorite as Favorite } from 'components/primitives/Icon/icons/action';

describe('Dropdown', () => {
  it('should render title', () => {
    const { getByText } = render(<Dropdown title="Link" />);
    const dropdown = getByText('Link');
    expect(dropdown).toBeInTheDocument();
  });
  it('should render ExpandMore icon', () => {
    const { getByTestId } = render(<Dropdown title="Link" />);
    const icon = getByTestId('ExpandMore');
    expect(icon).toBeInTheDocument();
  });
  it('should render ExpandLess icon on click', () => {
    const { getByTestId } = render(<Dropdown title="Link" />);
    const expandMore = getByTestId('ExpandMore');

    fireEvent.click(expandMore);

    const expandLess = getByTestId('ExpandLess');
    expect(expandLess).toBeInTheDocument();
  });
  it('should close menu when click outside', () => {
    const { getByTestId } = render(<Dropdown title="Link" />);
    const expandMore = getByTestId('ExpandMore');

    fireEvent.click(expandMore);

    const expandLess = getByTestId('ExpandLess');
    expect(expandLess).toBeInTheDocument();

    fireEvent.click(document);
    expect(expandMore).toBeInTheDocument();
  });
  it('should open menu list', () => {
    const { getByText } = render(
      <Dropdown title="Link">
        <LinkItem title="Item" />
      </Dropdown>
    );

    const menu = getByText('Link');
    fireEvent.click(menu);

    const item = getByText('Item');

    expect(item).toBeInTheDocument();
  });
  it('should render menu list two columns', () => {
    const { getByText } = render(
      <Dropdown title="Link">
        <div className="flex">
          <div>
            <h6>Column 1</h6>
            <LinkItem title="Item 1" />
            <LinkItem title="Item 2" />
            <LinkItem title="Item 3" />
            <LinkItem title="Item 4" />
          </div>
          <div>
            <h6>Column 2</h6>
            <LinkItem title="Item 1" />
            <LinkItem title="Item 2" />
            <LinkItem title="Item 3" />
            <LinkItem title="Item 4" />
          </div>
        </div>
      </Dropdown>
    );

    const menu = getByText('Link');
    fireEvent.click(menu);

    const col1 = getByText('Column 1');
    const col2 = getByText('Column 2');

    expect(col1).toBeInTheDocument();
    expect(col2).toBeInTheDocument();
  });
  it('should render item with icon', () => {
    const { getByText, getByTestId } = render(
      <Dropdown title="Link">
        <LinkItem title="Item" icon={<Favorite type="filled" />} />
      </Dropdown>
    );

    const menu = getByText('Link');
    fireEvent.click(menu);

    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
