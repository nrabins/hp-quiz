import Weight, { IWeight } from '@/models/weight';

export interface IAnswer {
  text: string;
  weighting: IWeight[];
}

export default class Answer implements IAnswer {
  constructor(public text: string, public weighting: Weight[]) {

  }
}
