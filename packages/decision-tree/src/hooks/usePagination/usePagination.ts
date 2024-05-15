import { useReducer, useState, type Reducer } from 'react';
import { useSteps } from '@cmpsr/components';
import {
  PaginationResponse,
  PaginationState,
  PaginationAction,
  PaginationActions,
  PaginationProps,
  AnsweredQuestionsType,
} from './types';
import { HandleAnswersActions } from '@hooks';
import { sectionIntroId } from '../../DecisionTree.normalizer';

export const usePagination = ({
  steps,
  initialState,
  answersDispatch,
  submitAnswer,
  backOnFirstQuestion,
}: PaginationProps): PaginationResponse => {
  const firstStep = steps.findIndex(({ id }) => id === initialState.sectionId) ?? 0;
  const { activeStep, setActiveStep } = useSteps({
    index: firstStep,
    count: steps.length,
  });
  const [pageHistory, setPageHistory] = useState<Array<{ questionId: string; sectionId: string }>>([]);
  const [nextQuestionOverride, setNextQuestionOverride] = useState(initialState);

  const setNextQuestion = (nextQuestion, answers) => {
    const iSection = steps.findIndex((step) => step.id == nextQuestion.sectionId);
    if (answers) answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: answers });
    answersDispatch({ type: HandleAnswersActions.ResetAnswer });
    answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: nextQuestion.questionId });
    setActiveStep(iSection);

    return {
      currentQuestion: nextQuestion.questionId,
      currentSection: nextQuestion.sectionId,
    };
  };

  const getNextQuestion = (state: PaginationState): PaginationState => {
    const currentIndex = pageHistory.findIndex(({ questionId }) => questionId === state.currentQuestion);
    const nextIndex = currentIndex + 1;

    if (!pageHistory.at(nextIndex)) return state;

    const { questionId: currentQuestion, sectionId: currentSection } = pageHistory.at(nextIndex);

    return { currentQuestion, currentSection };
  };

  const getPreviousQuestion = (state: PaginationState): PaginationState => {
    const currentIndex = pageHistory.findIndex(({ questionId }) => questionId === state.currentQuestion);
    if (currentIndex === 0) backOnFirstQuestion();

    const previousIndex = currentIndex > 0 ? currentIndex - 1 : -1;
    const { questionId: currentQuestion, sectionId: currentSection } = pageHistory.at(previousIndex);

    return { currentQuestion, currentSection };
  };

  const normalizeAnswers = (answers: AnsweredQuestionsType): AnsweredQuestionsType => {
    if (!answers) return [];

    const normalizedAnswers = answers.reduce((acc, { questionId, sectionId }, i) => {
      const previousAnswer = answers[i - 1];
      if (!previousAnswer || previousAnswer.sectionId !== sectionId)
        acc.push({ questionId: `${sectionId}${sectionIntroId}`, sectionId });
      acc.push({ questionId, sectionId });
      return acc;
    }, []);

    return normalizedAnswers;
  };

  const paginationReducer = (state: PaginationState, { type, payload }: PaginationAction) => {
    switch (type) {
      case PaginationActions.PreviousQuestion: {
        const { currentQuestion, currentSection } = getPreviousQuestion(state);
        const step = steps.findIndex((step) => step.id == currentSection);

        if (currentQuestion.includes(sectionIntroId))
          setNextQuestionOverride({ questionId: state.currentQuestion, sectionId: state.currentSection });
        if (!currentQuestion.includes(sectionIntroId)) setNextQuestionOverride(null);

        answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: currentQuestion });
        setActiveStep(step);

        return {
          currentQuestion,
          currentSection,
        };
      }
      case PaginationActions.NextQuestion: {
        const { nextQuestion, answers } = payload;
        const potentialNextQuestion = getNextQuestion(state);
        const isOldQuestion =
          pageHistory.findIndex((page) => page.questionId === potentialNextQuestion.currentQuestion) > -1;
        setPageHistory(normalizeAnswers(answers));

        if (isOldQuestion) setNextQuestion(potentialNextQuestion, null);

        if (nextQuestionOverride !== null) {
          const nextQuestionState = setNextQuestion(nextQuestionOverride, null);
          setNextQuestionOverride(null);
          return nextQuestionState;
        }

        if (nextQuestion.sectionId !== state.currentSection) {
          setNextQuestionOverride(nextQuestion);
          const sectionIntroQuestion = {
            questionId: `${nextQuestion.sectionId}${sectionIntroId}`,
            sectionId: nextQuestion.sectionId,
          };
          return setNextQuestion(sectionIntroQuestion, answers);
        }

        return setNextQuestion(nextQuestion, answers);
      }
    }
  };

  const firstIntroState = {
    currentQuestion: `${initialState.sectionId}${sectionIntroId}`,
    currentSection: initialState.sectionId,
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, firstIntroState);

  const goToNextQuestion = async () => {
    const response = await submitAnswer(state.currentQuestion);
    if (!response?.nextQuestion?.questionId) return;
    dispatch({ type: PaginationActions.NextQuestion, payload: response });
  };

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1, goToNextQuestion };
};
