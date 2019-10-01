import Question from '@/models/question';

export interface IState {
  currentQuestionIndex: number;
  questions: Question[];
}

export default class State implements IState {
  public currentQuestionIndex: number = 0;
  public questions: Question[] = [];
}
