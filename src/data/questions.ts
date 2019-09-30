import Question from '@/models/question';
import Answer from '@/models/answer';
import Weight from '@/models/weight';
import { House } from '@/enums/house';

const questions = [
  new Question('It\'s your first day of Divination class, and Professor Trelawney has placed several items on your desk. Which do you pick up first?', [
    new Answer('The dagger', [ new Weight(House.Slytherin, .8), new Weight(House.Gryffindor, .2)]),
    new Answer('The tome', [ new Weight(House.Ravenclaw, .8), new Weight(House.Hufflepuff, .2)]),
    new Answer('The smoking pipe', [ new Weight(House.Hufflepuff, .6), new Weight(House.Ravenclaw, .4)]),
    new Answer('The shield', [ new Weight(House.Gryffindor, .5), new Weight(House.Hufflepuff, .6)]),
    ],
  ),
];

export default questions;
