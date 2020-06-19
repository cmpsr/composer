import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Navigation4, NAVIGATION4_DEFAULT_TEST_ID } from '.';
import { BOX_DEFAULT_TEST_ID } from 'components/containers';

describe('Navigation4', () => {
  const testStyle = { background: { default: { bg: 'white' } } };
  it('should match snapshot', () => {
    const navigation = renderer.create(<Navigation4 style={testStyle} />);
    const tree = navigation.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(<Navigation4 style={testStyle} />);
    const navigation = getByTestId(NAVIGATION4_DEFAULT_TEST_ID);
    expect(navigation).toBeInTheDocument();
  });
  it('should render style', () => {
    const { getByTestId } = render(<Navigation4 style={testStyle} />);
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
      <Navigation4 style={testStyle}>{renderedChildren}</Navigation4>,
    );
    const childrenLogo = getByTestId(childrenLogoTestId);
    expect(childrenLogo).toBeInTheDocument();
    expect(childrenLogo.parentElement.classList).toContain('flex-1');
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
      <Navigation4 style={testStyle}>{renderedChildren}</Navigation4>,
    );

    const children = getAllByTestId(childrenTestId, { exact: false });
    expect(children.length).toBe(2);
    expect(baseElement.innerHTML).toContain('items-center');
  });
  it('should render buttons', () => {
    const childrenButtonsId = 'Children-ButtonsId';
    const renderedChildren = {
      logo: <p>Logo</p>,
      secondaryContent: [
        <button data-testid={childrenButtonsId + '1'} key="1">
          Sign in
        </button>,
        <button data-testid={childrenButtonsId + '2'} key="2">
          Log in
        </button>,
      ],
    };

    const { baseElement, getAllByTestId } = render(
      <Navigation4 style={testStyle}>{renderedChildren}</Navigation4>,
    );
    const children = getAllByTestId(childrenButtonsId, { exact: false });
    expect(children.length).toBe(2);
    expect(baseElement.innerHTML).toContain('grid-cols-2');
  });
});
