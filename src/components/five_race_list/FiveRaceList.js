import React from 'react';
import {ListGroup} from 'reactstrap';
import RaceItem from './RaceItem.js'

export default class FiveRaceList extends React.Component {
    render() {
        return (
            <ListGroup>
                <RaceItem></RaceItem>
                <RaceItem></RaceItem>
                <RaceItem></RaceItem>
                <RaceItem></RaceItem>
                <RaceItem></RaceItem>
            </ListGroup>
        );
    }
}