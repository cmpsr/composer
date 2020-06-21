import React from 'react';
import { SingleCalendar } from '.';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Calendar/SingleCalendar',
  component: SingleCalendar,
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

export const basic = () => (
  <SingleCalendar
    month={new Date(select('Year', years, 2020), select('Month', months, 0))}
  />
);

basic.story = {
  name: 'Basic',
};

export const selectedDays = () => (
  <SingleCalendar
    initialMonth={new Date(2020, 3)}
    customDay={new Date(2020, 3, 30)}
  />
);

selectedDays.story = {
  name: 'Default Days',
};
