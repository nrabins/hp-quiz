// tslint:disable:max-line-length

import Question from '@/models/question';
import Answer from '@/models/answer';
import Weight from '@/models/weight';
import { House } from '@/enums/house';

export function getQuestions(questionCount: number): Question[] {
  if (questionCount > questions.length) {
    throw new RangeError('getQuestion: more elements taken than available');
  }

  return questions
    .map((question) => ({ question, rand: Math.random() }))
    .sort((a, b) => a.rand - b.rand)
    .map((pair) => pair.question)
    .slice(0, questionCount);
}

const questions = [
  new Question('It\'s your first day of Divination class, and Professor Trelawney has placed several items on your desk. Which do you pick up first?', [
    new Answer('The dagger', [new Weight(House.Slytherin, .8), new Weight(House.Gryffindor, .2)]),
    new Answer('The tome', [new Weight(House.Ravenclaw, .8), new Weight(House.Hufflepuff, .2)]),
    new Answer('The smoking pipe', [new Weight(House.Hufflepuff, .6), new Weight(House.Ravenclaw, .4)]),
    new Answer('The shield', [new Weight(House.Gryffindor, .4), new Weight(House.Hufflepuff, .6)]),
  ]),
  new Question('You\'re late for class! What do you do?', [
    new Answer('Barge into the classroom and get to work. Learning is your right, after all!', [new Weight(House.Ravenclaw, .7), new Weight(House.Slytherin, .3)]),
    new Answer('Skip class. Time to work on extracurriculars.', [new Weight(House.Slytherin, .6), new Weight(House.Gryffindor, .4)]),
    new Answer('Apologize to your professor profusely and take a seat.', [new Weight(House.Hufflepuff)]),
    new Answer('Sneak into the class through the open window in the back.', [new Weight(House.Gryffindor, .8), new Weight(House.Slytherin, .2)]),
  ]),
];
