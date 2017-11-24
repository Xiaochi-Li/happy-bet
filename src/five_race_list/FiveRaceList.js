import React from 'react';
import {ListGroup} from 'reactstrap';
import Moment from 'moment';
import RaceItem from './RaceItem.js';
import RaceAPISimulator from '../APISimulator/RaceAPISimulator'


export default class FiveRaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [
        {
          id: 1,
          type: 'thoroughbred',
          time: new Date(" 13,  11:13:00")
        },
        {
          id: 2
        }, {
          id: 3
        }
      ]
    }
  }

  render() {
    const meetings = new RaceAPISimulator().getJSONresult;
    //console.log(`FRL ${meetings}`);

    const {races} = this.state;
    return (
      <ListGroup className={'container'}>
        {races.map((race, index) => (<RaceItem key={index} race={race}/>))}
      </ListGroup>
    );
  }
}