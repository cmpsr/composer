import {  type Dispatch } from 'react';

export enum DecisionTreeActionKind {
    NextQuestion = 'NextQuestion',
    PreviousQuestion = 'PreviousQuestion',
  }
  
  export type DecisionTreeAction = {
    type: DecisionTreeActionKind;
  };
  
  export type DecisionTreeState = {
    currentQuestion: number;
  };
  
  export type DecisionTreeHook = {
    state: DecisionTreeState;
    activeStep: number;
    dispatch: Dispatch<DecisionTreeAction>;
  };
