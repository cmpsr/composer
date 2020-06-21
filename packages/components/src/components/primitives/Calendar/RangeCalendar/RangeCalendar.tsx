import React, { useState } from 'react';
import cn from 'classnames';
import DayPicker, { DateUtils, RangeModifier } from 'react-day-picker';

type Props = {
  numberOfMonths?: number;
  month?: Date;
  initialMonth?: Date;
  selectedRange?: RangeModifier;
};

export const RangeCalendar = ({
  numberOfMonths,
  month,
  initialMonth,
  selectedRange = { from: undefined, to: undefined },
}: Props) => {
  const [range, setRange] = useState<RangeModifier>(selectedRange);

  const modifiers = { start: range.from, end: range.to };

  const handleDayClick = (day) => {
    const newRange = DateUtils.addDayToRange(day, range);
    setRange(newRange);
  };

  return (
    <div className="shadow-2xl inline-flex">
      <DayPicker
        className={cn('rangeCalendar', { doubleCalendar: numberOfMonths > 1 })}
        numberOfMonths={numberOfMonths}
        modifiers={modifiers}
        selectedDays={[(range.from, range)]}
        initialMonth={initialMonth}
        onDayClick={handleDayClick}
        month={month}
      />
    </div>
  );
};
