import Moment from 'moment';
import tz from 'moment-timezone';
import Chance from 'chance';
import Competitor from './Competitor'

const chance = new Chance(); // {object} a chance object generate random values.

/** Class representing a Race */
export default class Race {
  /**
   * Create a race.
   * @param {number} ID - the ID of race.
   */
  constructor( ID) {
    this.closeTime = this.getRandomDuration(); // {object} the moment that a race finish.
    this.competitors = this.getRandomCompetitors(); // {array[competitor]} a collection of competitors of a race.
    this.ID = ID; // {number} the ID of race.

  }


  /**
   * generate a moment object randomly, indicates the seconds a race will hold from current time output value is ranged between 60 to 300
   * @return {Object} The random moment object.
   */
  getRandomDuration() {
    const minutes = chance.minute();
    const seconds = chance.second();
    const moment = new Moment();
    return moment.tz('Australia/Brisbane').add(minutes, 'm').add(seconds, 's')
  }

  /**
   * generate a list of minimum 4 and maximum 12 random competitors
   * @return {Array} The collection of competitors.
   */
  getRandomCompetitors() {
    const competitors = []; // {array[competitors]} The collection of competitors.
    const competitorsNum = chance.integer({min: 4, max: 12});
    for (let i = 1; i <= competitorsNum; i++) {
      const newCompetitor = new Competitor(i); // {object} a new competitor.
      competitors.push(newCompetitor);
    }
    return competitors;
  }
}