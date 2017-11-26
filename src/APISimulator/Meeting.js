import Chance from 'chance';
import Race from './Race'

const chance = new Chance(); // {object} a chance object generate random values.
const _RACE_TYPE = ["Thoroughbred", "Greyhounds", "Harness"]; // {array[string]} a static array states types of races

/**
 * a class represent a meeting
 */
export default class Meeting {
  /**
   * create a meeting
   */
  constructor() {
    this.type = this.getRandomType(); // {sting} the type of a meeting.
    this.location = this.getRandomLocation(); // {string} the location of a meeting.
    this.races = this.getRandomRaces(); // {array[Race]} A collection of a race will happen in a meeting.
  }

  /**
   * randomly assign a race type to a meeting.
   * @return {string} the type.
   */
  getRandomType() {
    return _RACE_TYPE[chance.integer({min: 0, max: 2})];
  }

  /**
   * randomly generate a street name as the location of the meeting
   * @return {string} the street name.
   */
  getRandomLocation() {
    return chance.street();
  }

  /**
   * randomly generate a collection of races. number of races is between 1 and 12
   * @return {Array} a collection of races.
   */
  getRandomRaces() {
    const races = []; // {array[Race]} the collection of race.
    const numOfRaces = chance.integer({min: 1, max: 12}); // {number} integer indicate how many race in a meeting
    for (let i = 1; i <= numOfRaces; i++) {
      races.push(new Race(i));
    }
    return races;
  }
}