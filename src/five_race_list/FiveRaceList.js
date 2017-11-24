import React from 'react';
import {ListGroup} from 'reactstrap';
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
    const races = new RaceAPISimulator().getNearRaces();
    this.setState({races: JSON.parse(races)});
    console.log(JSON.parse(races));
  }

  render() {
    const {races} = this.state;
    return (
      <ListGroup className={'container'}>
        {
          races.map((race, index) => (
            <RaceItem key={index} race={race.race.closeTime}/>))
          }
      </ListGroup>
    );
  }
}