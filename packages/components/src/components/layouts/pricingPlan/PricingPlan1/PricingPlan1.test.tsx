import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PricingPlan1, PRICING_PLAN_DEFAULT_TEST_ID } from '.';
import { IMAGE_DEFAULT_TEST_ID } from 'components/primitives';

describe('PricingPlan1', () => {
  const title = 'test';
  const price = '10';
  const items = ['test 1', 'test 2', 'test 3', 'test 4'];
  const button = <a>test</a>;

  it('should match snapshot', () => {
    const pricingPlan = renderer.create(
      <PricingPlan1 title={title} price={price}>
        {{ listItems: items, button: button }}
      </PricingPlan1>,
    );
    const tree = pricingPlan.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(
      <PricingPlan1 title={title} price={price} />,
    );
    const pricingPlan = getByTestId(PRICING_PLAN_DEFAULT_TEST_ID);
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render logo', () => {
    const { getByTestId } = render(
      <PricingPlan1 title={title} price={price} />,
    );
    const pricingPlan = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render className', () => {
    const { getByTestId } = render(
      <PricingPlan1 title={title} price={price} className="foo" />,
    );
    const pricingPlan = getByTestId(PRICING_PLAN_DEFAULT_TEST_ID);
    expect(pricingPlan.classList).toContain('foo');
  });
  it('should render title', () => {
    const { getByText } = render(<PricingPlan1 title={title} price={price} />);
    const pricingPlan = getByText('test');
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render price', () => {
    const { getByText } = render(<PricingPlan1 title={title} price={price} />);
    const pricingPlan = getByText('10');
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render children list', () => {
    const { getByText } = render(
      <PricingPlan1 title={title} price={price}>
        {{ listItems: items }}
      </PricingPlan1>,
    );
    const pricingPlan = getByText('test 1');
    expect(pricingPlan).toBeInTheDocument();
  });
  it('should render children button', () => {
    const childrenTestId = 'Children-TestId';
    const link = <a data-testid={childrenTestId}>test</a>;
    const { getByTestId } = render(
      <PricingPlan1 title={title} price={price}>
        {{ listItems: items, button: link }}
      </PricingPlan1>,
    );
    const pricingPlan = getByTestId(childrenTestId);
    expect(pricingPlan).toBeInTheDocument();
  });
});
