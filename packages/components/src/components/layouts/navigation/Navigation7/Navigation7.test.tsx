import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Navigation7, NAVIGATION7_DEFAULT_TEST_ID } from '.';
import { BOX_DEFAULT_TEST_ID } from 'components/containers';

describe('Navigation7', () => {
  const testStyle = { background: { default: { bg: 'white' } } };
  it('should match snapshot', () => {
    const navigation = renderer.create(<Navigation7 style={testStyle} />);
    const tree = navigation.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(<Navigation7 style={testStyle} />);
    const navigation = getByTestId(NAVIGATION7_DEFAULT_TEST_ID);
    expect(navigation).toBeInTheDocument();
  });
  it('should render style', () => {
    const { getByTestId } = render(<Navigation7 style={testStyle} />);
    const navigation = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(navigation.classList).toContain('bg-white');
  });
  it('should render content logo', () => {
    const childrenLogoTestId = 'Children-Logo-TestId';
    const renderedChildren = {
      logo: <p data-testid={childrenLogoTestId}>Logo</p>,
      content: <div>Children</div>,
    };
    const { getByTestId } = render(
      <Navigation7 style={testStyle}>{renderedChildren}</Navigation7>,
    );

    const childrenLogo = getByTestId(childrenLogoTestId);
    expect(childrenLogo).toBeInTheDocument();
    expect(childrenLogo.parentElement.classList).toContain('justify-center');
  });
  it('should render array of content with appropriate style', () => {
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
      <Navigation7 style={testStyle}>{renderedChildren}</Navigation7>,
    );

    const children = getAllByTestId(childrenTestId, { exact: false });
    expect(children.length).toBe(2);
    expect(baseElement.innerHTML).toContain('justify-start');
  });
  it('should render search icon', () => {
    const { getByTestId } = render(<Navigation7 style={testStyle} />);
    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
