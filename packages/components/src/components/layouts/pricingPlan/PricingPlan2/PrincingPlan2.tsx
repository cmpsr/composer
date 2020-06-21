import React, { ReactElement } from 'react';
import cn from 'classnames';

import { Typography, TypographyTypes, Icon } from 'components/primitives';
import { done as Done } from 'components/primitives/Icon/icons/action';

export const PRICING_PLAN_DEFAULT_TEST_ID = 'pricingPlan2';

type Props = {
  title: string;
  price: string;
  className?: string;
  children?: {
    listItems?: string[];
    button?: ReactElement;
  };
  testId?: string;
};

export const PricingPlan2 = ({
  title,
  price,
  className,
  children,
  testId = PRICING_PLAN_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <div
      data-testid={testId}
      className={cn('rounded shadow-lg px-6 py-8', className)}
    >
      <div className="flex justify-between items-center">
        <Typography
          tag="h5"
          type={TypographyTypes.Headline5}
          style={{}}
          className="font-bold"
        >
          {title}
        </Typography>
        <div className="flex flex-row items-baseline">
          <Typography
            tag="span"
            type={TypographyTypes.Headline5}
            className="font-bold"
            style={{}}
          >
            ${price}
          </Typography>
          <Typography
            tag="span"
            type={TypographyTypes.Body}
            className="ml-2"
            style={{}}
          >
            monthly
          </Typography>
        </div>
      </div>
      <div className="mt-6 mb-10">
        <ul>
          {children &&
            children.listItems &&
            children.listItems.map((value, key) => (
              <li className="mb-3" key={key}>
                <Icon className="inline-block mr-5">
                  <Done type="filled" />
                </Icon>
                <Typography
                  tag="span"
                  type={TypographyTypes.Body}
                  style={{ default: { text: 'gray-500' } }}
                >
                  {value}
                </Typography>
              </li>
            ))}
        </ul>
      </div>
      {children && children.button}
    </div>
  );
};
