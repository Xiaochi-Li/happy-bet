import React from 'react';
import {ListGroup} from 'reactstrap';
import Moment from 'moment';
import RaceItem from './RaceItem.js';
import RaceAPISimulator from '../APISimulator/RaceAPISimulator'


export default class FiveRaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    }
  }

  componentWillMount(){
    let races = new RaceAPISimulator().getNearRaces();
    races = JSON.parse(races);
    races.map((race) => {
      const closeTime = new Moment(race.closeTime);
      race.closeTime = closeTime;
   });
    this.setState({races: races});
  }



  render() {
    const {races} = this.state;
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