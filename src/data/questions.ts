// tslint:disable:max-line-length

import Question from '@/models/question';
import Answer from '@/models/answer';
import Weight from '@/models/weight';
import { House } from '@/enums/house';

export function getQuestions(questionCount?: number): Question[] {
  if (questionCount == null) {
    questionCount = questions.length;
  }

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
  new Question(`It's your first day of Divination class, and Professor Trelawney has placed several items on your desk. Which do you pick up first?`, [
    new Answer(`The dagger.`, [new Weight(House.Slytherin, .8), new Weight(House.Gryffindor, .2)]),
    new Answer(`The tome.`, [new Weight(House.Ravenclaw, .8), new Weight(House.Hufflepuff, .2)]),
    new Answer(`The smoking pipe.`, [new Weight(House.Hufflepuff, .6), new Weight(House.Ravenclaw, .4)]),
    new Answer(`The shield.`, [new Weight(House.Gryffindor, .4), new Weight(House.Hufflepuff, .6)]),
  ]),
  new Question(`You're late for class! What do you do?`, [
    new Answer(`Barge into the classroom and get to work. Learning is your right, after all!`, [new Weight(House.Ravenclaw, .7), new Weight(House.Slytherin, .3)]),
    new Answer(`Skip class. Time to work on extracurriculars.`, [new Weight(House.Slytherin, .6), new Weight(House.Gryffindor, .4)]),
    new Answer(`Apologize to your professor profusely and take a seat.`, [new Weight(House.Hufflepuff)]),
    new Answer(`Sneak into the class through the open window in the back.`, [new Weight(House.Gryffindor, .8), new Weight(House.Slytherin, .2)]),
  ]),
  new Question(`It's the first day of school and you don't know anyone! Whom do you approach?`, [
    new Answer(`A professor reading Hogwarts: A History.`, [new Weight(House.Ravenclaw, .9), new Weight(House.Hufflepuff, .1)]),
    new Answer(`Another first year who looks even more nervous than you.`, [new Weight(House.Hufflepuff, .7), new Weight(House.Gryffindor, .3)]),
    new Answer(`Three older students pushing another first year. You can't stand bullies!`, [new Weight(House.Gryffindor, .9), new Weight(House.Hufflepuff, .1)]),
    new Answer(`Three older students pushing another first year. Looks like fun.`, [new Weight(House.Slytherin)]),
  ]),
  new Question(`If you were choosing your own house, which house would you choose?`, [
    new Answer(`Gryffindor!`, [new Weight(House.Gryffindor)]),
    new Answer(`Ravenclaw!`, [new Weight(House.Ravenclaw)]),
    new Answer(`Slytherin!`, [new Weight(House.Slytherin)]),
    new Answer(`...Hufflepuff.`, [new Weight(House.Hufflepuff)]),
  ]),
  new Question(`Which house would you <strong>least</strong> want to be in?`, [
    new Answer(`Gryffindor.`, [new Weight(House.Slytherin, .6), new Weight(House.Ravenclaw, .4)]),
    new Answer(`Ravenclaw.`, [new Weight(House.Gryffindor, .5), new Weight(House.Hufflepuff, .5)]),
    new Answer(`Slytherin.`, [new Weight(House.Gryffindor, .9), new Weight(House.Hufflepuff, .1)]),
    new Answer(`Hufflepuff.`, [new Weight(House.Gryffindor, .25), new Weight(House.Ravenclaw, .25), new Weight(House.Slytherin, .25), new Weight(House.Hufflepuff, .25)]),
  ]),
  new Question(`What is your pet of choice?`, [
    new Answer(`Cat`, [new Weight(House.Ravenclaw)]),
    new Answer(`Dog`, [new Weight(House.Slytherin)]),
    new Answer(`Owl`, [new Weight(House.Gryffindor)]),
    new Answer(`Fluffy Super Cute Kitty`, [new Weight(House.Hufflepuff)]),
  ]),
  new Question(`Professor Lupin calls on you in DADA Class, which spell are you most likely to demonstrate?`, [
    new Answer(`Locomotor Mortis (Tripping)`, [new Weight(House.Slytherin)]),
    new Answer(`Expelliarmus (Disarming)`, [new Weight(House.Gryffindor)]),
    new Answer(`Petrifcus Totalus (Freezing)`, [new Weight(House.Ravenclaw)]),
    new Answer(`Rictusempra (Tickling)`, [new Weight(House.Hufflepuff)]),
  ]),
];
