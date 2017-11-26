import React from 'react';
import {ListGroup} from 'reactstrap';
import Moment from 'moment';
import RaceItem from './RaceItem.js';
import RaceAPISimulator from '../APISimulator/RaceAPISimulator'

/**
 * a class represent a FiveRaceList React Component.
 */
export default class FiveRaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [], //a collection of races sorted in ascending order.
      /* a collection of number indicates how many seconds later the
      events will expired. It corresponds to this.state.races */
      raceDurations: [],
      count: 0 //a counter indicates how many seconds passed since the web app is opened or refreshed.
    }
  }

  /**
   * initialize states when component will mount in virtual DOM
   */
  componentWillMount() {
    let raceDurations = [];
    let races = new RaceAPISimulator().getSortedRacesJSON();
    races = JSON.parse(races);
    races.forEach(function (race) {
        const closeTime = new Moment(race.closeTime);
        const currentMoment = new Moment();
        const duration = Math.floor(Moment.duration(closeTime.diff(currentMoment)).asSeconds());
        race.closeTime = closeTime;
        raceDurations.push(duration);
      }
    );
    var intervalId = setInterval(this.onEverySecond, 1000); //a timber triggered at every second.

    this.setState({races: races, intervalId: intervalId, raceDurations: raceDurations});
  }

  /**
   * A call back function update this.count by 1.
   * If the counting clock reach the expire duration of the first race event,
   * remove an event and it's expire duration from state.races and state.raceDurations
   */
  onEverySecond = () => {
    let {count, raceDurations, races} = this.state;
    count = count + 1;
    this.setState({count: count});
    if (count === raceDurations[0]) {
      raceDurations.shift();
      races.shift();
      this.setState({raceDurations: raceDurations, races: races});
    }
  };

  render() {
    const {races} = this.state;
    return (
      <ListGroup className={'container'}>
        {
          races.slice(0, 5).map((race, index) => (
            <RaceItem key={index} race={race}/>))
        }
      </ListGroup>
    );
  }
}