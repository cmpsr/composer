import { FC } from 'react';
import { BoxProps } from '@cmpsr/components';

export type UseSetupCallbackCB = (questionId: string, value: string) => Promise<boolean>;

export type DecisionTreeProps = {
  steps: any;
  questions: any;
  callback: UseSetupCallbackCB;
};

export interface DecisionTreeStaticMembers {
  Container: FC<BoxProps>;
}
