import React, { ReactElement } from 'react';
import cn from 'classnames';

import {
  Typography,
  TypographyTypes,
  Link,
  Asset,
  Icon,
} from 'components/primitives';
import { done as Done } from 'components/primitives/Icon/icons/action';

export const PRICING_PLAN_DEFAULT_TEST_ID = 'pricing_plan1';

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

export const PricingPlan1 = ({
  title,
  price,
  className,
  children,
  testId = PRICING_PLAN_DEFAULT_TEST_ID,
}: Props) => (
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
      <Link url="https://www.google.com">
        <Asset
          asset={{
            title: '',
            url:
              'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
            contentType: 'image',
          }}
          imageClassName="h-10"
        />
      </Link>
    </div>
    <div className="flex flex-row items-baseline">
      <Typography
        tag="span"
        type={TypographyTypes.Headline5}
        className="font-bold self-start mt-2"
        style={{}}
      >
        $
      </Typography>
      <Typography tag="span" type={TypographyTypes.Headline1} style={{}}>
        {price}
      </Typography>
      <Typography
        tag="span"
        type={TypographyTypes.Headline6}
        style={{}}
        className="ml-2"
      >
        / Mo
      </Typography>
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
