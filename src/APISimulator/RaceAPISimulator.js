import Meeting from './Meeting'
import sortBy from 'sort-by'

/**
 *
 * @type {Array}
 */
let racesList = [];
export default class RaceAPISimulator {
  /**
   * construct a API simulator.
   */
  constructor() {
    this.meetings = this.getMeetings(); // {array[meeting]} a collection of meetings.

  }


  getMeetings() {
    const meetings = [];
    for (let i = 1; i <= 20; i++) {
      meetings.push(new Meeting());
    }
    return meetings;
  }

  getSortedRacesJSON() {
    this.sortRaces();
    return JSON.stringify(racesList);
  }

  /**
   *
   */
  sortRaces() {
    this.meetings.forEach(
      (meeting) => {
        const {location, races, type} = meeting;
        races.forEach((race) => {
          const newRace = {type: type, ID:race.ID, location: location, closeTime:race.closeTime, competitors: race.competitors};
          racesList.push(newRace);
        })
      }
    );
    racesList.sort(sortBy('closeTime'));
  }
}