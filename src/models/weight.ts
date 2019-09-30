import { House } from '@/enums/house';

export interface IWeight {
  house: House;
  weight: number;
}

export default class Weight implements IWeight {
  constructor(public house: House, public weight: number = 1) {
  }
}
