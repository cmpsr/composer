import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Footer1, FOOTER1_DEFAULT_TEST_ID } from './Footer1';

describe('Footer1', () => {
  const testStyle = { background: { default: { bg: 'white' } } };
  it('should match snapshot', () => {
    const footer = renderer.create(<Footer1 style={testStyle} />);
    const tree = footer.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(<Footer1 style={testStyle} />);
    const footer = getByTestId(FOOTER1_DEFAULT_TEST_ID);
    expect(footer).toBeInTheDocument();
  });
  it('should render style', () => {
    const { getByTestId } = render(<Footer1 style={testStyle} />);
    const footer = getByTestId(FOOTER1_DEFAULT_TEST_ID);
    expect(footer.classList).toContain('bg-white');
  });
  it('should render copy', () => {
    const testCopy = 'Test copy';
    const { getByText } = render(<Footer1 style={testStyle} copy={testCopy} />);
    const copy = getByText(testCopy);
    expect(copy).toBeInTheDocument();
  });
  it('should render children logo', () => {
    const childrenLogoTestId = 'Children-Logo-TestId';
    const renderedChildren = {
      logo: <p data-testid={childrenLogoTestId}>Logo</p>,
      content: <div>Children</div>,
    };
    const { getByTestId } = render(
      <Footer1 style={testStyle}>{renderedChildren}</Footer1>,
    );
    const childrenLogo = getByTestId(childrenLogoTestId);
    expect(childrenLogo).toBeInTheDocument();
    expect(childrenLogo.parentElement.classList).toContain('flex-none');
  });
  it('should render children with appropriate style', () => {
    const childrenTestId = 'Children-TestId';
    const renderedChildren = {
      logo: <p>Logo</p>,
      content: <div data-testid={childrenTestId}>Children</div>,
    };
    const { baseElement, getByTestId } = render(
      <Footer1 style={testStyle}>{renderedChildren}</Footer1>,
    );
    const children = getByTestId(childrenTestId);
    expect(children).toBeInTheDocument();
    expect(baseElement.innerHTML).toContain('md:grid-cols-1');
  });
  it('should render array of children with appropriate style', () => {
    const childrenTestId = 'Children-TestId';
    const renderedChildren = {
      logo: <p>Logo</p>,
      content: [
        <div data-testid={childrenTestId + '1'} key="1">
          Children1
        </div>,
        <div data-testid={childrenTestId + '2'} key="2">
          Children2
        </div>,
      ],
    };
    const { baseElement, getAllByTestId } = render(
      <Footer1 style={testStyle}>{renderedChildren}</Footer1>,
    );
    const children = getAllByTestId(childrenTestId, { exact: false });
    expect(children.length).toBe(2);
    expect(baseElement.innerHTML).toContain('md:grid-cols-2');
  });
});
