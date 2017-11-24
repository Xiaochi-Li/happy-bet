import React from 'react';
import {ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import RaceDetailedView from '../five_race_list/RaceDetailedView.js'


export default class RaceItem extends React.Component {
    constructor(props){
        super(props);
    }

    showRaceDetail = (e)=>(<RaceDetailedView/>);


    render() {
        const {race} =  this.props;
        return (
                <ListGroupItem>
                    <p>{race.id}</p>
                    <Link to={`/races/${race.id}`} className="btn btn-default">Detail</Link>
                </ListGroupItem>

        );
    }
}