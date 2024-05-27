import React, { FC } from 'react';
import { Box, DateInput, Flex } from '@cmpsr/components';
import { DateProps, uiDateFormat, isoDateFormat } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { inputMargin } from '@components/Question/Question';
import { parse, format, isValid } from 'date-fns';

export const DateComp: FC<DateProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, id, placeholder, whyWeAskExplanation } = data;

  const handleChange = ({ currentTarget }) => {
    const date = parse(currentTarget.value, uiDateFormat, new Date());
    if (!isValid(date)) return;

    const formattedDate: string = format(date, isoDateFormat);
    saveAnswer({ type: 'date', value: formattedDate });
  };

  const defaultDate = defaultValue?.value ? format(defaultValue.value, uiDateFormat) : null;

  return (
    <Box>
      <QuestionTitle question={label} whyWeAskExplanation={whyWeAskExplanation} />
      <Flex px={inputMargin}>
        <DateInput
          key={id}
          variant="outline"
          placeholder={placeholder}
          defaultValue={defaultDate}
          onInput={handleChange}
          mode="mm/dd/yyyy"
          textTransform="uppercase"
        />
      </Flex>
    </Box>
  );
};
