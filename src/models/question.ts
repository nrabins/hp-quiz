import Answer, { IAnswer } from '@/models/answer';

export interface IQuestion {
  prompt: string;
  answers: IAnswer[];
}

export default class Question implements IQuestion {
  constructor(public prompt: string, public answers: Answer[]) {}
}
