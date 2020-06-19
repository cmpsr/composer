import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import '../../../../styles/calendar.css';

type Props = {
  numberOfMonths?: number;
  initialMonth?: Date;
  customDay?: Date;
  month?: Date;
};

export const SingleCalendar = ({
  numberOfMonths,
  initialMonth,
  customDay,
  month,
}: Props) => {
  const [selectedDay, setSelectedDay] = useState(customDay);

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <div className="shadow-2xl inline-flex">
      <DayPicker
        className="singleCalendar"
        numberOfMonths={numberOfMonths}
        selectedDays={selectedDay}
        onDayClick={handleDayClick}
        initialMonth={initialMonth}
        month={month}
      />
    </div>
  );
};
