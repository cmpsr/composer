import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SingleCalendar } from '.';
import MockDate from 'mockdate';

describe('Single Calendar', () => {
  beforeAll(() => {
    MockDate.set('2020-04-14');
  });
  afterAll(() => {
    MockDate.reset();
  });
  it('should select a day on click', () => {
    const { getByText } = render(<SingleCalendar />);
    const dayOption = getByText('2');
    fireEvent.click(dayOption);
    expect(dayOption.classList).toContain('DayPicker-Day--selected');
  });
  it('should render with month prop', () => {
    const { getByText } = render(<SingleCalendar month={new Date(2020, 0)} />);
    const month = getByText('January 2020');
    expect(month).toBeInTheDocument();
  });
  it('should render two calendars', () => {
    const { getByText } = render(
      <SingleCalendar numberOfMonths={2} month={new Date(2020, 0)} />
    );
    const month1 = getByText('January 2020');
    const month2 = getByText('February 2020');

    expect(month1).toBeInTheDocument();
    expect(month2).toBeInTheDocument();
  });
});
