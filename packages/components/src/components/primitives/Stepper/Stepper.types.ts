import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  numberOfSteps: number;
  activeStep: number;
};

export type StepsProps = {
  numberOfSteps: number;
  activeStep: number;
};
