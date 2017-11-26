import Chance from 'chance';
import Race from './Race'

const chance = new Chance();
const raceType = ["Thoroughbred", "Greyhounds", "Harness"];
/*a Meeting object*/
export default class Meeting {
  constructor() {
    this.type = this.getRandomType();
    this.location = this.getRandomLocation();
    this.races = this.getRandomRaces();
  }


  /* randomly pick a type for the meeting*/
  getRandomType() {
    return raceType[chance.integer({min: 0, max: 2})];
  }

  /* randomly generate a street as the location of the meeting*/
  getRandomLocation() {
    return chance.street();
  }

  /* randomly generate a collection of races.
  * number of races is between 1 and 12*/
  getRandomRaces() {
    const races = [];
    const numOfRaces = chance.integer({min: 1, max: 12});
    for (let i = 1; i <= numOfRaces; i++) {
      races.push(new Race(i));
    }
    return races;
  }
}