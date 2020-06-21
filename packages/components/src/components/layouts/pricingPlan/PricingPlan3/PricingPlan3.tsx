import React, { ReactElement, useState } from 'react';
import cn from 'classnames';

import {
  Typography,
  TypographyTypes,
  Icon,
  Button,
} from 'components/primitives';
import { done as Done } from 'components/primitives/Icon/icons/action';
import { keyboard_arrow_down as ArrowDown } from 'components/primitives/Icon/icons/hardware';

export const PRICING_PLAN_DEFAULT_TEST_ID = 'pricingPlan3';

type Props = {
  title: string;
  price: string;
  className?: string;
  displayItems?: number;
  children?: {
    listItems?: string[];
    button?: ReactElement;
  };
  testId?: string;
};

export const PricingPlan3 = ({
  title,
  price,
  children,
  className,
  displayItems,
  testId = PRICING_PLAN_DEFAULT_TEST_ID,
}: Props) => {
  // for mobile
  const [showMore, setShowMore] = useState(false);

  // sets a default number of items we want to display on mobile, if not provided
  const numItemsToDisplay = displayItems || 3;

  // get an empty array if items don't exist
  const items = children ? children.listItems || [] : [];

  // on desktop we want to show all items in 2 columns
  const itemsColumn1 = items.slice(0, Math.ceil(items.length / 2));
  const itemsColumn2 = items.slice(Math.floor(items.length / 2));

  const clickedMore = () => {
    setShowMore(true);
  };

  return (
    <div
      data-testid={testId}
      className={cn(
        'flex flex-col md:flex-row md:justify-between items-center md:px-6 py-8',
        className,
      )}
    >
      <div className="flex min-w-full justify-between items-center py-8 border-t border-b border-gray-700 md:flex-col md:min-w-0 md:items-start md:py-0 md:border-0">
        <Typography tag="h5" type={TypographyTypes.Headline6} style={{}}>
          {title}
        </Typography>
        <div className="flex flex-row items-baseline">
          <Typography
            tag="span"
            type={TypographyTypes.Headline1}
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
            / Mo
          </Typography>
        </div>
      </div>
      <hr className="md:border md:h-20" />
      <div className="hidden md:flex justify-start min-w-full md:px-4 md:py-8  md:min-w-0 lg:p-8">
        <ul>
          {itemsColumn1.map((value, key) => (
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
        <ul>
          {itemsColumn2.map((value, key) => (
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
      <div className="md:hidden justify-start min-w-full p-8 md:min-w-0 ">
        <ul>
          {items.map((value, key) => (
            <li
              className={cn('mb-3', {
                hidden: key >= numItemsToDisplay && !showMore,
              })}
              key={key}
            >
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
        <Button className={cn({ hidden: showMore })} onClick={clickedMore}>
          <Icon className="mr-5">
            <ArrowDown type="filled" />
          </Icon>
          View all features
        </Button>
      </div>
      <div className="min-w-full md:min-w-0">{children && children.button}</div>
    </div>
  );
};
