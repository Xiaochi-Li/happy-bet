import Moment from 'moment';
import Chance from 'chance';
import Competitor from './Competitor'

const chance = new Chance();
/* a Race object.
 * */
export default class Race {
  constructor() {
    this.closeTime = this.getRandomDuration();
    this.competitors = this.getRandomCompetitors();
  }

  /*generate a random number indicates the seconds a race will hold from current time
   * output value is ranged between 60 to 300*/
  getRandomDuration() {
    const minutes = chance.minute();
    const seconds = chance.second();
    return new Moment().add(minutes, 'm').add(seconds, 's');
  }

  /* generate a list of minimum 4 and maximum 12 random competitors*/
  getRandomCompetitors() {
    const competitors = [];
    const competitorsNum = chance.integer({min: 4, max: 12});
    for (let i = 1; i <= competitorsNum; i++) {
      const newCompetitor = new Competitor();
      competitors.push(newCompetitor);
    }
    return competitors;
  }
}