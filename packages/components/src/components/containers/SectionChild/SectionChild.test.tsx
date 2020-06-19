import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { SectionChild } from '.';

describe('SectionChild', () => {
  it('should match snapshot', () => {
    const sectionChild = renderer.create(<SectionChild />);
    const tree = sectionChild.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render class name', () => {
    const { baseElement } = render(<SectionChild className="class-name" />);
    expect(baseElement.innerHTML).toContain('class-name');
  });
  it('should render children', () => {
    const children = <div data-testid="children-test-id">Hello</div>;
    const { getByTestId } = render(<SectionChild>{children}</SectionChild>);
    expect(getByTestId('children-test-id')).toBeInTheDocument();
  });
});
