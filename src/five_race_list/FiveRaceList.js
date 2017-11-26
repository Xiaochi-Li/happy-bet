import React from 'react';
import {ListGroup} from 'reactstrap';
import Moment from 'moment';
import RaceItem from './RaceItem.js';
import RaceAPISimulator from '../APISimulator/RaceAPISimulator'


export default class FiveRaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      raceDurations: [],
      count: 0
    }
  }

  componentDidMount() {
    let raceDurations = [];
    let races = new RaceAPISimulator().getNearRaces();

    races = JSON.parse(races);
    races.forEach(function (race) {
        const closeTime = new Moment(race.closeTime);
        const currentMoment = new Moment();
        const duration = Math.floor(Moment.duration(closeTime.diff(currentMoment)).asSeconds());
        race.closeTime = closeTime;
        raceDurations.push(duration);
      }
    );
    var intervalId = setInterval(this.onEverySecond, 1000);

    this.setState({races: races, intervalId: intervalId, raceDurations: raceDurations});
  }

  /*Update state.count.
   To make sure the expired race is removed from state
   and its corresponding duration is removed as well*/
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