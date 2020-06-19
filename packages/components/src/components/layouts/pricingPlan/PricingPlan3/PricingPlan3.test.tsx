import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PricingPlan3, PRICING_PLAN_DEFAULT_TEST_ID } from '.';

describe('PricingPlan3', () => {
  const title = 'test';
  const price = '10';
  const items = ['test 1', 'test 2', 'test 3', 'test 4'];
  const button = <a>test</a>;

  it('should match snapshot', () => {
    const pricingPlan = renderer.create(
      <PricingPlan3 title={title} price={price}>
        {{ listItems: items, button: button }}
      </PricingPlan3>,
    );
    const tree = pricingPlan.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(
      <PricingPlan3 title={title} price={price} />,
    );
    const pricingPlan = getByTestId(PRICING_PLAN_DEFAULT_TEST_ID);
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render className', () => {
    const { getByTestId } = render(
      <PricingPlan3 title={title} price={price} className="foo" />,
    );
    const pricingPlan = getByTestId(PRICING_PLAN_DEFAULT_TEST_ID);
    expect(pricingPlan.classList).toContain('foo');
  });
  it('should render title', () => {
    const { getByText } = render(<PricingPlan3 title={title} price={price} />);
    const pricingPlan = getByText('test');
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render price', () => {
    const { getByText } = render(<PricingPlan3 title={title} price={price} />);
    const pricingPlan = getByText('$10');
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render children list in two columns', () => {
    const { getAllByText } = render(
      <PricingPlan3 title={title} price={price}>
        {{ listItems: items }}
      </PricingPlan3>,
    );

    const pricingPlan = getAllByText('test 1');
    expect(pricingPlan.length).toBe(2);
  });
  it('should render children button', () => {
    const childrenTestId = 'Children-TestId';
    const link = <a data-testid={childrenTestId}>test</a>;
    const { getByTestId } = render(
      <PricingPlan3 title={title} price={price}>
        {{ listItems: items, button: link }}
      </PricingPlan3>,
    );
    const pricingPlan = getByTestId(childrenTestId);
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should call clickedMore features on click', () => {
    const { getByTestId } = render(
      <PricingPlan3 title={title} price={price}>
        {{ listItems: items }}
      </PricingPlan3>,
    );
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(button.classList).toContain('hidden');
  });
  it('should render component when items is empty', () => {
    const { getByTestId } = render(
      <PricingPlan3 title={title} price={price}>
        {{ listItems: null }}
      </PricingPlan3>,
    );

    const pricingPlan = getByTestId(PRICING_PLAN_DEFAULT_TEST_ID);
    expect(pricingPlan).toBeInTheDocument();
  });
});
