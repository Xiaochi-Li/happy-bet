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
      racesFinishTime: [],
      count: 0
    }
  }

  componentDidMount() {
    let racesFinishTime = [];

    let races = new RaceAPISimulator().getNearRaces();
    races = JSON.parse(races);
    races.map((race) => {
      const closeTime = new Moment(race.closeTime);
      race.closeTime = closeTime;

      const currentMoment = new Moment();
      const duration = Math.floor(Moment.duration(closeTime.diff(currentMoment)).asSeconds());
      racesFinishTime.push(duration);
    });

    var intervalId = setInterval(this.timer, 1000);

    this.setState({
      races: races, intervalId: intervalId, racesFinishTime: racesFinishTime
    });
  }


  timer = () => {
    let {count, racesFinishTime, races} = this.state;
    count = count + 1;
    this.setState({count: count});
    if (count === racesFinishTime[0]) {
      console.log('delete row');
      racesFinishTime.shift();
      races.shift();
      this.setState({racesFinishTime: racesFinishTime, races: races});
    }
  };

  render() {
    const {races} = this.state;
    //console.log(races);
    return (
      <ListGroup className={'container'}>
        {
          races.slice(0,5).map((race, index) => (
            <RaceItem key={index} race={race}/>))
        }
      </ListGroup>
    );
  }
}