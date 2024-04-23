import { FC } from 'react';
import { BoxProps } from '@cmpsr/components';

export type SubmitAnswerProps = {
  questionId: string;
  value: string;
};

export type callbackFn = (submitAnswerProps: SubmitAnswerProps) => Promise<boolean>;

export type UseSetupCallbackProps = {
  callback: callbackFn;
};

export type DecisionTreeProps = {
  steps: any;
  questions: any;
  callback: callbackFn;
};

export interface DecisionTreeStaticMembers {
  Container: FC<BoxProps>;
}
