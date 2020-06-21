import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RangeCalendar } from '.';
import MockDate from 'mockdate';

describe('Single Calendar', () => {
  beforeAll(() => {
    MockDate.set('2020-04-14');
  });
  afterAll(() => {
    MockDate.reset();
  });
  it('should select a range on click', () => {
    const { getByText } = render(<RangeCalendar />);
    const startOption = getByText('2');
    const endOption = getByText('4');

    fireEvent.click(startOption);
    fireEvent.click(endOption);

    expect(startOption.classList).toContain('DayPicker-Day--start');
    expect(endOption.classList).toContain('DayPicker-Day--end');
  });

  it('should render with month prop', () => {
    const { getByText } = render(<RangeCalendar month={new Date(2020, 0)} />);
    const month = getByText('January 2020');
    expect(month).toBeInTheDocument();
  });
  it('should render two calendars', () => {
    const { getByText } = render(
      <RangeCalendar numberOfMonths={2} month={new Date(2020, 0)} />
    );
    const month1 = getByText('January 2020');
    const month2 = getByText('February 2020');

    expect(month1).toBeInTheDocument();
    expect(month2).toBeInTheDocument();
  });
});
