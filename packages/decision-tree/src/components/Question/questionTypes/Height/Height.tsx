import React, { FC, useState } from 'react';
import { HeightAnswer, HeightProps } from './types';
import { Box, Flex } from '@cmpsr/components';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Height: FC<HeightProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, whyWeAskExplanation, feet, inches } = data;
  const [answers, setAnswers] = useState<HeightAnswer>({ type: 'height', feet: null, inches: null });

  const handleChangeFeet = ({ currentTarget }) => {
    const newAnswer = { ...answers, feet: currentTarget.value.replace(feet.trailingMask, '') };
    setAnswers(newAnswer);
    saveAnswer(newAnswer);
  };

  const handleChangeInches = ({ currentTarget }) => {
    const newAnswer = { ...answers, inches: currentTarget.value.replace(inches.trailingMask, '') };
    setAnswers(newAnswer);
    saveAnswer(newAnswer);
  };

  return (
    <Box>
      <QuestionTitle question={label} whyWeAskExplanation={whyWeAskExplanation} />
      <Flex gap="spacer-4" px={inputMargin}>
        <DecisionTreeInput
          variant="outline"
          placeholder={feet.placeholder}
          defaultValue={defaultValue?.feet}
          trailingMask={feet.trailingMask}
          onInput={handleChangeFeet}
        />
        <DecisionTreeInput
          variant="outline"
          placeholder={inches.placeholder}
          defaultValue={defaultValue?.inches}
          trailingMask={inches.trailingMask}
          onInput={handleChangeInches}
        />
      </Flex>
    </Box>
  );
};
