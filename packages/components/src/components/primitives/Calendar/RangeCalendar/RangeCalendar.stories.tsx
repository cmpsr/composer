import React from 'react';
import { RangeCalendar } from '.';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Calendar/RangeCalendar',
  component: RangeCalendar,
};

const years = [2020, 2019, 2018];
const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export const basic = () => {
  return (
    <RangeCalendar
      month={new Date(select('Year', years, 2020), select('Month', months, 0))}
    />
  );
};

basic.story = {
  name: 'Basic ',
};

export const twoMonths = () => (
  <RangeCalendar
    numberOfMonths={2}
    month={new Date(select('Year', years, 2020), select('Month', months, 0))}
  />
);

twoMonths.story = {
  name: 'Two Months',
};

export const selectedRange = () => (
  <RangeCalendar
    initialMonth={new Date(2020, 3)}
    selectedRange={{
      from: new Date(2020, 3, 20),
      to: new Date(2020, 3, 30),
    }}
  />
);

selectedRange.story = {
  name: 'Selected Range',
};
