import { type Dispatch } from 'react';
import { DecisionTreeAction } from '../../hooks/usePagination';

export type NavigationBarProps = {
  lastQuestion: number;
  currentQuestion: number;
  dispatch: Dispatch<DecisionTreeAction>;
};
