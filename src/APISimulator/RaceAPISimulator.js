import Meeting from './Meeting'
import sortBy from 'sort-by'

/* This is a API simulator that simulate an URL which returns 100 nearest race events that will happen soon regardless their meeting and type.
 * The simulator is build under the following assumptions:
 * 1. Ideally, costly operation, such as sorting, should be finished at back-end. The API protocols should return well prepared data to support business logic.
 * 2. The reason of returning 100 race event is the trade-off between storage and performance. Data of 100 events won't occupy too much local storage
 * but could allow less frequent ajax requesting at the client side.
 * 3. Meeting.js Race.js and Competitor.js simulate the one to many relationships in the back-end database
 */

let racesList = [];
export default class RaceAPISimulator {
  constructor() {
    this.meetings = this.getMeetings();
    this.getMeetings.bind(this);
  }

  getMeetings() {
    const meetings = [];
    for (let i = 1; i <= 20; i++) {
      meetings.push(new Meeting());
    }
    return meetings;
  }

  getNearRaces() {
    this.sortRaces();
    return JSON.stringify(racesList);
  }

  sortRaces() {
    this.meetings.forEach(
      (meeting) => {
        const {location, races, type} = meeting;
        races.forEach((race) => {
          const newRace = {type: type, location: location, closeTime:race.closeTime, race: race};
          racesList.push(newRace);
        })
      }
    )
    racesList.sort(sortBy('closeTime'));
  }
}