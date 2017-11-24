import React from 'react';
import {ListGroup} from 'reactstrap';
import RaceItem from './RaceItem.js'


export default class FiveRaceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [
                {
                    id: 1
                },
                {
                    id: 2
                }, {
                    id: 3
                }
            ]
        }
    }

    viewDetailedRace(){

    }

    render() {
        const {races} = this.state;
        return (
            <ListGroup>
                {races.map((race, index) => (<RaceItem key={index} race={race}/>))}
            </ListGroup>
        );
    }
}