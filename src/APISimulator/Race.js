import Moment from 'moment';
import tz from 'moment-timezone';
import Chance from 'chance';
import Competitor from './Competitor'


/* a Race object.
 * */
const chance = new Chance();
export default class Race {
  constructor( ID) {
    this.closeTime = this.getRandomDuration();
    this.competitors = this.getRandomCompetitors();
    this.ID = ID;
  }

  /*generate a random number indicates the seconds a race will hold from current time
   * output value is ranged between 60 to 300*/
  getRandomDuration() {
    const minutes = chance.minute();
    const seconds = chance.second();
    const moment = new Moment();
    return moment.tz('Australia/Brisbane').add(minutes, 'm').add(seconds, 's')
  }

  /* generate a list of minimum 4 and maximum 12 random competitors*/
  getRandomCompetitors() {
    const competitors = [];
    const competitorsNum = chance.integer({min: 4, max: 12});
    for (let i = 1; i <= competitorsNum; i++) {
      const newCompetitor = new Competitor(i);
      competitors.push(newCompetitor);
    }
    return competitors;
  }
}